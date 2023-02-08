import React, { useEffect } from "react";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../models/employee";
import { GetAllAssetsState } from "../../../models/resources";
import styles from "../../../styles/assetsAndExpense.module.scss";
import SearchComp from "../../SegemanticComponents/SearchComp";
import AllAssetList from "./AllAssetsComponent";
import CreatAssetComponent from "./CreatAssetComponent";

const AssetsComponent = ({ type }: { type: string }) => {
  const { getAllAssets } = useActions();
  const { data, loading }: GetAllAssetsState = useTypedSelector(
    (state) => state.allAssets
  );
  const employee: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  useEffect(() => {
    getAllAssets("", type);
  }, []);

  console.log(data);
  return (
    <div className={styles.assetsMain}>
      {employee.data?.role === "hr" && <CreatAssetComponent />}

      <SearchComp placeholder="search assets" setClick={""} setKeys={""} />
      <AllAssetList data={data?.data} loading={loading} />
    </div>
  );
};

export default AssetsComponent;
