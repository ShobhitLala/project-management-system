import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import{ getprojectinWorkspacecontroller} from "../workspace/workspace.controller.js"
import { createProjectController,deleteProjectController,getDashboardStatsController} from "./project.controller.js";
const router = Router();
/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create a new project
 *     tags:
 *       - Project
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - workspace
 *             properties:
 *               name:
 *                 type: string
 *                 example: Backend API
 *               workspace:
 *                 type: string
 *                 example: 64abc123456789
 *               description:
 *                 type: string
 *                 example: Project for deployment testing
 *     responses:
 *       201:
 *         description: Project created successfully
 *       401:
 *         description: Unauthorized
 */
router.post("/",authenticate,createProjectController);
router.get(
    "/dash",
    authenticate,
    getDashboardStatsController
);
/**
 * @swagger
 * /projects/workspace/{workspaceId}:
 *   get:
 *     summary: Get all projects in a workspace
 *     tags:
 *       - Project
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspaceId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Projects retrieved successfully
 *       401:
 *         description: Unauthorized
 */
router.get(
    "/workspace/:workspaceId",
    authenticate,
    getprojectinWorkspacecontroller
);  
/**
 * @swagger
 * /projects/{projectId}:
 *   delete:
 *     summary: Delete a project
 *     tags:
 *       - Project
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
 *         description: Project deleted successfully
 *       401:
 *         description: Unauthorized
 */
router.delete(
    "/:projectId",
    authenticate,
    deleteProjectController
);

export default router;