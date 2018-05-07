const NODE_ENV = process.env.NODE_ENV || 'development';
// const mysqlConfig = require('./mysql')(NODE_ENV);

import globalConfig from './global'
import API from './api'
let {browserApi} = globalConfig
let {pact,host,port,routerBaseApi} = browserApi
let ServerBaseUrl = pact+'://'+host+':'+port+routerBaseApi
export default  {
    // mysqlConfig,
    globalConfig,
    API,
    ServerBaseUrl
}
