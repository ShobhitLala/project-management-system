import { WorkSpace } from "./workspace.model.js";
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