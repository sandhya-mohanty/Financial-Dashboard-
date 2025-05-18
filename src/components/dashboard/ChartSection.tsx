import { useState } from "react";
import {
  AreaChart,
  PieChart,
  Area,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { expenseVsIncomeData, spendingByCategory } from "../../utils/data";

interface ChartSectionProps {
  isDarkMode?: boolean;
}

interface SpendingCategory {
  name: string;
  value: number;
  color: string;
}

export default function ChartSection({ isDarkMode = false }: ChartSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Expense vs Income Chart */}
      <div className={`p-6 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}>
        <h3 className="text-lg font-medium mb-4">Income vs Expenses</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={expenseVsIncomeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" tick={{ fill: isDarkMode ? "#E5E7EB" : "#4B5563" }} />
              <YAxis
                tick={{ fill: isDarkMode ? "#E5E7EB" : "#4B5563" }}
                tickFormatter={(value) => `$${value}`}
              />
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDarkMode ? "#374151" : "#FFFFFF",
                  borderColor: isDarkMode ? "#4B5563" : "#E5E7EB",
                  color: isDarkMode ? "#F9FAFB" : "#111827",
                }}
                formatter={(value: number) => [`$${value}`, undefined]}
              />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#10B981"
                fillOpacity={1}
                fill="url(#colorIncome)"
                name="Income"
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#EF4444"
                fillOpacity={1}
                fill="url(#colorExpenses)"
                name="Expenses"
              />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Spending Pie Chart */}
      <div className={`p-6 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}>
        <h3 className="text-lg font-medium mb-4">Spending by Category</h3>
        <div className="h-80 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spendingByCategory as SpendingCategory[]}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }: { name: string; percent: number }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                onClick={(data) => setSelectedCategory(data.name)}
              >
                {spendingByCategory.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke={isDarkMode ? "#1F2937" : "#FFFFFF"}
                    strokeWidth={selectedCategory === entry.name ? 3 : 1}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`$${value}`, undefined]}
                contentStyle={{
                  backgroundColor: isDarkMode ? "#374151" : "#FFFFFF",
                  borderColor: isDarkMode ? "#4B5563" : "#E5E7EB",
                  color: isDarkMode ? "#F9FAFB" : "#111827",
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value: string) => (
                  <span style={{ color: isDarkMode ? "#E5E7EB" : "#4B5563" }}>{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {selectedCategory && (
          <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded-md">
            <p className="font-medium">{selectedCategory} subcategories:</p>
            <p className="text-sm">Click to explore spending details (coming soon)</p>
          </div>
        )}
      </div>
    </div>
  );
}
