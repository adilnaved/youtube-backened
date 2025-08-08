import dotenv from "dotenv";

import connectDb from "./db/index.js"

dotenv.config({path:"./env"})

connectDb()


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