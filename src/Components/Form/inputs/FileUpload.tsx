import React, { FC } from "react";
import { MdInsertPhoto } from "react-icons/md";
import { FileUploadContainer } from "./styles";

interface IFilePicker {
  text: string;
  handleChange?: any;
}
const FileUpload: FC<IFilePicker> = ({ text }) => {
  return (
    <FileUploadContainer htmlFor="file">
      <div>
        <MdInsertPhoto />
      </div>
      <p>{text}</p>
      <input type="file" id="file" accept=".png,.svg,.jpeg,.peg,.webp" />
    </FileUploadContainer>
  );
};

export default FileUpload;
