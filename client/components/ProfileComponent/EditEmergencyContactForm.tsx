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

const EditEmergencyContactForm = ({ setEdit }: { setEdit: any }) => {
  const { data }: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  const { error, loading }: EditEmployeeProfileState = useTypedSelector(
    (state) => state.EditPersonalInfo
  );

  const personalData = data?.data.emergencyContact;
  const [pName, setPName] = useState<string>("");
  const [pPhone, setPPhone] = useState<number>();
  const [pOtherInfo, setPOtherInfo] = useState<string>("");
  const [sName, setSName] = useState<string>("");
  const [sPhone, setSPhone] = useState<number>();
  const [sOtherInfo, setSOtherInfo] = useState<string>("");

  const { editEmergencyContact } = useActions();

  useEffect(() => {
    setPName(personalData?.primary.name!);
    setPPhone(personalData?.primary.phone!);
    setPOtherInfo(personalData?.primary.otherInfo!);

    setSName(personalData?.secondary.name!);
    setSPhone(personalData?.secondary.phone!);
    setSOtherInfo(personalData?.secondary.otherInfo!);
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const res = await editEmergencyContact("sd", {
      primary: { name: pName, phone: pPhone, otherInfo: pOtherInfo },
      secondary: { name: sName, phone: sPhone, otherInfo: sOtherInfo },
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
          value={pName}
          text="Primary Name"
          type="text"
          handler={setPName}
        />{" "}
        <AddInputComp
          value={sName}
          text="Secondary Name"
          type="text"
          handler={setSName}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          text="Primary Phone No"
          value={pPhone}
          type="number"
          handler={setPPhone}
        />
        <AddInputComp
          value={sPhone}
          text="Secondary Phone No"
          type="text"
          handler={setSPhone}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={pOtherInfo}
          text="Other Info of Primary"
          type="text"
          handler={setPOtherInfo}
        />
        <AddInputComp
          value={sOtherInfo}
          text="Other Info of Secondary"
          type="text"
          handler={setSOtherInfo}
        />
      </div>

      {loading && <FixedSpinner />}

      <SubmitButton submit={""} />
    </form>
  );
};

export default EditEmergencyContactForm;
