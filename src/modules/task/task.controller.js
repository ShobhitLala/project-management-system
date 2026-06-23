import { createTask, getProjectTasks } from "./task.service.js";
export const createTaskController = async (req, res) => {
     try {
        const taskData=req.body
        const userId=req.user._id;
        const result=await createTask(taskData,userId);
        res.status(201).json({
            message:"Task created successfully",
            result
        })
        
     } catch (error) {
     res.status(400).json({
        message:error.message
     })
     }
};
export const getProjectTasksController = async (
    req,
    res
) => {
   try {
     const projectId = req.params.projectId;
      const result=await getProjectTasks(projectId);
      res.status(201).json({
            result
        })
   } catch (error) {
       res.status(400).json({
        message:error.message
     })
   }

};