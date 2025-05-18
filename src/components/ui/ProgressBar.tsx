
interface ProgressBarProps {
  progress: number;
  color?: string;
}

export default function ProgressBar({ progress, color = "bg-blue-500" }: ProgressBarProps) {
  const cappedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className={`h-full ${color} rounded-full`}
        style={{ width: `${cappedProgress}%` }}
      />
    </div>
  );
}
