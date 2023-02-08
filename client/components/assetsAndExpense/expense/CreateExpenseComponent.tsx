import React, { useState } from "react";
import AddButton from "../../SegemanticComponents/AddButton";
import CreateExpenseBox from "./CreateExpenseBox";

const CreatExpenseComponent = () => {
  const [add, setAdd] = useState(false);

  return (
    <div>
      <AddButton text="CREATE ASSET" setAdd={setAdd} />
      {add && <CreateExpenseBox setEdit={setAdd} />}
    </div>
  );
};

export default CreatExpenseComponent;
