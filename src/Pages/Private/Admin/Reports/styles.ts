import styled from "styled-components";
import { media } from "../../../../Screens";

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  widdth: 100%;
  justify-content: space-between;
  gap: 30px;
  height: 50vh;

  ${media.phone} {
    height: 100vh;
    flex-direction: column;
  }
`;

export const LeftChartContainer = styled.div`
  flex: 0.5;
  height: 100%;
  width: 100%;

  ${media.phone} {
    flex: 1;
  }
`;
export const RightChartContainer = styled.div`
  flex: 0.5;
  height: 100%;
  width: 100%;

  ${media.phone} {
    flex: 1;
  }
`;
