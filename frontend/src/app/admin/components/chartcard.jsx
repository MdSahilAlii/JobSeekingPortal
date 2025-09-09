'use client';
import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "01 Mar", revenue: 9200, previous: 8700 },
  { name: "02 Mar", revenue: 10456, previous: 10356 },
  { name: "03 Mar", revenue: 9800, previous: 11000 },
  { name: "04 Mar", revenue: 11200, previous: 9500 },
  { name: "05 Mar", revenue: 12500, previous: 12200 },
  { name: "06 Mar", revenue: 11800, previous: 10800 },
  { name: "07 Mar", revenue: 13400, previous: 12000 },
];

const ChartCard = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-md text-white">
      <h2 className="text-xl font-bold mb-4">Total Sales</h2>
      <p className="text-3xl font-semibold mb-6">$47,867</p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#888" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", borderRadius: "8px" }}
            labelStyle={{ color: "#fff" }}
          />
          <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="previous" stroke="#f97316" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
