import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { createTaskController,
    getProjectTasksController,
     updateTaskStatusController,
     taskbyIdcontroller,
     deleteTaskController,
    assignTaskController  } from "./task.controller.js";
const router = Router();
/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags:
 *       - Task
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - project
 *             properties:
 *               title:
 *                 type: string
 *                 example: Implement Authentication
 *               description:
 *                 type: string
 *                 example: Complete JWT authentication module
 *               project:
 *                 type: string
 *                 example: 64abc123456789
 *     responses:
 *       201:
 *         description: Task created successfully
 */
router.post("/", authenticate, createTaskController);
/**
 * @swagger
 * /tasks/projects/{projectId}/tasks:
 *   get:
 *     summary: Get all tasks of a project
 *     tags:
 *       - Task
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tasks retrieved successfully
 */
router.get(
    "/projects/:projectId/tasks",
    authenticate,
    getProjectTasksController
);
/**
 * @swagger
 * /tasks/{taskId}/status:
 *   patch:
 *     summary: Update task status
 *     tags:
 *       - Task
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: IN_PROGRESS
 *     responses:
 *       200:
 *         description: Task updated successfully
 */
router.patch(
    "/:taskId/status",
    authenticate,
    updateTaskStatusController
);
/**
 * @swagger
 * /tasks/{taskId}/assign:
 *   patch:
 *     summary: Assign task to a user
 *     tags:
 *       - Task
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 64abc123456789
 *     responses:
 *       200:
 *         description: Task assigned successfully
 */
router.patch(
    "/:taskId/assign",
    authenticate,
    assignTaskController
);
/**
 * @swagger
 * /tasks/{taskId}:
 *   get:
 *     summary: Get task by ID
 *     tags:
 *       - Task
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task retrieved successfully
 */
router.get("/:taskId",authenticate,taskbyIdcontroller);
/**
 * @swagger
 * /tasks/{taskId}:
 *   delete:
 *     summary: Delete task
 *     tags:
 *       - Task
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully
 */
router.delete(
    "/:taskId",
    authenticate,
    deleteTaskController
);

export default router;