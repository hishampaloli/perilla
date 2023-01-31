import React, { useEffect, useState } from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import SubmitButton from "../AddFormComponent/SubmitButton";
import AddClient from "../ProjectPage/AddClient";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-hot-toast";
import { GetSingleProjectState } from "../../models/project";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const EditProjectForm = ({ setEdit }: { setEdit: any }) => {
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("medium");
  const [rate, setRate] = useState<number>(0);
  const [startDate, setStartDate] = useState<any>();
  const { data }: GetSingleProjectState = useTypedSelector(
    (state) => state.singleProject
  );
  const projectData = data?.data;

  const { editProjects } = useActions();
  console.log(data?.data?.id);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const res = await editProjects(
      "sd",
      {
        priority,
        projectDescription,
        projectName,
        rate,
        startDate,
      },
      projectData?.id!
    );

    if (`${res}` === "success") {
      toast.success("Successfully Updated ");
      setEdit(false);
    } else {
      toast.error(`${res}`);
    }
  };

  useEffect(() => {
    setProjectName(projectData?.projectName!);
    setProjectDescription(projectData?.projectDescription!);
    setPriority(projectData?.priority!);
    setRate(projectData?.rate!);
    setStartDate(projectData?.startDate);
  }, []);

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
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
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

        <SubmitButton submit={""} />
      </form>
    </div>
  );
};

export default EditProjectForm;
