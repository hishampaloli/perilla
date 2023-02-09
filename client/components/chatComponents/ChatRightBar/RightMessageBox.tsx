import React from "react";
import styles from "../../../styles/chat.module.scss";

const RightMessageBoxDiv = () => {
  return (
    <div className={styles.rightMessage}>
      <div>
        <span>
          <p>hisham</p>
          <p>11.13pm</p>
        </span>
        <p>Lorem ipsum dolor, sit amet ctetur adipisicing elit. </p>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJ83DK_RTZsTrPsq_BtRT2-Hiju7FwYchFA&usqp=CAU"
        alt=""
      />
    </div>
  );
};

export default RightMessageBoxDiv;
