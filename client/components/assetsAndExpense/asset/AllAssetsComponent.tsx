import React from "react";
import style from "../../../styles/assetsAndExpense.module.scss";
import NoDataCopmonent from "../../layout/NoDataCopmonent";
import FixedSpinner from "../../layout/FixedSpinner";
import ItemsList from "../common/itemsList";
import { AssetsData } from "../../../models/resources";

const AllAssetList = ({ data, loading }: { data: any; loading: boolean }) => {
  return (
    <div className={style.employeelistDiv}>
      <div>
        <p>Added By</p>
        <p>Asset</p>
        <p>Price</p>
        <p>Added at</p>
      </div>

      {loading && <FixedSpinner />}
      {!loading && !data?.length && (
        <NoDataCopmonent text={`No Assets requests found`} />
      )}
      {data?.length &&
        data?.map((el: AssetsData) => {
          return <ItemsList type="asset" el={el} />;
        })}
    </div>
  );
};

export default AllAssetList;
