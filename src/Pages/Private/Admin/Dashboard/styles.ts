import styled from "styled-components";
import { theme } from "./../../../../theme";
import { media } from "./../../../../Screens";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  ${media.phone} {
    font-size: 10px;
  }
`;

export const WelcomeText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: ${theme.colors.secondaryColor};

  ${media.phone} {
    font-size: 30px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;

  ${media.phone} {
    flex-direction: column;
  }
`;

