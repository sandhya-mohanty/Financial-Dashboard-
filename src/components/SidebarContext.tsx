import {
  CreditCard,
  Gift,
  Home,
  LogOut,
  PieChartIcon,
  Settings,
  TrendingUp,
  UserCircle
} from "lucide-react";
import type { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
// import { ReactElement } from "react";

// Define props type
interface SidebarContentProps {
  isDarkMode: boolean;
}

// Define navigation item type
interface NavItem {
  name: string;
  path: string;
  icon: ReactElement;
}

export default function SidebarContent({ isDarkMode }: SidebarContentProps) {
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { name: 'Transactions', path: '/transactions', icon: <CreditCard size={20} /> },
    { name: 'Budgets', path: '/budgets', icon: <PieChartIcon size={20} /> },
    { name: 'Investments', path: '/investments', icon: <TrendingUp size={20} /> },
    { name: 'Goals', path: '/goals', icon: <Gift size={20} /> },
    { name: 'Profile', path: '/profile', icon: <UserCircle size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="space-y-1">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.name}
            to={item.path}
            className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
              isActive
                ? isDarkMode
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-blue-600'
                : isDarkMode
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </Link>
        );
      })}

      <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
        <Link
          to="/logout"
          className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
            isDarkMode
              ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
              : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
          }`}
        >
          <span className="mr-3"><LogOut size={20} /></span>
          Sign Out
        </Link>
      </div>
    </div>
  );
}
