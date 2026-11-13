import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        // Same output folder as before, so deploying works the same way
        outDir: "build",
    },
    server: {
        port: 3000,
        open: true,
    },
});
