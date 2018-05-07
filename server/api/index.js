import { Router } from 'express'
// import db from '../models/index'
// import checkToken from '../middlewares/check-token'


const router = Router()

//  import {
//      login, register,getUserInfo,patchUserInfo
//  } from '../controllers/users'

// // Add USERS Routes
// router
//     .post('/login',login)
//     .post('/register',register)
//     .get('/user', getUserInfo)
//     .patch('/user', checkToken, patchUserInfo)
    
 //区块相关
 import {
    blockTest
} from '../controllers/block'

router
    .get('/blockTest',blockTest)




export default router
