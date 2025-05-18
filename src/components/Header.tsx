import { useState } from "react";
import { Bell, Menu, Moon, Sun } from "lucide-react";
import NotificationsCard from "./dashboard/NotificationsCard";

// Define the props type
interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  openMobileMenu: () => void;
}

export default function Header({
  isDarkMode,
  toggleDarkMode,
  openMobileMenu,
}: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  const userData = {
    name: "Sandhya Mohanty",
    avatar:
      "https://img.freepik.com/free-psd/3d-render-young-businesswoman-with-long-brown-hair-wearing-light-blue-blazer-white-shirt-she-looks-friendly-approachable-perfect-avatar-professional-woman_632498-32059.jpg",
  };

  return (
    <div
      className={`sticky top-0 z-10 flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8 ${
        isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } border-b shadow-sm`}
    >
      <div className="flex items-center">
        <button
          onClick={openMobileMenu}
          className="lg:hidden mr-2 text-gray-500 hover:text-gray-700"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-medium hidden sm:block">Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4 relative">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            isDarkMode ? "bg-gray-700" : "bg-gray-100"
          }`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="relative">
          <button onClick={toggleNotifications} className="p-2 relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 z-50">
              <NotificationsCard
                isDarkMode={isDarkMode}
                onClose={() => setShowNotifications(false)}
              />
            </div>
          )}
        </div>

        <div className="flex items-center">
          <img
            src={userData.avatar}
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <span className="ml-2 hidden sm:block">{userData.name}</span>
        </div>
      </div>
    </div>
  );
}
