import { NavLink } from "react-router";
import React from "react";

type SecondaryButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const SecondaryButton = ({ to, children, className = "" }: SecondaryButtonProps) => {
  return (
    <NavLink
      to={to}
      className={`inline-flex items-center justify-center px-6 py-3 border border-blue-500 text-blue-500 rounded-full  font-medium hover:bg-primary-colour hover:border-none hover:text-white  hover:scale-95 transition-all ${className}`}
    >
      {children}
    </NavLink>
  );
};

export default SecondaryButton;