import { workSpaceservice,workspaceDetails,getprojectinWorkspace,deleteWorkspace} from "./workspace.service.js";
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
export const getworkspaceController=async(req,res)=>{
    try {
        const userId=req.user._id;
        const result=await workspaceDetails(userId);
         res.status(200).json({
         result
        });
    } catch (error) {
        res.status(400).json({
            message:error.message,
        })
    }};
    export const getprojectinWorkspacecontroller=async(req,res)=>{
        try {
        const workspaceId=req.params.workspaceId;
        const userId=req.user._id;
        const result=await getprojectinWorkspace(workspaceId,userId);
         res.status(200).json({
         result
        });
    } catch (error) {
        res.status(400).json({
            message:error.message,
        })}};
export const deleteWorkspacecontroller=async(req,res)=>{
        try {
        const workspaceId=req.params.workspaceId;
        const userId=req.user._id;
        const result=await deleteWorkspace(workspaceId,userId);
         res.status(200).json({
          message:"workspace got deleted",
         result
        });
    } catch (error) {
        res.status(400).json({
            message:error.message,
        })}};
        
    