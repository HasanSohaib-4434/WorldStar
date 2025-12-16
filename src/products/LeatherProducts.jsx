import React, { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  ShoppingBag,
  Scissors,
  Shirt,
  CheckCircle,
  Award,
  Shield,
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

const LeatherProducts = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const products = [
    {
      title: "Finished Leather",
      icon: Scissors,
      image: "/universal.jpeg",
      desc: "Premium quality finished leather for manufacturing and crafts.",
      details:
        "We supply a wide range of finished leather including vegetable-tanned, chrome-tanned, and semi-chrome leather varieties. Available in full-grain, top-grain, and genuine leather grades with various finishes including natural, aniline, semi-aniline, and pigmented surfaces. Our leather is sourced from certified tanneries meeting environmental and quality standards. Perfect for furniture manufacturers, automotive upholstery, footwear production, and leather goods makers. Available in different thicknesses, colors, and textures to suit diverse manufacturing requirements.",
    },
    {
      title: "Leather Shoes",
      icon: ShoppingBag,
      image: "/universal.jpeg",
      desc: "Handcrafted leather footwear for men, women, and children.",
      details:
        "Our footwear collection includes formal shoes, casual loafers, boots, sandals, and traditional leather footwear. Each pair is crafted by skilled artisans using genuine leather uppers, cushioned insoles, and durable outsoles. We offer custom sizing, color options, and private labeling for retailers and distributors. All shoes undergo comfort testing, flexibility checks, and quality inspections. Available in various styles from classic dress shoes to contemporary casual designs, suitable for different markets and seasons.",
    },
    {
      title: "Belts & Accessories",
      icon: Briefcase,
      image: "/universal.jpeg",
      desc: "Stylish leather belts, wallets, and fashion accessories.",
      details:
        "Our accessories range includes leather belts with multiple buckle styles, wallets, cardholders, keychains, and small leather goods. Each product is cut from premium leather hides with precision stitching, edge finishing, and durable hardware. Belts are available in various widths, lengths, and colors with options for embossing and custom branding. Perfect for fashion retailers, corporate gifting, and wholesale distribution. All accessories combine functionality with timeless style and are built to last for years.",
    },
    {
      title: "Leather Bags",
      icon: ShoppingBag,
      image: "/universal.jpeg",
      desc: "Durable and stylish leather bags for every occasion.",
      details:
        "We manufacture a comprehensive range of leather bags including briefcases, laptop bags, backpacks, handbags, crossbody bags, messenger bags, and travel luggage. Each bag features reinforced stitching, quality zippers and hardware, padded compartments, and ergonomic designs. Available in various leather types from soft nappa to rugged full-grain leather. Custom designs, branding, and packaging available for corporate clients and fashion brands. Our bags blend professional aesthetics with practical functionality.",
    },
    {
      title: "Leather Garments",
      icon: Shirt,
      image: "/universal.jpeg",
      desc: "Premium leather jackets, coats, and fashion wear.",
      details:
        "Our garment collection includes leather jackets, coats, vests, pants, and fashion accessories. Crafted from supple lambskin, robust cowhide, and premium sheepskin, each garment is tailored for comfort and style. We offer various styles including biker jackets, bomber jackets, formal coats, and contemporary fashion pieces. All garments feature quality linings, YKK zippers, and professional finishing. Available in standard sizes with options for custom tailoring, color selection, and design modifications for fashion brands and retailers.",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Genuine Leather",
      desc: "100% authentic leather from certified sources",
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      desc: "Handcrafted by skilled leather artisans",
    },
    {
      icon: Shield,
      title: "Quality Tested",
      desc: "Durability and finish quality assured",
    },
    {
      icon: Globe,
      title: "Custom Options",
      desc: "Branding, sizing, and design customization",
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
            <Briefcase className="w-20 h-20 mx-auto mb-6 text-[#224b72]" />
            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
              Premium{" "}
              <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                Leather Products
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Expertly crafted leather goods combining traditional craftsmanship
              with modern design. From finished leather to shoes, bags, belts,
              and garments, we deliver quality that stands the test of time.
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
                Craftsmanship Meets Quality
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Worldstar Enterprise has earned its reputation in the leather
                industry through decades of dedication to quality and
                craftsmanship. Our leather products are manufactured by skilled
                artisans using time-tested techniques combined with modern
                quality standards. From sourcing premium hides to final
                finishing, every step is carefully monitored to ensure products
                that are durable, stylish, and ethically produced. We serve
                fashion brands, retailers, corporate clients, and leather goods
                distributors worldwide.
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
                Our Leather Product Range
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From raw finished leather to elegant leather goods, crafted with
                precision and passion.
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

      {/* ---------------- Quality & Standards ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
              Quality Craftsmanship & Standards
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Artisan Craftsmanship
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our leather products are crafted by skilled artisans with
                  years of experience in leather working. Each piece undergoes
                  multiple stages of cutting, stitching, finishing, and quality
                  inspection. We use traditional hand-stitching techniques
                  combined with modern machinery for products that are both
                  beautiful and durable. From selecting the finest leather hides
                  to final polishing, every detail receives meticulous attention
                  to ensure products that exceed customer expectations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Ethical & Sustainable
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We source leather from certified tanneries that follow
                  responsible environmental practices and animal welfare
                  standards. Our tanning processes minimize harmful chemicals
                  and waste, with many facilities holding ISO 14001
                  environmental certifications. We prioritize chrome-free and
                  vegetable-tanned leather options for eco-conscious clients.
                  All leather products are manufactured in facilities that
                  maintain fair labor practices, safe working conditions, and
                  comply with international ethical manufacturing standards.
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
              Source Premium Leather Products
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Contact us for product catalogs, leather samples, custom design
              options, and competitive wholesale pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default LeatherProducts;
