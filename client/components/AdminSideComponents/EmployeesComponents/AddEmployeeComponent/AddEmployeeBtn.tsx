import React from "react";
import style from "../../../../styles/allEmployee.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { ChangeEmployeeListLayoutState } from "../../../../models/custom";
import { useActions } from "../../../../hooks/useAction";
import ListIcon from '@mui/icons-material/List';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const AddEmployeeBtn = ({ setAdd, text }: { setAdd: any; text: string }) => {
  const { listData }: ChangeEmployeeListLayoutState = useTypedSelector(
    (state) => state.employeeListLayout
  );

  const { employeeListLayout } = useActions();

  return (
    <div className={style.addButton}>
      <button onClick={() => {
        employeeListLayout(!listData)
      }}>{listData ? <ViewModuleIcon /> :  <ListIcon /> }</button>

      <button onClick={() => setAdd(true)}>
        <AddIcon /> <p>Add {text}</p>{" "}
      </button>
    </div>
  );
};

export default AddEmployeeBtn;
