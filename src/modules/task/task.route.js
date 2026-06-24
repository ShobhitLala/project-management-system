import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { createTaskController,
    getProjectTasksController,
     updateTaskStatusController,
     taskbyIdcontroller,
     deleteTaskController,
    assignTaskController  } from "./task.controller.js";
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
router.patch(
    "/:taskId/assign",
    authenticate,
    assignTaskController
);
router.get("/:taskId",authenticate,taskbyIdcontroller);
router.delete(
    "/:taskId",
    authenticate,
    deleteTaskController
);

export default router;