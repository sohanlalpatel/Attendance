"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", present: 142, absent: 8, late: 6 },
  { day: "Tue", present: 145, absent: 5, late: 6 },
  { day: "Wed", present: 138, absent: 10, late: 8 },
  { day: "Thu", present: 150, absent: 4, late: 2 },
  { day: "Fri", present: 140, absent: 12, late: 4 },
  { day: "Sat", present: 95, absent: 58, late: 3 },
];

export function AttendanceChart() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#FFCDC9]">
      <h3 className="text-lg font-bold text-text mb-6">Weekly Attendance</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="day" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #FFCDC9",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#1F2937" }}
          />
          <Legend />
          <Bar dataKey="present" fill="#10B981" name="Present" />
          <Bar dataKey="absent" fill="#EF4444" name="Absent" />
          <Bar dataKey="late" fill="#F59E0B" name="Late" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
