/*
 * @Description:快速生成组件模板
 * @Author: et_wl
 * @Date: 2019-07-24 09:49:28
 * @LastEditTime: 2019-07-25 17:11:24
 * @LastEditors: et_wl
 */

const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

const dirName = process.argv[2]
if (!dirName) {
    console.log('文件夹名称不能为空！')
    console.log(`示例：npm run cpt ${dirName}`)
    process.exit(0)
}

/**
 * @msg: vue页面模版
 */
const VueTep = `
<template>
  <div class="${dirName}-component">

  </div>
</template>

<script lang="babel">
export default {
    name: '${dirName}',
    data () {
        return {

        }
    },
    created () {

    },
    activated () {

    },
    mounted () {

    },
}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/variables";

.${dirName}-component
    width 100%

</style>
`

fs.mkdirSync(`${basePath}/components/${dirName}`) // mkdir

process.chdir(`${basePath}/components/${dirName}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep) // vue

process.exit(0)
