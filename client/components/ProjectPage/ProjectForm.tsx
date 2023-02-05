import React, { useState } from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import SubmitButton from "../AddFormComponent/SubmitButton";
import AddClient from "./AddClient";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-hot-toast";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EditProjectState } from "../../models/project";
import FixedSpinner from "../layout/FixedSpinner";
import { log } from "console";

const ProjectForm = ({ setEdit }: { setEdit: any }) => {
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("medium");
  const [rate, setRate] = useState<number>(0);
  const [client, setClient] = useState<any>();
  const [startDate, setStartDate] = useState<Date>();

  const { loading }: EditProjectState = useTypedSelector(
    (state) => state.createProject
  );

  const { createProjects } = useActions();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const res = await createProjects("sd", {
      client,
      priority,
      projectDescription,
      projectName,
      rate,
      startDate,
    });

    if (`${res}` === "success") {
      toast.success("Successfully Updated ");
    } else {
      console.log(res);
      toast.error(`${res}`);
    }
  };
  return (
    <div className={style.addFormMain}>
      {" "}
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
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
            <select onChange={(e) => setPriority(e.target.value)}>
              <option value="high">High</option>
              <option selected value="medium">
                Medium
              </option>
              <option value="low">Low</option>
            </select>
          </div>

          <AddInputComp
            value={startDate}
            text="Starting Date"
            type="date"
            handler={setStartDate}
          />
        </div>

        <div className={style.textArea}>
          <label htmlFor="">Project Description</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            name=""
            id=""
          />
        </div>

        <div>
          <label htmlFor="">Add Client</label>
          <AddClient setClient={setClient} />
        </div>
        <SubmitButton submit={""} />
      </form>
      {loading && <FixedSpinner />}
    </div>
  );
};

export default ProjectForm;
