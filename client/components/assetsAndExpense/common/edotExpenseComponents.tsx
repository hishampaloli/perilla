import React, { useEffect, useState } from "react";
import AddInputComp from "../../AddFormComponent/AddInputComp";
import style from "../../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import SubmitButton from "../../AddFormComponent/SubmitButton";
import { useActions } from "../../../hooks/useAction";
import { toast } from "react-hot-toast";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import FixedSpinner from "../../layout/FixedSpinner";
import { EditExpenseState } from "../../../models/resources";
import { useEditExpense } from "../../../hooks/useToast";
import AddForm from "../../AddFormComponent/AddFormMain";

const EditExpenseForm = ({ setEdit, data }: { setEdit: any; data: any }) => {
  const [expenseName, setExpenseName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const { loading }: EditExpenseState = useTypedSelector(
    (state) => state.createProject
  );

  const { editExpenses } = useActions();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await useEditExpense(
      { expenseName, price },
      data.id,
      editExpenses,
      setEdit
    );
  };

  useEffect(() => {
    setExpenseName(data.itemName);
    setPrice(data.price);
  }, []);

  return (
    <div className={style.addFormMain}>
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>
      <h1 style={{ textAlign: "center", width: "100%", marginTop: "30px" }}>
        create Expense
      </h1>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <div style={{ width: "100%" }} className={style.InputGroup}>
          <AddInputComp
            value={expenseName}
            text="Expense Name"
            type="text"
            handler={setExpenseName}
          />
          <AddInputComp
            value={price}
            text="Price"
            type="number"
            handler={setPrice}
          />
        </div>

        <SubmitButton submit={""} />
      </form>
      {loading && <FixedSpinner />}
    </div>
  );
};

export default EditExpenseForm;
