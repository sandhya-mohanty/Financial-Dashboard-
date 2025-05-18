export interface Transaction {
  id: number;
  date: string;
  description: string;
  type: "Credit" | "Debit";
  category: string;
  amount: number;
}

export interface ExpenseIncomeEntry {
  month: string;
  income: number;
  expenses: number;
}

export interface CategorySpending {
  name: string;
  value: number;
  color: string;
}
export interface Notification {
  id: number;
  text: string;
  type: "warning" | "tip" | "reminder";
}