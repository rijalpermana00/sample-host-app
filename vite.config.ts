import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        federation({
            name: 'my-host-app',
            // remotes: {
            //     remote_app: "http://localhost:5001/assets/remoteEntry.js",
            // },
            shared: ['vue']
        })
    ],
})
