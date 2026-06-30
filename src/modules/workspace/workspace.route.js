import { Router } from "express";
import { createWorkspaceController, getworkspaceController ,deleteWorkspacecontroller} from "./workspace.controller.js";
import {authenticate} from "../../middleware/auth.middleware.js";
const router=Router();
/**
 * @swagger
 * /workspaces:
 *   post:
 *     summary: Create a new workspace
 *     tags:
 *       - Workspace
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
 *             properties:
 *               name:
 *                 type: string
 *                 example: Production Workspace
 *     responses:
 *       201:
 *         description: Workspace created successfully
 *       401:
 *         description: Unauthorized
 */
router.post("/",authenticate,createWorkspaceController);
/**
 * @swagger
 * /workspaces/{workspaceId}:
 *   get:
 *     summary: Get workspace by ID
 *     tags:
 *       - Workspace
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspaceId
 *         required: true
 *         schema:
 *           type: string
 *         description: Workspace ID
 *     responses:
 *       200:
 *         description: Workspace retrieved successfully
 *       404:
 *         description: Workspace not found
 *       401:
 *         description: Unauthorized
 */
router.get("/:workspaceid",authenticate,getworkspaceController);
/**
 * @swagger
 * /workspaces/{workspaceId}:
 *   delete:
 *     summary: Delete workspace
 *     tags:
 *       - Workspace
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: workspaceId
 *         required: true
 *         schema:
 *           type: string
 *         description: Workspace ID
 *     responses:
 *       200:
 *         description: Workspace deleted successfully
 *       404:
 *         description: Workspace not found
 *       401:
 *         description: Unauthorized
 */
router.delete("/:workspaceId",authenticate,deleteWorkspacecontroller);
export default router;