"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { ListingTypeSelection } from "./ListingTypeSelection";
import { ItemDetailsForm } from "./ItemDetailsForm";
import { PhotoUpload } from "./PhotoUpload";

interface ListingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ListingModal = ({ isOpen, onClose }: ListingModalProps) => {
    const [step, setStep] = useState(1);
    const [listingType, setListingType] = useState<"item" | "service" | null>(null);
    const [itemDetails, setItemDetails] = useState({
        title: "",
        condition: "",
        category: "",
        description: "",
    });
    const [photos, setPhotos] = useState<File[]>([]);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setListingType(null);
            setItemDetails({
                title: "",
                condition: "",
                category: "",
                description: "",
            });
            setPhotos([]);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (step > 1) {
            setStep((prev) => prev - 1);
        }
    };

    const handleDetailsChange = (field: string, value: string) => {
        setItemDetails((prev) => ({ ...prev, [field]: value }));
    };

    const handleUpload = () => {
        console.log("Submitting listing:", {
            type: listingType,
            details: itemDetails,
            photos: photos
        });
        // In production, submit to API
        onClose();
    };

    const totalSteps = 3;
    const progress = (step / totalSteps) * 100;

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
                            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-full md:max-w-3xl relative overflow-hidden flex flex-col max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-white z-10">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                            <span className="text-purple-600 font-bold text-sm">A</span>
                                        </div>
                                        <span className="font-bold text-gray-900">Awastore</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={onClose}
                                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
                                    >
                                        Save & exit
                                    </button>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full h-1 bg-gray-100">
                                <div
                                    className="h-full bg-purple-600 transition-all duration-300 ease-out"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-8">
                                <div className="max-w-2xl mx-auto">
                                    {step === 1 && (
                                        <ListingTypeSelection
                                            selectedType={listingType}
                                            onSelect={setListingType}
                                            onNext={handleNext}
                                        />
                                    )}

                                    {step === 2 && (
                                        <ItemDetailsForm
                                            formData={itemDetails}
                                            onChange={handleDetailsChange}
                                            onNext={handleNext}
                                            onBack={handleBack}
                                        />
                                    )}

                                    {step === 3 && (
                                        <PhotoUpload
                                            photos={photos}
                                            onPhotosChange={setPhotos}
                                            onBack={handleBack}
                                            onUpload={handleUpload}
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Footer Navigation (Back button for steps > 1 is handled in components, but we could have global nav here) */}
                            {/* Currently components handle their own navigation buttons as per design */}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
