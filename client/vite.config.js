import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// set proxy to local host 3000
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,      
        ws: true,
      },
    },
  },
});
