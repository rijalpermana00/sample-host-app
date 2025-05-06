import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    build:{
        "target": "esnext",  // Changed from ES2020 to ES2022 to support top-level await
    },
    plugins: [
        vue(),
        tailwindcss(),
        federation({
            name: 'my-host-app',
            remotes: {
                // "my-remote-app": "http://localhost:5174/assets/remoteEntry.js",
                "my-remote-app": "https://sample-remote-app.netlify.app/assets/remoteEntry.js"
            },
            shared: ['vue']
        })
    ],
    server: {
        cors: {
          origin: '*', // Allow all origins (not recommended for production)
          methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
          credentials: true,
          allowedHeaders: 'Content-Type, Authorization',
        },
    },
})
