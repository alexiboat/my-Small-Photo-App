import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import usersModel from '../model/userModel.js'

export const userRegister = async ( req, res )=>{
 const {username, password}= req.body
 try {
    const user = await usersModel.findOne({username})

    if (user){
        res.json({messege:'user already exist'})
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new usersModel({username, password:hashPassword})
     await newUser.save()
    res.json(newUser)

 } catch (error) {
    console.log(error)
 }

}


 export const userLogin = async ( req, res )=>{
    const {username, password}= req.body
   
    try {
        const user = await usersModel.findOne({username})

    if (!user){
        res.json({messege:'please you are not the right user'})
    }
    const verifyPassword = await bcrypt.compare(password, user.password)
    if(!verifyPassword){
        res.json({message:'Please your password or username is incorrect'})
    }
     const token = jwt.sign({id:user._id}, process.env.JWT_TOKEN)
     res.json({token, userID:user._id, username:user.username})
    } catch (error) {
        console.log(error)
    }
   }

   export const verifyToken = (req, res, next)=>{
     
      const token = req.headers.authorization

      if(token){

         jwt.verify(token, process.env.JWT_TOKEN , (err)=>{
            if (err) return res.sendStatus(403)
            next()
         })
      } else{
        res.sendStatus(401)
      }
   }
   