import React, { useEffect, useState } from "react";
import EmployeeBox from "./EmployeeBox";
import style from "../../../../styles/allEmployee.module.scss";
import { useActions } from "../../../../hooks/useAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AllClientsState, AllEmployeesState } from "../../../../models/admin";
import { AuthState } from "../../../../models/tenants";
import Spinner from "../../../layout/SpinnerComponent";
import NoDataCopmonent from "../../../layout/NoDataCopmonent";
import { ChangeEmployeeListLayoutState } from "../../../../models/custom";
import EmployeeList from "./EmployeeList";

const EmployeesList = ({ type }: { type: string }) => {
  const { getAllEmployees, getAllClients } = useActions();
  const { data, error, loading }: AllEmployeesState = useTypedSelector(
    (state) => state.allEmployees
  );

  const { listData }: ChangeEmployeeListLayoutState = useTypedSelector(
    (state) => state.employeeListLayout
  );

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
      {loading && <Spinner />}{" "}
      {listData ? (
        <>
          {data?.data?.length && !loading ? (
            data?.data?.map((el) => {
              return (
                <EmployeeBox
                  id={""}
                  type="employee"
                  phone={el?.phone}
                  companyName={el?.companyName}
                  key={el?.phone}
                  name={el?.name}
                  designation={el?.designation}
                  image={el?.image}
                />
              );
            })
          ) : (
            <NoDataCopmonent text={`No ${type} found`} />
          )}
        </>
      ) : (
        <EmployeeList type="employee" />
      )}
    </div>
  );
};

export default EmployeesList;
