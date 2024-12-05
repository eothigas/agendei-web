import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Substitua pelo IP desejado
    port: 3001,            // Substitua pela porta desejada
    proxy: {
      '/api': {
        target: 'http://18.230.206.19:3001', // URL do backend
        changeOrigin: true, // Altera a origem da requisição para a do backend
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove o prefixo /api
      },
    },
  },
});
