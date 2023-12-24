import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from "vite-plugin-pwa"

const pwa = VitePWA({
    registerType: "autoUpdate",
    injectRegister: "auto",
    strategies: "injectManifest",
    srcDir: "src",
    filename: "sw.ts",
    manifest: {
        name: "Test",
        short_name: "Test",
        description: "Test",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        // icons: [
        //     {
        //         src: "/favicon/android-chrome-192x192.png",
        //         sizes: "192x192",
        //         type: "image/png"
        //     },
        //     {
        //         src: "/favicon/android-chrome-512x512.png",
        //         sizes: "512x512",
        //         type: "image/png"
        //     },
        // ],
    },
    devOptions: {
        enabled: true,
        type: "module",
    },
})

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [ preact(), pwa ],
});
