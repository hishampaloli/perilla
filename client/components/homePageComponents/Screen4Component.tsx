import React from "react";
import styles from "../../styles/homePage.module.scss";
import SendIcon from "@mui/icons-material/Send";
import { Fade } from "react-awesome-reveal";

const Screen4Component = () => {
  return (
    <>
      <Fade>
        <div className={styles.screen4Main}>
          <h1>Want to know more ?</h1>
          <p>
            We are happy to customise your products based on your needs, send us
            a note!!!
          </p>

          <div>
            <input type="text" placeholder="Enter a e-mail" />
            <button>
              <SendIcon />
            </button>
          </div>
        </div>
      </Fade>
      <div>
        <svg
          style={{ marginBottom: "-20px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f9f9f9"
            fill-opacity="1"
            d="M0,128L60,154.7C120,181,240,235,360,261.3C480,288,600,288,720,272C840,256,960,224,1080,218.7C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Screen4Component;
