import { useRouter } from "next/router";
import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AuthState } from "../../../models/tenants";
import styles from "../../../styles/job.module.scss";
import AddButton from "../../SegemanticComponents/AddButton";
import SearchComp from "../../SegemanticComponents/SearchComp";
import AllJobs from "./AllJobs";
import CreateJobComponent from "./CreateJobComponent";
import JonSearchComponent from "./SearchJobsComponents";

const AllJobMainComponent = () => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const router = useRouter();
  return (
    <div className={styles.AllJobMain}>
      {data?.data.companyName === router.query.tenant && <CreateJobComponent />}

      <JonSearchComponent />
      <AllJobs />
    </div>
  );
};

export default AllJobMainComponent;
