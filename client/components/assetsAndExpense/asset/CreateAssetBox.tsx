import React, { useState } from "react";
import AddInputComp from "../../AddFormComponent/AddInputComp";
import style from "../../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import SubmitButton from "../../AddFormComponent/SubmitButton";
import { useActions } from "../../../hooks/useAction";
import { toast } from "react-hot-toast";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import FixedSpinner from "../../layout/FixedSpinner";
import { CreateAssetState } from "../../../models/resources";
import { useCreateAsset } from "../../../hooks/useToast";

const CreateAssetForm = ({ setEdit }: { setEdit: any }) => {
  const [assetName, setAssetName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const { loading }: CreateAssetState = useTypedSelector(
    (state) => state.createProject
  );

  const { createAsset } = useActions();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await useCreateAsset({ assetName, price }, createAsset, setEdit);
  };
  return (
    <div className={style.addFormMain}>
      {" "}
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>
      <h1>create Asset</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.InputGroup}>
          <AddInputComp
            value={assetName}
            text="Asset Name"
            type="text"
            handler={setAssetName}
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

export default CreateAssetForm;
