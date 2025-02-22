import build from "@hono/vite-build/cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import honox from "honox/vite";
import { defineConfig } from "vite";

export default defineConfig({
    server: {
        watch: {
            usePolling: true,
        },
    },
    plugins: [honox({ devServer: { adapter } }), build()],
});

//import build from '@hono/vite-build/bun'
//import honox from "honox/vite";
//import { defineConfig } from "vite";
//
//export default defineConfig({
//    server: {
//        watch: {
//            usePolling: true,
//        },
//    },
//    plugins: [honox(), build()],
//});