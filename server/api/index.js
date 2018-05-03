import { Router } from 'express'
import db from '../models/index'
import checkToken from '../middlewares/check-token'


const router = Router()

 import {
     login, register,getUserInfo,patchUserInfo
 } from '../controllers/users'
router
    .post('/login',login)
    .post('/register',register)
    .get('/user', getUserInfo)
    .patch('/user', checkToken, patchUserInfo)
// Add USERS Routes




export default router
