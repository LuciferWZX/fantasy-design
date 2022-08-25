import {defineConfig} from "vite";
import typescript from "@rollup/plugin-typescript";

const path = require('path');
export default defineConfig({

    build:{
        lib:{
            entry: path.resolve(__dirname, 'lib/index.ts'),
            name: 'fantasy-design-utils',
            fileName: (format) => `fantasy-design-utils.${format}.js`,
            formats:['es','umd','cjs']
        },
    },
    plugins:[
        typescript({
            tsconfig:'./tsconfig.json'
        })
    ]
})