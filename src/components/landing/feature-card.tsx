import React from "react";
import { FiChevronRight } from "react-icons/fi";

// ------------------------------------
// Mock ProductCard
// ------------------------------------
const ProductCard = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-[280px] md:h-[300px] rounded-xl flex flex-col justify-center text-gray-400 dark:text-gray-500 text-sm">
      <div className="h-[220px] md:h-[250px] w-full bg-yellow-50 dark:bg-yellow-900/20 relative rounded-t-xl"></div>
      <div className="p-2 bg-white dark:bg-gray-800 rounded-b-xl">
        <h2 className="text-gray-700 dark:text-gray-300 font-medium text-sm truncate">UK-Used HP EliteBook 840 G3</h2>
        <p className="text-xs">
          <span className="line-through block text-gray-400 dark:text-gray-500">₦105,000</span>
          <span className="text-gray-900 dark:text-white font-semibold">₦95,000</span>
        </p>
      </div>
    </div>
  );
};

// ------------------------------------
// Horizontal Section Row
// ------------------------------------
const SectionRow = ({
  title,
  products,
}: {
  title: string;
  products: string[];
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</h2>
        <button className="group flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-[#7733FF] dark:hover:text-[#9966FF] transition-colors cursor-pointer">
          <span className="hidden group-hover:inline">See all</span>
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* 
         Responsive Grid for Other Sections:
         Small (<768): 2 cols, 2 items
         MD (768-1024): 3 cols, 3 items
         LG (1024-1280): 3 cols, 3 items
         XL (1280-1536): 4 cols, 4 items
         2XL (1536+): 5 cols, 5 items
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full gap-3 lg:gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className={`
              ${index < 2 ? 'block' : ''}
              ${index === 2 ? 'hidden md:block' : ''}
              ${index === 3 ? 'hidden xl:block' : ''}
              ${index === 4 ? 'hidden 2xl:block' : ''}
              ${index > 4 ? 'hidden' : ''}
            `}
          >
            <ProductCard title={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

// ------------------------------------
// Main Right Side Page
// ------------------------------------
const RightSide = () => {
  return (
    <div className="flex flex-col w-full gap-6 md:gap-10">
      {/* Today's Deals */}
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-10">
        <div className="w-full md:w-2/5 lg:w-[300px] xl:w-[350px] shrink-0 bg-[#DCE8FF] dark:bg-blue-900/30 rounded-xl flex flex-col gap-3 md:gap-4 justify-center items-center p-6 md:p-8">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-base md:text-lg">🔥 Today's Deals</h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-center">
            Up to 40% off <br /> Electronics & Gadgets
          </p>

          {/* Countdown */}
          <div className="flex gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
            <span className="bg-white dark:bg-gray-700 px-3 py-1 rounded-lg shadow-sm">34</span>{" "}
            :<span className="bg-white dark:bg-gray-700 px-3 py-1 rounded-lg shadow-sm">04</span>{" "}
            :<span className="bg-white dark:bg-gray-700 px-3 py-1 rounded-lg shadow-sm">35</span>{" "}
            :<span className="bg-white dark:bg-gray-700 px-3 py-1 rounded-lg shadow-sm">41</span>
          </div>
        </div>
        {/* Newly Listed */}
        <div className="h-full w-full flex-1">
          <div className="w-full">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200">Newly Listed</h2>
              <button className="group flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-[#7733FF] dark:hover:text-[#9966FF] transition-colors cursor-pointer">
                <span className="hidden group-hover:inline">See all</span>
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
            {/* 
               Small (<1024): 2 cols, 2 items (Item 0,1 visible)
               LG (1024-1280): 2 cols, 2 items (Item 0,1 visible)
               XL (1280+): 3 cols, 3 items (Item 2 visible)
            */}
            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 w-full gap-3 lg:gap-4">
              {["New Item 1", "New Item 2", "New Item 3"].map((product, index) => (
                <div
                  key={index}
                  className={`
                    ${index < 2 ? 'block' : ''}
                    ${index === 2 ? 'hidden xl:block' : ''}
                    ${index > 2 ? 'hidden' : ''}
                  `}
                >
                  <ProductCard title={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hostel & Apartment Essentials */}
      <SectionRow
        title="Hostel & Apartment Essentials"
        products={[
          "Laptop Repair",
          "Reading Table",
          "Chemistry Textbook",
          "HP Elitebook 840",
          "Hostel Setup",
        ]}
      />

      {/* Food & Pastries */}
      <SectionRow
        title="Food & Pastries"
        products={[
          "Laptop Repair",
          "Reading Table",
          "Elitebook G3",
          "Price Drop",
          "Elitebook G4",
        ]}
      />

      {/* Services Near You */}
      <SectionRow
        title="Services Near You"
        products={[
          "Laptop & Phone Repair",
          "Hairdressing",
          "Photography",
          "Cleaning",
          "Laundry",
        ]}
      />
    </div>
  );
};

export default RightSide;
