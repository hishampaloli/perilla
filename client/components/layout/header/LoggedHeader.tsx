import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../models/employee";
import { AuthState } from "../../../models/tenants";
import style from "../../../styles/header.module.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";

const LoggedHeader = ({
  logoutHandler,
  type,
  employeelogoutHandler,
}: {
  logoutHandler?: any;
  type: string;
  employeelogoutHandler?: any;
}) => {
  const userState: AuthState = useTypedSelector((state) => state.user);
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const router = useRouter();
  return (
    <div className={style.notLogged}>
      {!userState.data?.data.isPurchased && type === "tenant" && (
        <Link href={"/payment"}>
          <li>Buy</li>
        </Link>
      )}

      {type === "employee" ? (
        <>
          {" "}
          <p>
            <div>
              <NotificationsIcon />
            </div>
          </p>
          <p>
            <img
              style={{ width: "35px", height: "35px", borderRadius: "50%" }}
              src={data?.image}
              alt=""
            />
          </p>
          <Link href={"/"}>
            <li onClick={employeelogoutHandler}>Logout</li>
          </Link>
        </>
      ) : (
        <>
          <Link href={"/"}>
            <li onClick={logoutHandler}>Logout</li>
          </Link>
        </>
      )}
    </div>
  );
};

export default LoggedHeader;
