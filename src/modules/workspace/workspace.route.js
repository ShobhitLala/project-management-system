import { Router } from "express";
import { createWorkspaceController, getworkspaceController ,deleteWorkspacecontroller} from "./workspace.controller.js";
import {authenticate} from "../../middleware/auth.middleware.js";
const router=Router();
router.post("/",authenticate,createWorkspaceController);
router.get("/",authenticate,getworkspaceController);
router.delete("/:workspaceId",authenticate,deleteWorkspacecontroller);
export default router;