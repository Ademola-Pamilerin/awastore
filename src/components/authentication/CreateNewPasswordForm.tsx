"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FloatingLabelInput } from "./onboarding/FloatingLabelInput";
import { PasswordStrengthIndicator } from "./onboarding/PasswordStrengthIndicator";

interface CreateNewPasswordFormProps {
    token: string;
    onSuccess: () => void;
}

export const CreateNewPasswordForm = ({
    token,
    onSuccess,
}: CreateNewPasswordFormProps) => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({
        newPassword: "",
        confirmPassword: "",
    });

    const validatePassword = (password: string): boolean => {
        const hasMinLength = password.length >= 8;
        const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);
        const isNotWeak = !/^(password|12345678|qwerty)$/i.test(password);

        return hasMinLength && hasNumberOrSymbol && isNotWeak;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = {
            newPassword: "",
            confirmPassword: "",
        };

        // Validate new password
        if (!newPassword) {
            newErrors.newPassword = "Password is required";
        } else if (!validatePassword(newPassword)) {
            newErrors.newPassword = "Password does not meet requirements";
        }

        // Validate confirm password
        if (!confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        // If no errors, submit
        if (!newErrors.newPassword && !newErrors.confirmPassword) {
            console.log("Password reset with token:", token);
            // In production, call API to reset password
            onSuccess();
        }
    };

    const handleNewPasswordChange = (value: string) => {
        setNewPassword(value);
        if (errors.newPassword) {
            setErrors({ ...errors, newPassword: "" });
        }
        // Clear confirm password error if passwords now match
        if (errors.confirmPassword && value === confirmPassword) {
            setErrors({ ...errors, confirmPassword: "" });
        }
    };

    const handleConfirmPasswordChange = (value: string) => {
        setConfirmPassword(value);
        if (errors.confirmPassword) {
            setErrors({ ...errors, confirmPassword: "" });
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Create your password
                </h1>
                <p className="text-gray-600">
                    Please enter a new password for your account
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <FloatingLabelInput
                        id="newPassword"
                        type={showNewPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        label="New password"
                        error={errors.newPassword}
                        icon={
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        }
                    />
                    {errors.newPassword && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.newPassword}
                        </p>
                    )}
                </div>

                <PasswordStrengthIndicator password={newPassword} />

                <div>
                    <FloatingLabelInput
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        label="Confirm password"
                        error={errors.confirmPassword}
                        icon={
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        }
                    />
                    {errors.confirmPassword && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full py-4 text-base bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold shadow-lg shadow-purple-500/30"
                >
                    Reset password
                </button>
            </form>
        </div>
    );
};
