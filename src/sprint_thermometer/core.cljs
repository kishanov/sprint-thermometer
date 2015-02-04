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
  (let [width 240
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
        pvc-ratio (- 100 (int (* 100 (/ (:completed data)
                                        (* (/ (:planned data) (:sprint-duration data)) (:sprint-day-number data))))))

        status-color (cond
                       (neg? pvc-ratio) "blue"
                       (zero? pvc-ratio) "green"
                       (< pvc-ratio 10) "gold"
                       (< pvc-ratio 20) "orange"
                       :else "red")

        zero-y (* (- 440 366) notch-height)
        status-bar-y (- (+ zero-y margin border-width padding notches-margin-top)
                        (* notch-height pvc-ratio))]
    (.log js/console pvc-ratio)
    [:svg {:xmlns  "http://www.w3.org/2000/svg"
           :width  width
           :height height}

     [:g
      [:rect
       {:x      margin
        :y      margin
        :width  (- width (* 2 margin))
        :height (- height (* 2 margin))
        :rx     (quot width 6)
        :ry     (quot width 6)
        :style  {:stroke       border-color
                 :stroke-width border-width
                 :fill         "white"
                 }}]

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
      (for [i (range 101)]
        [:g
         [:rect
          {:x      (+ (quot width 2) mercury-column-width)
           :y      (+ (* i 4) margin padding border-width notches-margin-top)
           :width  (cond
                     (zero? (mod i 10)) (* 2 notch-width)
                     (zero? (mod i 5)) (* 1.5 notch-width)
                     :else notch-width)
           :height 2
           :style  {:fill "#333"}}]

         (when (zero? (mod i 10))
           [:text
            {:x     (+ (quot width 2) mercury-column-width (* 2.5 notch-width))
             :y     (+ (* i 4) margin padding border-width notches-margin-top 6)
             :style {:font-size   16
                     :font-weight "bold"}}
            (gstring/format "%.1f" (/ (- 440 i) 10))])])


      ; Farenheit notches bar
      (for [i (range 101)]
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
           :style  {:fill "#333"}}]
         (when (zero? (mod i 10))
           [:text
            {:x     (- (quot width 2) mercury-column-width (* 4 notch-width))
             :y     (+ (* i 4) margin padding border-width notches-margin-top 6)
             :style {:font-size   16
                     :font-weight "bold"}}
            (gstring/format "%.1f" (c-to-f (/ (- 440 i) 10)))])])


      [:rect
       {:x      (+ (- (quot width 2) (quot mercury-column-width 2) 1) mercury-border-width)
        :y      status-bar-y
        :width  (+ (- mercury-column-width (* mercury-border-width 2)) 2)
        :height (- mercury-bubble-y
                   status-bar-y)
        :style  {:fill status-color}}]

      [:circle
       {:cx    mercury-bubble-x
        :cy    mercury-bubble-y
        :r     15
        :style {:stroke       border-color
                :stroke-width mercury-border-width
                :fill         status-color}}]]]))


(def form-template
  [:form

   [:div.input-field
    [:i.mdi-action-today.prefix]
    [:input {:field :numeric :id :sprint-duration}]
    [:label {:for "sprint-duration"} "Sprint Duration, Days"]]

   [:div.input-field
    [:i.mdi-action-schedule.prefix]
    [:input {:field :numeric :id :sprint-day-number}]
    [:label {:for "sprint-day-number"} "Sprint Day Number"]]

   [:div.input-field
    [:i.mdi-action-assignment.prefix]
    [:input {:field :numeric :id :planned}]
    [:label {:for "planned"} "Planned Tasks Count"]]


   [:div.input-field
    [:i.mdi-action-done-all.prefix]
    [:input {:field :numeric :id :completed}]
    [:label {:for "completed"} "Completed Tasks Count"]]])


(defn app
  []
  (let [doc (atom {:planned 70})]
    (fn []
      [:div.row
       [:div.col.s4
        [:h4 "Sprint Params"]
        [bind-fields form-template doc]]
       [:div.col.s4
        [:h4 "Data Interpretation"]]
       [:div.col.s4
        [:h4 "Thermometer"]
        [thermometer {:planned           70
                      :completed         63
                      :sprint-duration   10
                      :sprint-day-number 10}]]])))


(reagent/render-component [app] (.getElementById js/document "app"))
