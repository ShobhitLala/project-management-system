import { Router } from "express";
const router=Router();
router.get("/",(req,res)=>{
   res.status(200).json({
    message:"Api v1 is running fine"
   });
});
export default router;