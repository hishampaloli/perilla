import React, { useEffect, useState } from "react";
import EmployeeBox from "./EmployeeBox";
import style from "../../../../styles/allEmployee.module.scss";
import { useActions } from "../../../../hooks/useAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AllClientsState, AllEmployeesState } from "../../../../models/admin";
import { AuthState } from "../../../../models/tenants";
import EmployeeList from "./EmployeesList";
import ClientList from "./ClientList";

const EmployeeListComp = ({
  type,
}: {
  type: string;
}) => {
  return (
    <div className={style.employeeListMain}>
      {type !== "Client" ? (
        <>
          <EmployeeList  type={type} />
        </>
      ) : (
        <>
          <ClientList type={type} />
        </>
      )}
    </div>
  );
};

export default EmployeeListComp;
