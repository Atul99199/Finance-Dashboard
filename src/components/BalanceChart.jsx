import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const BalanceChart = ({ data }) => {
  return (
    <>
      <LineChart width={500} height={250} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="balance" stroke="#5d25f0" />
      </LineChart>
    </>
  );
};

export default BalanceChart;
