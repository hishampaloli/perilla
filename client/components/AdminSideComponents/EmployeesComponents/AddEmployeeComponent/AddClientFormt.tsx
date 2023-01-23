import React, { useState } from "react";
import AddInputComp from "../../../AddFormComponent/AddInputComp";
import style from "../../../../styles/addForm.module.scss";
import SubmitButton from "../../../AddFormComponent/SubmitButton";
import { useActions } from "../../../../hooks/useAction";
import toast from "react-hot-toast";

const ClientForm = ({ close }: { close: any }) => {
  const { addClient } = useActions();
  const [clientName, setClientName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [clientId, setClientId] = useState<string>("");
  const [clientCompany, setClientCompany] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await addClient("sd", {
      clientCompany,
      clientId,
      clientName,
      email,
      phone,
      gender,
      address,
    });

    if (`${res}` !== "success") {
      toast.error(`${res}`);
    } else {
      toast.success("Successfully added the user");
      close(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.InputGroup}>
        <AddInputComp
          value={clientName}
          text="Client Name"
          type="text"
          handler={setClientName}
        />
        <AddInputComp
          value={clientCompany}
          text="Company Name"
          type="text"
          handler={setClientCompany}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={email}
          text="Email"
          type="email"
          handler={setEmail}
        />
        <AddInputComp
          text="Phone"
          value={phone}
          type="number"
          handler={setPhone}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={clientId}
          text="Client Id"
          type="text"
          handler={setClientId}
        />
        <AddInputComp
          value={gender}
          text="Gender"
          type="text"
          handler={setGender}
        />
      </div>
      <div className={style.InputGroup}>
        <AddInputComp
          value={address}
          text="Address"
          type="text"
          handler={setAddress}
        />
      </div>

      <SubmitButton submit={""} />
    </form>
  );
};

export default ClientForm;
