import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ appDetails }) => {

    console.log(appDetails)
    // const sortedRatings = ratings.slice.reverse()
    const s = [...appDetails.ratings].sort((a, b) => parseInt(b.name) - parseInt(a.name));
    console.log(s)
  return (
    <div className="w-full h-[400px] bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {appDetails.title} Ratings Breakdown
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical" // 🔹 Flip chart orientation
          data={s}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* X axis now represents count */}
          <XAxis type="number" />
          {/* Y axis now shows rating names */}
          <YAxis dataKey="name" type="category" tick={{ fontSize: 14 }} width={80} />
          {/* <Tooltip /> */}
          <Legend />
          <Bar dataKey="count" fill="#4f46e5"  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
