import CountUp from "react-countup";

const StatsUI = () => {
  const stats = [
    { number: 100, label: "Contributors" },
    { number: 600, label: "Pull Requests" },
    { number: 300, label: "Projects" },
    { number: 200, label: "Events Held" },
  ];

  return (
    <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-16 mt-8 pt-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex-1 min-w-30 py-4 ${
            index !== stats.length - 1 ? "md:border-r-2 border-gray-300" : ""
          } text-center md:text-left`}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            <CountUp end={stat.number} duration={5} separator="," />
          </p>
          <p className="text-sm sm:text-base md:text-lg text-primary-colour font-medium mt-1">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsUI;
