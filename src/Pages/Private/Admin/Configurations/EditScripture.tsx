import React, { FC } from "react";
import PrimaryButton from "../../../../Components/Form/Buttons/PrimaryButton";
import PrimarySelector from "../../../../Components/Form/inputs/PrimarySelector";
import TextInput from "../../../../Components/Form/inputs/TextInput";
import { AdsContainar } from "./style";

interface IEdit {
  setState: any;
}
const EditScripture: FC<IEdit> = ({ setState }) => {
  return (
    <AdsContainar >
      <TextInput placeholder={"Select Date"} type="date" />
      <div className="selectContainer">
        <PrimarySelector />
        <PrimarySelector />
        <PrimarySelector />
      </div>
      <div className="selectContainer">
        <PrimaryButton text="Edit" size="small" />
        <PrimaryButton
          text="Cancel"
          size="small"
          handleClick={() => setState(false)}
        />
      </div>
    </AdsContainar>
  );
};

export default EditScripture;
