"use client"
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Sample month-wise task completion data
const data = [
  { month: "Jan", tasks: 20 },
  { month: "Feb", tasks: 35 },
  { month: "Mar", tasks: 40 },
  { month: "Apr", tasks: 25 },
  { month: "May", tasks: 50 },
  { month: "Jun", tasks: 45 },
  { month: "Jul", tasks: 30 },
  { month: "Aug", tasks: 60 },
  { month: "Sep", tasks: 55 },
  { month: "Oct", tasks: 48 },
  { month: "Nov", tasks: 38 },
  { month: "Dec", tasks: 70 },
];

const Barcharts = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="tasks" fill="#7CAF94" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Barcharts;
