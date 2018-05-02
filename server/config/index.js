const NODE_ENV = process.env.NODE_ENV || 'development';
// const mysqlConfig = require('./mysql')(NODE_ENV);

import globalConfig from './global'

export default  {
    // mysqlConfig,
    globalConfig,
}
