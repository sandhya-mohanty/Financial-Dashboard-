import { ChevronRight } from "lucide-react";
import BudgetItem from "../ui/BudgetItem";

// Define the prop types
interface BudgetingAssistantProps {
  isDarkMode: boolean;
}

// Define the budget item type
interface CategoryBudget {
  category: string;
  budget: number;
  spent: number;
}

export default function BudgetingAssistant({ isDarkMode }: BudgetingAssistantProps) {
  const categoryBudgets: CategoryBudget[] = [
    { category: 'Housing', budget: 2400, spent: 2200 },
    { category: 'Food', budget: 1000, spent: 800 },
    { category: 'Transportation', budget: 800, spent: 600 },
    { category: 'Entertainment', budget: 600, spent: 400 },
  ];

  return (
    <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
      <h3 className="text-lg font-medium mb-4">Budgeting Assistant</h3>
      <div className="space-y-4">
        {categoryBudgets.map((budget) => (
          <BudgetItem 
            key={budget.category} 
            budget={budget} 
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline flex items-center justify-center mx-auto`}>
          Manage all budgets
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
