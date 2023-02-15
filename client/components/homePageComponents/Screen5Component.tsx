import React from "react";
import styles from "../../styles/homePage.module.scss";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";

const Screen5Component = () => {
  return (
    <>
      <div className={styles.screen5Main}>
        <h1>PAGES OVERVIEW</h1>

        <div className={styles.itemDiv}>
          <Fade>
            <div className={styles.item}>
              <img
                src="https://smarthr-react.dreamguystech.com/91c25f4906f91e4f6f755392f14e09a1.jpg"
                alt=""
              />
              <h2>Voice Call</h2>
            </div>
          </Fade>

          <Fade>
            <div className={styles.item}>
              <img
                src="https://smarthr-react.dreamguystech.com/388bbdaaea7c729846f0e70e311c7d24.jpg"
                alt=""
              />
              <h2>Employees View</h2>
            </div>
          </Fade>

          <Fade>
            <div className={styles.item}>
              <img
                src="https://smarthr-react.dreamguystech.com/629f5d2734c148ad1c41cca5edd201db.jpg"
                alt=""
              />
              <h2>Job View</h2>
            </div>
          </Fade>
        </div>
      </div>

      <div className={styles.footer}>
        <div>
          <h1>PERILLA</h1>
          <p>all right reserved © perilla </p>
        </div>
      </div>
    </>
  );
};

export default Screen5Component;
