import { FC } from "react";
import { PrimaryButtonContainer } from "./styles";

interface ButtonI {
  text: string;
  handleClick?: any;
  outlined?: boolean;
  size?: string;
}
const PrimaryButton: FC<ButtonI> = ({ text, handleClick, outlined, size }) => {
  return (
    <PrimaryButtonContainer
      onClick={handleClick}
      outlined={outlined}
      size={size}
    >
      {text}
    </PrimaryButtonContainer>
  );
};

export default PrimaryButton;
