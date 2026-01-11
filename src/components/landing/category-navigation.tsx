import { FaBolt } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineUp } from "react-icons/ai";
import { LuRotateCcw } from "react-icons/lu";

const CategoryNavigation = () => {
  const lists = [
    "Newly listed",
    "Furniture",
    "Appliances",
    "Gadget",
    "Home & Garden",
    "Health & Beauty",
    "Toys & Babies",
    "Create Listing",
  ];

  return (
    <div className="w-full flex justify-center bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="flex w-[95%] items-center gap-4 overflow-x-auto max-w-[1920px]">
        {/* All Categories dropdown - hidden on mobile, shown on md+ */}
        <div className="hidden md:flex items-center py-4 md:py-5 px-4 md:px-8 w-full md:w-[380px] shrink-0 bg-gray-200 dark:bg-gray-800 gap-4 rounded-md md:rounded-b-none">
          <AiOutlineMenu
            className="greycolor dark:text-white font-medium flex-shrink-0"
            size={24}
          />
          <span className="flex justify-between w-full items-center">
            <h2 className="greycolor dark:text-white/90 text-base md:text-lg font-semibold whitespace-nowrap">
              All Categories
            </h2>
            <AiOutlineUp
              className="greycolor dark:text-white flex-shrink-0"
              size={20}
            />
          </span>
        </div>

        {/* Navigation links - horizontal scroll on mobile */}
        <div className="hidden md:flex flex-1 items-center py-5 justify-center gap-5 lg:gap-7 px-6 overflow-x-auto">
          <span className="flex-shrink-0">
            <FaBolt className="w-6 h-6 lg:w-7 lg:h-7 fill-white stroke-[#404040] dark:fill-[#404040] dark:stroke-white" />
          </span>
          {lists.map((item, index) => (
            <span
              key={index}
              className="greycolor dark:text-white/80 text-sm lg:text-base font-medium cursor-pointer hover:text-[#7733FF] dark:hover:text-[#9966FF] transition-colors whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Recently Viewed - hidden on mobile */}
        <div className="hidden lg:flex items-center justify-end py-5 gap-2 whitespace-nowrap">
          <span className="flex-shrink-0">
            <LuRotateCcw className="w-7 h-7 stroke-[#404040] dark:stroke-gray-300 stroke-[1.5]" />
          </span>
          <h2 className="greycolor dark:text-white/90 text-lg font-semibold">Recently Viewed</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;
