import { Router } from "express";
import authRoutes from "../modules/auth/auth.route.js"
const router=Router();
router.use("/auth", authRoutes)
router.get("/",(req,res)=>{
   res.status(200).json({
    message:"Api v1 is running fine"
   });
});
export default router;