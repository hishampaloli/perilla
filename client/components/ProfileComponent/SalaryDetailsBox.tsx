import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetMyProfileState } from "../../models/employee";
import { GetEmployeeProfileState } from "../../models/profile";
import style from "../../styles/profile.module.scss";

const SalaryDetailsBox = () => {
  const { data }: GetEmployeeProfileState = useTypedSelector(
    (state) => state.employeeProfile
  );

  const employeeProfile: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  const salaryDetails = data?.data.salaryDetails
    ? data?.data.salaryDetails
    : employeeProfile?.data?.data.salaryDetails;

    // console.log(salaryDetails);
    
  return (
    <div className={style.hi}>
      <h2>Salary Details</h2>

      <ul className={style.bankUi}>
        <div>
          <strong>Base Salary : </strong>
          <strong>Payment type : </strong>
          <strong>PF Rate : </strong>
          <strong> Gross Salary : </strong>
          <strong> Bonus : </strong>
          <strong> HRA : </strong>
        </div>
        <div>
          {" "}
          <span>{salaryDetails?.baseSalary}</span>
          <span>{salaryDetails?.paymentType}</span>
          <span>{salaryDetails?.PfRate}</span>
          <span>{salaryDetails?.grossSalary}</span>
          <span>{salaryDetails?.bonus}</span>
          <span>{salaryDetails?.HRA}</span>
        </div>
      </ul>
    </div>
  );
};

export default SalaryDetailsBox;
