"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Video: React.FC = () => {
    const handleButtonClick = () => {
      window.location.href = '/Collections'; // Redirects to /collections page
    };
  
    return (
      <div>
        {/* Video section */}
        <div className="flex flex-wrap">
          {/* Description section */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700">
              Write your store description here. This could include information about your products, services, location,
              contact details, etc.
            </p>
          </div>
          {/* Video section with padding */}
          <div className="w-full md:w-1/2 p-4">
            <div className="mt-8 mb-8 flex justify-center">
              <video loop muted autoPlay style={{ width: '80%' }} className="rounded-xl">
                <source src="https://videos.pexels.com/video-files/20600550/20600550-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
  
        {/* Image section */}
        
      </div>
    );
  };
  
  export default Video;
  