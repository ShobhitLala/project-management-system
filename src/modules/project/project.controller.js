import {createProject,deleteProject} from "./project.service.js"

export const createProjectController = async (req, res) => {
   try {
    const projectData=req.body;
    const userId=req.user._id;
    const result= await createProject(projectData,userId);
    res.status(201).json({
        message:"project was created",
        result
    })
   } catch (error) {
    console.log(error);
    res.status(401).json({
        message:"project was not created"
    });
   }
};
export const deleteProjectController=async(req,res)=>{
      try {
        const projectId=req.params.projectId;
        const userId=req.user._id;
        const result =await deleteProject(projectId,userId);
         res.status(200).json({
        message:"project was deleted",
        project:result
    })
      } catch (error) {
       
    res.status(401).json({
        message: error.message
    });
      }
};