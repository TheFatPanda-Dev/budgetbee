import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss(), react(), jsconfigPaths()],
    server: {
        host: true,
        port: 3000,
    },
    preview: {
        port: 3000,
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "src/components/global.scss";`,
            },
        },
    },
    build: {
        chunkSizeWarningLimit: 750,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (!id.includes("node_modules")) {
                        return;
                    }

                    if (
                        id.includes("/@heroui/") ||
                        id.includes("/@react-aria/") ||
                        id.includes("/@react-stately/") ||
                        id.includes("/@react-types/") ||
                        id.includes("/@internationalized/")
                    ) {
                        return "vendor-heroui";
                    }

                    if (
                        id.includes("/react-router/") ||
                        id.includes("/react-router-dom/")
                    ) {
                        return "vendor-router";
                    }

                    if (id.includes("/@fortawesome/")) {
                        return "vendor-fontawesome";
                    }

                    if (
                        id.includes("/chart.js/") ||
                        id.includes("/react-chartjs-2/")
                    ) {
                        return "vendor-charts";
                    }

                    if (
                        id.includes("/framer-motion/") ||
                        id.includes("/motion-dom/") ||
                        id.includes("/motion-utils/")
                    ) {
                        return "vendor-motion";
                    }

                    if (id.includes("/swiper/")) {
                        return "vendor-swiper";
                    }

                    if (
                        id.includes("/react-datepicker/") ||
                        id.includes("/date-fns/")
                    ) {
                        return "vendor-datepicker";
                    }

                    if (
                        id.includes("/axios/") ||
                        id.includes("/moment/") ||
                        id.includes("/numeral/")
                    ) {
                        return "vendor-utils";
                    }

                    return;
                },
            },
        },
    },
});
