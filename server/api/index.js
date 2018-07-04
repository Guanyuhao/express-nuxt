import { Router } from 'express'
import db from '../models/index'
import checkToken from '../middlewares/check-token'


const router = Router()

 import {
     login, register,getUserInfo,patchUserInfo
 } from '../controllers/users'

// Add USERS Routes
router
    .post('/login',login)
    .post('/register',register)
    .get('/user', getUserInfo)
    .patch('/user', checkToken, patchUserInfo)
    
 //区块相关
 import {
    blockTest,blockList
} from '../controllers/block'

router
    .get('/blockTest',blockTest)
    .get('/blockList',blockList)

import {
    huobiDepth
} from '../controllers/hubi'

router
    .get('/hubiDepth',huobiDepth)

export default router
