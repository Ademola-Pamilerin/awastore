"use client";

import { useState } from "react";
import { FloatingLabelInput } from "./FloatingLabelInput";

interface ResetPasswordViewProps {
    onSubmit: (email: string) => void;
    onBack: () => void;
}

export const ResetPasswordView = ({
    onSubmit,
    onBack,
}: ResetPasswordViewProps) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email: string): boolean => {
        if (!email.trim()) {
            setError("Email is required");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address");
            return false;
        }
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (validateEmail(email)) {
            onSubmit(email);
        }
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
        if (error) {
            setError("");
        }
    };

    return (
        <>
            <div className="relative mb-8">
                <button
                    type="button"
                    onClick={onBack}
                    className="absolute left-0 top-0 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h2 className="text-center text-xl font-semibold text-gray-900">
                    Reset password
                </h2>
            </div>

            <div className="text-center mb-8">
                <p className="text-gray-600">
                    Enter your email address and we'll send you a link to reset your password.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <FloatingLabelInput
                        id="resetEmail"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        label="Email"
                        error={error}
                    />
                    {error && (
                        <p className="mt-2 text-sm text-red-500">
                            {error}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full py-4 text-base bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold shadow-lg shadow-purple-500/30"
                >
                    Send reset link
                </button>

                <div className="text-center">
                    <button
                        type="button"
                        onClick={onBack}
                        className="text-sm text-gray-600 hover:text-gray-900"
                    >
                        Back to login
                    </button>
                </div>
            </form>
        </>
    );
};
