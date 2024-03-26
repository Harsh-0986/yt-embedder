import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

//@ts-ignore
const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      components: resolve(root, "components"),
    },
  },
});
