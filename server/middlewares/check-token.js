import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import Config from '../config'

let globalConfig = Config.globalConfig

const User = mongoose.model('User')

export default async (req, res, next) => {
  const token = req.get('token')
  if (token) {
    const decoded = jwt.verify(token, globalConfig.jwt.secret)
    const username = decoded.username
    const userID = decoded.userID
    try {
      let user = await User.findOne({ _id: userID, username: username }).exec()
      if (user._id && user.username) {
        await next()
      } else {
        return (res.json({
          success: false,
          err: 'Token is invalid'
        }))
      }
    } catch (e) {
      return (res.json({
        success: false,
        err: e
      }))
    }
  } else {
    return (res.json({
      success: false,
      err: 'Please login'
    }))
  }
}
