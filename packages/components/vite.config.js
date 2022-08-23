import { defineConfig } from "vite";
import reactRefresh from '@vitejs/plugin-react-refresh';
const path = require('path');
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    plugins: [
        reactRefresh()
    ],
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                charset: false,
                javascriptEnabled: true,
                modifyVars: {
                    '@root-entry-name': 'default'
                },
                hack: `true; @import "./src/style/default.less";`,
                //additionalData: '@import "./src/style/default.less";',
            },
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'fantasy-design',
            fileName: (format) => `fantasy-design.${format}.js`,
            formats: ['es', 'umd', 'cjs']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    }
});
