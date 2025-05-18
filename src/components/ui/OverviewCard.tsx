// import React, { ReactNode } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import type { ReactNode } from "react";

interface OverviewCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  color: string;
  percentChange?: string; // optional string like "+5%" or "-3%"
  isDarkMode: boolean;
}

export default function OverviewCard({
  title,
  value,
  icon,
  color,
  percentChange,
  isDarkMode,
}: OverviewCardProps) {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{title}</p>
          <h4 className="text-2xl font-bold mt-1">{value}</h4>
        </div>
        <div className={`p-3 rounded-full ${color} bg-opacity-20`}>{icon}</div>
      </div>
      {percentChange && (
        <div className="flex items-center">
          <div
            className={`flex items-center ${
              percentChange.startsWith("+") ? "text-green-500" : "text-red-500"
            }`}
          >
            {percentChange.startsWith("+") ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            <span className="text-sm ml-1">{percentChange}</span>
          </div>
          <span className={`text-xs ml-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            vs. previous period
          </span>
        </div>
      )}
    </div>
  );
}
