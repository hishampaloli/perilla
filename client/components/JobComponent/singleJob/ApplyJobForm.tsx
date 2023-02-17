import React, { useEffect, useState } from "react";
import AddInputComp from "../../AddFormComponent/AddInputComp";
import style from "../../../styles/addForm.module.scss";
import SubmitButton from "../../AddFormComponent/SubmitButton";
import CancelIcon from "@mui/icons-material/Cancel";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "react-hot-toast";
import { useActions } from "../../../hooks/useAction";
import { useApplyJob, useEditJob, usePostJob } from "../../../hooks/useToast";
import { GetSingleJobState } from "../../../models/job";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useRouter } from "next/router";

const ApplyJobForm = ({ setEdit }: { setEdit: any }) => {
  const { data }: GetSingleJobState = useTypedSelector(
    (state) => state.singleJob
  );
  const googleData = useTypedSelector((state) => state.googleData);
  const router = useRouter();
  const { applyJob } = useActions();
  const jobData = data?.data;

  const [number, setNumber] = useState<number>();
  const [experience, setExperience] = useState<string>();
  const [coverLetter, setCoverLetter] = useState<string>("");
  const [jobQuestions, setJobQuestions] = useState<any>([]);
  const [name, setName] = useState<string>("");
  const [ctc, setCtc] = useState<string>("");
  console.log(googleData.data);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    useApplyJob(
      {
        number,
        experience,
        coverLetter,
        interviewQsr: jobQuestions,
        name,
        verifyToken: googleData.data.accessToken,
        ctc,
        jobId: jobData?.id,
        companyName: router.query.tenant,
      },
      applyJob,
      setEdit
    );
    e.preventDefault();
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
      <h1>APPLY JOB</h1>
      <div className={style.InputGroup}>
        <AddInputComp
          value={name}
          text="Full Name"
          type="text"
          handler={setName}
        />

        <AddInputComp
          value={number}
          text="Mobile number"
          type="number"
          handler={setNumber}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={experience}
          text="Total Experience"
          type="string"
          handler={setExperience}
        />

        <AddInputComp
          value={ctc}
          text="Expected CTC"
          type="text"
          handler={setCtc}
        />
      </div>

      <div className={style.textArea}>
        <label htmlFor="">Cover Letter</label>
        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />
      </div>

      <div className={style.textArea}>
        <label htmlFor="">Answer for the interview Qst</label>
        <textarea
          value={jobQuestions}
          onChange={(e) => setJobQuestions(e.target.value)}
        />
      </div>

      <SubmitButton submit={""} />
    </form>
  );
};

export default ApplyJobForm;
