import { ArrowDownRight, ArrowUpRight, TrendingUp, Wallet } from "lucide-react";
import OverviewCard from "../ui/OverviewCard";

type ViewType = "monthly" | "quarterly" | "ytd";

interface IncomeExpensesSavings {
  monthly: number;
  monthlyPrev: number;
  quarterly: number;
  quarterlyPrev: number;
  ytd: number;
  ytdPrev: number;
}

interface UserData {
  totalBalance: number;
  income: IncomeExpensesSavings;
  expenses: IncomeExpensesSavings;
  savingsRatio: IncomeExpensesSavings;
}

// Calculate percent change from previous to current
const calculatePercentChange = (current: number, previous: number): string => {
  if (previous === 0) return "N/A";
  const change = ((current - previous) / previous) * 100;
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(1)}%`;
};

interface OverviewCardsProps {
  isDarkMode: boolean;
  viewType: ViewType;
}

export default function OverviewCards({ isDarkMode, viewType }: OverviewCardsProps) {
  // Data includes previous periods to calculate changes
  const userData: UserData = {
    totalBalance: 38240.75,
    income: {
      monthly: 9200,
      monthlyPrev: 8800,
      quarterly: 27900,
      quarterlyPrev: 27000,
      ytd: 59300,
      ytdPrev: 56000,
    },
    expenses: {
      monthly: 6300,
      monthlyPrev: 6100,
      quarterly: 18900,
      quarterlyPrev: 18500,
      ytd: 39700,
      ytdPrev: 38000,
    },
    savingsRatio: {
      monthly: 0.31,
      monthlyPrev: 0.29,
      quarterly: 0.32,
      quarterlyPrev: 0.31,
      ytd: 0.33,
      ytdPrev: 0.30,
    },
  };

  // Current values for display
  const displayIncome = userData.income[viewType];
  const displayExpenses = userData.expenses[viewType];
  const displaySavingsRatio = userData.savingsRatio[viewType];

  // Previous period values for percent change
  const previousIncome = userData.income[`${viewType}Prev` as keyof IncomeExpensesSavings];
  const previousExpenses = userData.expenses[`${viewType}Prev` as keyof IncomeExpensesSavings];
  const previousSavingsRatio = userData.savingsRatio[`${viewType}Prev` as keyof IncomeExpensesSavings];

  // Labels for display
  const viewTypeLabels: Record<ViewType, string> = {
    monthly: "Monthly",
    quarterly: "Quarterly",
    ytd: "Year-to-Date",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <OverviewCard
        title="Total Balance"
        value={`$${userData.totalBalance.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}
        icon={<Wallet className="animate-pulse" />}
        color="bg-blue-600"
        isDarkMode={isDarkMode}
      />
      <OverviewCard
        title={`${viewTypeLabels[viewType]} Income`}
        value={`$${displayIncome.toLocaleString("en-US")}`}
        icon={<ArrowUpRight className="text-green-400" />}
        color="bg-green-600"
        percentChange={calculatePercentChange(displayIncome, previousIncome)}
        isDarkMode={isDarkMode}
      />
      <OverviewCard
        title={`${viewTypeLabels[viewType]} Expenses`}
        value={`$${displayExpenses.toLocaleString("en-US")}`}
        icon={<ArrowDownRight className="text-red-400" />}
        color="bg-red-600"
        percentChange={calculatePercentChange(displayExpenses, previousExpenses)}
        isDarkMode={isDarkMode}
      />
      <OverviewCard
        title={`${viewTypeLabels[viewType]} Savings Ratio`}
        value={`${Math.round(displaySavingsRatio * 100)}%`}
        icon={<TrendingUp className="text-purple-400" />}
        color="bg-purple-600"
        percentChange={calculatePercentChange(displaySavingsRatio, previousSavingsRatio)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
