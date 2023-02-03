import Link from "next/link";
import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AllEmployeesState } from "../../../../models/admin";
import style from "../../../../styles/allEmployee.module.scss";
import NoDataCopmonent from "../../../layout/NoDataCopmonent";
import VisibilityIcon from "@mui/icons-material/Visibility";

const EmployeeList = ({ type }: { type: string }) => {
  const { data, error, loading }: AllEmployeesState = useTypedSelector(
    (state) => state.allEmployees
  );

  return (
    <div className={style.employeelistDiv}>
      <div>
        <p>Name</p>
        <p>Email</p>
        <p>Designation</p>
        <p>Phone</p>
        <p>Role</p>
      </div>

      {data?.data?.length && !loading ? (
        data?.data?.map((el) => {
          return (
            <Link
              href={`/${el?.companyName}/profile/employee/${el.phone}`}
              className={style.bankDetailDiv}
            >
              <p>
                <img src={el.image} alt="" />
                {el.name}
              </p>
              <p>{el.email}</p>
              <p>{el.designation}</p>
              <p>{el.phone}</p>
              <p>{el.role}</p>
              <p>
                <VisibilityIcon />
              </p>
            </Link>
          );
        })
      ) : (
        <>
          {!loading && !data?.data.length && (
            <NoDataCopmonent text={`No ${type} found`} />
          )}
        </>
      )}
    </div>
  );
};

export default EmployeeList;
