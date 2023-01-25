import React, { useEffect, useState } from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import SubmitButton from "../AddFormComponent/SubmitButton";
import {
  EditEmployeeProfileState,
  GetEmployeeProfileState,
} from "../../models/profile";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-hot-toast";
import Spinner from "../layout/SpinnerComponent";
import FixedSpinner from "../layout/FixedSpinner";
import { GetMyProfileState } from "../../models/employee";

const EditBankDetailsForm = ({ setEdit }: { setEdit: any }) => {
  const { data }: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  const { editBankDetails } = useActions();
  const bankData = data?.data.bankDetails;

  const [bankName, setBankName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>();
  const [ifcsCode, setIfcsCode] = useState<string>("");
  const [panNumber, setPanNumber] = useState<string>("");

  useEffect(() => {
    setBankName(bankData?.bankName!);
    setAccountNumber(bankData?.accountNumber!);
    setIfcsCode(bankData?.ifcsCode!);
    setPanNumber(bankData?.panNumber!);
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await editBankDetails("sd", {
      bankName,
      accountNumber,
      ifcsCode,
      panNumber,
    });

    if (`${res}` === "success") {
      toast.success("Successfully Updated ");
      setEdit(false);
    } else {
      toast.error(`${res}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.InputGroup}>
        <AddInputComp
          value={bankName}
          text="Bank Name"
          type="text"
          handler={setBankName}
        />
        <AddInputComp
          value={accountNumber}
          text="Account Number"
          type="text"
          handler={setAccountNumber}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={ifcsCode}
          text="IFSC Code"
          type="text"
          handler={setIfcsCode}
        />
        <AddInputComp
          text="Pan Card number"
          value={panNumber}
          type="text"
          handler={setPanNumber}
        />
      </div>

      {/* {loading && <FixedSpinner />} */}

      <SubmitButton submit={""} />
    </form>
  );
};

export default EditBankDetailsForm;
