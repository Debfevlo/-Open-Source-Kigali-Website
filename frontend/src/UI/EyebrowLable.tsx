type EyebrowLabelProps = {
  text: string;
  align?: "left" | "center";
  className?: string;
};

const EyebrowLabel = ({
  text,
  align = "center",
  className = "",
}: EyebrowLabelProps) => {
  return (
    <div
      className={`mb-5 ${
        align === "center" ? "flex justify-center" : "flex justify-start"
      }`}
    >
      <span
        className={`
          inline-block px-4 py-1.5 rounded-full
          border border-primary-colour/40
          bg-primary-colour/10 text-primary-colour
          text-xs font-semibold tracking-widest uppercase
          ${className}
        `}
      >
        {text}
      </span>
    </div>
  );
};

export default EyebrowLabel;