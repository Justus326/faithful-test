import React from "react";
import MonthlyRegChart from "../../../../Components/Charts/Admin/MonthlyRegChart";
import PaymentChart from "../../../../Components/Charts/Admin/PaymentChart";
import ReportChart from "../../../../Components/Charts/Admin/ReportChart";
import VerificationsChart from "../../../../Components/Charts/Admin/VerificationsChart";
import {
  ChartContainer,
  LeftChartContainer,
  ReportContainer,
  RightChartContainer,
} from "./styles";

const Report = () => {
  return (
    <ReportContainer>
      <ChartContainer>
        <LeftChartContainer>
          <MonthlyRegChart />
        </LeftChartContainer>
        <RightChartContainer>
          <PaymentChart />
        </RightChartContainer>
      </ChartContainer>
      <ChartContainer>
        <LeftChartContainer>
          <VerificationsChart />
        </LeftChartContainer>
        <RightChartContainer>
          <ReportChart />
        </RightChartContainer>
      </ChartContainer>
    </ReportContainer>
  );
};

export default Report;
