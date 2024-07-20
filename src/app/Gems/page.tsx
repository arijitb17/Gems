"use client"
import React, { useState } from 'react';
import { products } from "../../../utils/products"; 
import Banner from "../Banner/page";
import Cards from "../Cards/page";

const GemstomeList = () => {
  const [description, setDescription] = useState<string>('');

  const handleDescriptionClick = (desc: string) => {
    setDescription(desc);
  };

  const resetDescription = () => {
    setDescription('');
  };

  return ( 
    <div>
      <Banner onDescriptionClick={handleDescriptionClick} />
      
      <div className="container mx-auto p-4">
        {description && (
          <div className="bg-white p-4 mb-4 border border-gray-300 rounded">
            <button className="text-sm text-gray-600 hover:text-gray-800 float-right" onClick={resetDescription}>
              Close
            </button>
            <p className="text-lg font-semibold text-black">{description}</p>
          </div>
        )}

        <header className="text-center py-6">
          <h1 className="text-4xl font-bold text-gray-800">Discover Gemstones</h1>
          <p className="mt-2 text-lg text-gray-600">Explore our collection of exquisite gemstones</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-10 mb-10">
          {products.map((product: any) => (
            <div key={product.id} className="flex justify-center">
              <div className="w-full max-w-[400px]"> {/* Adjusted width constraints */}
                <Cards data={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GemstomeList;
