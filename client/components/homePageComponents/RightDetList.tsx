import React from "react";
import styles from "../../styles/homePage.module.scss";
import { Fade } from "react-awesome-reveal";

const RightDetList = ({ img, type }: { img: string; type: string }) => {
  return (
    <Fade>
      <div
        style={type === "right" ? { marginRight: "auto" } : {}}
        className={styles.rightDet}
      >
        <img src={img} alt="" />
      </div>
    </Fade>
  );
};

export default RightDetList;
