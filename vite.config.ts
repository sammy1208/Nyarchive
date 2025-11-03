import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    base: isProduction ? '/Nyarchive/' : '/',
    plugins: [react()],
  };
});
