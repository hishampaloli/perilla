import React, { useEffect, useState } from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import SubmitButton from "../AddFormComponent/SubmitButton";
import AddClient from "../ProjectPage/AddClient";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-hot-toast";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AllEmployeesState, EmployeeData } from "../../models/admin";
import { useRouter } from "next/router";

const EditProjectForm = ({ setEdit, projectId }: { setEdit: any, projectId: any }) => {
  const [addTeam, setAddTeam] = useState<boolean>(false);
  const [teamData, setTeamData] = useState<EmployeeData>();
  

  const { getAllEmployees, addTeamToProject } = useActions();


  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await addTeamToProject("", teamData?._id!, projectId!);
    if (`${res}` === "success") {
      toast.success("Successfully Added");
      setEdit(false);
    } else {
      toast.error(`${res}`);
    }
  };

  const { data }: AllEmployeesState = useTypedSelector(
    (state) => state.allEmployees
  );

  useEffect(() => {
    getAllEmployees("sd", "employees");
  }, []);

  return (
    <div className={style.addTeamForm}>
      {" "}
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>
      <h1>Add Team</h1>
      <form onSubmit={handleSubmit}>
        <div className={""}>
          {addTeam && (
            <div className={style.teamList}>
              {data?.data?.map((el: EmployeeData) => {
                return (
                  <div
                    onClick={() => {
                      setTeamData(el);
                      setAddTeam(false);
                    }}
                    className={style.teamBox}
                  >
                    <img src={el.image} alt="" />
                    <div>
                      <h4>{el.name}</h4>
                      <span>{el.designation}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <p onClick={() => setAddTeam(true)}>
            {" "}
            {teamData ? (
              <div className={style.selectedEmployee}>
                <img src={teamData?.image} alt="" />
                <div>
                  <h4>{teamData?.name}</h4>
                  <span>{teamData?.designation}</span>
                </div>
              </div>
            ) : (
              "SELECT EMPLOYEE"
            )}{" "}
          </p>
        </div>

        <label htmlFor=""></label>
        <SubmitButton submit={""} />
      </form>
    </div>
  );
};

export default EditProjectForm;
