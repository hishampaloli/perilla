import React, { useEffect, useState } from "react";
import SearchComp from "../../SegemanticComponents/SearchComp";
import style from "../../../styles/projectPage.module.scss";
import { EmployeeAuthState } from "../../../models/employee";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { GetAllProjectsState } from "../../../models/project";
import { useActions } from "../../../hooks/useAction";
import { AuthState } from "../../../models/tenants";
import { useRouter } from "next/router";
import { wrapper } from "../../../redux";
import { getAllJobs } from "../../../redux/action-creaters";

const JonSearchComponent = () => {
  const [search, setSearch] = useState<string>("");
  const { getAllJobs } = useActions();

  const [status, setStatus] = useState<string>("open");

  const { data }: AuthState = useTypedSelector((state) => state.user);
  const router = useRouter();
  const { tenant } = router.query;

  const onSumbit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    getAllJobs("", data?.data.companyName, status);
  };

  useEffect(() => {
    if (router.isReady)
      if (data?.data.adminName) {
        getAllJobs("dsf", data.data.companyName, status);
      } else {
        getAllJobs("df", tenant, status);
      }
  }, [status, router.isReady]);

  return (
    <div className={style.projectSearch} style={{marginBottom: '20px'}}>
      <SearchComp
        placeholder="Search Jobs..."
        setClick={onSumbit}
        setKeys={setSearch}
      />
      {data?.data.adminName && (
        <select
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          name="cars"
          id="cars"
        >
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="dropped">Dropped</option>
        </select>
      )}
    </div>
  );
};

export default JonSearchComponent;
