// 解析 vue
import vue from 'rollup-plugin-vue'
//
import typescript from 'rollup-plugin-typescript2'
// rollup.js 编译支持 npm 模块和 CommonJS 模块
import commonjs from '@rollup/plugin-commonjs'
// 打包前，先清空 dist 文件夹
// import clear from 'rollup-plugin-clear';
// 编译代码
import babel from '@rollup/plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'
// 压缩代码
import { uglify } from 'rollup-plugin-uglify'
// 热更新
// import livereload from "rollup-plugin-livereload";
// 提供服务
// import serve from "rollup-plugin-serve";
// 将我们编写的源码与依赖的第三方库进行合并
import resolve from '@rollup/plugin-node-resolve'
// 替换环境变量
import replace from 'rollup-plugin-replace'
import pkg from './package.json' // 当前运行环境，可通过 cross-env 命令行设置

const NODE_ENV = process.env.NODE_ENV

let envPlugins = []

const babelOptions = {
    presets: ['@babel/preset-env'],
    extensions: [...DEFAULT_EXTENSIONS, '.tsx', '.ts'],
    exclude: '**/node_modules/**',
    // runtimeHelpers: true,
    babelHelpers: 'runtime',
}

const isPrd = NODE_ENV === 'production'

if (isPrd) {
    envPlugins = [uglify()]
}
const umdGlobals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    vue: 'vue',
}

const commonConfig = {
    // external: ['vue', 'react'],
    plugins: [
        // clear({
        //   targets: ['dist'],
        //   watch: true,
        // }),
        resolve(),
        vue({
            css: true,
            compileTemplate: true,
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        }),
        commonjs(),
        typescript(),
        babel(babelOptions),
        ...envPlugins,
    ],
}
const vueConfig = {
    input: 'src/core/vue/index.ts',
    output: [
        {
            file: './dist/vue/index.js',
            format: 'cjs',
            globals: umdGlobals,
        },
        {
            file: './dist/vue/index.esm.js',
            format: 'es',
            globals: umdGlobals,
        },
        {
            name: 'LowCodeBuilder.Vue',
            file: './dist/vue/index.umd.js',
            format: 'umd',
            globals: umdGlobals,
        },
    ],
    ...commonConfig,
    external: ['vue'],
}
const reactConfig = {
    input: 'src/core/react/index.ts',
    output: [
        {
            file: './dist/react/index.js',
            format: 'cjs',
            globals: umdGlobals,
        },
        {
            file: './dist/react/index.esm.js',
            format: 'es',
            globals: umdGlobals,
        },
        {
            name: 'LowCodeBuilder.React',
            file: './dist/react/index.umd.js',
            format: 'umd',
            globals: umdGlobals,
        },
    ],
    ...commonConfig,
    external: ['react'],
}
const main = {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            globals: umdGlobals,
        },
        {
            file: pkg.module,
            format: 'es',
            globals: umdGlobals,
        },
        {
            name: 'LowCodeBuilder',
            file: pkg.umd,
            format: 'umd',
            globals: umdGlobals,
        },
    ],
    ...commonConfig,
}
export default [vueConfig, reactConfig, main]
