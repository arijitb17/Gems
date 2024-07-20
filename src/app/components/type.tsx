import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function Coollections() {
  const words = [
    {
      text: "Jupiter",
    },
    {
      text: "Gems",
    },
    {
      text: "and",
    },
    {
      text: "Jewellers",
      className: "text-yellow-500 dark:text-yellow-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Reduced upper space */}
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mt-0 sm:mt-4">
        Browse the latest collections
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 mt-4 md:mt-8 space-x-0 md:space-x-4">
        {/* Adjusted spacing for buttons */}
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
         Order Now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}


