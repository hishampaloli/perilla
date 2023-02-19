import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ApplicationData } from "../../../models/job";
import style from "../../../styles/task.module.scss";
import NoDataCopmonent from "../../layout/NoDataCopmonent";

import TaskList from "./TaskList";

const CompletedTask = ({ data }: { data: any }) => {
  
  return (
    <div className={style.completedTaskMain}>
      {!data?.length && <NoDataCopmonent text="No Applications Found" />}
      {data?.map((el: ApplicationData) => {
        return <TaskList appliData={el} />;
      })}
    </div>
  );
};

export default CompletedTask;
