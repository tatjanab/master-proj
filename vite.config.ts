<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
>>>>>>> 02115236e2537c4c69ec9ce15a0450b650990405

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  resolve: {
    alias: {
      "@root/": path.resolve(__dirname, "./"),
      // Add more aliases as needed
    },
  },
});
=======
})
>>>>>>> 02115236e2537c4c69ec9ce15a0450b650990405
