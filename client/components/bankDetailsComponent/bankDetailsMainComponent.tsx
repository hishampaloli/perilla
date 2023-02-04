import React, { useEffect, useState } from "react";
import BankDetailsListComponent from "./BankDetailsListComponent";
import style from "../../styles/bankDetails.module.scss";
import Paginate from "../SegemanticComponents/Paginate";
import { AllBankDetailsRequestState } from "../../models/profile";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

const BankDetailsMainComponent = () => {
  const { data, loading, error }: AllBankDetailsRequestState = useTypedSelector(
    (state) => state.allBankDetails
  );
  const [pageNumber, setPage] = useState<number>(1);

  console.log(data?.data);

  const { getAllBankDetailsData } = useActions();
  useEffect(() => {
    getAllBankDetailsData("sd", pageNumber);
  }, [pageNumber]);

  return (
    <div className={style.bankDetailsMain}>
      <BankDetailsListComponent data={data!} loading={loading!} error={error} />
      <Paginate count={data?.pages!} giveBack={setPage} />
    </div>
  );
};

export default BankDetailsMainComponent;
