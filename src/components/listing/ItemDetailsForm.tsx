"use client";

import { FloatingLabelInput } from "../authentication/onboarding/FloatingLabelInput";

interface ItemDetailsFormProps {
    formData: {
        title: string;
        condition: string;
        category: string;
        description: string;
    };
    onChange: (field: string, value: string) => void;
    onNext: () => void;
    onBack: () => void;
}

export const ItemDetailsForm = ({
    formData,
    onChange,
    onNext,
    onBack,
}: ItemDetailsFormProps) => {
    const conditions = [
        "New",
        "Used - Very Good",
        "Used - Good",
        "Used - Fair"
    ];

    const categories = [
        "Academics",
        "Electronics & Gadgets",
        "Hostel & Off Campus Life",
        "Fashion & Style",
        "Hobbies & Recreation",
        "Others"
    ];

    const isFormValid =
        formData.title.trim() &&
        formData.condition &&
        formData.category &&
        formData.description.trim();

    return (
        <div className="space-y-6 md:space-y-8">
            <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Great! Now Enter the item details
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    The more details you share, the faster you'll find a buyer
                </p>
            </div>

            <div className="space-y-5 md:space-y-6">
                {/* Title */}
                <div className="relative">
                    <FloatingLabelInput
                        id="itemTitle"
                        type="text"
                        value={formData.title}
                        onChange={(value) => onChange("title", value)}
                        label="Item title"
                        placeholder="e.g. iPhone 13 Pro Max - 256GB"
                        className="pr-16"
                    />
                    <span className="absolute right-4 top-2 text-xs text-gray-400 dark:text-gray-500">
                        {formData.title.length}/40
                    </span>
                    <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 space-y-1">
                        <p>• New, Never been used</p>
                        <p>• Very good: Like new, no scratches</p>
                        <p>• Good: Minor wear</p>
                        <p>• Fair: Visible scratches</p>
                    </div>
                </div>

                {/* Condition */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Item Condition</label>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {conditions.map((condition) => (
                            <button
                                key={condition}
                                onClick={() => onChange("condition", condition)}
                                className={`px-3 md:px-4 py-2 rounded-full text-sm border transition-all ${formData.condition === condition
                                    ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 font-medium"
                                    : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                                    }`}
                            >
                                {condition}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category */}
                <div className="relative">
                    <select
                        value={formData.category}
                        onChange={(e) => onChange("category", e.target.value)}
                        className="w-full px-4 py-3.5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 focus:outline-none appearance-none bg-white text-gray-900"
                    >
                        <option value="" disabled>Select subcategory</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Description */}
                <div className="relative">
                    <textarea
                        value={formData.description}
                        onChange={(e) => onChange("description", e.target.value)}
                        placeholder="This is where you'll describe your item"
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 focus:outline-none resize-none placeholder:text-gray-400"
                    />
                    <span className="absolute right-4 bottom-3 text-xs text-gray-400">
                        {formData.description.length}/500
                    </span>
                </div>
            </div>

            <div className="flex justify-between pt-4">
                <button
                    onClick={onBack}
                    className="px-6 py-3 text-purple-600 font-semibold hover:bg-purple-50 rounded-lg transition-colors"
                >
                    Back
                </button>
                <button
                    onClick={onNext}
                    disabled={!isFormValid}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${isFormValid
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
