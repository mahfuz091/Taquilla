import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { category: "Category 1", value: 10 },
  { category: "Category 2", value: 20 },
  { category: "Category 3", value: 15 },
  { category: "Category 4", value: 25 },
];

const HorizontalBarChart = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart
        layout='vertical'
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis type='number' dataKey='value' hide />
        <YAxis type='category' dataKey='category' hide />
        <Tooltip />
        <Legend />
        <Bar dataKey='value' fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizontalBarChart;
