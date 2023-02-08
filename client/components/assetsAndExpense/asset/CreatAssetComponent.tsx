import React, { useState } from "react";
import AddButton from "../../SegemanticComponents/AddButton";
import CreateAssetBox from "./CreateAssetBox";

const CreatAssetComponent = () => {
  const [add, setAdd] = useState(false);
  
  return (
    <div>
      <AddButton text="CREATE ASSET" setAdd={setAdd} />
      {add && <CreateAssetBox setEdit={setAdd} />}
    </div>
  );
};

export default CreatAssetComponent;
