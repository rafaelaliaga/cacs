// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/NOME_REPO/",      //  ←  coloque exatamente o nome do repositório
  plugins: [react()],
});