import React from "react";
import styles from "../../styles/homePage.module.scss";
import { Fade } from "react-awesome-reveal";

const LeftDetList = ({
  heading,
  content,
}: {
  heading: string;
  content: string;
}) => {
  return (
    <div className={styles.leftDet}>
      <Fade>
        <h1>{heading}</h1>
        <p>{content}</p>
      </Fade>
    </div>
  );
};

export default LeftDetList;
