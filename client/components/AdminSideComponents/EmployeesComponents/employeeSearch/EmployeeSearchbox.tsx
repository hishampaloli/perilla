import React, { useState } from "react";
import { useActions } from "../../../../hooks/useAction";
import style from "../../../../styles/allEmployee.module.scss";

const EmployeeSearchbox = ({ type }: { type: string }) => {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const { getAllEmployees, getAllClients } = useActions();

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (type === "Employees") {
      getAllEmployees("sd", { role: "employees", name, employeeId: id });
    }
    if (type === "HR") {
      getAllEmployees("sd", { role: "hr", name, employeeId: id });
    }
    if (type === "Client") {
      getAllClients("df", { name, clientId: id });
    }
  };
  return (
    <form onSubmit={handleSearch} className={style.employeeSearch}>
      <div>
        <input
          type="text"
          onChange={(e) => setId(e.target.value)}
          placeholder={`${type} ID`}
          id=""
        />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={`${type} Name`}
          name=""
          id=""
        />
      </div>

      <button>SEARCH</button>
    </form>
  );
};

export default EmployeeSearchbox;
