import React from "react";
import styles from "../../../styles/chat.module.scss";

const LeftMessageBoxDiv = () => {
  return (
    <div className={styles.leftMessage}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJ83DK_RTZsTrPsq_BtRT2-Hiju7FwYchFA&usqp=CAU"
        alt=""
      />
      <div>
        <span>
          <p>hisham</p>
          <p>11.13pm</p>
        </span>
        <p>Lorem ipsum dolor, sit amet ctetur adipisicing elit. </p>
      </div>
    </div>
  );
};

export default LeftMessageBoxDiv;
