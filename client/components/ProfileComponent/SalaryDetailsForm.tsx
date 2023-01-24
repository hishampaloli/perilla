import React, { useEffect, useState } from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import SubmitButton from "../AddFormComponent/SubmitButton";
import {
  ChangeEmployeePasswordState,
  EditEmployeeProfileState,
  EditSalaryDetailsState,
  GetEmployeeProfileState,
} from "../../models/profile";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import FixedSpinner from "../layout/FixedSpinner";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-hot-toast";

const SalaryDetailsForm = ({ setEdit }: { setEdit: any }) => {
  const { data }: GetEmployeeProfileState = useTypedSelector(
    (state) => state.employeeProfile
  );

  const { loading, error }: EditSalaryDetailsState = useTypedSelector(
    (state) => state.editSalaryDetails
  );

  const { editSalaryDetails } = useActions();

  const salaryDetails = data?.data.salaryDetails;

  const [baseSalary, setBaseSalary] = useState<number>();
  const [paymentType, setPaymentType] = useState<string>("");
  const [PfRate, setPfRate] = useState<number>();
  const [grossSalary, setGrossSalary] = useState<number>();
  const [bonus, setBonus] = useState<number>();
  const [HRA, setHRA] = useState<number>();

  useEffect(() => {
    setBaseSalary(salaryDetails?.baseSalary!);
    setPaymentType(salaryDetails?.paymentType!);
    setPfRate(salaryDetails?.PfRate!);
    setGrossSalary(salaryDetails?.grossSalary!);
    setBonus(salaryDetails?.bonus!);
    setHRA(salaryDetails?.HRA!);
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await editSalaryDetails("sd", salaryDetails?.employee!, {
      baseSalary,
      bonus,
      paymentType,
      PfRate,
      grossSalary,
      HRA,
    });

    if (`${res}` === "success") {
      toast.success("Successfully Updated");
      setEdit(false);
    } else {
      toast.error(`${res}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.InputGroup}>
        <AddInputComp
          value={baseSalary}
          text="Base Salary"
          type="number"
          handler={setBaseSalary}
        />

        <AddInputComp
          value={paymentType}
          text="Payment type"
          type="text"
          handler={setPaymentType}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={PfRate}
          text="PF rate"
          type="number"
          handler={setPfRate}
        />

        <AddInputComp
          value={grossSalary}
          text="Gross Salary"
          type="text"
          handler={setGrossSalary}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={bonus}
          text="Bonus"
          type="number"
          handler={setBonus}
        />

        <AddInputComp value={HRA} text="HRA" type="number" handler={setHRA} />
      </div>

      {loading && <FixedSpinner />}

      <SubmitButton submit={""} />
    </form>
  );
};

export default SalaryDetailsForm;
