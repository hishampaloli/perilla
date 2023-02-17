import React from "react";
import { JobData } from "../../../../models/job";
import style from "../../../../styles/jobViewComponent.module.scss";

const LeftBottomComponent = ({ data }: { data: JobData }) => {
  return (
    <div className={style.bottom}>
      <div className={style.jobDesc}>
        <h2>{data?.jobTitle}</h2>
        <p>{data?.jobDescription}</p>

        <ul>
          {data?.jobKeyRoles.map((el: string) => {
            return (
              <li>
                <div></div> <p>{el}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={style.interviewQst}>
        <h2>Interview Questions</h2>

        <ul>
          {data?.applicationQuestions.map((el: string) => {
            return (
              <li>
                <div></div> <p>{el}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftBottomComponent;
