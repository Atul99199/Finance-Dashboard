import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#5d25f0", "#22c55e", "#f97316", "#ef4444"];

const ExpensePie = ({ data }) => {
  return (
    <PieChart width={350} height={350}>
      <Pie data={data} dataKey="value">
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default ExpensePie;