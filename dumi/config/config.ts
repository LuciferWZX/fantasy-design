import { join } from 'path';
import {defineConfig} from "dumi";

export default defineConfig({
    base:'/fantasy-design',
    publicPath:'/fantasy-design/',
    chainWebpack:(memo)=>{
        memo.module
            .rule('js')
            .test(/\.(js|mjs|jsx|ts|tsx)$/)
            .include.add(join(__dirname, '..', '..', 'packages/components/src'))
            .end()
            .exclude.add(/node_modules/)
            .end()
            .use('babel-loader');
    },
    alias:{
        '@fantasy-design/components':join(__dirname,'..','..','packages/components/src')
    }
})