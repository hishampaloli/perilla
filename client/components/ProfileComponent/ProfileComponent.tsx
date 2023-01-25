import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../models/employee";
import { GetEmployeeProfileState } from "../../models/profile";
import style from "../../styles/profile.module.scss";
import ChangePassComponent from "./ChangePassComponent";
import EditClientFormComponent from "./EditProfileComponent";
import ProfileBox from "./ProfileBox";
import ProfileNav from "./ProfileNav";

const ProfileComponent = () => {
  const router = useRouter();

  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const { employee } = router.query;
  const { getEmployeeProfileData } = useActions();
  const [edit, setEdit] = useState<boolean>(false);
  const [changePassword, setChangePassword] = useState<boolean>(false);

  useEffect(() => {
    if (router.isReady) {
      if (data?.email) {
        console.log('me profisle');
        
      } else {
        getEmployeeProfileData("sd", employee);
      }
    }
  }, [router.isReady]);

  return (
    <div className={style.ProfileComponentMain}>
      <ProfileBox setPass={setChangePassword} setEdit={setEdit} />
      <ProfileNav />

      {edit && <EditClientFormComponent setEdit={setEdit} />}
      {changePassword && <ChangePassComponent setEdit={setChangePassword} />}
    </div>
  );
};

export default ProfileComponent;
