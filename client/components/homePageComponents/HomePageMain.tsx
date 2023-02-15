import React from "react";
import styles from "../../styles/homePage.module.scss";
import Screen1Component from "./Screen1Component";
import Screen2Component from "./Screen2Component";
import Screen3Component from "./Screen3Component";
import Screen4Component from "./Screen4Component";
import Screen5Component from "./Screen5Component";

const HomePageMain = () => {
  return (
    <div className={styles.HomePageMain}>
      <Screen1Component />
      <Screen2Component />
      <Screen3Component />
      <Screen4Component />
      <Screen5Component />
      
    </div>
  );
};

export default HomePageMain;
