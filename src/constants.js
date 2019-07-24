import { name, apiVersion } from '../package.json'
export const APP_NAME = name
// 版本号每个版本记得在package.json中修改
export const API_VERSION = apiVersion
export const API_HOST = {
    // alpha  : '//192.168.1.206/mall',
    alpha  : '//192.168.6.11:8888',
    beta   : '2',
    abtest : '3',
    release: '4',
}
