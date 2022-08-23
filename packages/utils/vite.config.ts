import {defineConfig} from "vite";

const path = require('path');
export default defineConfig({

    build:{
        lib:{
            entry: path.resolve(__dirname, 'lib/index.ts'),
            name: 'fantasy-design-utils',
            fileName: (format) => `fantasy-design-utils.${format}.js`,
            formats:['es','umd','cjs']
        },
    }
})