import React from 'react';

interface Descriptions {
  [key: string]: string;
}

const descriptions: Descriptions = {
  'What is a Gemstone?': 'A gemstone is a precious or semi-precious stone that is cut and polished to be used in jewelry.',
  'What is Gemstone Color?': 'Gemstone color refers to the hue, tone, and saturation of the gemstone.',
  'FAQs': 'Frequently asked questions about gemstones.',
};

interface BannerProps {
  onDescriptionClick: (desc: string) => void;
}

const Banner: React.FC<BannerProps> = ({ onDescriptionClick }) => {
  const handleButtonClick = (title: string) => {
    onDescriptionClick(descriptions[title]);
  };

  return (
    <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/images/banner.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-8">
        <h1 className="text-white text-4xl font-bold mb-4">Gemstones</h1>
        <div className="flex space-x-4 mb-2">
          {Object.keys(descriptions).map((title, index) => (
            <button
              key={index}
              className="p-2 mt-20 text-white hover:underline"
              onClick={() => handleButtonClick(title)}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
