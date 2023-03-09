import React from "react";
import BarChart from "../BarChart";
import { MonthlyRegOptions } from "./chartsOptions";
import { MonthlyRegSeries } from "./chartsSeries";

const MonthlyRegChart = () => {
  return (
    <>
      <BarChart series={MonthlyRegSeries} options={MonthlyRegOptions} />
    </>
  );
};

export default MonthlyRegChart;
