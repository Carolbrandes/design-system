import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    base: "/",
    plugins: [react(), mdx()],
    // You can add more Vite-specific configurations here if needed
});