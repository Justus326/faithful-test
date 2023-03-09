/* eslint-disable react/require-default-props */
import { FC } from "react";
import Chart from "react-apexcharts";

interface AreaChartProps {
  series: any;
  options: object;
  title?: string;
}

const AreaChart: FC<AreaChartProps> = ({ series, options, title }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fff",
        padding: "15px 5px",
        borderRadius: "5px",
      }}
    >
      {false ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          Loading...
        </div>
      ) : (
        <>
          {series && (
            <Chart
              type="area"
              width="100%"
              height="100%"
              series={series}
              options={options}
            />
          )}
        </>
      )}
    </div>
  );
};

export default AreaChart;
