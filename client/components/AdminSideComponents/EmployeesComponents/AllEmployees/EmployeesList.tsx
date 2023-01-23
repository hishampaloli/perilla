import React, { useEffect, useState } from "react";
import EmployeeBox from "./EmployeeBox";
import style from "../../../../styles/allEmployee.module.scss";
import { useActions } from "../../../../hooks/useAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AllClientsState, AllEmployeesState } from "../../../../models/admin";
import { AuthState } from "../../../../models/tenants";

const EmployeeList = ({
  type,
}: {
  type: string;
}) => {
  const { getAllEmployees, getAllClients } = useActions();
  const { data, error, loading }: AllEmployeesState = useTypedSelector(
    (state) => state.allEmployees
  );

  console.log(data);
  
  useEffect(() => {
    if (type === "Employees") {
      getAllEmployees("sd", "employees");
    }
    if (type === "HR") {
      getAllEmployees("sd", "hr");
    }
  }, []);
  return (
    <div className={style.employeeListMain}>
      {loading && <h1>loading</h1>}{" "}
      {data?.data?.length && !loading
        ? data?.data?.map((el) => {
            return (
              <EmployeeBox
                key={el?.phone}
                name={el?.name}
                designation={el?.designation}
                image={el?.image}
              />
            );
          })
        : "No users found"}
    </div>
  );
};

export default EmployeeList;
