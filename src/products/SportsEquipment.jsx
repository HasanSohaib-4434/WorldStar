import React, { useEffect, useRef, useState } from "react";
import {
  Dumbbell,
  Trophy,
  Target,
  Shield,
  CheckCircle,
  Award,
  Package,
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

const SportsEquipment = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const products = [
    {
      title: "Footballs",
      icon: Trophy,
      image: "/universal.jpeg",
      desc: "Professional and recreational footballs for all levels of play.",
      details:
        "We manufacture FIFA-approved match balls, training footballs, and promotional balls using premium synthetic leather, PU, and PVC materials. Each ball is hand-stitched or thermally bonded with latex or butyl bladders for optimal air retention. Available in sizes 3, 4, and 5 with custom printing options for clubs, tournaments, and promotional events. Our footballs meet international weight and circumference standards, ensuring consistent performance and durability on all playing surfaces.",
    },
    {
      title: "Cricket Equipment",
      icon: Target,
      image: "/universal.jpeg",
      desc: "Complete range of cricket gear for professionals and enthusiasts.",
      details:
        "Our cricket equipment includes English willow and Kashmir willow bats, leather balls with cork cores, protective gear including pads, gloves, helmets, and abdominal guards. We also supply stumps, bails, cricket clothing, and training accessories. Each bat undergoes careful seasoning and shaping by skilled craftsmen. All protective equipment meets international safety standards with shock-absorbing materials and reinforced stitching for maximum protection during play.",
    },
    {
      title: "General Sports Goods",
      icon: Dumbbell,
      image: "/universal.jpeg",
      desc: "Wide variety of sporting goods for multiple disciplines.",
      details:
        "We offer a comprehensive range including gym equipment, fitness accessories, boxing gear, badminton rackets and shuttlecocks, tennis equipment, volleyball and basketball gear, track and field equipment, and outdoor sports accessories. Each product category maintains strict quality standards with durable construction, ergonomic design, and compliance with sport-specific regulations. Perfect for sports retailers, gyms, schools, and sporting goods distributors worldwide.",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Quality Certified",
      desc: "ISO 9001 and sport-specific certifications",
    },
    {
      icon: Award,
      title: "Professional Grade",
      desc: "Used by athletes and sports clubs globally",
    },
    {
      icon: Shield,
      title: "Safety Tested",
      desc: "Meets international safety standards",
    },
    {
      icon: Globe,
      title: "Export Quality",
      desc: "Durable packaging for worldwide shipping",
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
            <Dumbbell className="w-20 h-20 mx-auto mb-6 text-[#224b72]" />
            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
              Premium{" "}
              <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                Sports Equipment
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Top-grade sports gear manufactured to international standards.
              From footballs to cricket equipment and general sporting goods, we
              deliver quality that athletes and sports enthusiasts trust.
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
                Performance Meets Quality
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Worldstar Enterprise has built a strong reputation in the sports
                equipment industry by delivering products that combine
                durability, performance, and safety. Our manufacturing
                facilities employ skilled craftsmen and modern production
                techniques to create sporting goods that meet the demanding
                standards of professional athletes, sports clubs, schools, and
                recreational users. With rigorous quality control and compliance
                testing, every product leaving our facilities is built to
                perform.
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
                Our Sports Equipment Range
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional-grade equipment manufactured with precision and
                tested for performance.
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

      {/* ---------------- Manufacturing Quality ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
              Manufacturing Quality & Compliance
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our manufacturing facilities follow ISO 9001 quality
                  management systems with dedicated quality control teams at
                  every production stage. From raw material inspection to
                  finished product testing, we ensure dimensional accuracy,
                  weight specifications, durability tests, and performance
                  validation. Each product batch undergoes stress testing,
                  safety checks, and compliance verification before packaging
                  and shipment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  International Standards
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All sports equipment is manufactured in compliance with
                  international sporting regulations and safety standards. Our
                  footballs meet FIFA standards, cricket equipment follows ICC
                  specifications, and protective gear complies with EN safety
                  norms. We maintain certifications for material safety,
                  environmental standards, and ethical manufacturing practices,
                  ensuring products are safe for athletes of all ages and skill
                  levels.
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
              Ready to Order Sports Equipment?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Contact our team for product catalogs, bulk pricing, custom
              branding options, and sample requests.
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

export default SportsEquipment;
