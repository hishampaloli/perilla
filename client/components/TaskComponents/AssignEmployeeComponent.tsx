import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EmployeeData } from "../../models/admin";
import { GetSingleProjectState } from "../../models/project";
import style from "../../styles/addForm.module.scss";
import NoDataCopmonent from "../layout/NoDataCopmonent";

const AssignEmployeeComponent = ({
  setTeamData,
  teamData,
}: {
  setTeamData: any;
  teamData: any;
}) => {
  const router = useRouter();
  const { project } = router.query;

  const [assing, setAssign] = useState<boolean>(false);

  const { data }: GetSingleProjectState = useTypedSelector(
    (state) => state.singleProject
  );

  return (
    <>
      {assing && (
        <div className={style.teamList}>
          {!data?.data.team.length && <NoDataCopmonent text="" />}
          {data?.data?.team.map((el: any) => {
            return (
              <div
                onClick={() => {
                  setTeamData(el);
                  setAssign(false);
                }}
                className={style.teamBox}
              >
                <img src={el.image} alt="" />
                <div>
                  <h4>{el.name}</h4>
                  <span>{el.designation}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <ul onClick={() => setAssign(true)}>
        {" "}
        {teamData ? (
          <div className={style.selectedEmployee}>
            <img src={teamData?.image} alt="" />
            <div>
              <h4>{teamData?.name}</h4>
              <span>{teamData?.designation}</span>
            </div>
          </div>
        ) : (
          "SELECT EMPLOYEE"
        )}{" "}
      </ul>
    </>
  );
};

export default AssignEmployeeComponent;
