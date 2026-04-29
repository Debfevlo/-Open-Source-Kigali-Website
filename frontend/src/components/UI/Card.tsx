import { cn } from "@/lib/utils";

interface CardProps {
  children:    React.ReactNode;
  className?:  string;
  hover?:      boolean;
  padding?:    "none" | "sm" | "md" | "lg";
  borderColor?:string;
  as?:         "div" | "article" | "section" | "li";
}

const PADDING = {
  none: "",
  sm:   "p-4",
  md:   "p-5",
  lg:   "p-8",
};

export const Card = ({
  children,
  className,
  hover       = false,
  padding     = "md",
  borderColor,
  as: Tag     = "div",
}: CardProps) => (
  <Tag
    className={cn(
      "bg-white rounded-2xl border border-gray-100",
      hover && "hover:shadow-lg hover:border-[#c5d9ff] transition-all duration-200 cursor-pointer",
      PADDING[padding],
      className
    )}
    style={borderColor ? { borderColor } : undefined}
  >
    {children}
  </Tag>
);