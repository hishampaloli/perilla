import React from "react";
import swal from "sweetalert";
import { useActions } from "./useAction";

export const useDeleteEmployee = async (id: string, removeEmployee: any) => {
  swal({
    title: "Are you sure?",
    text: "You can delete the employee, the data is still safe !" + id,
    icon: "warning",
    buttons: ["no", true],
    dangerMode: true,
  })?.then(async (willDelete) => {
    if (willDelete) {
      const res = await removeEmployee("id", id);
      console.log(res);

      swal("Employee has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your Employee Data is safe!");
    }
  });

  return true;
};

export const useDeleteTeamFromProject = async (
  employeeId: string,
  projectId: any,
  removeEmployee: any
) => {
  swal({
    title: "Are you sure?",
    text: "Do you wand to remove this user from the project!",
    icon: "warning",
    buttons: ["no", true],
    dangerMode: true,
  })?.then(async (willDelete) => {
    if (willDelete) {
      const res = await removeEmployee("id", employeeId, projectId);
      swal("Employee has been removed!", {
        icon: "success",
      });
    } else {
      swal("Your Employee is not removed!");
    }
  });

  return true;
};

export const useApproveLeave = (
  leaveId: string,
  status: boolean,
  approveLeave: any
) => {
  swal({
    title: "Are you sure?",
    text: `Are you sure you want to ${status ? "approve" : "reject"} `,
    icon: "warning",
    buttons: ["no", true],
    dangerMode: true,
  })?.then(async (willDelete) => {
    if (willDelete) {
      const res = await approveLeave("id", leaveId, status);

      swal("Leave status updated successfully!", {
        icon: "success",
      });
    } else {
      swal("Leave request still pending!");
    }
  });
};
