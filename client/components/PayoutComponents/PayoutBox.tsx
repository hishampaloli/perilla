import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "../../styles/assetsAndExpense.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { PayoutData } from "../../models/resources";
import { useActions } from "../../hooks/useAction";
import { AuthState } from "../../models/tenants";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useCompletePayout } from "../../hooks/useSwal";

const ItemsList = ({ el }: { el: PayoutData }) => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const { completePayout } = useActions();
  const handlePayout = async () => {
    console.log(el);
    await useCompletePayout(completePayout, el?._id);
  };

  return (
    <div className={style.bankDetailDiv}>
      <Link
        href={`/${el.companyName}/profile/employee/${el.requestedBy.phone}`}
      >
        <img src={el?.requestedBy?.image} alt="" />
        {el?.requestedBy?.name}
      </Link>
      <p>{el?.salary}</p>
      <p>{el?.requestedAt?.toString().slice(0, 10)}</p>
      <p>{el?.requestedBy?.role}</p>

      <p className="plast">
        {data?.data.adminName ? (
          <>
            {el.isPaid ? (
              <button style={{ backgroundColor: "#55ce63" }}>Completed</button>
            ) : (
              <button
                onClick={handlePayout}
                style={{ backgroundColor: "#ff9b44", cursor: "pointer" }}
              >
                Finish payout
              </button>
            )}
          </>
        ) : (
          <>
            {el.isPaid ? (
              <button style={{ backgroundColor: "#55ce63" }}>Completed</button>
            ) : (
              <button
                onClick={handlePayout}
                style={{ backgroundColor: "#ff9b44", cursor: "pointer" }}
              >
                Pending
              </button>
            )}
          </>
        )}
      </p>
    </div>
  );
};

export default ItemsList;
