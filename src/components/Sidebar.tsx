import SidebarContent from "./SidebarContext";

// Define prop types
interface SidebarProps {
  isDarkMode: boolean;
}

export default function Sidebar({ isDarkMode }: SidebarProps) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div
        className={`flex-1 flex flex-col min-h-0 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } border-r`}
      >
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center justify-center flex-shrink-0 px-4">
            <h1 className="text-xl font-bold">Finance Dashboard</h1>
          </div>
          <nav className="mt-8 flex-1 px-4">
            <SidebarContent isDarkMode={isDarkMode} />
          </nav>
        </div>
      </div>
    </div>
  );
}
