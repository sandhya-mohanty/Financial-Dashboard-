import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import TransactionsTable from "../components/dashboard/TransactionsTable";
import { useState, type ContextType } from "react";
import { useOutletContext } from "react-router-dom";

interface TransactionListProps {
  isDarkMode: boolean;
}

export default function TransactionList() {
    const { isDarkMode } = useOutletContext<TransactionListProps>();

  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div className={`rounded-xl p-4 shadow-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <TransactionsTable 
        isDarkMode={isDarkMode} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />      
    </div>
  );
}
