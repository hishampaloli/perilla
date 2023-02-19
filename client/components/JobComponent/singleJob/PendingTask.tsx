import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import style from "../../../styles/task.module.scss";
import NoDataCopmonent from "../../layout/NoDataCopmonent";
import Spinner from "../../layout/SpinnerComponent";
import TaskList from "./TaskList";
import { ApplicationData } from "../../../models/job";

const PendingTask = ({ data }: { data: any }) => {
  console.log(data);
  
  return (
    <div className={style.pendingTaskMain}>
      {!data?.length && (
        <NoDataCopmonent text="No Applications Found" />
      )}
      {data?.map((el: ApplicationData) => {
        return <TaskList appliData={el} />;
      })}
    </div>
  );
};

export default PendingTask;
