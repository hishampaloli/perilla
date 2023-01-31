import { toast } from "react-hot-toast";

export const useCompleteProject = async (
  status: string,
  projectId: string,
  completeProject: any
) => {
  const res = await completeProject("sd", status, projectId);

  if (`${res}` === "success") {
    toast.success("Project Status changed to " + status);
  } else {
    toast.error(`${res}`);
  }
};
