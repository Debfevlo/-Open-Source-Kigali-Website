import CountUp from "react-countup";

const StatsUI = () => {
  const stats = [
    {number: 100, label:'contributors'},
    {number:600, label:'Pull Request'},
    {number: 300, label:'Projects'},
    {number: 200, label:'Events Held'},
  ]
  return (
    <div className="flex justify-start items-center gap-16  mt-20 pt-6">
      {stats.map((stat, index)=>{
        return(
          <div key={index} className={`flex-1 py-4 ${index !== stats.length - 1 ? 'border-r-2 border-gray-300' : ''}`} >
            <p className="text-3xl font-bold text-white">
              <CountUp end={stat.number} duration={5}             // animation duration in seconds
              separator="," />
            </p>
            <p className="text-base text-primary-colour font-medium">{stat.label}</p>
          </div>
        )
      })}
    </div>
  )
}

export default StatsUI