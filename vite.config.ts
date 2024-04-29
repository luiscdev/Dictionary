import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define los alias para las rutas absolutas
      "@": path.resolve(__dirname, "src"),
    },
  },
})
