import React, { useState } from "react";
import style from "../../styles/projectPage.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";

const AddClient = ({ setClient }: { setClient: any }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [client, addClient] = useState<any>();

  return (
    <div className={style.addClient}>
      <p onClick={() => setEdit(true)} className={style.addClientBtn}>
        {client ? (
          <div className={style.selecetdClient}>
            <img src={client.img} alt="" />
            <p>{client.name}</p>
          </div>
        ) : (
          "SELECT CLIENT"
        )}
      </p>

      {edit && (
        <div className={style.addClientDiv}>
          <h3>Add Client</h3>
          <i style={{ color: "white" }} onClick={() => setEdit(false)}>
            <CancelIcon />
          </i>
          <div
            onClick={() => {
              addClient({
                img: "https://www.gravatar.com/avatar/362a0065dfed2fc6718cb1a6b39522b4?d=retro",
                name: "Hisham paloli",
              });
              setEdit(false);
            }}
            className={style.clientlist}
          >
            <img
              src="https://www.gravatar.com/avatar/362a0065dfed2fc6718cb1a6b39522b4?d=retro"
              alt=""
            />
            <p>names cjsi</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddClient;
