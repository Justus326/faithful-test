import AreaChart from "../AreaChart";
import { ReportOptions } from "./chartsOptions";
import { ReportSeries } from "./chartsSeries";

const ReportChart = () => {
  return (
    <>
      <AreaChart series={ReportSeries} options={ReportOptions} />
    </>
  );
};

export default ReportChart;
