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
const project = await Project.create({
    name,
    description,
    workspace,
    createdBy: userId
});
return project;
};