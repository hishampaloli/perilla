import Link from "next/link";
import React from "react";
import style from "../../../../styles/allEmployee.module.scss";

const EmployeeBox = ({
  name,
  designation,
  image,
  phone,
  type,
  companyName,
  id,
}: {
  name: string;
  designation: string;
  image: string;
  phone: number;
  type: string;
  id: string;
  companyName: string;
}) => {
  return (
    <Link
      href={`/${companyName}/profile/${type}/${type !== "client" ? phone : id}`}
      className={style.employeeBox}
    >
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{designation}</p>
    </Link>
  );
};

export default EmployeeBox;
