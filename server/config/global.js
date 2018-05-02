export default {
    user: {
      role: 'superAdmin',
      username: 'guan',
      password: 'guan',
      email: 'guanyuhao666@gmail.com',
      nickname: 'lzjetf',
      motto: 'Never too old to learn',//座右铭
      avatar: 'avatar.png' //头像
    },
    jwt: {
      secret: 'lzjetf',
      expiresIn: 60*60*24*7
    },
    mongodb: {
      host: '127.0.0.1',
      database: 'block_chain_test',
      port: 27017,
      username: '',
      password: ''
    },
    production: {
      host: '192.168.1.95',
      domain: '192.168.1.95:3000'
    },
    app: {
      host: '127.0.0.1',
      port: 3000,
      routerBaseApi: 'api'
    }
  }
  