import React from "react";
import SearchComp from "../SegemanticComponents/SearchComp";
import style from "../../styles/allTaskMain.module.scss";

const TaskSearchComponent = ({
  setStatus,
  setSearch,
  setClick,
}: {
  setStatus: any;
  setSearch: any;
  setClick: any;
}) => {
  return (
    <div className={style.taskSearch}>
      <SearchComp
        placeholder="search task"
        setClick={setClick}
        setKeys={setSearch}
      />
      <select
        onChange={(e) => {
          setStatus(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option value="false">Pending</option>
        <option value="true">Completed</option>
      </select>
    </div>
  );
};

export default TaskSearchComponent;
