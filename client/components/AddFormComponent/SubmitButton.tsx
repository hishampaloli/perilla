import React from "react";
import style from "../../styles/addForm.module.scss";
const SubmitButton = ({ submit }: { submit: any }) => {
  return <button type="submit" className={style.submitButton}>Submit</button>;
};

export default SubmitButton;
