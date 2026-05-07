import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "drop-down-diabetes-hastily.ngrok-free.dev"
    ]
  }
});
