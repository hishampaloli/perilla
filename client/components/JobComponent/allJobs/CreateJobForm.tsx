import React, { useEffect, useState } from "react";
import AddInputComp from "../../AddFormComponent/AddInputComp";
import style from "../../../styles/addForm.module.scss";
import SubmitButton from "../../AddFormComponent/SubmitButton";
import CancelIcon from "@mui/icons-material/Cancel";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "react-hot-toast";
import { useActions } from "../../../hooks/useAction";
import { usePostJob } from "../../../hooks/useToast";

const CreateJobForm = ({ setEdit }: { setEdit: any }) => {
  const [jobTitle, setJobTitle] = useState<string>("");
  const [jobDesignation, setJobDesignation] = useState<string>("");
  const [lastDate, setLastDate] = useState<any>();
  const [jobDescription, setJobDescription] = useState<string>("");
  const [jobType, setJobType] = useState<string>("Full time");
  const [salaryFrom, setSalaryFrom] = useState<number>(0);
  const [salaryTo, setSalaryTo] = useState<number>(0);
  const [experience, setExperience] = useState<string>("");
  const [vacancy, setVacancy] = useState<number>();
  const [location, setLocation] = useState<string>("");
  const [applicationQuestions, setApplicationQuestions] = useState<any>([]);
  const [jobKeyRoles, setJobKeyRoles] = useState<any>([]);
  const [keyRole, setKeyRole] = useState<string>("");
  const [qst, setQst] = useState<string>("");
  const { createJob } = useActions();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    usePostJob(
      {
        jobTitle,
        jobDesignation,
        lastDate,
        jobDescription,
        jobType,
        salaryFrom,
        salaryTo,
        experience,
        vacancy,
        location,
        applicationQuestions,
        jobKeyRoles,
      },
      createJob,
      setEdit
    );
  };

  return (
    <form className={style.addFormMain} onSubmit={handleSubmit}>
      <i
        onClick={() => {
          setEdit(false);
        }}
      >
        <CancelIcon />
      </i>
      <h1>CREATE JOB</h1>
      <div className={style.InputGroup}>
        <AddInputComp
          value={jobTitle}
          text="Job Title"
          type="text"
          handler={setJobTitle}
        />
        <AddInputComp
          value={jobDescription}
          text="Job Description"
          type="text"
          handler={setJobDescription}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={jobDesignation}
          text="Designation"
          type="text"
          handler={setJobDesignation}
        />
        <AddInputComp
          text="Last Date"
          value={lastDate}
          type="date"
          handler={setLastDate}
        />
      </div>

      <div className={style.InputGroup}>
        <div className={style.selectDiv}>
          <label style={{ marginRight: "auto" }} htmlFor="">
            Job Type
          </label>
          <select onChange={(e) => setJobType(e.target.value)}>
            <option value="Full Time">Full Time</option>
            <option selected value="Part Time">
              Part Time
            </option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <AddInputComp
          value={experience}
          text="Experience"
          type="string"
          handler={setExperience}
        />
      </div>
      <div className={style.InputGroup}>
        <AddInputComp
          value={vacancy}
          text="Vacancy"
          type="text"
          handler={setVacancy}
        />

        <AddInputComp
          value={location}
          text="Location"
          type="text"
          handler={setLocation}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={salaryFrom}
          text="Salary From"
          type="number"
          handler={setSalaryFrom}
        />

        <AddInputComp
          value={salaryTo}
          text="Salary To"
          type="number"
          handler={setSalaryTo}
        />
      </div>

      <div className={style.formListDiv}>
        <AddInputComp
          value={keyRole}
          text="Key Roles"
          type="text"
          handler={setKeyRole}
        />

        <button
          type="button"
          onClick={() => {
            if (!keyRole) return;
            setJobKeyRoles((prev: any) => [...prev, keyRole]);
            setKeyRole("");
          }}
        >
          <strong>ADD</strong>
        </button>
      </div>

      <div className={style.listItemsDiv}>
        {jobKeyRoles.map((el: string, index: number) => {
          return (
            <div
              onClick={() => {
                const items = jobKeyRoles.filter((elem: string) => {
                  return el !== elem;
                });
                setJobKeyRoles(items);
              }}
            >
              <p>
                {index + 1} {el}{" "}
              </p>{" "}
              <span>
                <ClearIcon />{" "}
              </span>
            </div>
          );
        })}
      </div>

      <div className={style.formListDiv}>
        <AddInputComp
          value={qst}
          text="Job Questions"
          type="text"
          handler={setQst}
        />

        <button
          type="button"
          onClick={() => {
            if (!qst) return;
            setApplicationQuestions((prev: any) => [...prev, qst]);
            setQst("");
          }}
        >
          <strong>ADD</strong>
        </button>
      </div>

      <div className={style.listItemsDiv}>
        {applicationQuestions.map((el: string, index: number) => {
          return (
            <div
              onClick={() => {
                const items = applicationQuestions.filter((elem: string) => {
                  return el !== elem;
                });
                setApplicationQuestions(items);
              }}
            >
              <p>
                {index + 1} {el}{" "}
              </p>{" "}
              <span>
                <ClearIcon />{" "}
              </span>
            </div>
          );
        })}
      </div>

      <SubmitButton submit={""} />
    </form>
  );
};

export default CreateJobForm;
