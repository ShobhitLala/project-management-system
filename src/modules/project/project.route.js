import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import{ getprojectinWorkspacecontroller} from "../workspace/workspace.controller.js"
import { createProjectController,deleteProjectController,getDashboardStatsController} from "./project.controller.js";
const router = Router();
router.post("/",authenticate,createProjectController);
router.get(
    "/dash",
    authenticate,
    getDashboardStatsController
);
router.get(
    "/workspace/:workspaceId",
    authenticate,
    getprojectinWorkspacecontroller
);  
router.delete(
    "/:projectId",
    authenticate,
    deleteProjectController
);

export default router;