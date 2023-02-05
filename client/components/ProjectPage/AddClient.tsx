import React, { useState } from "react";
import style from "../../styles/projectPage.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import { useActions } from "../../hooks/useAction";
import { AllClientsState, ClientData } from "../../models/admin";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const AddClient = ({ setClient }: { setClient: any }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [client, addClient] = useState<any>();
  const { data }: AllClientsState = useTypedSelector(
    (state) => state.allClients
  );

  console.log(data);

  const { getAllClients } = useActions();

  const handleClick = () => {
    setEdit(true);
    getAllClients("", { name: "", clientId: '', pageNumber: 1 });
  };

  return (
    <div className={style.addClient}>
      <p onClick={handleClick} className={style.addClientBtn}>
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
          {data?.data.map((el: any) => {
            return (
              <div
                onClick={() => {
                  addClient({
                    img: el?.image,
                    name: el?.clientName,
                  });
                  setClient(el?._id);
                  setEdit(false);
                }}
                className={style.clientlist}
              >
                <img src={el?.image} alt="" />
                <p>{el?.clientName}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AddClient;
