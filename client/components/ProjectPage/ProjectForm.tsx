import React, { useState } from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import SubmitButton from "../AddFormComponent/SubmitButton";
import AddClient from "./AddClient";

const ProjectForm = ({ setEdit }: { setEdit: any }) => {
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescritpion, setProjectDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [rate, setRate] = useState<number>();
  const [cleint, setClient] = useState();
  const [addClient, setAddClient] = useState<boolean>(false);

  return (
    <div className={style.addFormMain}>
      {" "}
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>
      <h1>Edit Profile</h1>
      <form>
        <div className={style.InputGroup}>
          <AddInputComp
            value={projectName}
            text="Project Name"
            type="text"
            handler={setProjectName}
          />
          <AddInputComp
            value={rate}
            text="Rate"
            type="number"
            handler={setRate}
          />
        </div>

        <div className={style.InputGroup}>
          <div className={style.selectDiv}>
            <label htmlFor="">Priority</label>
            <select name="cars" id="cars">
              <option className={style.options} value="volvo">
                Volvo
              </option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <AddInputComp
            value={rate}
            text="Starting Date"
            type="date"
            handler={setRate}
          />
        </div>

        <div className={style.textArea}>
          <label htmlFor="">Project Description</label>
          <textarea name="" id="" />
        </div>

        <div>
            <label htmlFor="">Add Client</label>
          <AddClient setClient={setClient} />
        </div>
        <SubmitButton submit={""} />
      </form>
    </div>
  );
};

export default ProjectForm;
