import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "brand"
  | "live"
  | "success"
  | "warn"
  | "danger"
  | "muted"
  | "accent";

interface BadgeProps {
  variant?:  BadgeVariant;
  children:  React.ReactNode;
  icon?:     React.ReactNode;
  dot?:      boolean;
  className?:string;
}

const BADGE: Record<BadgeVariant, string> = {
  brand:   "bg-[#e8f1ff] text-[#2b7fff] border-[#c5d9ff]",
  live:    "bg-green-50 text-green-700 border-green-200",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warn:    "bg-amber-50 text-amber-700 border-amber-200",
  danger:  "bg-red-50 text-red-600 border-red-200",
  muted:   "bg-gray-100 text-gray-500 border-gray-200",
  accent:  "bg-orange-50 text-orange-600 border-orange-200",
};

const DOT: Record<BadgeVariant, string> = {
  brand:   "bg-[#2b7fff]",
  live:    "bg-green-500 animate-pulse",
  success: "bg-emerald-500",
  warn:    "bg-amber-400",
  danger:  "bg-red-500",
  muted:   "bg-gray-400",
  accent:  "bg-orange-500",
};

export const Badge = ({
  variant  = "brand",
  children,
  icon,
  dot      = false,
  className,
}: BadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full",
      "text-xs font-bold border",
      BADGE[variant],
      className
    )}
  >
    {dot && (
      <span
        className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", DOT[variant])}
      />
    )}
    {icon}
    {children}
  </span>
);