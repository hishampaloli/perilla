import React from "react";
import style from "../../styles/projectPage.module.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const ProjectBox = () => {
  return (
    <div className={style.projectBox}>
      <h2>Project management</h2>
      <p className={style.prP}>
        jaoosij fsdfsl fugsd vsagf sl vsgdf sdf shfg sdfk asfhd akjdsh vksahf
        shdv dfhg sdvhjsgv sk jaoosij fsdfsl fugsd vsagf sl vsgdf sdf shfg sdfk
        asfhd akjdsh vksahf shdv dfhg sdvhjsgv sk
      </p>

      <div>
        <strong>Priority :</strong>{" "}
        <p>
          <span style={{color: 'green'}}>
            <RadioButtonCheckedIcon />
          </span>
          high
        </p>{" "}
      </div>

      <div>
        <strong>Status :</strong>{" "}
        <p>
          <span>
            <RadioButtonCheckedIcon />
          </span>{" "}
          pending
        </p>{" "}
      </div>

      <div>
        <strong>Starting date :</strong> <p>20-48-2001</p>{" "}
      </div>

      <div>
        <strong>Teams: </strong>
      </div>

      <div>
        <strong>Rate :</strong>
        <p>345.00</p>
      </div>
    </div>
  );
};

export default ProjectBox;
