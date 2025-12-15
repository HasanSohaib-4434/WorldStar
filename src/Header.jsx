import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-[#858C8E]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img
            src="logo.png"
            alt="Worldstar Enterprise"
            className="h-14 w-auto"
          />

          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/products" className="nav-link">
              Product Range
            </Link>
            <Link
              to="/contact"
              className="bg-[#858C8E] text-white px-6 py-2 rounded-full font-semibold hover:bg-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
