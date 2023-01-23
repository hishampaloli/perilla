import React from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import SubmitButton from "../AddFormComponent/SubmitButton";

const EditProfileForm = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.InputGroup}>
        <AddInputComp
          value={'clientName'}
          text="Client Name"
          type="text"
          handler={"setClientName"}
        />
        <AddInputComp
          value={"clientCompany"}
          text="Company Name"
          type="text"
          handler={"setClientCompany"}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={"email"}
          text="Email"
          type="email"
          handler={"setEmail"}
        />
        <AddInputComp
          text="Phone"
          value={"phone"}
          type="number"
          handler={"setPhone"}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={"clientId"}
          text="Client Id"
          type="text"
          handler={"setClientId"}
        />
        <AddInputComp
          value={"gender"}
          text="Gender"
          type="text"
          handler={"setGender"}
        />
      </div>
      <div className={style.InputGroup}>
        <AddInputComp
          value={"address"}
          text="Address"
          type="text"
          handler={"setAddress"}
        />
      </div>

      <SubmitButton submit={""} />
    </form>
  );
};

export default EditProfileForm;
