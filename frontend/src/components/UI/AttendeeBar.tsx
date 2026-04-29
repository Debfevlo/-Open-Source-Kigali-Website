import {  formatSpotsLeft } from "@/lib/formatters";

interface AttendeeBarProps {
  filled:   number;
  capacity: number | null;
}

export const AttendeeBar = ({ filled, capacity }: AttendeeBarProps) => {
  if (!capacity) return null;

 

  return (
    <div>
      <div className="flex justify-between text-xs text-gray-400 mb-1.5">
        <span>{filled} registered</span>
        <span>{formatSpotsLeft(filled, capacity)}</span>
      </div>
      <div className="h-1.5 w-full bg-[#e8f1ff] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
        />
      </div>
    </div>
  );
};