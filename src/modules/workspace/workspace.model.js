import mongoose from "mongoose";
const workSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
     members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
},{
    timestamps:true,
});
 export const WorkSpace=mongoose.model("WorkSpace",workSchema);
 