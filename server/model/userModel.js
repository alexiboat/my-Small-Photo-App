import mongoose from 'mongoose'



const usersSchema = new mongoose.Schema({
 username : {
   type: String,
   required:true,
   unique: true
 },
 password:{
    type:String,
    required:true
 },
 savePhoto:[{
  type:mongoose.Schema.Types.ObjectId,
   ref:'photos',
  
  
}],
    


},{timestamps:true})

export const usersModel = mongoose.model('users', usersSchema)
export default usersModel