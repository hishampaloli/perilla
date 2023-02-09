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

export const useAddTask = async (taskData: any, addTask: any) => {
  const res = await addTask("sd", taskData);

  if (`${res}` === "success") {
    toast.success("Task added successfully");
    return true;
  } else {
    toast.error(`${res}`);
  }
};

export const useApproveTask = async (
  taskId: string,
  status: boolean,
  approveTask: any
) => {
  const res = await approveTask("sd", taskId, status);

  if (`${res}` === "success") {
    toast.success(`Task ${status ? "Approved " : "Rejected "} successfully`);
    return true;
  } else {
    toast.error(`${res}`);
  }
};

export const useTaskApproval = async (taskId: string, ReqTaskApproval: any) => {
  const res = await ReqTaskApproval("sd", taskId);

  if (`${res}` === "success") {
    toast.success(`Approval Requested successfully`);
    return true;
  } else {
    toast.error(`${res}`);
  }
};

export const useEditTask = async (
  taskData: any,
  taskId: string,
  editTask: any,
  setEdit: any
) => {
  const res = await editTask("sd", taskData, taskId);

  if (`${res}` === "success") {
    toast.success(`Task edited successfully`);
    setEdit(false);
  } else {
    toast.error(`${res}`);
  }
};

export const useApplyLeave = async (
  leaveData: any,
  applyLeave: any,
  setEdit: any
) => {
  const res = await applyLeave("sd", leaveData);

  if (`${res}` === "success") {
    toast.success(`Task edited successfully`);
    setEdit(false);
  } else {
    toast.error(`${res}`);
  }
};

export const useCreateAsset = async (
  assetData: any,
  createAsset: any,
  setEdit: any
) => {
  const res = await createAsset("d", assetData);

  if (`${res}` === "success") {
    toast.success(`Asset added successfully`);
    setEdit(false);
  } else {
    toast.error(`${res}`);
  }
};

export const useEditAsset = async (
  assetData: any,
  assetId: string,
  editAsset: any,
  setEdit: any
) => {
  const res = await editAsset("d", assetId, assetData);

  if (`${res}` === "success") {
    toast.success(`Asset edited successfully`);
    setEdit(false);
  } else {
    toast.error(`${res}`);
  }
};

export const useCreateExpense = async (
  expenseData: any,
  createExpense: any,
  setEdit: any
) => {
  const res = await createExpense("d", expenseData);

  if (`${res}` === "success") {
    toast.success(`Expense added successfully`);
    setEdit(false);
  } else {
    toast.error(`${res}`);
  }
};

export const useEditExpense = async (
  expenseData: any,
  expenseId: string,
  editExpense: any,
  setEdit: any
) => {
  const res = await editExpense("d", expenseId, expenseData);

  if (`${res}` === "success") {
    toast.success(`Expense edited successfully`);
    setEdit(false);
  } else {
    toast.error(`${res}`);
  }
};

export const useRequestPauout = async (requestPayout: any) => {
  const res = await requestPayout("d");

  if (`${res}` === "success") {
    toast.success(`Requested successfully`);
  } else {
    toast.error(`${res}`);
  }
};
