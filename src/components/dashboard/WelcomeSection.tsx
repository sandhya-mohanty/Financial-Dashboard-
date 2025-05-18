import ProgressBar from "../ui/ProgressBar";

interface WelcomeSectionProps {
  isDarkMode: boolean;
}

export default function WelcomeSection({ isDarkMode }: WelcomeSectionProps) {
  const userData = {
    name: "Sandhya Mohanty",
    currentSavings: 1200,
    monthlySavingsGoal: 2000,
  };

  // Get current date and format it
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-2xl font-bold mb-2 sm:mb-0">
          Welcome back, {userData.name.split(" ")[0]}!
        </h2>
        <div className="text-sm">
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            {formattedDate}
          </p>
        </div>
      </div>

      <div
        className={`p-4 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-sm`}
      >
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium">Monthly Savings Goal</p>
          <p className="font-medium">
            ${userData.currentSavings} / ${userData.monthlySavingsGoal}
          </p>
        </div>
        <ProgressBar
          progress={(userData.currentSavings / userData.monthlySavingsGoal) * 100}
          color="bg-blue-500"
        />
        <p
          className={`mt-2 text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {Math.round(
            (userData.currentSavings / userData.monthlySavingsGoal) * 100
          )}
          % of monthly goal
        </p>
      </div>
    </div>
  );
}
