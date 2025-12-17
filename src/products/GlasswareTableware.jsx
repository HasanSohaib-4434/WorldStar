import React, { useEffect, useRef, useState } from "react";
import {
  Wine,
  Coffee,
  UtensilsCrossed,
  Sparkles,
  CheckCircle,
  Award,
  Shield,
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

const GlasswareTableware = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const products = [
    {
      title: "Crystal & Glassware",
      icon: Wine,
      image: "/Glassware.jpeg",
      desc: "Elegant crystal and glass products for dining and entertaining.",
      details:
        "Our glassware collection includes wine glasses, champagne flutes, whiskey tumblers, cocktail glasses, decanters, and decorative crystal pieces. Manufactured from premium soda-lime glass and lead-free crystal, each piece features clarity, brilliance, and durability. Available in classic and contemporary designs suitable for hotels, restaurants, bars, and home use. We offer plain glass, cut crystal patterns, etched designs, and colored glass options. All glassware is dishwasher safe and meets food contact safety standards.",
    },
    {
      title: "Dinnerware Sets",
      icon: UtensilsCrossed,
      image: "/Tableware.jpeg",
      desc: "Complete ceramic and porcelain dinnerware collections.",
      details:
        "We supply comprehensive dinnerware sets including dinner plates, salad plates, bowls, cups, saucers, and serving platters. Our collections feature fine bone china, porcelain, stoneware, and melamine options to suit different market segments and price points. Available in various patterns from classic white to decorative designs with gold trim, floral motifs, and contemporary graphics. All dinnerware is microwave safe, dishwasher safe, and chip-resistant. Perfect for hospitality, retail, and institutional catering.",
    },
    {
      title: "Serving & Display",
      icon: Sparkles,
      image: "/Serving collection.jpeg",
      desc: "Premium serving pieces and decorative tableware items.",
      details:
        "Our serving collection includes cake stands, serving bowls, platters, trays, gravy boats, sugar and creamer sets, salt and pepper shakers, and decorative centerpieces. Each piece combines functionality with aesthetic appeal, perfect for both everyday use and special occasions. Available in glass, ceramic, stainless steel, and combination materials. We offer elegant designs suitable for fine dining establishments, catering services, and home entertaining. Custom designs and corporate branding options available for hospitality clients.",
    },
    {
      title: "Drinkware Collection",
      icon: Coffee,
      image: "/Drinkware.jpeg",
      desc: "Comprehensive range of drinking glasses and mugs.",
      details:
        "Our drinkware portfolio includes water glasses, juice glasses, beer mugs, coffee mugs, tea cups, and specialty beverage containers. Manufactured from tempered glass, borosilicate glass, and ceramic materials for durability and temperature resistance. Available in various capacities from espresso cups to large beer steins. We offer plain, printed, and decorative options with custom logo printing for corporate and promotional use. All drinkware meets FDA and EU food contact regulations with lead-free and cadmium-free compositions.",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Premium Quality",
      desc: "Lead-free crystal and food-safe materials",
    },
    {
      icon: Award,
      title: "Elegant Designs",
      desc: "Classic to contemporary styles",
    },
    {
      icon: Shield,
      title: "Durability Tested",
      desc: "Chip-resistant and dishwasher safe",
    },
    {
      icon: Globe,
      title: "Custom Options",
      desc: "Private labeling and custom designs",
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

      {/* ---------------- Hero Banner ---------------- */}
      <section className="relative h-[70vh] min-h-[500px] z-10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Glassware & Tableware.jpeg"
            alt="Glassware & Tableware"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center px-6 z-10">
          <Reveal>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                Elegant{" "}
                <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                  Glassware & Tableware
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Premium glass and tableware products combining elegance with
                functionality. From crystal glassware to complete dinnerware
                sets, we serve hotels, restaurants, retailers, and home
                consumers worldwide.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Introduction ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Elevate Every Dining Experience
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Worldstar Enterprise offers an extensive collection of glassware
                and tableware designed to enhance dining experiences. Our
                products blend timeless elegance with modern durability, perfect
                for fine dining establishments, hospitality venues, retail
                stores, and discerning home consumers. Each piece is carefully
                selected for quality, design, and practical functionality.
                Whether you need classic crystal stemware for upscale
                restaurants or durable dinnerware for high-volume catering, we
                provide solutions that meet both aesthetic and performance
                requirements.
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
                Our Tableware Collection
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive glassware and tableware solutions for hospitality,
                retail, and home markets.
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

      {/* ---------------- Quality & Design ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
              Quality Materials & Design Excellence
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Premium Materials
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our glassware is manufactured from premium soda-lime glass and
                  lead-free crystal, ensuring clarity, brilliance, and safety.
                  Dinnerware collections use fine bone china with high
                  translucency, durable porcelain with low porosity, and
                  commercial-grade stoneware for high-volume use. All materials
                  are food-safe, non-toxic, and meet FDA and EU regulations. Our
                  products undergo thermal shock testing, impact resistance
                  checks, and quality inspections to ensure they withstand daily
                  use in demanding hospitality environments.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Design Versatility
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our collections span from traditional elegance to contemporary
                  minimalism, ensuring options for every aesthetic preference
                  and market segment. We work with experienced designers to
                  create timeless pieces that complement various interior styles
                  and dining concepts. Customization options include logo
                  printing, custom patterns, specific color palettes, and
                  branded packaging. Whether you need classic white dinnerware
                  for fine dining or colorful contemporary pieces for casual
                  restaurants, our design team can develop solutions tailored to
                  your brand identity and market positioning.
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
              Source Premium Tableware
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Contact us for product catalogs, design portfolios, sample sets,
              and competitive bulk pricing for hospitality and retail.
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

export default GlasswareTableware;
