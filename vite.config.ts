import {definConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; 

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(_dirname,  "./src"),
    },
  },
});
