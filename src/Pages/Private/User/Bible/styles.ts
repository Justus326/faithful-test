import styled from "styled-components";
import { theme } from "../../../../theme";
import { media } from "./../../../../Screens";


export const InnerHeaderContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 70px;  
  width: 80%;
  padding: 0 50px;  
  gap: 30px;
  position: absolute;
  top: 0;
  left: 0;
  ${media.phone} {
    margin-left:30px;   
  }
`;

export const InnerNavlink = styled.div`
  display: flex;  
  justify-content: center;
  align-items: flex-end;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  color: ${theme.colors.secondaryColor};
  cursor: pointer;
  text-decoration: none;
  position: relative;
  width: auto;
  height: 100%;
  text-align: center;
  padding: 10px;

  &.active::after {
    content: "";
    background: ${theme.colors.primaryColor};
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ${media.phone} {
    font-size: 16px;
    padding-bottom: 10px;
  }
`;