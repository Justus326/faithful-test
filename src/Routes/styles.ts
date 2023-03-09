import styled from "styled-components";
import { theme } from "../theme";
import { media } from "./../Screens";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  height: 100vh;
`;

export const AppBody = styled.div`
  display: flex;
  width: 100%;
  flex: 0.9;
  overflow: hidden;
  position: relative;
`;

export const RouteBody = styled.div`
  //   flex: 0.85;
  width: 85%;
  background-color: ${theme.colors.bgPink};
  padding: 50px;
  overflow-y: scroll;
  position: relative;

  ${media.tablet} {
    width: 100%;
  }

  ${media.phone} {
    padding: 30px 10px;
  }
`;
