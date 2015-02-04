(defproject sprint-thermometer "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2755"]
                 [reagent "0.4.3"]
                 [reagent-forms "0.4.3"]]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ["out" "out-adv"]

  :cljsbuild {
    :builds [ {:id "release"
              :source-paths ["src"]
              :compiler {
                :main sprint-thermometer.core
                :output-to "out-adv/sprint_thermometer.min.js"
                :output-dir "out-adv"
                :optimizations :advanced
                :pretty-print false}}]})
