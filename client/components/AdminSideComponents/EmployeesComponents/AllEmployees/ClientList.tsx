import React, { useEffect } from "react";
import EmployeeBox from "./EmployeeBox";
import style from "../../../../styles/allEmployee.module.scss";
import { useActions } from "../../../../hooks/useAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AllClientsState, AllEmployeesState } from "../../../../models/admin";
import { AuthState } from "../../../../models/tenants";

const ClientList = ({ type }: { type: string }) => {
  const { getAllEmployees, getAllClients } = useActions();

  const { data, loading }: AllClientsState = useTypedSelector(
    (state) => state.allClients
  );

  useEffect(() => {
    if (type === "Client") {
      getAllClients("df");
    }
  }, []);
  return (
    <div className={style.employeeListMain}>
      {loading && <h1>loading</h1>}

      {data?.data?.length && !loading
        ? data?.data?.map((el) => {
            return (
              <EmployeeBox
                key={el?.phone}
                name={el?.clientName}
                designation={el?.clientCompany}
                image={el?.image}
              />
            );
          })
        : "No Clients found"}
    </div>
  );
};

export default ClientList;
