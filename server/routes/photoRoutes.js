import express from "express"


const router = express.Router()
import { getPhoto } from "../controller/photocontroller.js"
import { getSavePhoto } from "../controller/photocontroller.js"
import { getAllSavePhotos } from "../controller/photocontroller.js"
import { postPhoto } from "../controller/photocontroller.js"
import { getSavePhotoIds } from "../controller/photocontroller.js"
import { verifyToken } from "../controller/userController.js"
import { deletePhoto } from "../controller/photocontroller.js"

router.get('/getphoto', getPhoto)
router.get('/getsavephotoids/id/:userID', getSavePhotoIds)
router.get('/getallsavephotos/:userID', getAllSavePhotos)
router.post('/postphoto', verifyToken, postPhoto )
router.put('/savephoto', verifyToken, getSavePhoto )
router.delete('/delete/:id', deletePhoto)



export {router as photoRouter}