import React, { FC } from "react";
import PrimaryButton from "../../../../Components/Form/Buttons/PrimaryButton";
import PrimarySelector from "../../../../Components/Form/inputs/PrimarySelector";
import TextInput from "../../../../Components/Form/inputs/TextInput";
import { AdsContainar } from "./style";

interface IAdd {
  setState: any;
}
const AddScripture: FC<IAdd> = ({ setState }) => {
  return (
    <AdsContainar>
      <TextInput placeholder={"Select Date"} type="date" />
      <div className="selectContainer">
        <PrimarySelector />
        <PrimarySelector />
        <PrimarySelector />
      </div>
      <div className="selectContainer">
        <PrimaryButton text="Add" size="small" />
        <PrimaryButton
          text="Cancel"
          size="small"
          handleClick={() => setState(false)}
        />
      </div>
    </AdsContainar>
  );
};

export default AddScripture;
