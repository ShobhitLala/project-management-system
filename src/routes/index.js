import { Router } from "express";
import authRoutes from "../modules/auth/auth.route.js"
import { authenticate } from "../middleware/auth.middleware.js";
import workspaceRouter from "../modules/workspace/workspace.route.js";
import projectRouter from "../modules/project/project.route.js";
const router=Router();
router.use("/auth", authRoutes);
router.use("/workspaces", workspaceRouter);
router.use("/projects",projectRouter);
router.get("/me", authenticate, (req, res) => {
    res.json({
        user: req.user
    });
});

router.get("/",(req,res)=>{
   res.status(200).json({
    message:"Api v1 is running fine"
   });
});
export default router;