import { X } from "lucide-react";
import SidebarContent from "./SidebarContext";

// Define prop types
interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export default function MobileSidebar({
  isOpen,
  onClose,
  isDarkMode,
}: MobileSidebarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div
        className={`fixed inset-y-0 left-0 w-64 flex flex-col ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="font-bold text-xl">Finance Dashboard</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <SidebarContent isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}
