"use client"
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from './page'; // Adjust the import path as per your project structure
import { products } from '../../../utils/products'; // Adjust the import path as per your project structure
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons

const TrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState<any[]>([]);

  useEffect(() => {
    // Function to fetch or initialize views from local storage
    const fetchViewsFromStorage = () => {
      let storedViews = JSON.parse(localStorage.getItem('productViews') || '{}');

      // Initialize views if not already stored
      if (Object.keys(storedViews).length === 0) {
        products.forEach(product => {
          storedViews[product.id] = { views: 0 };
        });
        localStorage.setItem('productViews', JSON.stringify(storedViews));
      }

      return storedViews;
    };

    // Function to update views for a product
    const updateViews = (productId: string) => {
      let storedViews = fetchViewsFromStorage();
      storedViews[productId].views += 1;
      localStorage.setItem('productViews', JSON.stringify(storedViews));
    };

    // Function to fetch trending products based on views
    const fetchTrendingProducts = () => {
      let storedViews = fetchViewsFromStorage();

      // Sort products based on views in descending order
      const trending = products.sort((a, b) => {
        // Ensure storedViews[b.id] and storedViews[a.id] are defined
        const viewsB = storedViews[b.id] ? storedViews[b.id].views : 0;
        const viewsA = storedViews[a.id] ? storedViews[a.id].views : 0;
        
        return viewsB - viewsA;
      });

      // Select top 4 trending products
      const topTrending = trending.slice(0, 4);
      setTrendingProducts(topTrending);
    };

    fetchTrendingProducts();
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable arrows within the slider
    responsive: [
      {
        breakpoint: 640, // Adjust breakpoint as needed for your mobile layout
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = React.useRef<Slider>(null);

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center">Trending Products</h1>
      <div className="hidden sm:block">
        {/* Desktop layout (normal grid display) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <Cards key={product.id} data={product} />
          ))}
        </div>
        {/* Icon arrows for desktop view */}
        
      </div>
      <div className="sm:hidden">
        {/* Mobile layout (slider display) */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {trendingProducts.map((product) => (
            <div key={product.id} className="px-2">
              <Cards data={product} />
            </div>
          ))}
        </Slider>
        {/* Icon arrows for mobile view */}
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-300"
            onClick={goToPrev}
          >
            <FaArrowLeft className="text-xl text-gray-700" />
          </button>
          <button
            className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-300 ml-4"
            onClick={goToNext}
          >
            <FaArrowRight className="text-xl text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
