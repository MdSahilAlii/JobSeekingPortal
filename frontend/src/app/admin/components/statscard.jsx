import React from "react";

const StatsCard = ({ title, value, change }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-md text-white flex flex-col">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <span className={`text-sm ${change > 0 ? "text-green-400" : "text-red-400"}`}>
        {change > 0 ? `↑ ${change}%` : `↓ ${change}%`}
      </span>
    </div>
  );
};

export default StatsCard;
