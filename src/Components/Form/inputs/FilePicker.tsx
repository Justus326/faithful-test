import React, { FC } from "react";
import { FilePickerContainer } from "./styles";

interface IFilePicker {
  text: string;
  handleChange?: any;
}
const FilePicker: FC<IFilePicker> = ({ text }) => {
  return (
    <FilePickerContainer>
      <label htmlFor="file">{text}</label>
      <input type="file" id="file" accept=".png,.svg,.jpeg,.peg,.webp" />
    </FilePickerContainer>
  );
};

export default FilePicker;
