import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // make sure lucide-react is installed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-[#858C8E]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="logo.png"
            alt="Worldstar Enterprise"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
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

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-[#858C8E]">
          <Link
            to="/"
            className="block px-6 py-3 border-b border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-6 py-3 border-b border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className="block px-6 py-3 border-b border-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Product Range
          </Link>
          <Link
            to="/contact"
            className="block px-6 py-3 text-white bg-[#858C8E] rounded-b-lg text-center font-semibold hover:bg-black transition"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
