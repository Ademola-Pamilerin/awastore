"use client";

import Image from "next/image";

interface WelcomeSuccessViewProps {
    onContinueShopping: () => void;
    onListItem: () => void;
}

export const WelcomeSuccessView = ({
    onContinueShopping,
    onListItem,
}: WelcomeSuccessViewProps) => {
    return (
        <div className="text-center py-8">
            <div className="mb-6 flex justify-center">
                <div className="relative w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                    <Image
                        src="/images/logo.png"
                        alt="Awastore Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Welcome to Awastore
            </h2>

            <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                Shop and sell with fellow students on campus and beyond with peace of mind.
            </p>

            <div className="space-y-3">
                <button
                    onClick={onContinueShopping}
                    className="w-full py-4 text-base bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold shadow-lg shadow-purple-500/30"
                >
                    Continue shopping
                </button>

                <button
                    onClick={onListItem}
                    className="w-full py-4 text-base bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-semibold"
                >
                    List an item or service
                </button>
            </div>
        </div>
    );
};
