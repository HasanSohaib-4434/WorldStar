import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Shirt,
  Apple,
  Dumbbell,
  Briefcase,
  Stethoscope,
  Wine,
} from "lucide-react";

/* ---------------- Scroll Reveal ---------------- */
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

/* ---------------- Product Categories ---------------- */
const categories = [
  {
    title: "Textiles",
    icon: Shirt,
    link: "/products/textiles",
    desc: "High-quality fabrics, yarns, and finished textiles for fashion, home, and industrial use.",
  },
  {
    title: "Food Items",
    icon: Apple,
    link: "/products/food-items",
    desc: "Fresh, preserved, and packaged food products, sourced globally with strict quality control.",
  },
  {
    title: "Sports Equipment",
    icon: Dumbbell,
    link: "/products/sports-equipment",
    desc: "Top-grade sports gear for professional and recreational activities, ensuring safety and performance.",
  },
  {
    title: "Leather Products",
    icon: Briefcase,
    link: "/products/leather-products",
    desc: "Premium leather goods including bags, belts, and accessories crafted with precision.",
  },
  {
    title: "Surgical Instruments",
    icon: Stethoscope,
    link: "/products/surgical-instruments",
    desc: "Reliable surgical tools and medical instruments for healthcare providers worldwide.",
  },
  {
    title: "Glassware & Tableware",
    icon: Wine,
    link: "/products/glassware-tableware",
    desc: "Elegant glass and tableware products for home, hospitality, and retail sectors.",
  },
];

const Products = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden min-h-screen">
      {/* ---------------- Parallax Background Shapes ---------------- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-72 h-72 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-3xl"
          style={{ top: scrollY * 0.3, left: "5%" }}
        />
        <div
          className="absolute w-96 h-96 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full opacity-10 blur-3xl"
          style={{ top: scrollY * 0.15, right: "10%" }}
        />
      </div>

      {/* ---------------- Hero ---------------- */}
      <section className="relative py-28 px-6 z-10">
        <Reveal>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
              Product{" "}
              <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                Ranges
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Explore our diverse range of products crafted for quality,
              innovation, and reliability.
            </p>
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#224b72] to-blue-600 mx-auto mt-8 rounded-full" />
          </div>
        </Reveal>
      </section>

      {/* ---------------- Product Cards ---------------- */}
      <section className="py-24 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={i} delay={i * 120}>
                <div className="group relative bg-gradient-to-br from-white via-blue-50 to-white border-2 border-blue-100 rounded-3xl p-8 hover:border-[#224b72] hover:shadow-2xl transition-all hover:-translate-y-2">
                  {/* Floating Icon */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-r from-[#224b72] to-blue-400 opacity-10 rounded-full blur-2xl" />
                  <Icon className="w-12 h-12 text-[#224b72] mb-4 relative z-10" />
                  <h3 className="text-2xl font-bold mb-3">{cat.title}</h3>
                  <p className="text-gray-600 mb-4">{cat.desc}</p>
                  <Link
                    to={cat.link}
                    className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#224b72] to-blue-600 text-white font-semibold hover:opacity-90 transition"
                  >
                    View Details
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Products;
