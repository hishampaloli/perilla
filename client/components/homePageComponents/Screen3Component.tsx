import React from "react";
import styles from "../../styles/homePage.module.scss";
import LeftDetList from "./LeftDetList";
import RightDetList from "./RightDetList";

const Screen3Component = () => {
  return (
    <>
      <div className={styles.screen3Main}>
        <div className={styles.detailsDiv}>
          <LeftDetList
            heading="Advanced Feature, Chat!"
            content="Advanced Feature, Chat!
Advanced chat option similar to Slack, messaging is much more simpler and all options available rightaway"
          />
          <RightDetList
            type=""
            img="https://smarthr-react.dreamguystech.com/4defcd7977aec63dbadb35bad1d6bb17.jpg"
          />
        </div>

        <div className={styles.detailsDiv}>
          <RightDetList
            type="right"
            img="https://smarthr-react.dreamguystech.com/3aa47c3ce2dbce2a955246c64c7c6a12.jpg"
          />
          <LeftDetList
            content="Project management is everywhere and all business needs it, we designed the latest and advanced projects here."
            heading="Advanced Feature, Projects!"
          />
        </div>

        <div className={styles.detailsDiv}>
          <LeftDetList
            heading="Advanced Feature, Jobs!"
            content="Careers and Jobs are a must have feature in any backend and frontend business, and we designed the way you need it."
          />
          <RightDetList
            type=""
            img="https://smarthr-react.dreamguystech.com/e339891d27bf862db0f06edcb9fd16fd.jpg"
          />
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f9f9f9"
            fill-opacity="1"
            d="M0,96L60,101.3C120,107,240,117,360,106.7C480,96,600,64,720,69.3C840,75,960,117,1080,138.7C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Screen3Component;
