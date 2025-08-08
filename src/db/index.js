import mongoose from "mongoose"
import { DB_NAME } from "../contants.js"


const connectDb= async () =>{
    try {
       const connection= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`MongoDB connection Host ${connection.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection failed ", error)
        process.exit(1)
    }
}

export default connectDb