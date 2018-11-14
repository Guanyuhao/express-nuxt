import mongoose from 'mongoose'
import md5 from 'md5'
import Config from '../config'

let globalConfig = Config.globalConfig

require('./user')

const User = mongoose.model('User')

const mongoUrl = `mongodb://${globalConfig.mongodb.host}:${globalConfig.mongodb.port}/${globalConfig.mongodb.database}`
mongoose.Promise = global.Promise
mongoose.connection
  .openUri(mongoUrl)
  .once('open', async () => {
    console.log('database connect successed')
    // init admin information
    let userInfo = globalConfig.user
    userInfo.password = md5(userInfo.password)

    let user = await User.findOne({ role: 'superAdmin' }).exec()
    if (!user) {
      user = new User(userInfo)
      await user.save()
      console.log('Administrator information initialization succeeded')
    }
  })
  .on('error', (error) => {
    console.warn('database connect fail', error)
  })
