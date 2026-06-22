import { registerUser,loginUser } from "./auth.service.js";

export const registerController = async (req, res) => {
     try {
        const user = await registerUser(req.body);
        res.status(201).json({
            message:"user registered successfully",
            user
        })
     } catch (error) {
    res.status(400).json({
        message:error.message
        
    });
     } 
};
export const loginController=async(req,res)=>{
    try {
        const result=await loginUser(req.body);
        res.status(200).json({
            message:"user loginned successfully",
            user: result.user,
            token: result.token
        })
    } catch (error) {
        res.status(400).json({
        message:error.message
        
    });
    }
}