import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
         lowercase:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    isEmailVerified:{
        type:Boolean,
        default:false,
       
    }
},{
    timestamps:true,}
)
export const User=mongoose.model("User",userSchema);
