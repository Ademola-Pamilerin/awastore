"use client";

import { useState } from "react";

interface FloatingLabelInputProps {
    id: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    label: string;
    placeholder?: string;
    error?: string;
    icon?: React.ReactNode;
    className?: string;
}

export const FloatingLabelInput = ({
    id,
    type,
    value,
    onChange,
    label,
    placeholder = " ",
    error,
    icon,
    className = "",
}: FloatingLabelInputProps) => {
    return (
        <div className="relative">
            <input
                type={type}
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full px-4 pt-6 pb-2 ${icon ? 'pr-12' : ''} text-base border rounded-lg focus:ring-2 focus:outline-none transition-all text-black peer ${error
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-300 focus:border-gray-400 focus:ring-gray-400/20"
                    } ${className}`}
            />
            <label
                htmlFor={id}
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${value
                        ? "top-2 text-xs text-gray-500"
                        : "top-1/2 -translate-y-1/2 text-base text-gray-400"
                    }`}
            >
                {label}
            </label>
            {icon && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    {icon}
                </div>
            )}
        </div>
    );
};
