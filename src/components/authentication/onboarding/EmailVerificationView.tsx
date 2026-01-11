"use client";

import { useRef, useState, KeyboardEvent, ClipboardEvent } from "react";

interface EmailVerificationViewProps {
    email: string;
    onVerify: (code: string) => void;
    onBack: () => void;
    onResend: () => void;
}

export const EmailVerificationView = ({
    email,
    onVerify,
    onBack,
    onResend,
}: EmailVerificationViewProps) => {
    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
    const [error, setError] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        // Only allow numbers
        if (value && !/^\d$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        setError(false);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, 6);

        if (!/^\d+$/.test(pastedData)) return;

        const newCode = [...code];
        pastedData.split("").forEach((char, index) => {
            if (index < 6) {
                newCode[index] = char;
            }
        });
        setCode(newCode);

        // Focus the next empty input or the last one
        const nextEmptyIndex = newCode.findIndex(c => !c);
        const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
        inputRefs.current[focusIndex]?.focus();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const verificationCode = code.join("");

        if (verificationCode.length !== 6) {
            setError(true);
            return;
        }

        onVerify(verificationCode);
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
                    Verify your email
                </h2>
            </div>

            <div className="text-center mb-8">
                <p className="text-gray-600 mb-2">
                    We've sent a verification code to
                </p>
                <p className="font-semibold text-gray-900">{email}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-center gap-2">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => { inputRefs.current[index] = el; }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={index === 0 ? handlePaste : undefined}
                            className={`w-12 h-14 text-center text-xl font-semibold border-2 rounded-lg focus:outline-none transition-all ${error
                                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                                : "border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20"
                                }`}
                        />
                    ))}
                </div>

                {error && (
                    <p className="text-sm text-red-500 text-center">
                        Invalid verification code. Please try again.
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full py-4 text-base bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold shadow-lg shadow-purple-500/30"
                >
                    Continue
                </button>

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Didn't receive the code?{" "}
                        <button
                            type="button"
                            onClick={onResend}
                            className="text-purple-600 font-semibold hover:underline"
                        >
                            Resend
                        </button>
                    </p>
                </div>
            </form>
        </>
    );
};
