import { FaBolt } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineUp } from "react-icons/ai";
import { LuRotateCcw } from "react-icons/lu";

const BelowHeader = () => {
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
    <div className="w-full flex justify-center bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="flex w-[95%] items-center gap-4 overflow-x-auto max-w-[1920px]">
        {/* All Categories dropdown - hidden on mobile, shown on md+ */}
        <div className="hidden md:flex items-center py-4 md:py-5 px-4 md:px-8 w-full md:w-[380px] shrink-0 bg-gray-200 dark:bg-gray-800 gap-4 rounded-md md:rounded-b-none">
          <AiOutlineMenu
            className="greycolor dark:text-white font-medium shrink-0"
            size={24}
          />
          <span className="flex justify-between w-full items-center">
            <h2 className="greycolor dark:text-white/90 text-base md:text-lg font-semibold whitespace-nowrap">
              All Categories
            </h2>
            <AiOutlineUp
              className="greycolor dark:text-white shrink-0"
              size={20}
            />
          </span>
        </div>

        {/* Navigation links - responsive visibility based on priority */}
        <div className="hidden md:flex flex-1 items-center justify-between gap-3 lg:gap-4 xl:gap-5 px-4 overflow-x-hidden">
          <div className="flex items-center gap-3 lg:gap-4 xl:gap-5">
            <span className="shrink-0">
              <FaBolt className="w-5 h-5 lg:w-6 lg:h-6 fill-white stroke-[#404040] dark:fill-[#404040] dark:stroke-white" />
            </span>
            {lists.map((item, index) => {
              // Priority Logic:
              // Mobile/MD: Newly listed, Create Listing
              // LG: + Furniture
              // XL: + Appliances, Gadget
              // 2XL: All items

              let visibilityClass = "hidden 2xl:inline"; // Default: visible only on 2XL

              if (item === "Newly listed" || item === "Create Listing") {
                visibilityClass = "inline"; // Always visible on MD+
              } else if (item === "Furniture") {
                visibilityClass = "hidden lg:inline"; // Visible LG+
              } else if (item === "Appliances" || item === "Gadget") {
                visibilityClass = "hidden xl:inline"; // Visible XL+
              }

              return (
                <span
                  key={index}
                  className={`text-sm lg:text-base font-medium cursor-pointer hover:text-[#7733FF] dark:hover:text-[#9966FF] transition-colors whitespace-nowrap ${visibilityClass} ${item === "Create Listing" ? "text-[#7733FF] dark:text-[#9966FF] font-semibold" : "greycolor dark:text-white/80"
                    }`}
                >
                  {item}
                </span>
              );
            })}
          </div>

          {/* Recently Viewed - shown on md+ */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="shrink-0">
              <LuRotateCcw className="w-6 h-6 lg:w-7 lg:h-7 stroke-[#404040] dark:stroke-gray-300 stroke-[1.5]" />
            </span>
            <h2 className="greycolor dark:text-white/90 text-base lg:text-lg font-semibold">Recently Viewed</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowHeader;
