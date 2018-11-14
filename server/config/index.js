// const mysqlConfig = require('./mysql')(NODE_ENV);

import globalConfig from './global' // 项目初始化的一些配置
import API from './api'
// const NODE_ENV = process.env.NODE_ENV || 'development' // 区快链相关接口
let {browserApi} = globalConfig
let {pact, host, port, routerBaseApi} = browserApi /// /后台API的base地址
let ServerBaseUrl = pact + '://' + host + ':' + port + routerBaseApi
export default {
  // mysqlConfig,
  globalConfig,
  API,
  ServerBaseUrl
}
