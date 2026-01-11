"use client";

import { useState } from "react";
import { FaCircleNotch, FaShoppingCart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUp } from "react-icons/ai";

import InputComponentWithSearch from "../custom/input-component-search";
import Link from "next/link";
import Image from "next/image";
import OnboardingModal from "../authentication/onboarding-modal";
import { ThemeToggle } from "../theme-toggle";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center bg-white dark:bg-gray-900 transition-colors">
        <div className="flex w-[95%] items-center justify-between py-4 md:py-6 gap-4 max-w-[1920px]">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose size={24} className="text-[#404040] dark:text-gray-300" />
            ) : (
              <AiOutlineMenu size={24} className="text-[#404040] dark:text-gray-300" />
            )}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={"/images/brand.png"}
              alt={"Awastore logo"}
              width={80}
              height={80}
              className="object-contain h-12 w-12 md:h-16 md:w-16 rounded-md"
            />
          </div>

          {/* Desktop search - hidden on mobile */}
          <div className="hidden lg:flex flex-1 items-center justify-center px-8 max-w-2xl">
            <InputComponentWithSearch />
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile search toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle search"
            >
              <AiOutlineSearch size={24} className="text-[#404040] dark:text-gray-300" />
            </button>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Desktop auth buttons */}
            <div className="hidden md:flex px-6 lg:px-8 py-2.5 rounded-3xl justify-center items-center shadow shadow-gray-300 dark:shadow-gray-700 font-semibold greycolor dark:text-gray-300 whitespace-nowrap bg-white dark:bg-gray-800">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hover:text-[#7733FF] dark:hover:text-[#9966FF] transition-colors cursor-pointer"
              >
                Sign in
              </button>
              <span className="mx-1">/</span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="hover:text-[#7733FF] dark:hover:text-[#9966FF] transition-colors cursor-pointer"
              >
                Register
              </button>
            </div>

            {/* Cart icons - hidden on small mobile */}
            <div className="hidden sm:flex gap-3 md:gap-6 items-center">
              <span className="relative cursor-pointer hover:scale-110 transition-transform">
                <span className="absolute z-20 text-white -top-2 -right-2 background rounded-full px-1.5 py-0.5 h-auto text-[10px] font-semibold min-w-[18px] text-center">
                  1
                </span>
                <AiOutlineHeart size={24} className="text-[#404040] dark:text-gray-300 md:w-7 md:h-7" />
              </span>
              <span className="relative cursor-pointer hover:scale-110 transition-transform">
                <span className="absolute z-20 text-white -top-2 -right-2 background rounded-full px-1.5 py-0.5 h-auto text-[10px] font-semibold min-w-[18px] text-center">
                  1
                </span>
                <AiOutlineShoppingCart size={24} className="text-[#404040] dark:text-gray-300 md:w-7 md:h-7" />
              </span>
              <span className="hidden lg:flex flex-col justify-center">
                <span className="text-xs greycolor dark:text-gray-400 leading-tight">Your Cart</span>
                <span className="font-semibold text-base greycolor dark:text-gray-200 leading-tight">₦0.00</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      {isSearchOpen && (
        <div className="lg:hidden w-full px-4 pb-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <InputComponentWithSearch />
        </div>
      )}

      {/* Mobile menu - Category Side Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Side Drawer */}
          <div className="lg:hidden fixed left-0 top-0 bottom-0 w-[280px] bg-white dark:bg-gray-900 z-50 shadow-2xl overflow-y-auto">
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <AiOutlineClose size={20} className="text-[#404040] dark:text-gray-300" />
                </button>
              </div>

              {/* Categories List */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Categories</h3>
                  <div className="space-y-1">
                    {[
                      { icon: "📚", label: "Academics" },
                      { icon: "📱", label: "Electronics & Gadgets" },
                      { icon: "🏠", label: "Hostel & Apartment Life" },
                      { icon: "👔", label: "Fashion & Style" },
                      { icon: "🎮", label: "Hobbies & Recreation" },
                      { icon: "🔧", label: "Services" },
                      { icon: "📦", label: "Others" },
                    ].map((category, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
                      >
                        <span className="text-xl">{category.icon}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{category.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Auth Buttons at Bottom */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3 bg-gray-50 dark:bg-gray-800/50">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 rounded-lg bg-[#7733FF] text-white font-semibold hover:bg-[#6622EE] transition-colors"
                >
                  Sign in
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 rounded-lg border-2 border-[#7733FF] text-[#7733FF] dark:text-[#9966FF] font-semibold hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <OnboardingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenListing={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
