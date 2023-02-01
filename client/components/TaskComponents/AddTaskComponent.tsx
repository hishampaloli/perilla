import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AddTaskFormState } from "../../models/custom";

const AddTaskComponent = () => {
  const { showForm }: AddTaskFormState = useTypedSelector(
    (state) => state.addTaskForm
  );
  return <div>
    {showForm && <h1>786</h1> }
  </div>;
};

export default AddTaskComponent;
