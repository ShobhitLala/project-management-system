import { WorkSpace } from "../workspace/workspace.model.js";
import { Project } from "./project.model.js";
export const createProject = async (
    projectData,
    userId
) => {
     const { name, description, workspace } = projectData;
     if (!name || !workspace) {
    throw new Error("Name and workspace are required");
}
if (!userId) {
    throw new Error("User ID is required");
}
const existingWorkspace = await WorkSpace.findById(workspace);

if (!existingWorkspace) {
    throw new Error("Workspace not found");
}
if(existingWorkspace.owner.toString()!=userId){
   throw new Error("Unauthorized to create project");
}
const project = await Project.create({
    name,
    description,
    workspace,
    createdBy: userId
});
return project;
};
export const deleteProject=async(projectId,userId)=>{
    if(!projectId){
        throw new Error("projectId is necessary");
    }
   const project=await Project.findById(projectId);
   if(!project){
    throw new Error("the project not exist");
   }
   const workspace = await WorkSpace.findById(project.workspace);
   if(!workspace){
    throw new Error("workspace not exists");
   }
   if (!userId) {
    throw new Error("User ID is required");
}
if(workspace.owner.toString()!=userId){
    throw new Error("Unauthorized to delete project");
}
  await Project.findByIdAndDelete(projectId);
  return project;
}