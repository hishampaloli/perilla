import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "../../../styles/assetsAndExpense.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { AssetsData, ExpenseData } from "../../../models/resources";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteAsset, useDeleteExpense } from "../../../hooks/useSwal";
import { useActions } from "../../../hooks/useAction";
import EditIcon from "@mui/icons-material/Edit";
import { EmployeeAuthState } from "../../../models/employee";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import EditAssetForm from "./editAssetComponent";
import EditExpenseForm from "./edotExpenseComponents";

const ItemsList = ({
  el,
  type,
}: {
  el: AssetsData | ExpenseData | any;
  type: string;
}) => {
  const employee: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  const [edit, setEdit] = useState(false);
  const { deleteAssets, deleteExpense } = useActions();
  const handleDelete = async () => {
    if (type === "asset") await useDeleteAsset(el.id, deleteAssets);
    if (type === "expense") await useDeleteExpense(el.id, deleteExpense);
  };

  useEffect(() => {
    return () => {
      setEdit(false);
    };
  }, []);

  return (
    <>
      {edit && type === "asset" ? (
        <EditAssetForm data={el} setEdit={setEdit} />
      ) : (
        <>
          {edit && type === "expense" && (
            <EditExpenseForm data={el} setEdit={setEdit} />
          )}
        </>
      )}
      <div className={style.bankDetailDiv}>
        <p>
          <img src={el?.createdBy?.image} alt="" />
          {el?.createdBy?.name}
        </p>
        <p>
          {type === "asset"
            ? el?.assetName?.slice(0, 40)
            : el?.expenseName?.slice(0, 40)}
        </p>
        <p>{el?.price}</p>
        <p>{el?.createdAt?.toString().slice(0, 10)}</p>

        <p className="plast">
      
          {employee.data?.role === "hr" && (
            <span onClick={() => setEdit(true)}>
              <EditIcon />
            </span>
          )}
          {employee.data?.role === "hr" && (
            <span onClick={handleDelete}>
              <DeleteIcon />
            </span>
          )}
        </p>
      </div>
    </>
  );
};

export default ItemsList;
