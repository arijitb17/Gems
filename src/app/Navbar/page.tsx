"use client";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBars,
  faTimes,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import Cartcount from './Cartcount';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';

const NavItem: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => {
  return (
    <div
      className="cursor-pointer text-slate-800 hover:bg-slate-300 px-3 py-2 rounded-md text-sm font-medium"
      onClick={onClick}
    >
      {label}
    </div>
  );
};
const Navbar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser(); // Get the current user using Clerk

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNavigation = (path: string) => {
    if (isMounted) {
      window.location.href = path;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Upper Navbar */}
      <nav className="bg-gray-700">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Mobile number section */}
            <div className="flex items-center text-slate-200">
              <a href="tel:+1234567890">+1234567890</a>
              <p className="ml-2 mr-2">| </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-slate-200" />
              </a>
            </div>

            {/* Search bar */}
            <div className="hidden flex-1 sm:flex justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-md w-full lg:max-w-xs">
                <div className="relative">
                  <div className="absolute inset-y-0 right-5 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full bg-slate-200 text-slate-800 rounded-md pl-7 pr-3 py-1 focus:outline-none focus:bg-slate-300 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Account, Wishlist, Cart Icons */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <div className="relative group">
                <Cartcount />
                <span className="tooltip absolute top-full left-0 w-full text-center text-xs text-white py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
                  Cart
                </span>
              </div>

              {/* Navbar Items */}
              <div className="border-teal-400 border-[2px] rounded-xl">
                <ul className="flex justify-between py-4 px-6">
                  
                  <div className="flex gap-6 items-center">
                    {!user ? (
                      <>
                        
                        <Link href="/sign-up">
                          <li className='text-slate-200'>Sign Up</li>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link href="/profile">
                          <li>Profile</li>
                        </Link>
                        <li className="flex items-center">
                          <UserButton />
                        </li>
                      </>
                    )}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Lower Navbar (Hamburger menu) */}
      <nav className="bg-slate-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => {
                window.location.href = '/'; // Replace with your home page URL
              }}
            >
           

<Image
  className="block  h-8 w-auto transition-opacity duration-300 ease-in-out transform hover:opacity-80 hover:scale-105"
  src="/images/JGJ.jpg"
  alt="Logo"
  width={200}  // Replace with the actual width of your image
  height={500}  // Replace with the actual height of your image
/>





            </div>

            {/* Hamburger icon for mobile */}
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="flex space-x-4">
                <NavItem
                  label="Gems"
                  onClick={() => handleNavigation('/Gems')}
                />
                <NavItem label="Astro" onClick={() => handleNavigation('/Gemr')} />
                <NavItem
                  label="Track Order"
                  onClick={() => handleNavigation('/Collections')}
                />
                <NavItem label="Contact" onClick={() => handleNavigation('/ContactForm')} />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-slate-900 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-slate-200 border-[1.5px] border-slate-700 rounded-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-700" aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full bg-slate-200 text-slate-800 rounded-md pl-10 pr-3 py-2 focus:outline-none focus:bg-slate-200 text-sm border-[1px] border-slate-800"
              />
            </div>
            <NavItem label="Gems" onClick={() => handleNavigation('/Gems')} />
            <NavItem label="Collections" onClick={() => handleNavigation('/Collections')} />
            <NavItem label="Astro" onClick={() => handleNavigation('/Gemr')} />
            <NavItem label="Contact" onClick={() => handleNavigation('/ContactForm')} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
