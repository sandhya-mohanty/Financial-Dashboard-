// FinanceDashboard.tsx
import  { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MobileSidebar from '../components/MobileSidebar';

export default function FinanceDashboard() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isDarkMode={isDarkMode}
      />

      {/* Desktop Sidebar */}
      <Sidebar isDarkMode={isDarkMode} />

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col">
        {/* Header */}
        <Header
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          openMobileMenu={() => setIsMobileMenuOpen(true)}
        />

        {/* Routed Component (Dashboard, etc.) */}
        <div className="p-4">
          <Outlet context={{ isDarkMode }} />
        </div>
      </div>
    </div>
  );
}
