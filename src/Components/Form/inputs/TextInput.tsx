import React, { FC } from "react";
import { InputContainer, InputText } from "./styles";

interface TextInputI {
  placeholder: any;
  value?: object;
  icon?: any;
  leftIcon?: any;
  name?: string;
  type?: string;
  readonly?: boolean;
}

const TextInput: FC<TextInputI> = ({
  value,
  placeholder,
  icon,
  name,
  type,
  readonly,
  leftIcon,
}) => {
  return (
    <InputContainer>
      <span>{leftIcon}</span>
      <InputText
        placeholder={placeholder}
        name={name}
        type={type}
        // defaultValue={value}
        readOnly={readonly}
      />
      <span>{icon}</span>
    </InputContainer>
  );
};

export default TextInput;
