import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// På GitHub Pages bygges med --base=/<repo>/ (se .github/workflows/pages.yml).
export default defineConfig({
  plugins: [react()],
});
