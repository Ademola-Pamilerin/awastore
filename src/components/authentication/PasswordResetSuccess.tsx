"use client";

import Link from "next/link";

export const PasswordResetSuccess = () => {
    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-green-600"
                    >
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Password reset successful!
                </h1>

                <p className="text-gray-600 mb-8">
                    Your password has been successfully reset. You can now log in with your new password.
                </p>

                <Link
                    href="/"
                    className="inline-block w-full py-4 text-base bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold shadow-lg shadow-purple-500/30"
                >
                    Go to homepage
                </Link>
            </div>
        </div>
    );
};
