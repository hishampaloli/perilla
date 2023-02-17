import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import style from "../../../styles/header.module.scss";
import {
  signInWithGoogle,
  auth,
  signoutGoogle,
} from "../../../secrets/firebase_cofigs";
import { onAuthStateChanged } from "firebase/auth";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { toast } from "react-hot-toast";

const RightHeader = ({ loc }: { loc: any }) => {
  const router = useRouter();
  const { tenant } = router.query;
  const { data } = useTypedSelector((state) => state.googleData);
  const { googleLoginAction } = useActions();

  console.log(data);
  console.log("&&&&&&&&&&&&&&&&&&&&&&7");

  const handleSignUp = async () => {
    const res: any = await signInWithGoogle();
    toast.success(`welcome ${res?.displayName}`);
  };

  const handleLogut = () => {
    signoutGoogle();
    googleLoginAction(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        googleLoginAction(user);
      } else {
        console.log(null);
      }
    });
  }, []);

  return (
    <div className={style.notLogged}>
      {loc === "emplogin" && (
        <Link href={`/${tenant}/login/employee`}>
          <li>Employee Login</li>
        </Link>
      )}

      {loc !== "emplogin" && (
        <>
          <Link href={`/${tenant}/jobs`}>
            <li>Jobs</li>
          </Link>

          {data ? (
            <>
              <p>{data?.displayName} </p>
              <p onClick={handleLogut}>Logout</p>
            </>
          ) : (
            <p onClick={handleSignUp}>
              <li>Login</li>
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default RightHeader;
