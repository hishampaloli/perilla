import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useAction";
import style from "../../styles/profile.module.scss";
import ClientNav from "./ClientNav";
import ClientProfileBox from "./ClientProfileBox";
import EditClientFormComponent from "./EditClientComponent";

const ClientComponent = () => {
  const router = useRouter();
  const { client } = router.query;
  const { getClientProfileData } = useActions();
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    if (router.isReady) getClientProfileData("sd", client);
  }, [router.isReady]);

  return (
    <div className={style.ProfileComponentMain}>
      <ClientProfileBox setEdit={setEdit} />
      <ClientNav />
      {edit && <EditClientFormComponent setEdit={setEdit} />}
    </div>
  );
};

export default ClientComponent;
