const NODE_ENV = process.env.NODE_ENV || 'develop';
const mysqlConfig = require('./mysql')(NODE_ENV);

module.exports = {
    mysqlConfig,
}
