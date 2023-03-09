import PieChart from "../PieChart";
import { VerificationsOptions } from "./chartsOptions";
import { VerificationsSeries } from "./chartsSeries";

const VerificationsChart = () => {
  return (
    <>
      <PieChart series={VerificationsSeries} options={VerificationsOptions} />
    </>
  );
};

export default VerificationsChart;
