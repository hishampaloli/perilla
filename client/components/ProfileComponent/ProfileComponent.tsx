import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import style from "../../styles/profile.module.scss";
import ProfileBox from "./ProfileBox";
import ProfileNav from "./ProfileNav";

const ProfileComponent = () => {
  const router = useRouter();
  const { employee } = router.query;
  const { getEmployeeProfileData } = useActions();

  useEffect(() => {
    if (router.isReady) getEmployeeProfileData("sd", employee);
  }, [router.isReady]);

  return (
    <div className={style.ProfileComponentMain}>
      <ProfileBox />
      <ProfileNav />
    </div>
  );
};

export default ProfileComponent;
