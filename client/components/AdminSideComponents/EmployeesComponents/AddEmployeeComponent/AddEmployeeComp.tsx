import React, { useState } from "react";
import style from "../../../../styles/allEmployee.module.scss";
import AddIcon from "@mui/icons-material/Add";
import AddEmployeeBtn from "./AddEmployeeBtn";
import AddEmployeeForm from "./AddEmployeeForm";

const AddEmployeeComponent = ({ type }: { type: string }) => {
  const [addBox, setAddBox] = useState(false);
  console.log(type);
  
  return (
    <div className={style.addEmployees}>
      <AddEmployeeBtn text={type} setAdd={setAddBox} />
      {addBox && <AddEmployeeForm type={type} close={setAddBox} />}
    </div>
  );
};

export default AddEmployeeComponent;
