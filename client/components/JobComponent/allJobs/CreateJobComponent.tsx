import React, { useState } from "react";
import AddButton from "../../SegemanticComponents/AddButton";
import CreateJobForm from "./CreateJobForm";

const CreateJobComponent = () => {
  const [add, setAdd] = useState<boolean>(false);
  return (
    <div>
      <AddButton setAdd={setAdd} text="CREATE JOB" />
      {add && <CreateJobForm setEdit={setAdd} />}
    </div>
  );
};

export default CreateJobComponent;
