/*
 * @Description:代码检查规则的配置
 * @Author: et_wl
 * @Date: 2019-07-24 09:07:18
 * @LastEditTime: 2019-07-25 16:39:51
 * @LastEditors: et_wl
 */

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  globals: {
    GLOBAL_API_ENV:true
  },
  rules: {
    //后续如果有需要的再加一些规则进去 参考http://eslint.cn/docs/rules/
    'generator-star-spacing': 'off', // 强制 generator 函数中 * 号周围使用一致的空格
    'indent': [2, 4], // 强制使用一致的缩进
    'comma-dangle': 0, // 要求或禁止末尾逗号
    'key-spacing': 0, // 强制在对象字面量的属性中键和值之间使用一致的间距
    'no-useless-constructor': 0, // 禁用不必要的构造函数
    'object-curly-spacing': 0, // 强制在大括号中使用一致的空格
    'no-multi-spaces': 0, // 禁止使用多个空格
    'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线
    'no-plusplus': 0, // 禁用一元操作符 ++ 和 --
    'global-require': 0, // 要求 require() 出现在顶层模块作用域中
    'no-param-reassign': 0, // 禁止对 function 的参数进行重新赋值
    'no-shadow': 0, // 禁止变量声明与外层作用域的变量同名
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
