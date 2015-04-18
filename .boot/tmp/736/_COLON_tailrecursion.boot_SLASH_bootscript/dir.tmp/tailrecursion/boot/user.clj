(ns tailrecursion.boot.user
  (:require [tailrecursion.boot.core.task :refer :all]
            [tailrecursion.boot.core :refer :all :exclude [deftask]]))

(clojure.core/defmacro deftask [& args]
  (clojure.core/list* 'deftask* args))

#tailrecursion.boot.core/version "2.5.1"

(set-env!
  :project
  'jstest
  :version
  "0.1.0-SNAPSHOT"
  :dependencies
  '[[tailrecursion/boot.task "2.2.4"] [tailrecursion/hoplon "5.10.25"]]
  :out-path
  "resources/public"
  :src-paths
  #{"src"})

(add-sync! (get-env :out-path) #{"assets"})

(require
  '[tailrecursion.hoplon.boot :refer :all]
  '[tailrecursion.boot.task.ring :refer [dev-server]])

(deftask
  development
  "Build jstest for development."
  []
  (comp
    (watch)
    (hoplon {:pretty-print true, :prerender false})
    (dev-server)))

(deftask
  dev-debug
  "Build jstest for development with source maps."
  []
  (comp
    (watch)
    (hoplon {:pretty-print true, :prerender false, :source-map true})
    (dev-server)))

(deftask
  production
  "Build jstest for production."
  []
  (hoplon {:optimizations :advanced}))

(clojure.core/if-let [main__1329__auto__ (clojure.core/resolve '-main)]
  (main__1329__auto__ "development")
  (tailrecursion.boot.core/boot (development)))
