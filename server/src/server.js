import express from "express"
import cors from 'cors'
import {config} from 'dotenv'
import morgan from 'morgan'
import  mongoDB  from "../config/db.js"
import { usersRoute } from "../routes/userRouter.js"
import { photoRouter } from "../routes/photoRoutes.js"



const app = express()
const port = process.env.PORT || 9000



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
config()
app.use(morgan('tiny'))

mongoDB()


app.use('/api', usersRoute)
app.use('/api', photoRouter)


app.listen(port, ()=>{
    console.log(` THIS APP IS RUNNNIN ON PORT ${port}`)
})