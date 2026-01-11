"use client";

import { Package, Wrench } from "lucide-react";

interface ListingTypeSelectionProps {
    selectedType: "item" | "service" | null;
    onSelect: (type: "item" | "service") => void;
    onNext: () => void;
}

export const ListingTypeSelection = ({
    selectedType,
    onSelect,
    onNext,
}: ListingTypeSelectionProps) => {
    return (
        <div className="space-y-6 md:space-y-8">
            <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Are you listing an item or a service?
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                    onClick={() => onSelect("item")}
                    className={`p-6 md:p-8 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center justify-center gap-3 md:gap-4 group ${selectedType === "item"
                        ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-purple-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                >
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors ${selectedType === "item" ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-500"
                        }`}>
                        <Package size={40} />
                    </div>
                    <div className="text-center">
                        <h3 className={`text-base md:text-lg font-semibold mb-1 ${selectedType === "item" ? "text-purple-900 dark:text-purple-100" : "text-gray-900 dark:text-gray-100"
                            }`}>
                            An Item
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Sell a physical product
                        </p>
                    </div>
                </button>

                <button
                    onClick={() => onSelect("service")}
                    className={`p-8 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center justify-center gap-4 group ${selectedType === "service"
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-200 hover:bg-gray-50"
                        }`}
                >
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors ${selectedType === "service" ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-500"
                        }`}>
                        <Wrench size={40} />
                    </div>
                    <div className="text-center">
                        <h3 className={`text-lg font-semibold mb-1 ${selectedType === "service" ? "text-purple-900" : "text-gray-900"
                            }`}>
                            A Service
                        </h3>
                        <p className="text-sm text-gray-500">
                            Offer your skills or help
                        </p>
                    </div>
                </button>
            </div>

            <div className="flex justify-end pt-4">
                <button
                    onClick={onNext}
                    disabled={!selectedType}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${selectedType
                        ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/30"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
