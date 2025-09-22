import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
    plugins: [react(), tailwindcss()],

    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components'),
            fileName: () => `lib.js`,
            formats: ['es']
        },
        rollupOptions: {
            output: {
                dir: 'dist',
                format: 'esm',
                // preserveModules: true,
                // preserveModulesRoot: 'src',
            },
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
            ],
        }

    },


});

