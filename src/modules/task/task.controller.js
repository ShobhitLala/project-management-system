import { createTask, getProjectTasks, updateTaskStatus ,getTaskById,deleteTask,assignTask} from "./task.service.js";
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
      res.status(200).json({
            result
        })
   } catch (error) {
       res.status(400).json({
        message:error.message
     })
   }

};
export const updateTaskStatusController = async (
    req,
    res
) => {
    try {
      const taskId=req.params.taskId;
      const { status } = req.body;
      const result=await updateTaskStatus(taskId,status)
       res.status(200).json({
            result
        })
    } catch (error) {
        res.status(400).json({
        message:error.message
     })
    }
};
export const taskbyIdcontroller=async(req,res)=>{
   try {
     const taskId=req.params.taskId;
     const result=await getTaskById(taskId);
     res.status(200).json({
        result
     })
   } catch (error) {
     res.status(400).json({
        message:error.message
     })
   }
}
export const deleteTaskController = async (
    req,
    res
) => {
    try {
     const taskId=req.params.taskId;
     const result=await deleteTask(taskId);
     res.status(200).json({
        message:"Task deleted successfully",
        task:result
     })
   } catch (error) {
     res.status(400).json({
        message:error.message
     })
   }
};
export const assignTaskController=async(req,res)=>{
   try {
      const taskId=req.params.taskId;
      const assignedTo=req.body.assignedTo;
      const result=await assignTask(taskId,assignedTo);
       res.status(200).json({
           message: "Task assigned successfully",
        task:result
     })
   } catch (error) {
      res.status(400).json({
        message:error.message
     })
   }
}