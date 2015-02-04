(ns sprint-thermometer.core
  (:require
    [clojure.browser.repl :as repl]
    [goog.string :as gstring]
    [goog.string.format]
    [reagent.core :as reagent :refer [atom]]
    [reagent-forms.core :refer [bind-fields]]))

;; (repl/connect "http://localhost:9000/repl")

(enable-console-print!)


(defn c-to-f
  [n]
  (+ (* 1.8 n) 32))

;; -------------------------
;; Views


(defn thermometer
  [data]
  (let [enough-data? (and (pos? (:sprint-duration data))
                          (pos? (:sprint-day-number data))
                          (pos? (:planned data))
                          (pos? (:completed data)))
        width 240
        height 510
        margin 10
        padding 10
        border-width 10
        notches-margin-top 20
        notch-width 20
        notch-height 4
        border-color "#ccc"
        mercury-border-width 3
        mercury-bubble-rx 15
        mercury-bubble-y (- height (* margin 3) mercury-bubble-rx)
        mercury-bubble-x (quot width 2)
        mercury-column-width 14
        mercury-column-height (- height (* 2 border-width) (* margin 2) (* padding 2) mercury-bubble-rx)

        max-temperature 440
        min-temperature 341
        normal-temperature 366
        notches-count (- max-temperature min-temperature)

        pvc-ratio (if enough-data?
                    (max
                      (min (- notches-count (int (* 100 (/ (:completed data)
                                                           (* (/ (:planned data) (:sprint-duration data))
                                                              (:sprint-day-number data))))))
                           (- max-temperature normal-temperature))
                      (- min-temperature normal-temperature))
                    0)

        status-color (cond
                       (neg? pvc-ratio) "blue"
                       (zero? pvc-ratio) "green"
                       (< pvc-ratio 10) "gold"
                       (< pvc-ratio 20) "orange"
                       :else "red")


        zero-y (* (- max-temperature normal-temperature) notch-height)
        status-bar-y (- (+ zero-y margin border-width padding notches-margin-top)
                        (* notch-height pvc-ratio))]

    [:svg {:xmlns  "http://www.w3.org/2000/svg"
           :width  width
           :height height}

     [:g

      ; Thermometer outline
      [:rect
       {:x      margin
        :y      margin
        :width  (- width (* 2 margin))
        :height (- height (* 2 margin))
        :rx     (quot width 6)
        :ry     (quot width 6)
        :style  {:stroke       border-color
                 :stroke-width border-width
                 :fill         "white"}}]

      ; Mercury Column
      [:rect
       {:x      (- (quot width 2) (quot mercury-column-width 2))
        :y      (+ margin border-width padding)
        :width  mercury-column-width
        :height mercury-column-height
        :rx     (quot mercury-column-width 2)
        :ry     (quot mercury-column-width 2)
        :style  {:stroke       border-color
                 :stroke-width mercury-border-width
                 :fill         "#eee"}}]

      [:text
       {:x (+ mercury-bubble-x (quot notch-width 1.5))
        :y (+ margin border-width padding (quot notches-margin-top 2))}
       "C"]

      [:text
       {:x (- mercury-bubble-x (* 1.2 notch-width))
        :y (+ margin border-width padding (quot notches-margin-top 2))}
       "F"]

      ; Celsium notches bar
      (for [i (range (inc notches-count))]
        [:g
         [:rect
          {:x      (+ (quot width 2) mercury-column-width)
           :y      (+ (* i 4) margin padding border-width notches-margin-top)
           :width  (cond
                     (zero? (mod i 10)) (* 2 notch-width)
                     (zero? (mod i 5)) (* 1.5 notch-width)
                     :else notch-width)
           :height 2
           :style  {:fill (if (= i (- max-temperature normal-temperature)) "red" "#333")}}]

         (when (zero? (mod i 10))
           [:text
            {:x     (+ (quot width 2) mercury-column-width (* 2.2 notch-width))
             :y     (+ (* i 4) margin padding border-width notches-margin-top 6)
             :style {:font-size   16
                     :font-weight "bold"}}
            (gstring/format "%.1f" (/ (- max-temperature i) 10))])])


      ; Farenheit notches bar
      (for [i (range (inc notches-count))]
        [:g
         [:rect
          {:x      (- (quot width 2) mercury-column-width (cond
                                                            (zero? (mod i 10)) (* 2 notch-width)
                                                            (zero? (mod i 5)) (* 1.5 notch-width)
                                                            :else notch-width))
           :y      (+ (* i 4) margin padding border-width notches-margin-top)
           :width  (cond
                     (zero? (mod i 10)) (* 2 notch-width)
                     (zero? (mod i 5)) (* 1.5 notch-width)
                     :else notch-width)
           :height 2
           :style  {:fill (if (= i (- max-temperature normal-temperature)) "red" "#333")}}]

         (when (zero? (mod i 10))
           [:text
            {:x           (- (quot width 2) mercury-column-width (* 2.2 notch-width))
             :y           (+ (* i 4) margin padding border-width notches-margin-top 6)
             :text-anchor "end"
             :style       {:font-size   16
                           :font-weight "bold"}}
            (gstring/format "%.1f" (c-to-f (/ (- max-temperature i) 10)))])])

      ; Filling Mercury Bar
      (when enough-data?
        [:rect
         {:x      (+ (- (quot width 2) (quot mercury-column-width 2) 1) mercury-border-width)
          :y      status-bar-y
          :width  (+ (- mercury-column-width (* mercury-border-width 2)) 2)
          :height (- mercury-bubble-y
                     status-bar-y)
          :style  {:fill status-color}}])


      ; Mercury Bubble
      [:circle
       {:cx    mercury-bubble-x
        :cy    mercury-bubble-y
        :r     15
        :style {:stroke       border-color
                :stroke-width mercury-border-width
                :fill         (if enough-data?
                                status-color
                                "#eee")}}]]

     ; Healthy Ground Zero (36.6 C)
     [:rect
      {:x      (- (quot width 2) (* 4 mercury-column-width))
       :y      (+ (* (- max-temperature normal-temperature) 4) margin padding border-width notches-margin-top)
       :width  (* 8 mercury-column-width)
       :height 2
       :style  {:fill "red"}}]]))


