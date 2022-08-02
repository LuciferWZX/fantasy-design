import {defineConfig} from "vite";
import reactRefresh from '@vitejs/plugin-react-refresh';
const path = require('path');
export default defineConfig({
    plugins:[reactRefresh()],
    build:{
        lib:{
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'fantasy-design',
            fileName: (format) => `fantasy-design.${format}.js`,
            formats:['es','umd','cjs']
        },
        rollupOptions:{
            external:['react','react-dom'],
            output:{
                globals:{
                    react:'React'
                }
            }
        }
    }
})