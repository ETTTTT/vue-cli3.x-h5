<template lang="html">
<div v-if="show" class="box">
    <van-overlay z-index="10000" :show="show">
    </van-overlay>
    <div class="loading" v-if="show" >
        <van-loading size="70px" type="spinner" vertical color="#000"></van-loading>
    </div>
</div>
</template>
<script lang="babel">

import Vue from 'vue'

import {Loading, Overlay} from 'vant'

Vue.use(Overlay).use(Loading)
export default {
    props: ['msg'],
    data () {
        return {
            show: true
        }
    }
}
</script>

<style lang="stylus" scoped>
.box
    position absolute
    z-index 10001
    top 0
    left 0
    width 100%
    height 100%
    .van-overlay
        opacity .3
    .loading
        position relative
        top 45%
        left 0
        z-index 10002
</style>
