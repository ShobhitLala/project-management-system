import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { createProjectController,deleteProjectController,getDashboardStatsController} from "./project.controller.js";
const router = Router();
router.post("/",authenticate,createProjectController);
router.get(
    "/dash",
    authenticate,
    getDashboardStatsController
);
router.delete(
    "/:projectId",
    authenticate,
    deleteProjectController
);

export default router;