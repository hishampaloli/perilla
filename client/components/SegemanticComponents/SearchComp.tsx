import React from "react";
import style from "../../styles/sementic.module.scss";

const SearchComp = ({
  placeholder,
  setKeys,
  setClick,
}: {
  placeholder: string;
  setKeys: any;
  setClick: any;
}) => {
  return (
    <div className={style.searchComponent}>
      <input
        onChange={(e) => setKeys(e.target.value)}
        type="text"
        placeholder={placeholder}
      />
      <button onClick={setClick}>SEARCH</button>
    </div>
  );
};

export default SearchComp;
