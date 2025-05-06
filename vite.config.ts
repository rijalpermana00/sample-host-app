import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
	plugins: [
		vue(),
		tailwindcss(),
		federation({
			name: "my-host-app",
			remotes: {
				// "my-remote-app": "http://localhost:5174/assets/remoteEntry.js",
				"my-remote-app":
					"https://sample-remote-app.netlify.app/assets/remoteEntry.js",
			},
			shared: ["vue", "tailwindcss"],
		}),
	],
	build: {
		target: "esnext", // Changed from ES2020 to ES2022 to support top-level await
		minify: false,
		// cssCodeSplit: false,
		cssMinify: false,
		outDir: "dist",
	},
})
