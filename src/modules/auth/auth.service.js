import { User } from "../user/user.model.js";
import bcrypt from "bcryptjs"

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