import React from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BankDetails, GetEmployeeProfileState } from "../../models/profile";
import { AuthState } from "../../models/tenants";
import style from "../../styles/profile.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import { GetMyProfileState } from "../../models/employee";

const BankDetailsComponent = ({
  bankDetails,
}: {
  bankDetails: BankDetails;
}) => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const { approveBankDetails } = useActions();
  const employeeProfile: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  const handleApprove = async (status: boolean) => {
    console.log(status);
    const res = approveBankDetails("sd", bankDetails?.employee!, status);
    console.log(res);
  };

  return (
    <div className={style.bankDetails}>
      {employeeProfile?.data?.data.email && (
        <div className={style.edt}>
          <span
            // onClick={() => setEdit(true)}
            className={`${style.Icon} ${style.edtIcon}`}
          >
            <EditIcon />
          </span>{" "}
        </div>
      )}
      <h2>Bank Details</h2>

      <ul className={style.bankUi}>
        <div>
          <strong>Bank Name : </strong>
          <strong>Account Number : </strong>
          <strong>IFSC Code : </strong>
          <strong> Pan Number : </strong>
          <strong> Is Approved : </strong>
        </div>
        <div>
          <span>{bankDetails?.bankName}</span>
          <span>{bankDetails?.accountNumber}</span>
          <span>{bankDetails?.ifcsCode}</span>
          <span>{bankDetails?.panNumber}</span>
          <span>{bankDetails?.isApproved ? "Approved" : "Not Approved"}</span>
        </div>
      </ul>

      {bankDetails.approvalReq &&
        !bankDetails.isApproved &&
        data?.data.adminName && (
          <div className={style.btnGroup}>
            <button
              onClick={() => handleApprove(false)}
              className={style.rjtBtn}
            >
              Reject
            </button>
            <button
              onClick={() => handleApprove(true)}
              className={style.actBtn}
            >
              Approve
            </button>
          </div>
        )}

      {!bankDetails.isApproved && (
        <div className={style.btnGroup}>
          <button className={style.sntBtn}>Send for approval</button>
        </div>
      )}
    </div>
  );
};

export default BankDetailsComponent;
