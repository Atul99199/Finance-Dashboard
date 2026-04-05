import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { CartesianGrid } from "recharts";

<CartesianGrid strokeDasharray="3 3" />;

const BalanceChart = ({ data }) => {
  return (
    <>
      <LineChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickFormatter={(value) => {
            const d = new Date(value);
            const day = String(d.getDate()).padStart(2, "0");
            const month = String(d.getMonth() + 1).padStart(2, "0");
            const year = String(d.getFullYear()).slice(-2);
            return `${day}-${month}-${year}`;
          }}
        />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="balance"
          stroke="#5d25f0"
          strokeWidth={2}
        />
      </LineChart>
    </>
  );
};

export default BalanceChart;
