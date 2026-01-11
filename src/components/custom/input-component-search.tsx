import { AiOutlineSearch } from "react-icons/ai";

const InputComponentWithSearch = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2.5 w-full max-w-2xl bg-white hover:border-gray-400 focus-within:border-[#7733FF] focus-within:ring-2 focus-within:ring-[#7733FF]/20 transition-all">
      <input
        type="text"
        placeholder="Search for products, categories..."
        className="w-full focus:outline-none text-sm greycolor placeholder:text-gray-400"
      />
      <button className="flex-shrink-0 ml-2 hover:scale-110 transition-transform">
        <AiOutlineSearch size={24} className="text-[#404040]" />
      </button>
    </div>
  );
};

export default InputComponentWithSearch;
