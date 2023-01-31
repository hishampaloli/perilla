import React, { useState } from "react";
import SearchComp from "../SegemanticComponents/SearchComp";
import style from "../../styles/projectPage.module.scss";

const ProjectSearchComponent = () => {
  const [search, setSearch] = useState<string>("");

  const onSumbit = () => {};
  return (
    <div className={style.projectSearch}>
      <SearchComp
        placeholder="Project name"
        setClick={onSumbit}
        setKeys={setSearch}
      />
      <select name="cars" id="cars">
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="dropped">Dropped</option>
      </select>
    </div>
  );
};

export default ProjectSearchComponent;
