import jwt from "jsonwebtoken";
import { User } from "../modules/user/user.model.js";
export const authenticate= async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    console.log("Authorization Header:", authHeader);
    if (!authHeader) {
    return res.status(401).json({
        message: "Unauthorized"
    });}
   const parts = authHeader.split(" ");

console.log("Parts:", parts);
console.log("Parts length:", parts.length);

const token = parts[1];

console.log("Extracted token:", token);
     const decoded=jwt.verify(token,process.env.JWT_SECRET);
     const user = await User.findById(decoded.userId)
    .select("-password");

    if (!user) {
        return res.status(401).json({
            message: "User not found"
        });
    }
     req.user=user
     next();
     

}