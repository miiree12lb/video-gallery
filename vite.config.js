import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cpSync } from "node:fs";

// public/videos/ holds the video files for local development only. They are served
// from the videos/ folder on the web server, so they are left out of the build.
function copyPublicWithoutVideos() {
    return {
        name: "copy-public-without-videos",
        apply: "build",
        writeBundle() {
            cpSync("public", "build", {
                recursive: true,
                filter: (src) => !/(^|[\\/])public[\\/]videos([\\/]|$)/.test(src),
            });
        },
    };
}

export default defineConfig({
    plugins: [react(), copyPublicWithoutVideos()],
    build: {
        // Same output folder as before, so deploying works the same way
        outDir: "build",
        copyPublicDir: false,
    },
    server: {
        port: 3000,
        open: true,
    },
});
