import React from "react";
import styles from "../../../styles/job.module.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { JobData } from "../../../models/job";
import Link from "next/link";
import { AuthState } from "../../../models/tenants";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useRouter } from "next/router";

const SingleJobPostComp = ({ data }: { data: JobData }) => {
  const tenant: AuthState = useTypedSelector((state) => state.user);
  const tenantData = tenant.data?.data;
  console.log(data);

  const router = useRouter();

  return (
    <Link
      href={
        tenantData?.companyName
          ? `/${tenantData.companyName}/admin/${data._id}`
          : `/${router.query.tenant}/jobs/${data._id}`
      }
      className={styles.singleJob}
    >
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
    </Link>
  );
};

export default SingleJobPostComp;
