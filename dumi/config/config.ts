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
    },
    description:"React UI",
    mode:'site',
    lessLoader:{
        javascriptEnabled:true,
        modifyVars:{
            'root-entry-name':'default'
        },
    },
    navs: {
        // 多语言 key 值需与 locales 配置中的 key 一致
        'zh-CN': [
            {
                title: "组件",
                path: '/zh-CN/components',
            },
            {
                title: '指南',
                path: '/zh-CN/guide',
            }, // null 值代表保留约定式生成的导航，只做增量配置
            {
                title: 'GitHub',
                path: 'https://github.com/LuciferWZX/fantasy-design',
            },
        ],
        'en-US': [
            null, // null 值代表保留约定式生成的导航，只做增量配置
            {
                title: 'GitHub',
                path: 'https://github.com/LuciferWZX/fantasy-design',
            },
        ],

    },
})