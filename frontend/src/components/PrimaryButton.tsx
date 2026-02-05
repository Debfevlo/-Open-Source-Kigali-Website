import { NavLink } from "react-router-dom";

type PrimaryButtonProps = {
  text: string;
};

const PrimaryButton = ({ text }: PrimaryButtonProps) => {
  return (
    <NavLink
      to="/Login"
      className="hidden md:inline-flex items-center justify-center 
                 bg-primary-colour px-6 py-4 rounded-full 
                 text-white text-base"
    >
      {text}
    </NavLink>
  );
};

export default PrimaryButton;
