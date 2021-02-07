import reactRefresh from "@vitejs/plugin-react-refresh";
import reactJSX from "vite-plugin-react-jsx";

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactJSX({ runtime: "automatic" }), reactRefresh()],
};
