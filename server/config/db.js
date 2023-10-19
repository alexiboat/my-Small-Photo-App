import mongoose from 'mongoose'




  export default async function mongoDB (){
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Mongodb connected')
  }


