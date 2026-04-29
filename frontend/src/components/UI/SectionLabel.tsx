interface SectionLabelProps {
  children:   React.ReactNode;
  color?:     string;
  className?: string;
  center?:    boolean;
}

export const SectionLabel = ({
  children,
  color     = "#5b9fff",
  className = "",
  center    = false,
}: SectionLabelProps) => (
  <p
    className={`text-xs font-bold uppercase tracking-widest mb-3 ${center ? "text-center" : ""} ${className}`}
    style={{ color }}
  >
    {children}
  </p>
);