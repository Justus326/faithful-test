import { FC } from "react";
import { FaTimeButton } from "./styles";

interface IButton { 
  faTimes: any; 
  handleClick?: any;
  outlined?: boolean;
  size?: string;
}
const FaTimesButton: FC<IButton> = ({  handleClick, outlined, size, faTimes }) => {
  return (
    <FaTimeButton
      onClick={handleClick}
      outlined={outlined}
      size={size}
    >
      {faTimes}
    </FaTimeButton>
  );
};

export default FaTimesButton;
