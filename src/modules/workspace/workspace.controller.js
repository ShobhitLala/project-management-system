import { workSpaceservice } from "./workspace.service.js";
export const createWorkspaceController = async (req, res) => {
   const workspaceData=req.body
   const userId=req.user._id
   try {
    const result=await workSpaceservice(workspaceData,userId);
    res.status(201).json({
    message: "Workspace created successfully",
    result
});
   } catch (error) {
    console.log(error);
    res.status(401).json({
        message:"error in creating workspace",
        error
    });
   }
};