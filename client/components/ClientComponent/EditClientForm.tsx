import React, { useEffect, useState } from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import SubmitButton from "../AddFormComponent/SubmitButton";
import { GetClientProfileState } from "../../models/profile";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-hot-toast";

const EditClientForm = ({ setEdit }: { setEdit: any }) => {
  const [clientName, setClientName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [clientId, setClientId] = useState<string>("");
  const [clientCompany, setClientCompany] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const { editClientProfile } = useActions();
  const { data, error, loading }: GetClientProfileState = useTypedSelector(
    (state) => state.clientProfile
  );
  const clientData = data?.data;
  useEffect(() => {
    setEmail(clientData?.email!);
    setPhone(clientData?.phone);
    setClientCompany(clientData?.clientCompany!);
    setClientId(clientData?.clientId!);
    setClientName(clientData?.clientName!);
    setGender(clientData?.gender!);
    setAddress(clientData?.address!);
  }, []);

  console.log(clientData);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const res = await editClientProfile("re", clientData?.id!, {
      address,
      gender,
      clientCompany,
      clientId,
      email,
      phone,
      clientName,
    });

    if (`${res}` === "success") {
      toast.success("Successfully Updated 😃");
      setEdit(false);
    } else {
      toast.error(`${res} 🤨`);
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

export default EditClientForm;
