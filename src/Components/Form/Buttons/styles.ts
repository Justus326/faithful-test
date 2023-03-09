import styled from "styled-components";
import { theme } from "./../../../theme";
import { media } from "./../../../Screens";

interface buttonI {
  outlined?: boolean;
  size?: string;
}

export const PrimaryButtonContainer = styled.button<buttonI>`
  outline: none;
  background: ${(props) =>
    props.outlined ? theme.colors.bgWhite : theme.colors.primaryColor};
  width: ${(props) =>
    props.size === "small"
      ? "100px"
      : props.size === "medium"
      ? "250px"
      : "300px"};
  height: 50px;
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
    width: 70px;
    height: 30px;
    
  }

  &:focus {
    outline: 1px solid ${theme.colors.primaryColor};
  }
`;



interface Ibutton {
  outlined?: boolean;
  size?: string;
}

export const FaTimeButton = styled.button<Ibutton>`
  border: 1px solid black;
  display: flex; 
  justify-content:center;
  align-items:center;
  width:25px;
  height: 25px;
  position: absolute;
  margin-left:450px;
  margin-top:-20px;
  background: #B603C9;  
  color: white;
  border-radius: 50%;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer; 
  ${media.phone} {
    width:25px;
    height: 25px;
    margin-left:300px;
    margin-top:-400px;
  }
  &:focus {
    outline: 1px solid #343232;
  }
`;
