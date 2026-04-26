import { NavLink } from "react-router";
import { ArrowUpRight } from "lucide-react";
import React from "react";

type PrimaryButtonProps = {
  to: string;
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
};

const PrimaryButton = ({ to, children, icon = true, className = "" }: PrimaryButtonProps) => {
  return (
    <NavLink
      to={to}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-colour hover:bg-brand-900 hover:scale-95 text-white font-semibold rounded-full transition  ${className}`}
    >
      {children}
      {icon && <ArrowUpRight size={15} />}
    </NavLink>
  );
};

export default PrimaryButton;