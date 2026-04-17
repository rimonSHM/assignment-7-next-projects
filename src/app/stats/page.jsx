"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const StatsPage = () => {
  // Figma design onujayi demo data
  const data = [
    { name: "Text", value: 30, color: "#8B5CF6" }, // Purple
    { name: "Call", value: 45, color: "#1E3932" }, // Dark Green (Design primary color)
    { name: "Video", value: 25, color: "#22C55E" }, // Green
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto py-16 px-6">
        
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Friendship Analytics
        </h1>

        {/* Chart Container Card */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-slate-700 mb-8 border-l-4 border-slate-800 pl-4">
            By Interaction Type
          </h3>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="45%"
                  innerRadius={85} // Doughnut hole size
                  outerRadius={130}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                
                <Tooltip 
                  contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                
                <Legend 
                  verticalAlign="bottom" 
                  align="center"
                  iconType="circle"
                  iconSize={10}
                  formatter={(value) => <span className="text-slate-600 font-medium px-2">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};



export default StatsPage;
