import React, { useEffect, useState } from "react";
import AddInputComp from "../../AddFormComponent/AddInputComp";
import style from "../../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import SubmitButton from "../../AddFormComponent/SubmitButton";
import { useActions } from "../../../hooks/useAction";
import { toast } from "react-hot-toast";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import FixedSpinner from "../../layout/FixedSpinner";
import { CreateAssetState, EditAssetState } from "../../../models/resources";
import { useCreateAsset, useEditAsset } from "../../../hooks/useToast";
import AddForm from "../../AddFormComponent/AddFormMain";

const EditAssetForm = ({ setEdit, data }: { setEdit: any; data: any }) => {
  const [assetName, setAssetName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const { loading }: EditAssetState = useTypedSelector(
    (state) => state.createProject
  );

  const { editAssets } = useActions();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await useEditAsset({ assetName, price }, data.id, editAssets, setEdit);
  };

  useEffect(() => {
    setAssetName(data.itemName);
    setPrice(data.price);
  }, []);

  return (
    <div className={style.addFormMain}>
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>
      <h1 style={{ textAlign: "center", width: "100%", marginTop: "30px" }}>
        Edit Asset
      </h1>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <div style={{ width: "100%" }} className={style.InputGroup}>
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

export default EditAssetForm;
