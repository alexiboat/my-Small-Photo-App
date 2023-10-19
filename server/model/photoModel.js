import mongoose from 'mongoose'



const photoSchema = new mongoose.Schema({
 imagename : {
   type: String,
   required:true,
   
 },
 ingredients:[{
    type:String,
    required:true
 }],
 instructions:{
    type:String,
    required:true
 },
 description:{
    type:String,
    required:true
 },
 imageurl:{
    type:String,
    required:true
 },
 userOwner:{
    type:mongoose.Schema.Types.ObjectId,
     ref:'users',
      required:true
    
 }, 



},{timestamps:true})

export const photoModel = mongoose.model('photos', photoSchema)
export default photoModel