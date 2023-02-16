import React from "react";
import styles from "../../../styles/job.module.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { JobData } from "../../../models/job";

const SingleJobPostComp = ({ data }: { data: JobData }) => {
  return (
    <div className={styles.singleJob}>
      <div className={styles.top}>
        {" "}
        <div>
          <h2>{data.jobTitle}</h2>
          <p>{data.jobDesignation}</p>
        </div>{" "}
        <span>{data.jobType}</span>
      </div>
      <div className={styles.bottom}>
        <div>
          <span>
            <LocationOnIcon />
          </span>

          <p>{data.location}</p>
        </div>

        <div>
          <span>
            <LocalAtmIcon />
          </span>

          <p>
            ${data.salaryFrom} - ${data.salaryTo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleJobPostComp;
