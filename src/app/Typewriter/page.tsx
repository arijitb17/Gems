'use client'
import React from 'react';
import { useUser } from '@clerk/nextjs'; // Ensure correct import
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import ClerkPage from "../signin/page"; // Adjust the path as per your project structure

const Login: React.FC = () => {
  const { user } = useUser(); // Get user from Clerk

  const words = [
    { text: "Jupiter", className: "text-black dark:text-black" },
    { text: "Gems", className: "text-yellow-500 dark:text-yellow-500" },
    { text: "and", className: "text-black dark:text-black" },
    { text: "Jewellers", className: "text-yellow-500 dark:text-yellow-500" },
  ];

  const buttonClassName = "w-40 h-12 rounded-xl border-black text-black text-sm";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Reduced upper space */}
      <p className="text-slate-500 text-xs sm:text-2xl mt-0 sm:mt-4">
        Browse the latest collections
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 mt-4 sm:mt-8 space-x-0 sm:space-x-4">
        {/* Adjusted spacing for buttons */}
        <div className="flex justify-center">
          <button className={`${buttonClassName} bg-black hover:bg-slate-600`}>
            <a href="/Gems" className="flex items-center justify-center h-full w-full text-white">Browse Now</a>
          </button>
        </div>
        {/* Conditionally render ClerkPage */}
        {!user && (
          <div className="flex justify-center mt-4 sm:mt-0">
            <div className="border-black border rounded-xl">
              <ClerkPage buttonClassName={`${buttonClassName} bg-white text-black hover:bg-teal-400`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
