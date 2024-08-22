"use client"
import React, { useState } from 'react';
import { products } from "../../../utils/products"; 
import Banner from '../components/Banner';
import Cards from "../components/Cards";

const GemstomeList = () => {



 

  return ( 
    <div>
      <Banner 
        leftImageSrc="/images/ruby.jpg" 
        rightImageSrc="/images/topaz.jpeg" 
      />
      
      <div className="container mx-auto p-4">
       

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
