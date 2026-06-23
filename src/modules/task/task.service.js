import { Project } from "../project/project.model.js";
import { Task } from "./task.model.js";
import { User } from "../user/user.model.js";
export const createTask=async(taskData,userId)=>{
const {
    title,
    description,
    project,
    assignedTo,
    dueDate
} = taskData;
if (!title || !project) {
    throw new Error("Title and project are required");
}
if (!userId) {
    throw new Error("User ID is required");
}
const projectexist=await Project.findById(project);
if (!projectexist) {
    throw new Error("Project not found");
}
if (assignedTo) {
    const user = await User.findById(assignedTo);

    if (!user) {
        throw new Error("Assigned user not found");
    }
}
const task = await Task.create({
    title,
    description,
    project,
    assignedTo,
    dueDate
});

return task

};
export const getProjectTasks=async(projectId)=>{
const existingProject = await Project.findById(projectId);
if (!existingProject) {
    throw new Error("Project not found");
}
const tasks=await Task.find({project:projectId});
return tasks;
}