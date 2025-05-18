import NotificationItem from "../ui/NotificationItem";

interface Notification {
  id: number;
  text: string;
  type: "warning" | "tip" | "reminder";
}

interface NotificationsCardProps {
  isDarkMode: boolean;
  onClose: () => void;
}

export default function NotificationsCard({ isDarkMode, onClose }: NotificationsCardProps) {
  const notifications: Notification[] = [
    { id: 1, text: "You're spending 15% more on food this month", type: "warning" },
    { id: 2, text: "Salary received - good time to add to your investments", type: "tip" },
    { id: 3, text: "Your electric bill is due in 2 days", type: "reminder" },
  ];

  return (
    <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm relative`}>
      <button 
        onClick={onClose}
        aria-label="Close notifications"
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        &times;
      </button>

      <h3 className="text-lg font-medium mb-4">Notifications & Tips</h3>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <NotificationItem 
            key={notification.id} 
            notification={notification} 
            isDarkMode={isDarkMode} 
          />
        ))}
      </div>
    </div>
  );
}
