import React from "react";
import ProgressBar from "./ProgressBar";

interface Budget {
  category: string;
  spent: number;
  budget: number;
}

interface BudgetItemProps {
  budget: Budget;
  isDarkMode: boolean;
}

export default function BudgetItem({ budget, isDarkMode }: BudgetItemProps) {
  const progress = Math.round((budget.spent / budget.budget) * 100);
  let progressColor = "bg-green-500";

  if (progress > 90) {
    progressColor = "bg-red-500";
  } else if (progress > 75) {
    progressColor = "bg-yellow-500";
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
          {budget.category}
        </span>
        <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
          ${budget.spent} / ${budget.budget}
        </span>
      </div>
      <ProgressBar progress={progress} color={progressColor} />
      <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
        {progress}% used
      </p>
    </div>
  );
}
