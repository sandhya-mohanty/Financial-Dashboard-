import { ChevronRight, Search, Filter } from "lucide-react";
import { recentTransactions } from "../../utils/data";
import type { Transaction } from "../../utils/type";
import { useState, type Dispatch, type SetStateAction } from "react";

interface TransactionsTableProps {
  isDarkMode: boolean;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function TransactionsTable({
  isDarkMode,
  searchTerm,
  setSearchTerm,
}: TransactionsTableProps) {
  const categories: string[] = [
    "All",
    ...Array.from(new Set(recentTransactions.map((t) => t.category))),
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const filteredTransactions = recentTransactions.filter((transaction: Transaction) => {
    const matchesSearch =
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || transaction.category === selectedCategory;

    const matchesType = typeFilter === "All" || transaction.type === typeFilter;

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div
      className={`lg:col-span-2 p-4 sm:p-6 rounded-lg ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } shadow-sm`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 space-y-3 sm:space-y-0">
        <h3 className="text-lg font-medium">Recent Transactions</h3>

        <div className="flex flex-col sm:flex-row sm:space-x-2 w-full sm:w-auto space-y-2 sm:space-y-0">
          {/* Search Input */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search
                size={16}
                className={isDarkMode ? "text-gray-400" : "text-gray-500"}
              />
            </div>
            <input
              type="text"
              placeholder="Search transactions..."
              className={`pl-10 pr-4 py-2 text-sm rounded-lg w-full border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 text-white placeholder-gray-400 border-gray-600"
                  : "bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200"
              }`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center justify-center cursor-pointer px-3 py-2 text-sm rounded-lg border w-full sm:w-auto ${
              isDarkMode
                ? "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
            }`}
          >
            <Filter size={16} className="mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className={`p-4 mb-4 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`}>
          <div className="flex flex-col sm:flex-row sm:space-x-4 gap-4">
            {/* Category Filter */}
            <div className="flex-1 min-w-[120px]">
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`rounded-md px-3 py-2 text-sm w-full border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode
                    ? "bg-gray-800 text-white border-gray-600"
                    : "bg-white text-gray-900 border-gray-200"
                }`}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex-1 min-w-[120px]">
              <label className="block text-sm font-medium mb-1">Type</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className={`rounded-md px-3 py-2 text-sm w-full border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode
                    ? "bg-gray-800 text-white border-gray-600"
                    : "bg-white text-gray-900 border-gray-200"
                }`}
              >
                <option value="All">All</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>
            </div>

            {/* Clear Filters Button */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setTypeFilter("All");
                  setSearchTerm("");
                }}
                className={`px-3 py-2 text-sm rounded-lg w-full sm:w-auto ${
                  isDarkMode
                    ? "bg-gray-600 text-gray-200 hover:bg-gray-500"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
          <thead className={isDarkMode ? "bg-gray-700" : "bg-gray-50"}>
            <tr>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium uppercase tracking-wider">
                Date
              </th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium uppercase tracking-wider">
                Description
              </th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium uppercase tracking-wider">
                Category
              </th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? "divide-gray-700" : "divide-gray-200"}`}>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    {transaction.description}
                  </td>
                  <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                    {transaction.category}
                  </td>
                  <td
                    className={`px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap font-medium ${
                      transaction.type === "Credit" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {transaction.type === "Credit" ? "+" : "-"}$
                    {transaction.amount.toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-3 sm:px-6 py-4 text-center">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <button
          className={`text-sm flex items-center justify-center mx-auto hover:underline ${
            isDarkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          View all transactions
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
