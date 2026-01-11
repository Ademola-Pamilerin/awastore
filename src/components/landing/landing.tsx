import { FiTool, FiBookOpen, FiSmartphone } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { HiViewGrid } from "react-icons/hi";
import Image from "next/image";

const LandingPageMain = () => {
  const categories = [
    { icon: FiBookOpen, label: "Academics" },
    { icon: FiSmartphone, label: "Electronics & Gadgets" },
    { icon: IoBedOutline, label: "Hostel & Apartment Life" },
    { icon: GiClothes, label: "Fashion & Style" },
    { icon: IoGameControllerOutline, label: "Hobbies & Recreation" },
    { icon: FiTool, label: "Services" },
    { icon: HiViewGrid, label: "Others" },
  ];

  return (
    <div className="w-full flex justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col md:flex-row w-[95%] gap-6 py-6 max-w-[1920px]">
        {/* Categories sidebar - hidden on mobile, shown on md+ */}
        <div className="hidden md:flex flex-col justify-between w-full md:w-[320px] lg:w-[380px] shrink-0 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm ">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="flex items-center py-5 px-6 w-full gap-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-200 dark:border-gray-700 last:border-b-0"
              >
                <Icon className="greycolor dark:text-gray-300 shrink-0" size={24} />
                <span className="flex justify-between w-full items-center">
                  <h2 className="greycolor dark:text-white/90 text-base font-semibold">
                    {category.label}
                  </h2>
                  <AiOutlineRight
                    className="greycolor dark:text-gray-300 shrink-0"
                    size={20}
                  />
                </span>
              </div>
            );
          })}
        </div>

        {/* Main image section - full width on mobile, same height as categories on desktop */}
        <div className="flex flex-1">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={"/images/all.png"}
              alt="Starting image"
              height={2000}
              width={2000}
              className="object-fit w-full h-[400px] md:h-[500px] lg:h-[595px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageMain;