(defn form-row
  [form-entry]
  [:div.row
   [:div.col.s10
    [:div.input-field
     [:i.prefix {:class (:icon form-entry)}]
     [:input {:field :numeric :id (:id form-entry)}]
     [:label {:for (name (:id form-entry))} (:label form-entry)]]]])


(def form-template
  [:form
   (for [form-entry [{:id :sprint-duration :label "Sprint Duration, Days" :icon "mdi-action-today"}
                     {:id :sprint-day-number :label "Sprint Day Number" :icon "mdi-action-schedule"}
                     {:id :planned :label "Planned Tasks Count" :icon "mdi-action-assignment"}
                     {:id :completed :label "Completed Tasks Count" :icon "mdi-action-done-all"}]]
     (form-row form-entry))])


(defn legend
  [data]
  [:div

   [:div.row
    [:div.col.s8
     [:div.row [:strong "Expected Task Resolution Ratio"]]
     [:div.row [:small "(Planned Tasks Count / Sprint Duration)"]]]

    [:div.col.s4
     (if (and (:sprint-duration data) (:planned data))
       [:span (gstring/format "%.1f" (/ (:planned data) (:sprint-duration data)))]
       [:div.left-align "N/A"])]]

   [:div.row
    [:div.col.s8
     [:div.row [:strong "Expected Completion Count (to date)"]]
     [:div.row [:small "(Expected Task Resolution Ratio * Sprint Day Number)"]]]

    [:div.col.s4
     (if (and (:sprint-duration data) (:planned data) (:sprint-day-number data))
       [:span (gstring/format "%.1f" (* (:sprint-day-number data)
                                        (/ (:planned data) (:sprint-duration data))))]
       [:div.left-align "N/A"])]]

   [:div.row
    [:div.col.s8
     [:div.row [:strong "Completion Percentage, %"]]
     [:div.row [:small "(Expected Completion Count / Actually Completed)"]]]

    [:div.col.s4
     (if (and (:sprint-duration data) (:planned data) (:sprint-day-number data) (:completed data))
       [:span (gstring/format "%.2f" (* 100 (/ (:completed data)
                                               (* (:sprint-day-number data)
                                                  (/ (:planned data) (:sprint-duration data))))))]
       [:div.left-align "N/A"])]]])


(defn app
  []
  (let [doc (atom {})]
    (fn []
      [:div.row
       [:div.col.s4
        [:h4 "Sprint Params"]
        [bind-fields form-template doc]]
       [:div.col.s4
        [:h4 "Data Interpretation"]
        [legend @doc]]
       [:div.col.s4
        [:h4 "Thermometer"]
        [thermometer @doc]]])))


(reagent/render-component [app] (.getElementById js/document "app"))
