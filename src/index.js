import dotenv from "dotenv";
import express from "express";

import connectDb from "./db/index.js"
dotenv.config({path:"./env"})
const app = express();

connectDb()
.then(()=>{
    app.on("Error", (error)=>{
        console.log("Error", error)
    })
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log("Server is running on port 8000")
    })
})
.catch((error)=>{
    console.log("Connection error failed ",error);
})


// (async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("Error",(error)=>{
//         console.error("Error",error)
//        })
//        app.listen(process.env.PORT, ()=>{
//         console.log(`server is running on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.error("Error",error)
//         throw error
//     }
// })()