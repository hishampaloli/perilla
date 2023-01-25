import React from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { BankDetails, GetEmployeeProfileState } from "../../models/profile";
import { AuthState } from "../../models/tenants";
import style from "../../styles/profile.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import {
  GetMyProfileState,
  SendbankDetailsForAprovalState,
} from "../../models/employee";
import { toast } from "react-hot-toast";
import FixedSpinner from "../layout/FixedSpinner";

const BankDetailsComponent = ({
  bankDetails,
  setEditBank,
}: {
  bankDetails: BankDetails;
  setEditBank: any;
}) => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const { approveBankDetails, sendBankDetails } = useActions();
  const employeeProfile: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );
  const { loading }: SendbankDetailsForAprovalState = useTypedSelector(
    (state) => state.sendBankDetails
  );

  const handleApprove = async (status: boolean) => {
    const res = approveBankDetails("sd", bankDetails?.employee!, status);
  };

  const handleSend = async () => {
    const res = await sendBankDetails("df");
    if (`${res}` === "success") {
      toast.success("Successfully send the request");
    } else {
      toast.error(`${res}`);
    }
  };

  return (
    <div className={style.bankDetails}>
      {loading && <FixedSpinner />}
      {employeeProfile?.data?.data.email && (
        <div className={style.edt}>
          <span
            onClick={() => setEditBank(true)}
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

      {bankDetails?.approvalReq &&
        !bankDetails?.isApproved &&
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

      {!bankDetails?.isApproved && employeeProfile.data?.data.email && (
        <div className={style.btnGroup}>
          <button onClick={handleSend} className={style.sntBtn}>
            Send for approval
          </button>
        </div>
      )}
    </div>
  );
};

export default BankDetailsComponent;
