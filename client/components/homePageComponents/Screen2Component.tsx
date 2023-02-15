import React from "react";
import styles from "../../styles/homePage.module.scss";
import FeatureBox from "./FeatureBox";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import CodeIcon from "@mui/icons-material/Code";
import { Fade } from "react-awesome-reveal";

const Screen2Component = () => {
  return (
    <>
      <div className={styles.screen2Main}>
        <Fade>
          <FeatureBox
            icon={<LaptopMacIcon />}
            heading={"Responsive Design"}
            content={
              "Completely responsive, fully functional on ipads, iphones, tablets, and other mobile phones"
            }
          />
        </Fade>

        <Fade>
          <FeatureBox
            icon={<ViewInArIcon />}
            heading={"Advanced Features"}
            content={
              "Advanced features tools like graphs, charts, invoices, video & audio call's, projects, etc."
            }
          />
        </Fade>

        <Fade cascade>
          <FeatureBox
            icon={<LaptopMacIcon />}
            heading={"Clean Codes"}
            content={
              "Well tested, well documented and W3 validated code. Developers can take advantage immediately."
            }
          />
        </Fade>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f9f9f9"
          fill-opacity="1"
          d="M0,288L60,288C120,288,240,288,360,256C480,224,600,160,720,165.3C840,171,960,245,1080,277.3C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Screen2Component;
