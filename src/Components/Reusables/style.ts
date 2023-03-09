import styled from "styled-components";
import { media } from "../../Screens";
import { theme } from "./../../theme";

export const SelectBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  background-color: transparent;
  padding: 20px 0;
  // margin-top: 30px;
  flex-wrap: wrap;

  ${media.phone} {
    padding: 10px 0;
  }
`;

export const SubSearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SubSearchTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
  color: ${theme.colors.secondaryColor};
`;
