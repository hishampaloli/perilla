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

export const useDeleteAsset = (assetId: string, deleteAsset: any) => {
  swal({
    title: "Are you sure?",
    text: `Are you sure you want to delete this asset `,
    icon: "warning",
    buttons: ["no", true],
    dangerMode: true,
  })?.then(async (willDelete) => {
    if (willDelete) {
      const res = await deleteAsset("id", assetId);

      swal("Asset deleted successfully!", {
        icon: "success",
      });
    } else {
      swal("Asset not deleted !");
    }
  });
};

export const useDeleteExpense = (expenseId: string, deleteExpense: any) => {
  swal({
    title: "Are you sure?",
    text: `Are you sure you want to delete this expense `,
    icon: "warning",
    buttons: ["no", true],
    dangerMode: true,
  })?.then(async (willDelete) => {
    if (willDelete) {
      const res = await deleteExpense("id", expenseId);

      swal("Expense deleted successfully!", {
        icon: "success",
      });
    } else {
      swal("Expense not deleted !");
    }
  });
};

export const useCompletePayout = (completePayout: any, payoutId: string) => {
  swal({
    title: "Are you sure?",
    text: `Are you sure you want to Complete this Payout `,
    icon: "warning",
    buttons: ["no", true],
    dangerMode: true,
  })?.then(async (willDelete) => {
    if (willDelete) {
      console.log(payoutId);
      const res = await completePayout("id", payoutId);

      swal("Payout completed successfully!", {
        icon: "success",
      });
    } else {
      swal("Payout pending !");
    }
  });
};

export const useChangeApplicationStatus = (
  status: string,
  applicationId: string,
  changeApplicationStatus: any
) => {
  console.log(status);
  
  swal({
    title: "Are you sure?",
    text: `Are you sure you want to ${
      status === "accepted"
        ? "Accept"
        : status === "rejected"
        ? "Reject"
        : status === "shortlist"
        ? "Shortlist"
        : "do nothing to"
    } this application `,
    icon: "warning",
    buttons: ["no", true],
    dangerMode: true,
  })?.then(async (willDelete) => {
    if (willDelete) {
      const res = await changeApplicationStatus("id", status, applicationId);
      console.log(status);
      swal(
        `Application ${
          status === "accepted"
            ? "Accepted"
            : status === "rejected"
            ? "Rejected"
            : status === "shortlist"
            ? "Shortlisted"
            : "not changed"
        } succefully`,
        {
          icon: "success",
        }
      );
    } else {
      swal("status changing pending !");
    }
  });
};
