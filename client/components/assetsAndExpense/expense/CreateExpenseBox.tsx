import React, { useState } from "react";
import AddInputComp from "../../AddFormComponent/AddInputComp";
import style from "../../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import SubmitButton from "../../AddFormComponent/SubmitButton";
import { useActions } from "../../../hooks/useAction";
import { toast } from "react-hot-toast";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import FixedSpinner from "../../layout/FixedSpinner";
import { CreateExpenseState } from "../../../models/resources";
import { useCreateExpense } from "../../../hooks/useToast";

const CreateExpenseForm = ({ setEdit }: { setEdit: any }) => {
  const [expenseName, setExpenseName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const { loading }: CreateExpenseState = useTypedSelector(
    (state) => state.createProject
  );

  const { createExpense } = useActions();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await useCreateExpense({ expenseName, price }, createExpense, setEdit);
  };
  return (
    <div className={style.addFormMain}>
      {" "}
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>
      <h1>create Expense</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.InputGroup}>
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

export default CreateExpenseForm;
