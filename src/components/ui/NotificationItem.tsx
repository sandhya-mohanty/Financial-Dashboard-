import { AlertCircle, Clock, Info, Lightbulb } from "lucide-react";

type NotificationType = "warning" | "tip" | "reminder" | string;

interface Notification {
  type: NotificationType;
  text: string;
}

interface NotificationItemProps {
  notification: Notification;
  isDarkMode: boolean;
}

export default function NotificationItem({
  notification,
  isDarkMode,
}: NotificationItemProps) {
  const getTypeConfig = (type: NotificationType) => {
    switch (type) {
      case "warning":
        return {
          icon: <AlertCircle size={18} />,
          color: isDarkMode ? "text-yellow-400" : "text-yellow-600",
          bgColor: isDarkMode ? "bg-yellow-900 bg-opacity-30" : "bg-yellow-100",
        };
      case "tip":
        return {
          icon: <Lightbulb size={18} />,
          color: isDarkMode ? "text-blue-400" : "text-blue-600",
          bgColor: isDarkMode ? "bg-blue-900 bg-opacity-30" : "bg-blue-100",
        };
      case "reminder":
        return {
          icon: <Clock size={18} />,
          color: isDarkMode ? "text-purple-400" : "text-purple-600",
          bgColor: isDarkMode ? "bg-purple-900 bg-opacity-30" : "bg-purple-100",
        };
      default:
        return {
          icon: <Info size={18} />,
          color: isDarkMode ? "text-gray-400" : "text-gray-600",
          bgColor: isDarkMode ? "bg-gray-700" : "bg-gray-100",
        };
    }
  };

  const { icon, color, bgColor } = getTypeConfig(notification.type);

  return (
    <div className={`flex items-center p-3 rounded-lg ${bgColor}`}>
      <div className={`mr-3 ${color}`}>{icon}</div>
      <p className={`text-sm ${color}`}>{notification.text}</p>
    </div>
  );
}
