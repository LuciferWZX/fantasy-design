import { defineConfig } from "vite";
import reactRefresh from '@vitejs/plugin-react-refresh';
import typescript from "@rollup/plugin-typescript";
const path = require('path');
const resolvePath = (str) => path.resolve(__dirname, str);
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
            entry: resolvePath('src/index.ts'),
            name: 'fantasy-design',
            fileName: (format) => `fantasy-design.${format}.js`,
            formats: ['es', 'umd', 'cjs']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    "react-dom": "react-dom",
                }
            },
            plugins: [
                typescript({
                    tsconfig: './tsconfig.json'
                })
            ]
        }
    }
});
