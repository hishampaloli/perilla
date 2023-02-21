import React, { useState } from "react";
import style from "../../../styles/application.module.scss";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import Link from "next/link";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { GetSingleApplicationState } from "../../../models/job";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AuthState } from "../../../models/tenants";
import { useActions } from "../../../hooks/useAction";
import { useChangeApplicationStatus } from "../../../hooks/useSwal";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";

const ApplicationTopDiv = () => {
  const { data, loading }: GetSingleApplicationState = useTypedSelector(
    (state) => state.singleApplication
  );
  const tenant: AuthState = useTypedSelector((state) => state.user);
  const applicationData = data?.data;
  const { changeApplicationStatus } = useActions();

  return (
    <div className={style.top}>
      <div>
        <h2>{applicationData?.name}</h2>
        <p>{applicationData?.companyName}</p>
      </div>

      <Link
        href={`/${applicationData?.jobId?.companyName}/${
          tenant.data?.data.adminName ? "admin" : ""
        }/${tenant.data?.data.adminName ? "" : "jobs"}/${
          applicationData?.jobId.id
        }`}
      >
        job
      </Link>

      {tenant.data?.data.companyName === applicationData?.companyName && (
        <select
          value={applicationData?.status}
          onChange={(e) => {
            useChangeApplicationStatus(
              e.target.value,
              applicationData?.id!,
              changeApplicationStatus
            );
          }}
          name="cars"
          id="cars"
        >
          <option value="shortlisted">ShortList</option>
          <option value="rejected">Reject</option>
          <option value="accepted">Accept</option>
          <option value="pending">Pending</option>
        </select>
      )}

      <div className={style.topBtm}>
        <div>
          <span>
            <VerifiedUserIcon />
          </span>
          <p>Experiance</p>
          <p>{applicationData?.experience}</p>
        </div>

        <div>
          <span>
            <LocalAtmIcon />
          </span>
          <p>CTC</p>
          <p>{applicationData?.ctc}</p>
        </div>

        <div>
          <span>
            <AttachEmailIcon />
          </span>
          <p>Email</p>
          <p>{applicationData?.email}</p>
        </div>

        <div>
          <span>
            <LocalPhoneIcon />
          </span>
          <p>Phone</p>
          <p>{applicationData?.number}</p>
        </div>

        <div>
          <span>
            <AssistantPhotoIcon />
          </span>
          <p>Status</p>
          <p>{applicationData?.status}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTopDiv;
