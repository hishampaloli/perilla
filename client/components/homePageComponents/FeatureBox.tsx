import React from "react";
import styles from "../../styles/homePage.module.scss";


const FeatureBox = ({
  icon,
  heading,
  content,
}: {
  icon: any;
  heading: string;
  content: string;
}) => {
  return (
    <div className={styles.featureBox}>
      <span>{icon}</span>

      <h1>{heading}</h1>
      <p>{content}</p>
    </div>
  );
};

export default FeatureBox;
