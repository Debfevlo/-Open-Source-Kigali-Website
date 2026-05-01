import { NavLink } from "react-router";
import React from "react";

type PrimaryButtonProps = {
  to: string;
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
};

const PrimaryButton = ({ to, children,  className = "" }: PrimaryButtonProps) => {
  return (
    <NavLink
      to={to}
      className={`flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-colour hover:bg-brand-700 hover:scale-95 text-white font-semibold rounded-full transition  ${className}`}
    >
      {children}
      
    </NavLink>
  );
};

export default PrimaryButton;