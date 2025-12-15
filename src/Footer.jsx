import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white py-16 border-t-4 border-[#858C8E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-8">
          <div className="flex justify-center md:justify-start">
            <img
              src="logo.png"
              alt="Worldstar Enterprise"
              className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="flex justify-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-[#858C8E] transition-colors font-medium text-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-[#858C8E] transition-colors font-medium text-lg"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-gray-300 hover:text-[#858C8E] transition-colors font-medium text-lg"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-[#858C8E] transition-colors font-medium text-lg"
            >
              Contact
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-base font-medium">
              © {new Date().getFullYear()} Worldstar Enterprise
            </p>
            <p className="text-gray-500 text-sm mt-1">All Rights Reserved</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            30+ Years of Excellence in Global Trade
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
