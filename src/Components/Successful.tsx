import { FC } from "react";
import styled from "styled-components";
import { AuthSmallText } from "../Pages/Auth/style";
import { media } from "../Screens";
import { theme } from "../theme";
import PrimaryButton from "./Form/Buttons/PrimaryButton";

export const SuccessContainer = styled.div`
  display: flex;
  aling-items: center;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  width: 100%;
  gap: 50px;
`;

const SuccesImage = styled.img`
  width: 100px;
`;

const SuccessText = styled.p`
  display: flex;
  aling-items: center;
  justify-content: center;
  font-size: 30px;
  color: ${theme.colors.primaryColor} ${media.phone} {
    font-size: 20px;
  }
`;

interface SuccessI {
  successText: string;
  subText?: string;
  onClick?: any;
  buttonText?: string;
}
const Successful: FC<SuccessI> = ({
  successText,
  onClick,
  buttonText,
  subText,
}) => {
  return (
    <SuccessContainer>
      <SuccesImage src="/assets/images/png/check.png" />
      <SuccessText>{successText}</SuccessText>
      <AuthSmallText>{subText}</AuthSmallText>
      {(onClick || buttonText) && (
        <PrimaryButton text={`${buttonText}`} handleClick={onClick} />
      )}
    </SuccessContainer>
  );
};

export default Successful;
