import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetEmployeeProfileState } from "../../models/profile";
import style from "../../styles/profile.module.scss";
import EditClientFormComponent from "./EditProfileComponent";
import ProfileBox from "./ProfileBox";
import ProfileNav from "./ProfileNav";

const ProfileComponent = () => {
  const router = useRouter();
  const { employee } = router.query;
  const { getEmployeeProfileData } = useActions();
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    if (router.isReady) getEmployeeProfileData("sd", employee);
  }, [router.isReady]);

  return (
    <div className={style.ProfileComponentMain}>
      <ProfileBox setEdit={setEdit} />
      <ProfileNav />

      {edit && <EditClientFormComponent setEdit={setEdit} />}
    </div>
  );
};

export default ProfileComponent;
