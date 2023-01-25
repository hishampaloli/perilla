import React, { useEffect, useState } from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import SubmitButton from "../AddFormComponent/SubmitButton";
import { EditEmployeeProfileState } from "../../models/profile";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-hot-toast";
import Spinner from "../layout/SpinnerComponent";
import FixedSpinner from "../layout/FixedSpinner";
import { GetMyProfileState } from "../../models/employee";

const EditPersonalInfoForm = ({ setEdit }: { setEdit: any }) => {
  const { data }: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  const { error, loading }: EditEmployeeProfileState = useTypedSelector(
    (state) => state.EditPersonalInfo
  );
  
  const personalData = data?.data.personalInformation;
  const [nationality, setNationality] = useState<string>("");
  const [religion, setReligion] = useState<string>("");
  const [martialStatus, setMartialStatus] = useState<string>();
  const [employementOfPartner, setEmployementOfPartner] = useState<string>("");
  const [passportNumber, setPassportNumber] = useState<number>();
  const [noOfChildren, setNoOfChildren] = useState<number>();


  const { editPersonalInfo } = useActions();

  useEffect(() => {
    setMartialStatus(personalData?.martialStatus);
    setNationality(personalData?.nationality!);
    setReligion(personalData?.religion!);
    setEmployementOfPartner(personalData?.employementOfPartner!);
    setPassportNumber(personalData?.passportNumber);
    setNoOfChildren(personalData?.noOfChildren);
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const res = await editPersonalInfo("sd", {
      martialStatus,
      nationality,
      religion,
      employementOfPartner,
      passportNumber,
      noOfChildren,
    });
    console.log(res);
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
        {" "}
        <AddInputComp
          value={nationality}
          text="Nationality"
          type="text"
          handler={setNationality}
        />{" "}
        <AddInputComp
          value={religion}
          text="Religion"
          type="text"
          handler={setReligion}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          text="Martial Status"
          value={martialStatus}
          type="text"
          handler={setMartialStatus}
        />
        <AddInputComp
          value={noOfChildren}
          text="Number of children"
          type="text"
          handler={setNoOfChildren}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={employementOfPartner}
          text="Employement of partner"
          type="text"
          handler={setEmployementOfPartner}
        />
        <AddInputComp
          value={passportNumber}
          text="Passport Number"
          type="number"
          handler={setPassportNumber}
        />
      </div>

      {loading && <FixedSpinner />}

      <SubmitButton submit={""} />
    </form>
  );
};

export default EditPersonalInfoForm;
