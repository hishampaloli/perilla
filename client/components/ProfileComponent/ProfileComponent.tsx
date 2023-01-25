import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EmployeeAuthState, GetMyProfileState } from "../../models/employee";
import { GetEmployeeProfileState } from "../../models/profile";
import style from "../../styles/profile.module.scss";
import FixedSpinner from "../layout/FixedSpinner";
import ChangePassComponent from "./ChangePassComponent";
import EditBankComponent from "./EditBankComponent";
import EditEmergencyComponent from "./EditEmergenyContactComponent";
import EditPersonalInfoComponent from "./EditPersonalInfoComponent";
import EditClientFormComponent from "./EditProfileComponent";
import ProfileBox from "./ProfileBox";
import ProfileNav from "./ProfileNav";

const ProfileComponent = () => {
  const router = useRouter();

  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const employeeProfile: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  const { employee } = router.query;
  const { getEmployeeProfileData, getMyProfile } = useActions();
  const [edit, setEdit] = useState<boolean>(false);

  const [editBank, setEditBank] = useState<boolean>(false);
  const [editPersonalInfo, setEditPersonalInfo] = useState<boolean>(false);
  const [editEmergencyContact, setEditEmergencyContact] =
    useState<boolean>(false);
  const [changePassword, setChangePassword] = useState<boolean>(false);

  useEffect(() => {
    if (router.isReady) {
      if (data?.email) {
        getMyProfile("ds");
        console.log("me profisle");
      } else {
        getEmployeeProfileData("sd", employee);
      }
    }
  }, [router.isReady]);

  return (
    <div className={style.ProfileComponentMain}>
      {employeeProfile?.loading && <FixedSpinner />}
      <ProfileBox setPass={setChangePassword} setEdit={setEdit} />
      <ProfileNav
        setEditPersonal={setEditPersonalInfo}
        setEditEmergencyContact={setEditEmergencyContact}
        setEditBank={setEditBank}
      />
      {edit && <EditClientFormComponent setEdit={setEdit} />}
      {changePassword && <ChangePassComponent setEdit={setChangePassword} />}
      {editBank && <EditBankComponent setEdit={setEditBank} />}
      {editPersonalInfo && (
        <EditPersonalInfoComponent setEdit={setEditPersonalInfo} />
      )}
      {editEmergencyContact && (
        <EditEmergencyComponent setEdit={setEditEmergencyContact} />
      )}
    </div>
  );
};

export default ProfileComponent;
