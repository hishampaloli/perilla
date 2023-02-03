import React, { useEffect, useState } from "react";
import EmployeeBox from "./EmployeeBox";
import style from "../../../../styles/allEmployee.module.scss";
import { useActions } from "../../../../hooks/useAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AllClientsState, AllEmployeesState } from "../../../../models/admin";
import { AuthState } from "../../../../models/tenants";
import Spinner from "../../../layout/SpinnerComponent";
import NoDataCopmonent from "../../../layout/NoDataCopmonent";
import Paginate from "../../../SegemanticComponents/Paginate";

const ClientList = ({ type }: { type: string }) => {
  const { getAllEmployees, getAllClients } = useActions();
  const [pageNumber, setPage] = useState<number>(1);

  const { data, loading }: AllClientsState = useTypedSelector(
    (state) => state.allClients
  );
  console.log(data);

  useEffect(() => {
    if (type === "Client") {
      getAllClients("df", {pageNumber});
    }
  }, [pageNumber]);
  return (
    <div className={style.employeeListMain}>
      {loading && <Spinner />}

      {data?.data?.length && !loading ? (
        data?.data?.map((el) => {
          return (
            <EmployeeBox
              type="client"
              id={el?._id!}
              companyName={el?.companyName!}
              phone={el?.phone!}
              key={el?.phone}
              name={el?.clientName}
              designation={el?.clientCompany}
              image={el?.image!}
            />
          );
        })
      ) : (
        <NoDataCopmonent text="No Clients found!" />
      )}

      <Paginate count={data?.pages!} giveBack={setPage} />
    </div>
  );
};

export default ClientList;
