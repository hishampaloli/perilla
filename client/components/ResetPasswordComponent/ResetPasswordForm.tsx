import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useActions } from "../../hooks/useAction";
import style from "../../styles/resetPassword.module.scss";
import SubmitButton from "../AddFormComponent/SubmitButton";
import VerticalInputDiv from "../FormComponents/VerticalInputDiv";

const ResetPasswordForm = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const { resetPassword } = useActions();

  const handleChange = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await resetPassword("", { oldPassword, password: newPassword });

    if (`${res}` === "success") {
      toast.success("Successfully Updated the password");
      setOldPassword("");
      setNewPassword("");
    } else {
      toast.error(`${res}`);
    }
  };
  return (
    <div className={style.resetPasswordMain}>
      <form onSubmit={handleChange}>
        <div>
          <VerticalInputDiv
            placeholder=""
            type="text"
            label="Old Password"
            callBack={setOldPassword}
          />
          <VerticalInputDiv
            placeholder=""
            type="text"
            label="NewPassword"
            callBack={setNewPassword}
          />

          <SubmitButton submit={"Change"} />
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
