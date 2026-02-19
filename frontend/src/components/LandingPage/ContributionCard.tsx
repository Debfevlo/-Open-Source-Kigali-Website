import { Laptop, Palette, FileText,Users } from "lucide-react";
import React from "react";

// Map of contribution types to icons
const iconMap = {
  developer: <Laptop size={28} />,
  designer: <Palette size={28} />,
  documentation: <FileText size={28} />,
  moderator: <Users/>
};

// Define the props type
interface ContributionCardProps {
  type: keyof typeof iconMap; // restrict type to keys of iconMap
  title: string;
  description: string;
}

const ContributionCard: React.FC<ContributionCardProps> = ({ type, title, description }) => {
  return (
    <div className="bg-slate-200 rounded-3xl p-8 flex flex-col justify-between min-h-90 transition duration-300 hover:shadow-xl">
      
      {/* Top Content */}
      <div>
        <div className="text-blue-500 mb-4">
          {iconMap[type]}
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          {title}
        </h3>

        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Button */}
      <button className="mt-8 border border-blue-500 text-blue-500 rounded-full py-3 px-6 w-fit hover:bg-primary-colour hover:cursor-pointer hover:text-white transition duration-300 mx-auto">
        Contribution Guide
      </button>
    </div>
  );
};

export default ContributionCard;
