import styled from "styled-components";
import { theme } from "../../../../theme";

export const AdsRouteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const AdsContainar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 946px;
  min-height: 300px;
  background: ${theme.colors.bgWhite};
  padding: 50px;

  div.selectContainer {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

export const AdsContentContainer = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-around;
  gap: 70px;
`;
export const AdsLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const AdsRightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// daily scriptures
export const DailyScripturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const ScripturesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
`;
