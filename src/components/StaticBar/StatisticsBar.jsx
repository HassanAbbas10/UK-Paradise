import { Users, Tag, Heart } from "lucide-react";

const StatisticsBar = () => {
  return (
    <div className="relative w-full bg-[#0a1929] text-white py-8 md:py-8 overflow-hidden -mt-[7rem] z-10">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <StatItem
            icon={<Users className="w-8 h-8 md:w-8 md:h-10 text-blue-400" />}
            value="21,000+"
            label="Lucky winners"
          />
          <StatItem
            icon={<Tag className="w-8 h-8 md:w-8 md:h-10 text-blue-400" />}
            value="£17,500,000+"
            label="Given out in prizes"
          />
          <StatItem
            icon={<Heart className="w-8 h-8 md:w-8 md:h-10 text-blue-400" />}
            value="160,000+"
            label="Social followers"
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 w-16 bg-white transform -skew-x-12 translate-x-4  md:block"></div>
    </div>
  );
};

const StatItem = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3">
      <div className="flex-shrink-0">{icon}</div>
      <div className="text-center md:text-left">
        <div className="text-2xl md:text-xl font-bold">{value}</div>
        <div className="text-sm text-gray-300">{label}</div>
      </div>
    </div>
  );
};

export default StatisticsBar;
