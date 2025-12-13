 
import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export function StatCard({ icon: Icon, title, value, gradientColor, trend }) {
  const isPositive = trend > 0;

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#FFCDC9] hover:shadow-xl transition-all hover:-translate-y-1">
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg"
        style={{
          background: `linear-gradient(to bottom right, ${gradientColor.from}, ${gradientColor.to})`,
        }}
      >
        <Icon className="text-white" size={24} />
      </div>

      <p className="text-text-secondary text-sm font-medium mb-1">{title}</p>
      <p className="text-2xl lg:text-3xl font-bold text-text mb-4">{value}</p>

      <div className="flex items-center gap-2">
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-full ${
            isPositive ? "bg-green-50" : "bg-red-50"
          }`}
        >
          {isPositive ? (
            <TrendingUp size={16} className="text-green-600" />
          ) : (
            <TrendingDown size={16} className="text-red-600" />
          )}
          <span
            className={`text-sm font-semibold ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {Math.abs(trend)}%
          </span>
        </div>
        <p className="text-xs text-text-secondary">vs last week</p>
      </div>
    </div>
  );
}
