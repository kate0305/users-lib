import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // '@public': path.resolve(__dirname, 'public'),
      // '@components': path.resolve(__dirname, 'src/components'),
      // '@constants': path.resolve(__dirname, 'src/constants'),
      // '@hooks': path.resolve(__dirname, 'src/hooks'),
      // '@pages': path.resolve(__dirname, 'src/pages'),
      // '@redux': path.resolve(__dirname, 'src/redux'),
      // '@services': path.resolve(__dirname, 'src/services'),
      // '@type': path.resolve(__dirname, 'src/types'),
      // '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
});
