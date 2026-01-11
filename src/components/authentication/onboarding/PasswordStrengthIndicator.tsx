"use client";

import { useEffect, useState } from "react";

interface PasswordStrength {
    hasMinLength: boolean;
    hasNumberOrSymbol: boolean;
    notContainsNameOrEmail: boolean;
    isNotWeak: boolean;
}

interface PasswordStrengthIndicatorProps {
    password: string;
    firstName?: string;
    lastName?: string;
    email?: string;
}

export const PasswordStrengthIndicator = ({
    password,
    firstName = "",
    lastName = "",
    email = "",
}: PasswordStrengthIndicatorProps) => {
    const [strength, setStrength] = useState<PasswordStrength>({
        hasMinLength: false,
        hasNumberOrSymbol: false,
        notContainsNameOrEmail: true,
        isNotWeak: true,
    });

    useEffect(() => {
        const firstNameLower = firstName.toLowerCase();
        const lastNameLower = lastName.toLowerCase();
        const emailLower = email.toLowerCase();
        const passwordLower = password.toLowerCase();

        const hasMinLength = password.length >= 8;
        const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);
        const notContainsNameOrEmail =
            !passwordLower.includes(firstNameLower) &&
            !passwordLower.includes(lastNameLower) &&
            (!emailLower || !passwordLower.includes(emailLower.split("@")[0]));
        const isNotWeak = !/^(password|12345678|qwerty)$/i.test(password);

        setStrength({
            hasMinLength,
            hasNumberOrSymbol,
            notContainsNameOrEmail,
            isNotWeak,
        });
    }, [password, firstName, lastName, email]);

    const getStrengthLevel = (): { level: 'weak' | 'medium' | 'strong'; color: string; iconColor: string; text: string } => {
        if (!password) return { level: 'weak', color: 'text-yellow-600', iconColor: 'text-yellow-500', text: 'weak' };

        const criteriaCount = [
            strength.hasMinLength,
            strength.hasNumberOrSymbol,
            strength.notContainsNameOrEmail,
            strength.isNotWeak
        ].filter(Boolean).length;

        if (criteriaCount === 4) {
            return { level: 'strong', color: 'text-green-600', iconColor: 'text-green-500', text: 'strong' };
        } else if (criteriaCount >= 2) {
            return { level: 'medium', color: 'text-blue-600', iconColor: 'text-blue-500', text: 'medium' };
        } else {
            return { level: 'weak', color: 'text-yellow-600', iconColor: 'text-yellow-500', text: 'weak' };
        }
    };

    const strengthLevel = getStrengthLevel();

    if (!password) return null;

    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
                {strength.isNotWeak ? (
                    <svg className={`w-4 h-4 flex-shrink-0 ${strengthLevel.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10" />
                        <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10" />
                        <path d="M7 7l6 6M13 7l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                )}
                <span className={strength.isNotWeak ? strengthLevel.color : "text-red-500"}>
                    Password strength: {strengthLevel.text}
                </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
                {strength.notContainsNameOrEmail ? (
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10" />
                        <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10" />
                        <path d="M7 7l6 6M13 7l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                )}
                <span className={strength.notContainsNameOrEmail ? "text-green-600" : "text-red-500"}>
                    Can't contain your name or email address
                </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
                {strength.hasMinLength ? (
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10" />
                        <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10" />
                        <path d="M7 7l6 6M13 7l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                )}
                <span className={strength.hasMinLength ? "text-green-600" : "text-red-500"}>
                    At least 8 characters
                </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
                {strength.hasNumberOrSymbol ? (
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10" />
                        <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="10" />
                        <path d="M7 7l6 6M13 7l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                )}
                <span className={strength.hasNumberOrSymbol ? "text-green-600" : "text-red-500"}>
                    Contains a number or symbol
                </span>
            </div>
        </div>
    );
};
