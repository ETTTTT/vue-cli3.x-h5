
import Vue from 'vue'
import { Toast } from 'vant'
import code from './errorCode'

Vue.use(Toast)

const errorHandlers = {
    '106' () {
        Toast({
            message: code['106'],
            position: 'bottom'
        })
    },
    '0' () {
        Toast({
            message: code['0'],
            position: 'bottom'
        })
    },
    default (code, msg) {
        Toast({
            message: msg,
            position: 'bottom'
        })
    },
    abort (msg) {
        Toast({
            message: msg,
            position: 'bottom'
        })
    }
}
export default errorHandlers
