import styled from "styled-components";
import { PaystackButton } from "react-paystack";
import { theme } from "../../theme";
import { media } from "../../Screens";

interface buttonI {
  outlined?: boolean;
  size?: string;
}

export const PaystackCustomButton = styled(PaystackButton)<buttonI>`
  outline: none;
  background: ${(props) =>
    props.outlined ? theme.colors.bgWhite : theme.colors.primaryColor};
  width: ${(props) =>
    props.size === "small"
      ? "139px"
      : props.size === "medium"
      ? "235px"
      : "398px"};
  height: 53px;
  color: ${(props) =>
    props.outlined ? theme.colors.primaryColor : theme.colors.textWhite};
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  border: ${(props) =>
    props.outlined ? `2px solid ${theme.colors.primaryColor}` : "none"};
  ${media.phone} {
    font-size: 14px;
    width: 300px;
    height: 45px;
  }

  &:focus {
    outline: 1px solid ${theme.colors.primaryColor};
  }
`;
