
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from './http/ajax'
import prepare from './components/Prepare'
import './utils/rem'

Vue.prototype.$ajax = ajax
Vue.$store = store
Vue.$router = router
Vue.config.productionTip = false

prepare(Vue)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
