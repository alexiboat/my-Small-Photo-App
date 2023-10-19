import express from 'express'
const router= express.Router()
import { userLogin, userRegister } from '../controller/userController.js'




router.post('/register', userRegister)

router.post('/login', userLogin)





export {router as usersRoute}