import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { GetSingleApplicationState } from "../../../models/job";
import style from "../../../styles/application.module.scss";
const ApplicationBottomDiv = () => {
  const { data }: GetSingleApplicationState = useTypedSelector(
    (state) => state.singleApplication
  );

  return (
    <div className={style.bottom}>
      <div>
        <h2>Cover Letter</h2>
        <p>{data?.data?.coverLetter}</p>
      </div>

      <div>
        <h2>Interview Answers</h2>
        <p>{data?.data?.interviewQsr}</p>
      </div>
    </div>
  );
};

export default ApplicationBottomDiv;
