import jwt from "jsonwebtoken";
import { User } from "../modules/user/user.model.js";
export const authenticate= async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if (!authHeader) {
    return res.status(401).json({
        message: "Unauthorized"
    });}
    const token = authHeader.split(" ")[1];
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