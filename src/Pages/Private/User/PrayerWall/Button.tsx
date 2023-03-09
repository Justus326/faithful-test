import { FC } from "react";
import { ButtonContainer } from "./style";

interface ButtonI {
  text: string;
  handleClick?: any;
  outlined?: boolean;
  size?: string;
}
const Button: FC<ButtonI> = ({ text, handleClick, outlined, size }) => {
  return (
    <ButtonContainer
      onClick={handleClick}
      outlined={outlined}
      size={size}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
