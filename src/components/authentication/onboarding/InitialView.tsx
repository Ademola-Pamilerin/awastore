"use client";

import { Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

interface InitialViewProps {
    email: string;
    setEmail: (email: string) => void;
    isSignupMode: boolean;
    setIsSignupMode: (mode: boolean) => void;
    onEmailSubmit: (e: React.FormEvent) => void;
}

export const InitialView = ({
    email,
    setEmail,
    isSignupMode,
    setIsSignupMode,
    onEmailSubmit,
}: InitialViewProps) => {
    return (
        <>
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Log in or sign up
                </h2>
                <div className="mb-1">
                    <span className="text-gray-700 text-base">Welcome to </span>
                    <span className="font-inter-tight italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-2xl font-semibold">
                        Awastore
                    </span>
                </div>
                <p className="text-base text-gray-500">
                    The trusted marketplace for students.
                </p>
            </div>

            <form onSubmit={onEmailSubmit} className="mb-6">
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 focus:outline-none transition-all text-black placeholder:text-gray-400"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-4 text-base bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold shadow-lg shadow-purple-500/30"
                >
                    Continue
                </button>

                <div className="text-center text-sm text-gray-600 mt-4">
                    {isSignupMode ? (
                        <>
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={() => setIsSignupMode(false)}
                                className="text-purple-600 font-semibold hover:underline"
                            >
                                Log in
                            </button>
                        </>
                    ) : (
                        <>
                            Don't have an account?{" "}
                            <button
                                type="button"
                                onClick={() => setIsSignupMode(true)}
                                className="text-purple-600 font-semibold hover:underline"
                            >
                                Sign up
                            </button>
                        </>
                    )}
                </div>
            </form>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">or</span>
                </div>
            </div>

            <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span className="font-medium text-gray-700 text-base">
                        Continue with Google
                    </span>
                </button>

                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group">
                    <FaFacebook className="text-xl" style={{ color: "#1877F2" }} />
                    <span className="font-medium text-gray-700 text-base">
                        Continue with Facebook
                    </span>
                </button>

                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group">
                    <Phone className="text-gray-600" size={20} />
                    <span className="font-medium text-gray-700 text-base">
                        Continue with Phone
                    </span>
                </button>
            </div>
        </>
    );
};
