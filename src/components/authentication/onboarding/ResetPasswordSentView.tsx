"use client";

interface ResetPasswordSentViewProps {
    email: string;
    onBackToLogin: () => void;
}

export const ResetPasswordSentView = ({
    email,
    onBackToLogin,
}: ResetPasswordSentViewProps) => {
    return (
        <>
            <div className="text-center mb-8">
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
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Check your email
                </h2>
                <p className="text-gray-600 mb-2">
                    We've sent a password reset link to
                </p>
                <p className="font-semibold text-gray-900 mb-6">
                    {email}
                </p>
                <p className="text-sm text-gray-500">
                    Please check your inbox and click on the link to reset your password.
                    If you don't see the email, check your spam folder.
                </p>
            </div>

            <button
                type="button"
                onClick={onBackToLogin}
                className="w-full py-4 text-base bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold shadow-lg shadow-purple-500/30"
            >
                Back to login
            </button>
        </>
    );
};
