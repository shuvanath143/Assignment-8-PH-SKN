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

const RatingsChart = ({ appDetails }) => {
  console.log(appDetails);

  const s = [...appDetails.ratings].sort(
    (a, b) => parseInt(b.name) - parseInt(a.name)
  );
  console.log(s);

  return (
    <div className="">
      <div className="w-full h-[400px] bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {appDetails.title} Ratings Breakdown
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical" 
            data={s}
            margin={{ top: 20, right: 0, left: 0, bottom: 50 }}
          >
            
            <XAxis type="number" />
            
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fontSize: 18 }}
              width={80}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#ff8811" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="divider"></div>
      <div className="text-justify mx-3 my-2">{appDetails.description}</div>
    </div>
  );
};

export default RatingsChart;
