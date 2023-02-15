import React from "react";
import styles from "../../styles/homePage.module.scss";
import { Fade } from "react-awesome-reveal";

const Screen1Component = () => {
  return (
    <>
      <div className={styles.screen1Main}>
        <Fade>
            
          <h1>PERILLA</h1>

          <h2>COMPANY MANAGEMENT SYSTEM</h2>
          <p>
            Perilla is an advanced management system for companies who needs
            productivity. This service include user management, client
            management, task management, Projects management, hiring, chat,
            video call and many more. This is made with Top notch technologies
            like Next.js and Express.js
          </p>
          <button>Read More</button>
        </Fade>
      </div>
      <div>
        <svg
          style={{ marginTop: "-30px", width: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fd7d5c"
            fill-opacity="1"
            d="M0,224L30,234.7C60,245,120,267,180,266.7C240,267,300,245,360,208C420,171,480,117,540,112C600,107,660,149,720,160C780,171,840,149,900,138.7C960,128,1020,128,1080,144C1140,160,1200,192,1260,192C1320,192,1380,160,1410,144L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Screen1Component;
