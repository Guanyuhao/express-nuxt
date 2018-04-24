module.exports = (node_env) => {
    let mysqlConfig = {
        host: '',
        user: '',
        database: '',
        password:'',
        port:''
    }
    switch(node_env){
        case 'develop':
            mysqlConfig.host = '127.0.0.1';
            mysqlConfig.user = 'roots';
            mysqlConfig.database = 'dev';
            mysqlConfig.password = '123456';
            mysqlConfig.port = '3306';           
            break;
        case 'prod':
            mysqlConfig.host = '';
            mysqlConfig.user = '';
            mysqlConfig.database = '';
            mysqlConfig.password = '';
            mysqlConfig.port = '';  
            break;
        default:

    }
    return {
        address:'mysql://'+mysqlConfig.user+':'+mysqlConfig.password+'@'+mysqlConfig.host+':'+mysqlConfig.port+'/'+mysqlConfig.database
    }
}
