import { FiShield, FiTruck, FiHeadphones } from "react-icons/fi";
import RightSide from "./feature-card";

const BelowLandingPage = () => {
  const features = [
    {
      icon: FiShield,
      title: "Verified Sellers",
      description:
        "We confirm the identity of every seller before they can list items",
    },
    {
      icon: FiTruck,
      title: "Safe Delivery",
      description:
        "Meet in safe public locations or use our secure delivery options",
    },
    {
      icon: FiHeadphones,
      title: "24/7 Support",
      description:
        "Our support team is always available to help resolve any issues",
    },
  ];

  return (
    <div className="w-full flex justify-center my-8 md:my-12 bg-white dark:bg-gray-900">
      <div className="flex flex-col 2xl:flex-row w-[95%] gap-6 max-w-[1920px]">
        {/* Feature cards - full width on mobile, fixed width on desktop */}
        <div className="flex flex-col md:flex-row 2xl:flex-col w-full 2xl:w-[380px] shrink-0 gap-4 md:gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col w-full border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all bg-white dark:bg-gray-800/50"
              >
                {/* Icon and Title - inline on md+, stacked on mobile */}
                <div className="flex items-start md:items-center gap-4">
                  <Icon className="greycolor dark:text-gray-300 shrink-0 mt-1 md:mt-0" size={28} />
                  <h2 className="greycolor dark:text-white/90 text-base md:text-lg font-semibold">
                    {feature.title}
                  </h2>
                </div>
                {/* Description - full width on md (768-1024px), aligned under title on lg+ (1024px+) */}
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed lg:pl-[44px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right side content - full width on mobile */}
        <div className="flex flex-1 items-start justify-center">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowLandingPage;
