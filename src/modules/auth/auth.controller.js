import { registerUser } from "./auth.service.js";

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