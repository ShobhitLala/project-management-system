import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { createTaskController,getProjectTasksController, updateTaskStatusController } from "./task.controller.js";
const router = Router();
router.post("/", authenticate, createTaskController);
router.get(
    "/projects/:projectId/tasks",
    authenticate,
    getProjectTasksController
);
router.patch(
    "/:taskId/status",
    authenticate,
    updateTaskStatusController
);

export default router;