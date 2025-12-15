import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Header";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";

// Product Detail Pages
import Textiles from "./products/Textiles";
import FoodItems from "./products/FoodItems";
import SportsEquipment from "./products/SportsEquipment";
import LeatherProducts from "./products/LeatherProducts";
import SurgicalInstruments from "./products/SurgicalInstruments";
import GlasswareTableware from "./products/GlasswareTableware";

import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

        {/* Product Details */}
        <Route path="/products/textiles" element={<Textiles />} />
        <Route path="/products/food-items" element={<FoodItems />} />
        <Route
          path="/products/sports-equipment"
          element={<SportsEquipment />}
        />
        <Route
          path="/products/leather-products"
          element={<LeatherProducts />}
        />
        <Route
          path="/products/surgical-instruments"
          element={<SurgicalInstruments />}
        />
        <Route
          path="/products/glassware-tableware"
          element={<GlasswareTableware />}
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
