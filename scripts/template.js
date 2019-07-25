/*
 * @Description:快速生成页面模板
 * @Author: et_wl
 * @Date: 2019-07-24 09:48:45
 * @LastEditTime: 2019-07-25 18:03:08
 * @LastEditors: et_wl
 */

const fs = require('fs') // 写文件
const path = require('path') // 获取路径
const basePath = path.resolve(__dirname, '../src')  // 基础路径/相对路径

// 作用就是跑npm run tpl login的时候，获取login这个名字
// 不懂可以查看http://nodejs.cn/api/process.html#process_process_argv下面的process.argv
const dirName = process.argv[2]
if (!dirName && dirName !== 'index') {
    console.log('文件夹名称不能为空,且不能为index!')
    console.log(`示例：npm run tpl ${dirName}`)
    process.exit(0) // 指示 Node.js 同步地终止进程
}

/**
 * vue模板
 */
const vueTpl = `
<template lang="html">
    <div class="${dirName}-container">

    </div>
</template>

<script src="./${dirName}.js"></script>

<style src="./${dirName}.styl" lang="stylus" scoped></style>
`

/**
 * js模板
 */
const jsTpl = `
import {
    mapState,
    mapActions,
} from 'vuex'
import viewName from '../constant.js'

export default {
    name: viewName.${dirName},
    components: {
    },
    data () {
        return {

        }
    },
    computed: {
        ...mapState({

        }),
    },
    created () {

    },
    activated () {

    },
    mounted () {

    },
    methods: {
        ...mapActions([

        ]),
    },
    destroyed () {

    },
}
`

/**
 * styl模板
 */
const stylTpl = `
@import "../../assets/stylus/variables.styl";

.${dirName}-container
    width 100%
`
/**
 * store模板
 */

const vuexTpl = `
import * as MUTATION from '../mutationTypes'

const state = {

}

const mutations = {

}

export const actions = {

}

export const getters = {

}

export default {
    state,
    mutations,
}
 `
// 插入view
fs.mkdirSync(`${basePath}/views/${dirName}`) // mkdir
process.chdir(`${basePath}/views/${dirName}`) // cd views
fs.writeFileSync(`index.vue`, vueTpl) // vue
fs.writeFileSync(`${dirName}.js`, jsTpl) // js
fs.writeFileSync(`${dirName}.styl`, stylTpl) // styl
// vuex
process.chdir(`${basePath}/store/modules`) // cd modules
fs.writeFileSync(`${dirName}.js`, vuexTpl) // vuexTpl

process.exit(0)
