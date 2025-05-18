export type ViewType = "monthly" | "quarterly" | "ytd";

interface ViewToggleProps {
  isDarkMode: boolean;
  viewType: ViewType;
  setViewType: (view: ViewType) => void;
}

const viewTypes: ViewType[] = ["monthly", "quarterly", "ytd"];

export default function ViewToggle({
  isDarkMode,
  viewType,
  setViewType,
}: ViewToggleProps) {
  return (
    <div className="flex justify-end mb-6">
      <div
        className={`inline-flex rounded-md shadow-sm overflow-hidden ${
          isDarkMode ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        {viewTypes.map((type, index) => (
          <button
            key={type}
            onClick={() => setViewType(type)}
            className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 ${
              viewType === type
                ? isDarkMode
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white"
                : isDarkMode
                ? "text-gray-300 hover:bg-gray-600"
                : "text-gray-700 hover:bg-gray-200"
            } ${index === 0 ? "rounded-l-md" : ""} ${
              index === viewTypes.length - 1 ? "rounded-r-md" : ""
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

