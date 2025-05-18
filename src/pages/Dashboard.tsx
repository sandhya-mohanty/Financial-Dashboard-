import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import BudgetingAssistant from "../components/dashboard/BudgetingAssistant";
import ChartSection from "../components/dashboard/ChartSection";
import OverviewCards from "../components/dashboard/OverviewCards";
import TransactionsTable from "../components/dashboard/TransactionsTable";
import ViewToggle, { type ViewType } from "../components/dashboard/ViewToggle";
import WelcomeSection from "../components/dashboard/WelcomeSection";

interface OutletContext {
  isDarkMode: boolean;
}

export default function Dashboard() {
  const { isDarkMode } = useOutletContext<OutletContext>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewType, setViewType] = useState<ViewType>('monthly');

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8">
      <WelcomeSection isDarkMode={isDarkMode} />

      <ViewToggle 
        isDarkMode={isDarkMode} 
        viewType={viewType} 
        setViewType={setViewType} 
      />

      <OverviewCards 
        isDarkMode={isDarkMode} 
        viewType={viewType} 
      />

      <ChartSection isDarkMode={isDarkMode} />

      <div className="grid grid-cols-1">
        <TransactionsTable 
          isDarkMode={isDarkMode} 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="mt-2">
          <BudgetingAssistant isDarkMode={isDarkMode} />
        </div>
      </div>
    </main>
  );
}
