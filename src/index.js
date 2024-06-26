import dotenv from "dotenv"
import connectDB from "./db/db.js"
dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`MongoDB connected! App listening on: ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error("MongoDB connection failed!! ", err);
})













/* 
// First approach to conncet database

import express from "express"
const app = express()

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERROR",error);
            throw error;
        })

        app.listen(process.env.PORT,() => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    }catch(error){
            console.log("ERROR:", error)
            throw error;
        }
    
})()

*/
