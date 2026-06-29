import mongoose from "mongoose";
 export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DATABASE connected")
    } catch (error) {
        console.error("database connection failed",error);
        process.exit(1);
    }};
 