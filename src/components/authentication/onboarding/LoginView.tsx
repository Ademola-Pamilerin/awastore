"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FloatingLabelInput } from "./FloatingLabelInput";

interface LoginFormData {
    email: string;
    password: string;
}

interface LoginViewProps {
    loginFormData: LoginFormData;
    setLoginFormData: (data: LoginFormData) => void;
    onSubmit: (e: React.FormEvent) => void;
    onBack: () => void;
    onSwitchToSignup: () => void;
    onForgotPassword: () => void;
}

export const LoginView = ({
    loginFormData,
    setLoginFormData,
    onSubmit,
    onBack,
    onSwitchToSignup,
    onForgotPassword,
}: LoginViewProps) => {
    const [showPassword, setShowPassword] = useState(false);

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
                    Log in
                </h2>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-4">
                    <h3 className="text-base font-semibold text-gray-900">Welcome back</h3>

                    <FloatingLabelInput
                        id="loginEmail"
                        type="email"
                        value={loginFormData.email}
                        onChange={(value) => setLoginFormData({ ...loginFormData, email: value })}
                        label="Email"
                    />

                    <FloatingLabelInput
                        id="loginPassword"
                        type={showPassword ? "text" : "password"}
                        value={loginFormData.password}
                        onChange={(value) => setLoginFormData({ ...loginFormData, password: value })}
                        label="Password"
                        icon={
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        }
                    />

                    <div className="text-right">
                        <button
                            type="button"
                            onClick={onForgotPassword}
                            className="text-sm text-purple-600 hover:underline font-medium"
                        >
                            Forgot password?
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 text-base bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold shadow-lg shadow-purple-500/30"
                >
                    Log in
                </button>

                <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <button
                        type="button"
                        onClick={onSwitchToSignup}
                        className="text-purple-600 font-semibold hover:underline"
                    >
                        Sign up
                    </button>
                </p>
            </form>
        </>
    );
};
