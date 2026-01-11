"use client";

import { Camera, X } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";

interface PhotoUploadProps {
    photos: File[];
    onPhotosChange: (photos: File[]) => void;
    onBack: () => void;
    onUpload: () => void;
}

export const PhotoUpload = ({
    photos,
    onPhotosChange,
    onBack,
    onUpload,
}: PhotoUploadProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        const validFiles = droppedFiles.filter(file =>
            file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024
        );

        if (validFiles.length > 0) {
            onPhotosChange([...photos, ...validFiles]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            const validFiles = selectedFiles.filter(file =>
                file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024
            );

            if (validFiles.length > 0) {
                onPhotosChange([...photos, ...validFiles]);
            }
        }
    };

    const removePhoto = (index: number) => {
        const newPhotos = [...photos];
        newPhotos.splice(index, 1);
        onPhotosChange(newPhotos);
    };

    return (
        <div className="space-y-6 md:space-y-8">
            <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Upload 3 or more photos of the item
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Tip: clear and high quality images get 3x more sales!
                </p>
            </div>

            <div className="space-y-4">
                {/* Upload Area */}
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-6 md:p-8 transition-all duration-200 flex flex-col items-center justify-center gap-4 ${isDragging
                        ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20"
                        : "border-gray-300 dark:border-gray-600 hover:border-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                >
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-500 dark:text-orange-400">
                        <Camera size={32} />
                    </div>

                    <div className="text-center">
                        <p className="text-gray-900 dark:text-white font-medium mb-1">
                            Browse for photos or drag & drop it here
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            JPEG, PNG up to 5MB
                        </p>

                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileSelect}
                            accept="image/*"
                            multiple
                            className="hidden"
                        />

                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="px-6 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                        >
                            Browse photos
                        </button>
                    </div>
                </div>

                {/* Photo Previews */}
                {photos.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {photos.map((photo, index) => (
                            <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                                <Image
                                    src={URL.createObjectURL(photo)}
                                    alt={`Preview ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                                <button
                                    onClick={() => removePhoto(index)}
                                    className="absolute top-1 right-1 p-1 bg-black/50 dark:bg-black/70 rounded-full text-white hover:bg-black/70 dark:hover:bg-black/90 transition-colors"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex justify-between pt-4">
                <button
                    onClick={onBack}
                    className="px-6 py-3 text-purple-600 font-semibold hover:bg-purple-50 rounded-lg transition-colors"
                >
                    Back
                </button>
                <button
                    onClick={onUpload}
                    disabled={photos.length < 3}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${photos.length >= 3
                        ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/30"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Upload
                </button>
            </div>
        </div>
    );
};
