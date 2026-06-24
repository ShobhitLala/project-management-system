import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { createTaskController,
    getProjectTasksController,
     updateTaskStatusController,
     taskbyIdcontroller,deleteTaskController  } from "./task.controller.js";
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
router.get("/:taskId",authenticate,taskbyIdcontroller);
router.delete(
    "/:taskId",
    authenticate,
    deleteTaskController
);

export default router;