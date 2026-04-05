import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#5d25f0", "#22c55e", "#f97316", "#ef4444"];

const ExpensePie = ({ data }) => {
  return (
    <PieChart width={350} height={350}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        innerRadius={60}
        outerRadius={100}
        label
      >
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ExpensePie;
