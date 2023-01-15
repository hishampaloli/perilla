import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-toastify";

const Header = (): JSX.Element => {
  return (
    <div >
      <div>
        <Link href="/">
          <h1>SHOPIT</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
