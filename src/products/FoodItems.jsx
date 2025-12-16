import React, { useEffect, useRef, useState } from "react";
import {
  Apple,
  Wheat,
  Mountain,
  Candy,
  Carrot,
  CheckCircle,
  Award,
  Package,
  Globe,
} from "lucide-react";

import { Link } from "react-router-dom";

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

const FoodItems = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const products = [
    {
      title: "Himalayan Pink Salt",
      icon: Mountain,
      image: "/universal.jpeg",
      desc: "Pure, unprocessed Himalayan pink salt from Pakistan's salt mines.",
      details:
        "Sourced directly from the ancient salt mines of Khewra, our Himalayan pink salt is 100% natural and unrefined. Rich in essential minerals including calcium, magnesium, and potassium, it's available in various grades - edible fine salt, coarse crystals, salt blocks, and decorative lamps. Each batch is tested for purity and meets international food safety standards including FDA and EU regulations.",
    },
    {
      title: "Basmati Rice",
      icon: Wheat,
      image: "/universal.jpeg",
      desc: "Premium quality long-grain Basmati rice from the finest farms.",
      details:
        "We export premium Basmati rice varieties including Super Basmati, 1121 Extra Long Grain, and traditional white Basmati. Known for their distinctive aroma, delicate flavor, and non-sticky texture, our rice undergoes careful aging, sorting, and quality testing. Available in 1kg to 50kg packaging with options for private labeling. All batches are pesticide-tested and certified for export quality.",
    },
    {
      title: "Confectionery",
      icon: Candy,
      image: "/universal.jpeg",
      desc: "Delicious confectionery products for retail and wholesale markets.",
      details:
        "Our confectionery range includes hard candies, lollipops, toffees, chocolates, and sugar-free options. Manufactured in HACCP-certified facilities with strict hygiene protocols, each product features quality ingredients, vibrant flavors, and attractive packaging. Perfect for retailers, distributors, and promotional campaigns with customization options available for bulk orders.",
    },
    {
      title: "Fruits & Vegetables",
      icon: Carrot,
      image: "/universal.jpeg",
      desc: "Fresh and processed fruits and vegetables sourced seasonally.",
      details:
        "We supply fresh seasonal fruits including mangoes, citrus, apples, and dried fruits like dates, apricots, and raisins. Our vegetable portfolio includes potatoes, onions, tomatoes, and processed options like frozen vegetables and pulps. All products are carefully selected, graded, and packaged following cold chain management to preserve freshness and nutritional value during transit.",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Food Safety Certified",
      desc: "HACCP, ISO 22000, and FDA compliant",
    },
    {
      icon: Award,
      title: "Premium Quality",
      desc: "Hand-picked from trusted suppliers",
    },
    {
      icon: Package,
      title: "Export Packaging",
      desc: "Vacuum sealed, moisture-proof containers",
    },
    {
      icon: Globe,
      title: "Global Delivery",
      desc: "Temperature-controlled logistics worldwide",
    },
  ];

  return (
    <div className="relative bg-white overflow-hidden min-h-screen">
      {/* ---------------- Parallax Background ---------------- */}
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
      <section className="relative py-28 px-6 z-10 bg-gradient-to-br from-white via-blue-50 to-white">
        <Reveal>
          <div className="max-w-5xl mx-auto text-center">
            <Apple className="w-20 h-20 mx-auto mb-6 text-[#224b72]" />
            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
              Premium{" "}
              <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                Food Items
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Fresh, preserved, and packaged food products sourced from the
              finest farms and manufacturers. Our food division delivers quality
              ingredients and specialty items to markets across the globe.
            </p>
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#224b72] to-blue-600 mx-auto mt-8 rounded-full" />
          </div>
        </Reveal>
      </section>

      {/* ---------------- Introduction ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Trusted Food Export Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Worldstar Enterprise specializes in exporting high-quality food
                products that meet international safety and hygiene standards.
                From Himalayan pink salt to premium Basmati rice, confectionery,
                and fresh produce, we ensure every product reaches our clients
                in perfect condition. Our partnerships with certified growers
                and manufacturers, combined with temperature-controlled
                logistics, guarantee freshness and quality at every step.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all">
                    <Icon className="w-12 h-12 text-[#224b72] mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Product Categories - Alternating Layout ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Our Food Product Range
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quality ingredients and specialty food items, carefully sourced
                and packaged for international markets.
              </p>
            </div>
          </Reveal>

          <div className="space-y-16">
            {products.map((product, i) => {
              const Icon = product.icon;
              const isEven = i % 2 === 0;

              return (
                <Reveal key={i} delay={i * 150}>
                  <div
                    className={`grid lg:grid-cols-2 gap-8 items-center ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className={`${!isEven ? "lg:order-2" : ""}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-blue-100 hover:border-[#224b72] transition-all group">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <Icon className="absolute bottom-6 right-6 w-16 h-16 text-white drop-shadow-lg" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${!isEven ? "lg:order-1" : ""}`}>
                      <div className="bg-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                        <h3 className="text-3xl font-black text-gray-900 mb-4">
                          {product.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-4 font-semibold">
                          {product.desc}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {product.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Quality & Packaging ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
              Quality Standards & Export Packaging
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Strict Quality Control
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every food product undergoes multiple quality checks from
                  source to shipment. Our testing includes pesticide residue
                  analysis, microbial testing, moisture content measurement, and
                  sensory evaluation. We partner only with certified suppliers
                  who maintain HACCP, ISO 22000, and GMP standards, ensuring
                  products meet FDA, EU, and importing country regulations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Export-Grade Packaging
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our food products are packed using food-grade materials
                  including vacuum-sealed bags, moisture-proof containers, and
                  multi-layer packaging for extended shelf life. We provide
                  customized packaging solutions with private labeling,
                  nutritional information, and compliance labeling as per
                  destination country requirements. Temperature-controlled
                  containers maintain optimal conditions during transit.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-gradient-to-br from-[#224b72] to-blue-600">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Source Quality Food Products
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Contact us for product catalogs, samples, certificates, and
              competitive quotations for bulk food imports.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Request Quote */}
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-[#224b72] font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-lg inline-block text-center"
              >
                Request Quote
              </Link>

              {/* View All Products */}
              <Link
                to="/products"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#224b72] transition-all text-lg inline-block text-center"
              >
                View All Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default FoodItems;
