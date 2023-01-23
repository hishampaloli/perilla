import React, { useState } from "react";
import style from "../../styles/profile.module.scss";
import PersonalDataComponent from "./PersonalDataComponent";

const ProfileNav = () => {
  const [nav, setNav] = useState<string>("profile");
  return (
    <>
      <div className={style.profileNav}>
        <h2
          onClick={() => setNav("profile")}
          className={nav === "profile" ? style.isActive : ""}
        >
          Profile
        </h2>
        <h2
          className={nav === "project" ? style.isActive : ""}
          onClick={() => setNav("project")}
        >
          Projects
        </h2>
        <h2
          className={nav === "bank" ? style.isActive : ""}
          onClick={() => setNav("bank")}
        >
          Bank detail
        </h2>
      </div>

      <div>
        {nav === "profile" ? (
          <PersonalDataComponent />
        ) : nav === "project" ? (
          "Project"
        ) : (
          "bank"
        )}
      </div>
    </>
  );
};

export default ProfileNav;
