import { WorkSpace } from "./workspace.model.js";
import { Project } from "../project/project.model.js";
import {Task} from "../task/task.model.js"
export const workSpaceservice=async(workspaceData,userId)=>{
  const {name}=workspaceData;
  if(!name){
    throw new Error("name is required for workspace creations");
  }
  if (!userId) {
    throw new Error("User ID is required");
}
const workspace = await WorkSpace.create({
    name,
    owner: userId,
    members: [userId]
});
return workspace;
};
export const workspaceDetails=async(userId)=>{
    const workspace=await WorkSpace.find({
      members:userId
    }).populate("owner","name email");
    if(workspace.length === 0){
      throw new Error("user are not member of any workspace");
    }
    return workspace;
};
export const deleteWorkspace=async(workSpaceId,userId)=>{
    const workspace= await WorkSpace.findById(workSpaceId);
     if(!workspace){
      throw new Error(" workspace not exists");
    }
    if(userId.toString()!==workspace.owner.toString()){
      throw new Error("unauthorised action");
    }
   const projects = await Project.find({
    workspace: workSpaceId
   }).select("_id");
   const projectIds=projects.map(project=>project._id);
   await Task.deleteMany({
      project: {
        $in: projectIds
    }
   })
   await Project.deleteMany({
    workspace:workSpaceId
   })

    await WorkSpace.findByIdAndDelete(workSpaceId);
    return workspace;

}

export const getprojectinWorkspace=async(workSpaceId,userId)=>{
    const workspace=await WorkSpace.findById(workSpaceId);
    if(!workspace){
      throw new Error("WorkSpace with given Id do not exists");
    }
    const members= workspace.members;
    const validmembers=members.map(member=>member.toString())
    const isValidmember=validmembers.includes(userId.toString())
    if(!isValidmember){
      throw new Error("Unauthorised");
    }
    const projects=await Project.find({
      workspace:workSpaceId
    })
    return projects;
};
