import React, { useEffect } from "react";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../models/employee";
import { GetAllExpensesState } from "../../../models/resources";
import styles from "../../../styles/assetsAndExpense.module.scss";
import SearchComp from "../../SegemanticComponents/SearchComp";
import AllAssetList from "./AllExpenseComponent";
import CreatAssetComponent from "./CreateExpenseComponent";

const ExpenseComponent = ({ type }: { type: string }) => {
  const { getAllExpenses } = useActions();
  const { data, loading }: GetAllExpensesState = useTypedSelector(
    (state) => state.allExpenses
  );
  const employee: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  useEffect(() => {
    getAllExpenses("", type);
  }, []);

  console.log(data);
  return (
    <div className={styles.assetsMain}>
      {employee.data?.role === "hr" && <CreatAssetComponent />}

      <SearchComp placeholder="search expenses" setClick={""} setKeys={""} />
      <AllAssetList data={data?.data} loading={loading} />
    </div>
  );
};

export default ExpenseComponent;
