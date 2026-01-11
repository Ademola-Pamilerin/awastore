"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HeaderPage from "@/components/landing/header";
import { CreateNewPasswordForm } from "@/components/authentication/CreateNewPasswordForm";
import { PasswordResetSuccess } from "@/components/authentication/PasswordResetSuccess";

function ResetPasswordContent() {
    const searchParams = useSearchParams();
    const [token, setToken] = useState<string>("");
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const tokenParam = searchParams.get("token");
        if (tokenParam) {
            setToken(tokenParam);
        }
    }, [searchParams]);

    return (
        <div className="flex items-center justify-center px-4 py-16 bg-gray-100 h-[90vh]">
            {isSuccess ? (
                <PasswordResetSuccess />
            ) : (
                <CreateNewPasswordForm
                    token={token}
                    onSuccess={() => setIsSuccess(true)}
                />
            )}
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <div className="min-h-screen">
            <div className="border-b-2 border-gray-200">
                <HeaderPage />
            </div>

            <Suspense fallback={
                <div className="flex items-center justify-center px-4 py-16 bg-gray-100 h-[90vh]">
                    <div className="text-center">Loading...</div>
                </div>
            }>
                <ResetPasswordContent />
            </Suspense>
        </div>
    );
}
