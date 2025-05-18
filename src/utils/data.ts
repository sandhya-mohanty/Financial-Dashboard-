
import type { CategorySpending, ExpenseIncomeEntry, Transaction } from "./type";

export const recentTransactions: Transaction[] = [
  {
    id: 1,
    date: "2025-05-15",
    description: "Salary Deposit",
    type: "Credit",
    category: "Income",
    amount: 8500.0,
  },
  {
    id: 2,
    date: "2025-05-14",
    description: "Grocery Store",
    type: "Debit",
    category: "Food",
    amount: 125.48,
  },
  {
    id: 3,
    date: "2025-05-13",
    description: "Electric Bill",
    type: "Debit",
    category: "Utilities",
    amount: 180.0,
  },
  {
    id: 4,
    date: "2025-05-10",
    description: "Restaurant Dinner",
    type: "Debit",
    category: "Food",
    amount: 78.3,
  },
  {
    id: 5,
    date: "2025-05-09",
    description: "Gas Station",
    type: "Debit",
    category: "Transportation",
    amount: 45.75,
  },
  {
    id: 6,
    date: "2025-05-07",
    description: "Movie Tickets",
    type: "Debit",
    category: "Entertainment",
    amount: 32.99,
  },
  {
    id: 7,
    date: "2025-05-05",
    description: "Freelance Payment",
    type: "Credit",
    category: "Income",
    amount: 950.0,
  },
  {
    id: 8,
    date: "2025-05-03",
    description: "Internet Bill",
    type: "Debit",
    category: "Utilities",
    amount: 85.0,
  },
];

export const expenseVsIncomeData: ExpenseIncomeEntry[] = [
  { month: "Jan", income: 8200, expenses: 5600 },
  { month: "Feb", income: 8300, expenses: 5900 },
  { month: "Mar", income: 8400, expenses: 5700 },
  { month: "Apr", income: 8500, expenses: 5800 },
  { month: "May", income: 8600, expenses: 6100 },
  { month: "Jun", income: 8500, expenses: 5800 },
];

export const spendingByCategory: CategorySpending[] = [
  { name: "Housing", value: 2200, color: "#4F46E5" },
  { name: "Food", value: 800, color: "#10B981" },
  { name: "Transportation", value: 600, color: "#F59E0B" },
  { name: "Entertainment", value: 400, color: "#EC4899" },
  { name: "Utilities", value: 300, color: "#8B5CF6" },
  { name: "Others", value: 500, color: "#6B7280" },
];