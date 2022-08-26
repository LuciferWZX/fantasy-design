import {defineConfig} from "vite";
import reactRefresh from '@vitejs/plugin-react-refresh';
import typescript from "@rollup/plugin-typescript";

const path = require('path');
const resolvePath = (str: string) => path.resolve(__dirname, str);
export default defineConfig({
    plugins:[
        reactRefresh()
    ],
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                charset: false,
                javascriptEnabled:true,
            },
        },
    },
    build:{
        lib:{
            entry: resolvePath('src/index.ts'),
            name: 'fantasy-design-icon',
            fileName: (format) => `fantasy-design-icon.${format}.js`,
            formats:['es','umd','cjs']
        },
        rollupOptions:{
            external:['react','react-dom'],
            output:{
                globals:{
                    react:'React',
                    "react-dom": "react-dom",
                }
            },
            plugins:[
                typescript({
                    tsconfig:'./tsconfig.json'
                })
            ]
        }
    }
})