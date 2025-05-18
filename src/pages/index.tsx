import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FinanceDashboard from './FinanceDashboard';
import Dashboard from './Dashboard';
import Transactions from './Transactions';
import Budgets from './Budgets';
import Profile from './Profile';
import Goals from './Goals';
import Settings from './Settings';
import Logout from './Logout';
import Investments from './Investments';

const Finance: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FinanceDashboard />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="transactions" element={<Transactions />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="profile" element={<Profile />} />
          <Route path="investments" element={<Investments />} />
          <Route path="goals" element={<Goals />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Finance
