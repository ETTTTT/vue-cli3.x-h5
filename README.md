# et_wl

> 移动端的Vue-cli3.X架子
>
## tip
- node>= 8.9
- vue-cli版本 v3.9.3
- webpack版本 v4.36.1  v4以上的
- axios版本 v0.19.0，其他版本可能会有一些小问题


## Build Setup

``` bash
# 安装包
npm install

# 开发环境、可加参数区分环境
npm run dev 

# 生产环境、可加参数区分环境
npm run build
```
### 目录

``` bash
.
├── public # 渲染的文件
│   ├── favicon.ico  # 页面title.ico
│   ├── index.html   # 最终渲染的页面
├── scripts # 自己写的2个脚本文件
│   ├── component.js # 快速生成组件模板的脚本 npm run tpl home
│   └── template.js  # 快速生成页面模板的脚本 npm run cpt header
├── tests # 单元测试
├── src # 核心文件
│   ├── api # 接口文件
│   │   ├── api.constants.js # 运行的内、公、灰、正的api地址
│   │   ├── api.name.js # 接口地址apiName
│   │   └── api.env.js  # 获取api地址
│   ├── assets # 静态文件common
│   │   ├── images # 图片文件
│   │   │   └── common # 公共使用的图片
│   │   └── stylus
│   │       ├── app.styl # app使用的样式
│   │       └── variables.styl # 公共使用的一些样式
│   ├── components # 组件文件
│   │   ├── loading # 基于vant分装的loading
│   │   ├── Mounted # 进入页面需要做的一些配置，
│   │   ├──Prepare # 进入页面需要做的一些配置，
│   │   │   ├── index.js # 引入其余js使用
│   │   │   ├── startAjax.js # 开启ajax请求
│   │   │   └── usePlugins.js # 图片懒加载的配置
│   │   └──Header.vue # app的头部
│   ├── http # 请求文件
│   │   ├── interceptors # 拦截器
│   │   │   └── index.js # 请求前请求后的拦截器配置
│   │   ├── ajax.js # 请求
│   │   ├── ajaxrequest.js # 封装get、post请求
│   │   ├── errorCode.js # 定义返回的错误码
│   │   └── errorHandlers.js # 返回错误码对应的执行方法
│   ├── router # 路由文件
│   │   ├── middlewares # 拦截器
│   │   │   ├── checkAppInfo.js # 配置app的一些信息
│   │   │   ├── checkWeixin.js # 是否为微信环境
│   │   │   └── index.js # 加载同级目录下除自己以外的所有js
│   │   ├── applyMiddleware.js # 加载middlewares下面的所有文件
│   │   ├── index.js # 封装路由
│   │   └── routes.js # 配置路由
│   ├── store # vuex文件
│   │   ├── modules # 所有页面vuex的集合
│   │   │   ├── appInfo.js # 加载初始化存的一些数据
│   │   │   └── index.js # 加载同级目录下除自己以外的所有js
│   │   ├── index.js # 处理vuex里的逻辑
│   │   └── mutationTypes.js # 定义vuex中使用的一些常量名称
│   ├── utils # 一些utils文件
│   ├── views # 页面文件
│   │   ├── hone # home页面文件
│   │   └── constant.js # 放各个页面的name
│   ├── App.vue # app.vue
│   └── main.js # 入口js
│   .browserslistrc # 设置浏览器、手机兼容版本
├── .editorconfig # 编辑代码时，对键盘的一些小要求
├── .eslintrc.js # 代码检查
├── .gitignore # 上传代码时过滤的一些文件
├── package-lock.json # package-lock.json
├── package.json # package.json
├── babel.config.js # 插件配置
├── postcss.config.js # 对CSS的浏览器环境的兼容 搭配.browserslistrc文件使用，其里面写了兼容浏览器的版本
├── README.md # 说明文档
└── vue.config.js # 主要配置文件
```
### 样式
- 使用styl预处理,简洁明了，代码少
- 因为是移动端，所以rem布局,使用的是px2rem-loader
- 浏览器的兼容在.browserslistrc文件里面设置浏览器的版本兼容

### 代码规范
- eslint


### UI
- 使用的是VantUI,因为是移动端的,所以也配置了vant的rem布局
- 使用方式为按需引入
```
// 引入一个button按钮组件

import Vue from 'vue'
import {Button, loading} from 'vant'
Vue.use(Button).use(loading)
```
### 图片懒加载
- 使用vue-lazyload进行图片懒加载也可以引入vantUI框架里面的懒加载
- 使用方式
```
// 未使用懒加载

<img src="图片路径">
<img :src="图片路径">



// 使用懒加载

<img v-lazy="路径">
```

### 请求
- 二次封装了axias
- 运行环境为基本的内、公、灰、正4个环境
- 第一个参数为apiName  第二个参数是传给后端的参数
- get请求
```
// 不传参的
this.$ajax.get('home').then(res => {
    console.log(res)
})
// 传参的
this.$ajax.get('home',{id:8, type:'h5'}).then(res => {
    console.log(res)
})
```
- post请求
```
// 不传参的
this.$ajax.post('home').then(res => {
    console.log(res)
})
// 传参的
this.$ajax.post('home',{id:8, type:'h5'}).then(res => {
    console.log(res)
})
```
### 数据状态管理
- vuex使用了 mapState获取数据 mapActions获取方法
```
// 调用方法，每个页面的函数方法名称最好是不一样的

methods: {
    ...mapActions([
        'checkIsWeixin',
    ]),
}
使用： this.checkIsWeixin(),this.checkIsWeixin({})
tip：参数为一个对象


// 调用state的数据

computed: {
    ...mapState({
        isWeixin: ({ appInfo }) => appInfo.isWeixin,
    }),
},
使用：isWeixin类似于data里面的数据，使用方式和data里面的参数一样，this.isWeixin
tip: isWeixin为属性名称,可以随意定义,appInfo为store文件夹里面的文件夹名称
```
