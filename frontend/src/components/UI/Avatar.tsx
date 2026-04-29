import { getInitials, getAvatarColor } from "@/lib/utils";
import { cn }                           from "@/lib/utils";

interface AvatarProps {
  name:       string;
  size?:      "xs" | "sm" | "md" | "lg";
  src?:       string;
  shape?:     "circle" | "rounded";
  className?: string;
  bgColor?:   string; // override the auto-color
}

const SIZES = {
  xs: "w-6 h-6 text-[10px]",
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
};

export const Avatar = ({
  name,
  size     = "md",
  src,
  shape    = "circle",
  className,
  bgColor,
}: AvatarProps) => {
  const shapeClass = shape === "circle" ? "rounded-full" : "rounded-xl";
  const bg         = bgColor ?? getAvatarColor(name);

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={cn(
          SIZES[size],
          shapeClass,
          "object-cover shrink-0",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        SIZES[size],
        shapeClass,
        "flex items-center justify-center text-white font-black shrink-0",
        className
      )}
      style={{ background: bg }}
      title={name}
    >
      {getInitials(name)}
    </div>
  );
};