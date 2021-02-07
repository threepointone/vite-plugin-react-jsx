import reactRefresh from "@vitejs/plugin-react-refresh";
import reactJSX from "vite-plugin-react-jsx";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactJSX(), reactRefresh()],
});
