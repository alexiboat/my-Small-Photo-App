import photoModel from "../model/photoModel.js";
import usersModel from "../model/userModel.js";
import asyncHandler from 'express-async-handler'



//** get photo  */
export const getPhoto = asyncHandler( async(req, res)=>{
  try {
    const response = await photoModel.find({})
    res.json(response)
  } catch (error) {
    res.json(error)
  }
})
//** post photo  */
export const postPhoto = async(req, res)=>{
    const photos = new photoModel(req.body)
try {
    const response = await photos.save()
    res.json(response)
    
} catch (error) {
    res.json(error)
}
}

//** save (put) photo  */
export const getSavePhoto = asyncHandler(async(req, res)=>{
    
try {
    const user = await usersModel.findById(req.body.userID)
    const photo = await photoModel.findById(req.body.photoID)
     user.savePhoto.push(photo)
     await user.save()
    
    res.json({savePhoto:user.savePhoto})
    
    //console.log(savePhoto)
} catch (error) {
    res.json(error)
}
})

//** getsave  photo ids from saved photo  */
export const getSavePhotoIds = async(req, res)=>{
try {
   const user = await usersModel.findById(req.params.userID)
   res.json({savePhoto: user?.savePhoto})
   
} catch (error) {
    res.json(error)
}
}

//** get all photos saved whose ids are in saved photos */
export const getAllSavePhotos = async(req, res)=>{
try {
    const user = await usersModel.findById(req.params.userID)
    const savePhoto = await photoModel.find({_id: {$in: user.savePhoto}})
 
    res.json({savePhoto})
} catch (error) {
    res.json(error)
}
}

export const deletePhoto =  async( req, res)=>{
  const id = req.params.id
  try {
   
   const response = await photoModel.findByIdAndDelete({_id: id})

  res.status(200).json(response)
  } catch (error) {
     res.json(error)
  }
 
  
}