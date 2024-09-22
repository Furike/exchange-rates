import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.ts",
    coverage: {
      include: ["src/**/*.{js,jsx,ts,tsx}"], // specify files to include
      exclude: ["src/**/*.{test,d}.{js,jsx,ts,tsx}", "src/main.tsx"], // specify files to exclude
      reporter: ["text", "html"], // customize reporters. don't forget to include 'html' if you use vitest-ui
    },
  },
});
