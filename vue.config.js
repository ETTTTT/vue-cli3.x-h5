const path = require('path')
const webpack = require('webpack')
const px2rem = require('postcss-px2rem')

const API_ENV = require('./src/api/api.env')




const postcss = px2rem({
    remUnit: 100   //基准大小baseSize,需要和rem.js中相同,rem中我们是安卓iphone6,设计的基础字体大小时100px
})

const resolve = dir => {
  return path.join(__dirname, dir)
}


// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist', // 打包生成的生产环境构建文件的目录
  assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  lintOnSave: process.env.NODE_ENV !== 'production', // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  productionSourceMap: false, // 开启 生产环境的 source map?
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  css: {
    modules: false, // 启用 CSS modules
    extract: process.env.NODE_ENV === 'production', // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
        postcss: {
            plugins: [
              postcss
            ]
          }
    } // css预设器配置项
  },
  devServer: {
    overlay: {
        warnings: true,
        errors: true
    },
    port: 8080, // 端口
    // proxy: 'http://192.168.6.11:123' // 设置代理
  },
  configureWebpack: {

    plugins: [
        // 去除所有标签内部的默认样式  在src\assets\stylus\app.styl里面使用了 global-reset()
        new webpack.LoaderOptionsPlugin({
            options: {
                stylus: {
                    use: [require('nib')()],
                    import: ['~nib/lib/nib/index.styl']
                },
            }
        }),
        new webpack.DefinePlugin({
            GLOBAL_API_ENV: API_ENV
        }),
    ]
  },
  // 这是因为 3.x 版本默认使用的是运行时模式，不设置runtimeCompiler: true 时候给组件内部写东西的时候例如：
  // `<aca-header>
  //   <span v-show="showLeft" slot="left">
  //       <component :is="headerLeftBackBtn"></component>
  //   </span>
  // </aca-header>`
  // [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
  // 直接<aca-header></aca-header>这样写，不会报错
  runtimeCompiler: true
}
