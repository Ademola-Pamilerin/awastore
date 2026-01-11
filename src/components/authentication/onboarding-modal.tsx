"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { InitialView } from "./onboarding/InitialView";
import { LoginView } from "./onboarding/LoginView";
import { SignupView } from "./onboarding/SignupView";
import { EmailVerificationView } from "./onboarding/EmailVerificationView";
import { WelcomeSuccessView } from "./onboarding/WelcomeSuccessView";
import { ResetPasswordView } from "./onboarding/ResetPasswordView";
import { ResetPasswordSentView } from "./onboarding/ResetPasswordSentView";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenListing: () => void;
}

type ViewMode = "initial" | "signup" | "login" | "verify-email" | "success" | "reset-password" | "reset-password-sent";

interface SignupFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
}

interface LoginFormData {
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

const OnboardingModal = ({ isOpen, onClose, onOpenListing }: OnboardingModalProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>("initial");
  const [email, setEmail] = useState("");
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
  });
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(true);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignupMode) {
      setViewMode("signup");
      setFormData({ ...formData, email });
    } else {
      setViewMode("login");
      setLoginFormData({ ...loginFormData, email });
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", loginFormData);
  };

  const handleInputChange = (field: keyof SignupFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation logic is also handled in PasswordStrengthIndicator visually,
    // but we need to enforce it here for submission
    const password = formData.password;
    const firstName = formData.firstName.toLowerCase();
    const lastName = formData.lastName.toLowerCase();
    const email = formData.email.toLowerCase();
    const passwordLower = password.toLowerCase();

    const hasMinLength = password.length >= 8;
    const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);
    const notContainsNameOrEmail =
      !passwordLower.includes(firstName) &&
      !passwordLower.includes(lastName) &&
      (!email || !passwordLower.includes(email.split("@")[0]));
    const isNotWeak = !/^(password|12345678|qwerty)$/i.test(password);

    if (!password) {
      newErrors.password = "Password is required";
    } else if (!hasMinLength || !hasNumberOrSymbol || !notContainsNameOrEmail || !isNotWeak) {
      newErrors.password = "Password does not meet requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup data:", formData);
      // Simulate sending verification email
      setViewMode("verify-email");
    }
  };

  const handleVerifyEmail = (code: string) => {
    // Simulate verification
    console.log("Verification code:", code);
    // In production, verify the code with backend
    setViewMode("success");
  };

  const handleResendCode = () => {
    console.log("Resending verification code to:", formData.email);
    // In production, trigger resend email API
  };

  const handleContinueShopping = () => {
    onClose();
    // Navigate to shop or homepage
  };

  const handleListItem = () => {
    onOpenListing();
  };

  const handleForgotPassword = () => {
    setViewMode("reset-password");
  };

  const handleResetPasswordSubmit = (email: string) => {
    setResetPasswordEmail(email);
    console.log("Reset password email:", email);
    // In production, send reset password email via API
    setViewMode("reset-password-sent");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-full sm:max-w-lg relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {viewMode === "initial" && (
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              )}

              <div className="p-8 pt-10">
                {viewMode === "initial" ? (
                  <InitialView
                    email={email}
                    setEmail={setEmail}
                    isSignupMode={isSignupMode}
                    setIsSignupMode={setIsSignupMode}
                    onEmailSubmit={handleEmailSubmit}
                  />
                ) : viewMode === "login" ? (
                  <LoginView
                    loginFormData={loginFormData}
                    setLoginFormData={setLoginFormData}
                    onSubmit={handleLoginSubmit}
                    onBack={() => setViewMode("initial")}
                    onSwitchToSignup={() => setViewMode("signup")}
                    onForgotPassword={handleForgotPassword}
                  />
                ) : viewMode === "signup" ? (
                  <SignupView
                    formData={formData}
                    setFormData={setFormData}
                    errors={errors}
                    agreedToTerms={agreedToTerms}
                    setAgreedToTerms={setAgreedToTerms}
                    onSubmit={handleSignupSubmit}
                    onBack={() => setViewMode("initial")}
                    onInputChange={handleInputChange}
                  />
                ) : viewMode === "verify-email" ? (
                  <EmailVerificationView
                    email={formData.email}
                    onVerify={handleVerifyEmail}
                    onBack={() => setViewMode("signup")}
                    onResend={handleResendCode}
                  />
                ) : viewMode === "reset-password" ? (
                  <ResetPasswordView
                    onSubmit={handleResetPasswordSubmit}
                    onBack={() => setViewMode("login")}
                  />
                ) : viewMode === "reset-password-sent" ? (
                  <ResetPasswordSentView
                    email={resetPasswordEmail}
                    onBackToLogin={() => setViewMode("login")}
                  />
                ) : (
                  <WelcomeSuccessView
                    onContinueShopping={handleContinueShopping}
                    onListItem={handleListItem}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OnboardingModal;
