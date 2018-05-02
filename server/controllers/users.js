import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import md5 from 'md5'
import Config from '../config/index'

let globalConfig = Config.globalConfig


const User = mongoose.model('User')

export const login = async(req,res,next) => {
  let { username, password } = req.body
  password = md5(password)
  
  try {
    let user = await User.findOne({username: username, password: password}).exec()
    let secret = globalConfig.jwt.secret
    let expiresIn = globalConfig.jwt.expiresIn
    let token = jwt.sign({ username: user.username, userID: user._id }, secret)
    res.cookie('isLogin',1,{ expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) })
    res.json ({
      success: true,
      data: {
        token: token
      }
    })
  } catch (e) {
    res.json ({
      success: false,
      data: e
    })
  }
}

export const logout = async(req,res,next) => {
  res.cookie('isLogin',0)
  res.json ( {
    success: true,
    data: {}
  })
}

export const register = async(req, res, next) => { 
  let { username, password } = req.body
  password = md5(password)
  let user = await User.findOne({username: username}).exec()
  if(!user){
    user = new User({ username, password })
    await user.save()
    res.json ({
      success: true
    })
  }else{
    res.json ({
      success: false
    })
  }
  

}

export const getUserInfo = async(req, res, next) => {
  // let avatarUrl = ctx.protocol + '://' + ctx.host + '/public/' + config.user.avatar
  try {
    let data = await User.findOne({ role: 'superAdmin' }).exec()
   
    res.json ( {
      success: true,
      data: data
    })
  } catch (e) {
    res.json ( {
      success: false,
      err: e
    })
  }
}

export const patchUserInfo = async(req, res, next) => {
  let body = res.body
  if (body.oldPassword && body.newPassword) {
    // update password
    let oldPassword = md5(body.oldPassword)
    let newPassword = md5(body.newPassword)
    try {
      let user = await User.findOne({ role: 'superAdmin' }).exec()
      if (user.password !== oldPassword) {
        return (res.json ( {
          success: false,
          err: 'Wrong password'
        }))
      }
      body = await User.findOneAndUpdate({ role: 'superAdmin' }, { password: newPassword, updatedAt: Date.now() }).exec()
      res.json ( {
        success: true,
        data: body
      })
    } catch (e) {
      res.json ( {
        success: false,
        err: e
      })
    }
  } else {
    // update info
    body.updatedAt = Date.now()
    try {
      body = await User.findOneAndUpdate({ role: 'superAdmin' }, body).exec()
      res.json ( {
        success: true,
        data: body
      })
    } catch (e) {
      res.json ( {
        success: false,
        err: e
      })
    }
  }
}
