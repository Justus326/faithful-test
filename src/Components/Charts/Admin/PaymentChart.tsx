import React from "react";
import LineChart from "../LineChart";
import { PaymentOptions } from "./chartsOptions";
import { PaymentSeries } from "./chartsSeries";

const PaymentChart = () => {
  return (
    <>
      <LineChart series={PaymentSeries} options={PaymentOptions} />
    </>
  );
};

export default PaymentChart;
