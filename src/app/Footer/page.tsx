import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-700 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-2">About Jupiter Gems & Jewellers</h3>
            <p className="text-sm">We are committed to providing the finest quality gemstones and jewellery to our customers.</p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/Gems">Shop</a></li>
              <li><a href="/Video">About Us</a></li>
              <li><a href="/ContactForm">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul className="text-sm">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <p className="text-sm">Stay updated with our latest offers and news by following us on social media.</p>
            <div className="mt-3 flex space-x-4">
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" style={{ color: '#3b5998' }} className="hover:text-gray-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F' }} className="hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }} className="hover:text-gray-300">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-6 border-gray-600" />
        <p className="text-center text-sm mt-4">&copy; 2024 Jupiter Gems & Jewellers. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
