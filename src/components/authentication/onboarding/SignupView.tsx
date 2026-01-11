"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FloatingLabelInput } from "./FloatingLabelInput";
import { PasswordStrengthIndicator } from "./PasswordStrengthIndicator";

interface SignupFormData {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    password: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    email?: string;
    password?: string;
}

interface SignupViewProps {
    formData: SignupFormData;
    setFormData: (data: SignupFormData) => void;
    errors: FormErrors;
    agreedToTerms: boolean;
    setAgreedToTerms: (agreed: boolean) => void;
    onSubmit: (e: React.FormEvent) => void;
    onBack: () => void;
    onInputChange: (field: keyof SignupFormData, value: string) => void;
}

export const SignupView = ({
    formData,
    errors,
    agreedToTerms,
    setAgreedToTerms,
    onSubmit,
    onBack,
    onInputChange,
}: SignupViewProps) => {
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
                    Finish signing up
                </h2>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
                {/* User Info Section */}
                <div className="space-y-4">
                    <h3 className="text-base font-semibold text-gray-900">User Info</h3>

                    <FloatingLabelInput
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(value) => onInputChange("firstName", value)}
                        label="First name"
                        error={errors.firstName}
                    />

                    <FloatingLabelInput
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(value) => onInputChange("lastName", value)}
                        label="Last name"
                        error={errors.lastName}
                    />

                    <p className="text-xs text-gray-500 flex items-start gap-1">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4m0-4h.01" />
                        </svg>
                        <span>Please ensure the name matches the name on your ID card</span>
                    </p>
                </div>

                {/* Date of Birth Section */}
                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-gray-900">Date of Birth</h3>

                    <div className="relative">
                        <input
                            type="date"
                            id="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={(e) => onInputChange("dateOfBirth", e.target.value)}
                            placeholder="DD/MM/YYYY"
                            className={`w-full px-4 py-3 text-base border rounded-lg focus:ring-2 focus:outline-none transition-all text-black ${errors.dateOfBirth
                                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                    : "border-gray-300 focus:border-gray-400 focus:ring-gray-400/20"
                                }`}
                        />
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
                            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
                            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                        </svg>
                    </div>

                    <p className="text-xs text-gray-500 flex items-start gap-1">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4m0-4h.01" />
                        </svg>
                        <span>To signup, you need to be at least 18. Your birthday is private to you</span>
                    </p>
                </div>

                {/* Contact Info Section */}
                <div className="space-y-4">
                    <h3 className="text-base font-semibold text-gray-900">Contact info</h3>

                    <FloatingLabelInput
                        id="signupEmail"
                        type="email"
                        value={formData.email}
                        onChange={(value) => onInputChange("email", value)}
                        label="Email"
                        error={errors.email}
                    />

                    <FloatingLabelInput
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(value) => onInputChange("password", value)}
                        label="Password"
                        error={errors.password}
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

                    <PasswordStrengthIndicator
                        password={formData.password}
                        firstName={formData.firstName}
                        lastName={formData.lastName}
                        email={formData.email}
                    />
                </div>

                {/* Terms of Service Checkbox */}
                <div className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        id="agreeToTerms"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                    />
                    <label htmlFor="agreeToTerms" className="text-xs text-gray-600 cursor-pointer">
                        By selecting <span className="font-semibold">Agree and continue</span>, I agree to Awastore's{" "}
                        <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>,{" "}
                        <a href="#" className="text-purple-600 hover:underline">Payments Terms of Service</a> and acknowledge the{" "}
                        <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>.
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!agreedToTerms}
                    className={`w-full py-4 text-base rounded-lg transition-all duration-200 font-semibold shadow-lg ${agreedToTerms
                            ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-purple-500/30"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed shadow-gray-300/30"
                        }`}
                >
                    Agree and continue
                </button>
            </form>
        </>
    );
};
