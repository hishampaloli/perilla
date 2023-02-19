import React, { useState } from "react";
import style from "../../../styles/jobViewComponent.module.scss";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import RightJobConentesDiv from "./JobHelperComponents/RightJobConentesDiv";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import GroupIcon from "@mui/icons-material/Group";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ApplicationData, GetSingleJobState } from "../../../models/job";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AuthState } from "../../../models/tenants";
import EditJobForm from "./EditJobForm";
import { toast } from "react-hot-toast";
import ApplyJobForm from "./ApplyJobForm";

const JObViewRight = () => {
  const { data }: GetSingleJobState = useTypedSelector(
    (state) => state.singleJob
  );

  const [edit, setEdit] = useState<boolean>(false);
  const [apply, setApply] = useState<boolean>(false);

  const tenant: AuthState = useTypedSelector((state) => state.user);
  const googleData = useTypedSelector((state) => state.googleData);
  const jobData = data?.data;

  const handleApply = () => {
    console.log(googleData);

    if (!googleData?.data?.email) {
      toast.error("please login");
      return;
    }
    setApply(true);
  };

  return (
    <div className={style.jobViewRight}>
      {tenant.data?.data.companyName ? (
        <button
          onClick={() => {
            setEdit(true);
          }}
        >
          EDIT
        </button>
      ) : (
        <>
          {jobData?.applications.some((el: ApplicationData) => {
            return el.email === googleData.data?.email;
          }) ? (
            <button>APPLIED</button>
          ) : (
            <button onClick={handleApply}>APPLY JOB</button>
          )}
        </>
      )}

      {tenant.data?.data.companyName && edit && (
        <EditJobForm setEdit={setEdit} />
      )}

      {googleData?.data?.email && apply && <ApplyJobForm setEdit={setApply} />}

      <div className={style.contentList}>
        <RightJobConentesDiv
          content={jobData?.jobType!}
          title="job type"
          icon={<StackedLineChartIcon />}
        />

        <RightJobConentesDiv
          content={`$ ${jobData?.salaryFrom}  -  $ ${jobData?.salaryTo}`}
          title="salary"
          icon={<LocalAtmIcon />}
        />

        <RightJobConentesDiv
          content={jobData?.experience!}
          title="EXPERIENCE"
          icon={<WorkHistoryIcon />}
        />

        <RightJobConentesDiv
          content={jobData?.vacancy!}
          title="VACANCY"
          icon={<GroupIcon />}
        />

        <RightJobConentesDiv
          content={jobData?.location}
          title="location"
          icon={<LocationOnIcon />}
        />
      </div>
    </div>
  );
};

export default JObViewRight;
