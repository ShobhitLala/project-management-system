import { User } from "../user/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser=async(userData)=>{
      const{name,email,password}=userData;
      if(!name||!email||!password ){
        throw new Error("All field are required")
      }
      const userExist=await User.findOne({email});
      if(userExist){
        throw new Error("User already exist")
      }
      const hashpass=await bcrypt.hash(password,10);
      const user=await User.create({
        name,
        email,
        password:hashpass
      })
     
  const userResponse = await User.findById(user._id).select("-password");

return userResponse;
}
export const loginUser=async(userData)=>{
  const{email,password}=userData;
  if(!email||!password){
    throw new Error("All field is required like email and password")
  }
  const user=await User.findOne({email});
  if(!user){
    throw new Error("Invalid credentials");
  }
  const isValidPassword=await bcrypt.compare(password,user.password);
  if(!isValidPassword){
    throw new Error("Invalid credentials");
  }
  const token= jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})
  user.password=undefined;
  return{
    user,
    token

  }
}