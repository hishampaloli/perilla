import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-toastify";

const Header = (): JSX.Element => {
  return (
    <div>
      <div>
        <Link href="/">
          <h1>SHOPIT</h1>
        </Link>
      </div>
      <div>
        <Link href="/register">
          <h1>Register</h1>
        </Link>
        <Link href="/login">
          <h1>Login</h1>
        </Link>
        <Link href="/">
          <h1>Logout</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
