import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import style from "../../../styles/application.module.scss";
import ApplicationBottomDiv from "./ApplicationBottomDiv";
import ApplicationTopDiv from "./ApplicationTopDiv";

const SingleApplicationMainComponent = () => {
  const { getSingleApplication } = useActions();
  const googleData = useTypedSelector((state) => state.googleData);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      getSingleApplication("", {
        applicationId: router.query.application,
        verifyToken: googleData?.data?.accessToken,
      });
    }
  }, [router.isReady]);
  
  return (
    <div className={style.singleApplicationMain}>
      <ApplicationTopDiv />
      <ApplicationBottomDiv />
    </div>
  );
};

export default SingleApplicationMainComponent;
