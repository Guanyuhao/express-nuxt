import { Router } from 'express'
// import db from '../models/index'
import checkToken from '../middlewares/check-token'

import {
  login, register, getUserInfo, patchUserInfo
} from '../controllers/users'

// 区块相关
import {
  blockTest, blockList
} from '../controllers/block'

import {
  huobiDepth
} from '../controllers/hubi'

const router = Router()

// Add USERS Routes
router
  .post('/login', login)
  .post('/register', register)
  .get('/user', getUserInfo)
  .patch('/user', checkToken, patchUserInfo)

router
  .get('/blockTest', blockTest)
  .get('/blockList', blockList)

router
  .get('/hubiDepth', huobiDepth)

export default router
