
import React from 'react';

interface BannerProps {
  leftImageSrc: string;
  rightImageSrc: string;
}

const Banner: React.FC<BannerProps> = ({ leftImageSrc, rightImageSrc }) => {
  return (
    <div className="relative w-full h-64 flex">
      {/* Left Side with Image and Angular Edge */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${leftImageSrc})`,
          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
        }}
      />

      {/* Space Between Images with Angular Cut */}
      <div
        className="w-1/2 h-full"
        style={{
           // Cream color
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
        }}
      />

      {/* Right Side with Image and Angular Edge */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${rightImageSrc})`,
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      {/* Overlay with Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-slate-800 text-4xl font-bold">Gemstones</h1>
      </div>
    </div>
  );
};

export default Banner;
