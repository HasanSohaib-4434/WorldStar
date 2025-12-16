import React, { useEffect, useRef, useState } from "react";
import {
  Shirt,
  Package,
  Scissors,
  Ruler,
  CheckCircle,
  Globe,
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

const Textiles = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const products = [
    {
      title: "Yarn",
      icon: Package,
      image: "/universal.jpeg",
      desc: "Premium quality yarns for diverse textile applications.",
      details:
        "We supply a comprehensive range of yarns including cotton, polyester, viscose, acrylic, and blended varieties. Our yarn collection caters to knitting, weaving, and embroidery industries with various counts, plies, and finishes. Each batch is tested for strength, uniformity, and color consistency to meet international textile standards. Available in different twists, textures, and dye options to suit manufacturing requirements for apparel, home textiles, and industrial applications.",
    },
    {
      title: "Fabrics",
      icon: Shirt,
      image: "/universal.jpeg",
      desc: "Wide variety of woven and knitted fabrics for every need.",
      details:
        "From lightweight voiles to heavy-duty canvas, our fabric portfolio includes cotton, linen, silk, polyester, and technical fabrics. We offer plain, printed, dyed, and embroidered options suitable for apparel, home textiles, and industrial applications. All fabrics undergo shrinkage control, color fastness testing, and quality inspection before dispatch. Available in various weights, widths, and finishes including mercerized, brushed, and coated treatments for enhanced performance and aesthetics.",
    },
    {
      title: "Made-ups",
      icon: Scissors,
      image: "/universal.jpeg",
      desc: "Finished textile products ready for retail and wholesale.",
      details:
        "Our made-ups division produces bed linen, towels, curtains, table linen, and home furnishing items. Each product is crafted with precision stitching, quality finishing, and attention to detail. We offer customization in sizes, colors, and packaging to meet specific buyer requirements and retail standards. From luxury hotel collections to everyday home textiles, our made-ups combine functionality with style, manufactured using superior fabrics and construction techniques.",
    },
    {
      title: "Garments",
      icon: Ruler,
      image: "/universal.jpeg",
      desc: "Ready-made garments for men, women, and children.",
      details:
        "We manufacture and export a complete range of garments including t-shirts, shirts, trousers, dresses, and jackets. Our production facilities follow ethical manufacturing practices with skilled tailors ensuring perfect fits and durable construction. Available in various sizes with options for private labeling and custom designs. From basic casual wear to fashion-forward pieces, our garment division serves retailers, fashion brands, and corporate uniform suppliers with quality that meets international standards.",
    },
    {
      title: "Suiting Fabrics",
      icon: Shirt,
      image: "/universal.jpeg",
      desc: "Premium suiting and formal wear fabrics.",
      details:
        "Specializing in high-quality suiting fabrics including wool blends, poly-viscose, and premium wool varieties. Our suiting range features various weights, textures, and patterns suitable for corporate wear, formal occasions, and bespoke tailoring. Each fabric is pre-shrunk, wrinkle-resistant, and finished to international standards with excellent drape and recovery properties. Perfect for tailors, garment manufacturers, and corporate uniform suppliers requiring consistent quality and color matching across large orders.",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Quality Certified",
      desc: "ISO certified manufacturing processes",
    },
    {
      icon: Globe,
      title: "Global Standards",
      desc: "Compliance with international textile norms",
    },
    {
      icon: Package,
      title: "Custom Orders",
      desc: "Tailored solutions for bulk buyers",
    },
    {
      icon: Shirt,
      title: "Ethical Production",
      desc: "Sustainable and responsible sourcing",
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
            <Shirt className="w-20 h-20 mx-auto mb-6 text-[#224b72]" />
            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
              Premium{" "}
              <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                Textiles
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              High-quality fabrics, yarns, and finished textile products sourced
              from trusted manufacturers. Our textile division offers
              comprehensive solutions for fashion brands, retailers, and
              industrial buyers worldwide.
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
                Comprehensive Textile Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Worldstar Enterprise has been a trusted name in the textile
                industry for over three decades. We supply premium quality
                yarns, fabrics, made-ups, garments, and suiting materials to
                businesses across the globe. Our commitment to quality, ethical
                manufacturing, and customer satisfaction has made us a preferred
                partner for major fashion brands, retailers, and textile
                distributors.
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
                Our Textile Product Range
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From raw materials to finished products, we offer a complete
                textile portfolio backed by strict quality control and
                international certifications.
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

      {/* ---------------- Quality Standards ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
              Quality Standards & Certifications
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Manufacturing Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our manufacturing partners operate ISO 9001 certified
                  facilities with modern machinery and skilled workforce. Every
                  production batch undergoes rigorous quality checks including
                  fabric weight testing, color fastness analysis, tensile
                  strength measurements, and dimensional stability assessments
                  to ensure consistency and durability.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Compliance & Safety
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We ensure compliance with international standards including
                  OEKO-TEX, GOTS for organic textiles, and REACH regulations for
                  chemical safety. Our products are free from harmful substances
                  and meet environmental protection standards, making them safe
                  for consumers and sustainable for the planet.
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
              Need Textile Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Get in touch with our textile experts for product catalogs,
              samples, and customized quotations tailored to your business
              requirements.
            </p>
            import {Link} from "react-router-dom";
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-[#224b72] font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-lg">
                  Request Quote
                </button>
              </Link>

              <Link to="/products">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#224b72] transition-all text-lg">
                  View All Products
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Textiles;
