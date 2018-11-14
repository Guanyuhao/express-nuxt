import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import md5 from 'md5'
import Config from '../config/index'

let globalConfig = Config.globalConfig

const User = mongoose.model('User')

export const login = async (req, res, next) => {
  let { username, password } = req.body
  password = md5(password)

  try {
    let user = await User.findOne({username: username, password: password}).exec()
    let secret = globalConfig.jwt.secret
    // let expiresIn = globalConfig.jwt.expiresIn
    let token = jwt.sign({ username: user.username, userID: user._id }, secret)
    // res.cookie('isLogin', 1, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) })
    res.json({
      success: true,
      data: {
        token: token
      }
    })
  } catch (e) {
    res.json({
      success: false,
      data: e
    })
  }
}
