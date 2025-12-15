import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Shirt,
  Apple,
  Dumbbell,
  Briefcase,
  Stethoscope,
  Wine,
  Globe,
  Award,
  TrendingUp,
  ShieldCheck,
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
    details:
      "From premium cotton and silk to technical fabrics, our textile range serves global fashion brands, interior designers, and industrial manufacturers with consistent quality and ethical sourcing.",
    image: "/universal.jpeg",
  },
  {
    title: "Food Items",
    icon: Apple,
    link: "/products/food-items",
    desc: "Fresh, preserved, and packaged food products, sourced globally with strict quality control.",
    details:
      "We supply rice, spices, dried fruits, sauces, and specialty ingredients to retailers and distributors worldwide. Every product meets international food safety standards and hygiene certifications.",
    image: "/universal.jpeg",
  },
  {
    title: "Sports Equipment",
    icon: Dumbbell,
    link: "/products/sports-equipment",
    desc: "Top-grade sports gear for professional and recreational activities, ensuring safety and performance.",
    details:
      "Our catalog includes football, cricket equipment, gym accessories, fitness gear, and outdoor sports products. Built for durability and performance, trusted by athletes and sporting goods retailers globally.",
    image: "/universal.jpeg",
  },
  {
    title: "Leather Products",
    icon: Briefcase,
    link: "/products/leather-products",
    desc: "Premium leather goods including bags, belts, and accessories crafted with precision.",
    details:
      "We offer genuine leather and synthetic alternatives for bags, wallets, belts, jackets, and corporate accessories. Each piece undergoes rigorous quality checks to ensure lasting craftsmanship and style.",
    image: "/universal.jpeg",
  },
  {
    title: "Surgical Instruments",
    icon: Stethoscope,
    link: "/products/surgical-instruments",
    desc: "Reliable surgical tools and medical instruments for healthcare providers worldwide.",
    details:
      "Manufacturing precision surgical instruments including forceps, scissors, scalpels, and diagnostic tools. CE certified and compliant with ISO medical standards, serving hospitals and medical distributors across continents.",
    image: "/universal.jpeg",
  },
  {
    title: "Glassware & Tableware",
    icon: Wine,
    link: "/products/glassware-tableware",
    desc: "Elegant glass and tableware products for home, hospitality, and retail sectors.",
    details:
      "From crystal glassware to ceramic dinnerware, our collection combines elegance with functionality. Perfect for hotels, restaurants, retailers, and home consumers seeking quality and design.",
    image: "/universal.jpeg",
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
      <section className="relative py-28 px-6 z-10 bg-gradient-to-br from-white via-blue-50 to-white">
        <Reveal>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
              Our Premium{" "}
              <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                Product Range
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Explore our diverse portfolio of world-class products spanning
              textiles, food, sports equipment, leather goods, medical
              instruments, and tableware. Each category represents decades of
              expertise, quality assurance, and global partnerships.
            </p>
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#224b72] to-blue-600 mx-auto mt-8 rounded-full" />
          </div>
        </Reveal>
      </section>

      {/* ---------------- Introduction Section ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Quality Products, Global Standards
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                At Worldstar Enterprise, we understand that your success depends
                on the quality and reliability of your products. That's why
                we've built our reputation on sourcing, manufacturing, and
                delivering products that meet the highest international
                standards. With over 30 years of experience in global trade, we
                serve businesses across continents with a commitment to
                excellence, transparency, and sustainable practices.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Serving 50+ countries worldwide",
              },
              {
                icon: Award,
                title: "Certified Quality",
                desc: "ISO & international standards",
              },
              {
                icon: TrendingUp,
                title: "30+ Years",
                desc: "Industry expertise and trust",
              },
              {
                icon: ShieldCheck,
                title: "100% Verified",
                desc: "Rigorous quality control",
              },
            ].map((item, i) => {
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

      {/* ---------------- Product Categories Section ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Browse Our Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each product category is carefully curated to meet diverse
                market demands. Whether you're a retailer, distributor,
                manufacturer, or institution, we provide customized solutions
                tailored to your needs.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Reveal key={i} delay={i * 120}>
                  <div className="group relative bg-white border-2 border-blue-100 rounded-3xl overflow-hidden hover:border-[#224b72] hover:shadow-2xl transition-all hover:-translate-y-2">
                    {/* Product Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <Icon className="absolute bottom-4 right-4 w-12 h-12 text-white drop-shadow-lg" />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {cat.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                        {cat.desc}
                      </p>
                      <p className="text-gray-500 text-xs mb-5 leading-relaxed">
                        {cat.details}
                      </p>
                      <Link
                        to={cat.link}
                        className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#224b72] to-blue-600 text-white font-semibold hover:opacity-90 transition text-sm"
                      >
                        Explore {cat.title}
                      </Link>
                    </div>

                    {/* Floating Decoration */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-r from-[#224b72] to-blue-400 opacity-10 rounded-full blur-2xl" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Why Choose Our Products ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
              Why Choose Worldstar Products?
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Uncompromising Quality
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product undergoes strict quality control processes. From
                  raw material inspection to final packaging, we ensure
                  compliance with international standards including ISO
                  certifications, CE marking, and industry-specific regulations.
                  Our quality assurance team conducts random sampling, stress
                  testing, and third-party verifications to guarantee
                  excellence.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Leveraging our global network and long-term manufacturer
                  relationships, we offer competitive pricing without
                  compromising quality. Our bulk procurement strategies,
                  efficient logistics, and direct sourcing eliminate middlemen
                  costs, passing savings directly to our clients and ensuring
                  maximum value for every order.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Customization Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand that every business has unique requirements.
                  Whether you need custom packaging, private labeling, product
                  modifications, or specific sizing and colors, our flexible
                  manufacturing partners can accommodate your needs. Work
                  directly with our product development team to bring your
                  vision to life.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Reliable Delivery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Timely delivery is crucial for business success. Our
                  streamlined supply chain, warehousing facilities, and
                  partnerships with leading freight forwarders ensure your
                  products arrive on schedule. We provide real-time tracking,
                  comprehensive insurance coverage, and dedicated support
                  throughout the shipping process.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Call to Action ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-gradient-to-br from-[#224b72] to-blue-600">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Source Quality Products?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Let's discuss your requirements. Our team is ready to provide
              detailed quotations, product samples, and customized solutions for
              your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-[#224b72] font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-lg"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#224b72] transition-all text-lg"
              >
                Contact Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Products;
