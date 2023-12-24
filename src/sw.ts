/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />
import { precacheAndRoute } from "workbox-precaching"
import { clientsClaim } from "workbox-core"

declare const self: ServiceWorkerGlobalScope
console.log(`sw.ts MODE ${import.meta.env.MODE}`)
console.log(`sw.ts VITE_TEST ${import.meta.env.VITE_TEST}`)

precacheAndRoute(self.__WB_MANIFEST)
void self.skipWaiting()
clientsClaim()
