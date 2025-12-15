import React, { useState, useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Package,
  TrendingUp,
  Shield,
  Zap,
  Award,
  Users,
  Clock,
} from "lucide-react";

const AnimatedText = () => {
  const phrases = [
    "We Source",
    "We Develop",
    "We Manufacture",
    "We Assure Quality",
    "We Deliver",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-20 flex items-center justify-center lg:justify-start">
      <h3
        className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#224b72] to-[#858C8E] bg-clip-text text-transparent transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        {phrases[currentIndex]}
      </h3>
    </div>
  );
};

const FloatingCard = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const services = [
    {
      title: "Product Sourcing",
      description:
        "We identify and source premium quality products from trusted manufacturers worldwide, ensuring the best value for your business.",
      icon: <Globe className="w-12 h-12" />,
      gradient: "from-[#224b72] to-blue-600",
    },
    {
      title: "Development & Manufacturing",
      description:
        "Our expert team oversees product development and manufacturing processes, maintaining strict quality control at every stage.",
      icon: <Package className="w-12 h-12" />,
      gradient: "from-blue-600 to-[#858C8E]",
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous quality checks and international standard compliance ensure every product meets your specifications.",
      icon: <Shield className="w-12 h-12" />,
      gradient: "from-[#858C8E] to-[#224b72]",
    },
    {
      title: "Global Delivery",
      description:
        "Reliable logistics and timely delivery to over 50 countries, with complete transparency throughout the supply chain.",
      icon: <TrendingUp className="w-12 h-12" />,
      gradient: "from-[#224b72] to-blue-500",
    },
  ];

  const capabilities = [
    "International Trade Compliance",
    "Supply Chain Management",
    "Quality Control & Testing",
    "Custom Product Development",
    "Logistics & Warehousing",
    "Market Research & Analysis",
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Certified Excellence",
      description:
        "ISO certified processes ensuring top-tier quality standards",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Team",
      description: "Seasoned professionals with decades of trade experience",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "On-Time Delivery",
      description: "99% on-time delivery rate across all shipments",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Fast Processing",
      description: "Streamlined operations for quick turnaround times",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl transition-all duration-1000"
          style={{
            top: `${mousePosition.y / 10}px`,
            left: `${mousePosition.x / 10}px`,
          }}
        />
        <div
          className="absolute w-96 h-96 bg-[#224b72] rounded-full opacity-5 blur-3xl transition-all duration-1000"
          style={{
            bottom: `${mousePosition.y / 15}px`,
            right: `${mousePosition.x / 15}px`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 px-6 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #224b72 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight animate-slide-up">
                  Worldstar
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl animate-fade-in-delay">
                  With over 30 years of expertise in international trade, we
                  deliver end-to-end solutions for sourcing, manufacturing, and
                  exporting quality products worldwide.
                </p>
              </div>

              <AnimatedText />

              <div className="flex flex-wrap gap-4 animate-slide-up">
                <button className="group bg-gradient-to-r from-[#224b72] to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group bg-white text-[#224b72] border-2 border-[#224b72] px-8 py-4 rounded-xl font-bold hover:bg-[#224b72] hover:text-white hover:scale-105 transition-all duration-300">
                  Get in Touch
                </button>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t-2 border-blue-200">
                {[
                  { num: "30+", label: "Years Experience" },
                  { num: "50+", label: "Countries" },
                  { num: "10K+", label: "Happy Clients" },
                ].map((stat, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <p className="text-4xl font-black bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      {stat.num}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg transform hover:scale-105 transition-transform duration-700 animate-float">
                <DotLottieReact
                  src="home.lottie"
                  loop
                  autoplay
                  className="w-full h-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Bar */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#224b72] via-blue-600 to-[#224b72] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                num: "99%",
                label: "Client Satisfaction",
                icon: <Award className="w-8 h-8" />,
              },
              {
                num: "24/7",
                label: "Support Available",
                icon: <Clock className="w-8 h-8" />,
              },
              {
                num: "ISO",
                label: "Certified Quality",
                icon: <Shield className="w-8 h-8" />,
              },
              {
                num: "Fast",
                label: "Global Shipping",
                icon: <Zap className="w-8 h-8" />,
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group space-y-3 transform hover:scale-110 transition-all duration-300"
              >
                <div className="flex justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                  {stat.icon}
                </div>
                <p className="text-5xl font-black text-white group-hover:scale-110 transition-transform">
                  {stat.num}
                </p>
                <p className="text-white text-sm font-bold opacity-90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-white relative">
        <div className="max-w-7xl mx-auto">
          <FloatingCard>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-sm font-bold text-[#224b72] tracking-widest uppercase bg-blue-100 px-4 py-2 rounded-full inline-block mb-4">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
                Comprehensive Trade Solutions
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#224b72] to-blue-600 mx-auto rounded-full" />
              <p className="text-lg text-gray-600 mt-6">
                From sourcing to delivery, we handle every aspect of
                international trade with precision and expertise.
              </p>
            </div>
          </FloatingCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FloatingCard key={index} delay={index * 200}>
                <div
                  className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                    activeService === index
                      ? "bg-gradient-to-br from-[#224b72] to-blue-600 border-transparent shadow-2xl scale-105"
                      : "bg-white border-blue-200 hover:border-[#224b72] hover:shadow-xl hover:scale-102"
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div
                      className={`mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                        activeService === index
                          ? "text-white"
                          : "text-[#224b72]"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <h3
                      className={`text-2xl font-black mb-4 transition-colors duration-300 ${
                        activeService === index ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-lg leading-relaxed transition-colors duration-300 ${
                        activeService === index
                          ? "text-blue-100"
                          : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-tl-full transition-opacity duration-500`}
                  />
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Cards */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FloatingCard>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                  Worldstar Enterprise
                </span>
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#224b72] to-blue-600 mx-auto rounded-full" />
            </div>
          </FloatingCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <FloatingCard key={index} delay={index * 150}>
                <div className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:border-[#224b72] hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#224b72] to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="text-[#224b72] mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#224b72] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FloatingCard>
              <div>
                <span className="text-sm font-bold text-[#224b72] tracking-widest uppercase bg-blue-100 px-4 py-2 rounded-full inline-block mb-4">
                  Our Expertise
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
                  Built on Three Decades of{" "}
                  <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Worldstar Enterprise has been a trusted partner in global
                  trade since its inception. Our comprehensive capabilities and
                  commitment to quality have made us the preferred choice for
                  businesses worldwide.
                </p>

                <div className="space-y-4">
                  {capabilities.map((capability, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 group animate-slide-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#224b72] to-blue-600 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-semibold group-hover:text-[#224b72] transition-colors">
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={200}>
              <div className="flex justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#224b72] to-blue-600 opacity-20 blur-3xl rounded-full" />
                <div className="w-full max-w-lg transform hover:scale-110 transition-transform duration-700 relative z-10">
                  <DotLottieReact
                    src="home.lottie"
                    loop
                    autoplay
                    className="w-full h-full drop-shadow-2xl"
                  />
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Global Network",
                description:
                  "Extensive partnerships with manufacturers and suppliers across continents",
                gradient: "from-[#224b72] to-blue-600",
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Quality Guaranteed",
                description:
                  "Stringent quality control processes ensuring excellence in every shipment",
                gradient: "from-blue-600 to-[#858C8E]",
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Competitive Pricing",
                description:
                  "Best market rates with transparent pricing and no hidden costs",
                gradient: "from-[#858C8E] to-[#224b72]",
              },
            ].map((item, index) => (
              <FloatingCard key={index} delay={index * 150}>
                <div className="group relative text-center p-10 rounded-3xl bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 shadow-lg`}
                    >
                      <div className="text-white group-hover:rotate-12 transition-transform duration-500">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 px-6 bg-gradient-to-br from-[#224b72] via-blue-700 to-[#224b72] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Mi1oMnYtMmgtMnptMC00djJoMnYtMmgtMnptMCAxMHYyaDJ2LTJoLTJ6bTAtNnYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0tMiAwdjJoMnYtMmgtMnptLTIgMHYyaDJ2LTJoLTJ6bS0yIDB2Mmgydi0yaC0yem04LTR2Mmgydi0yaC0yem0tOCAwdjJoMnYtMmgtMnptNCAwdjJoMnYtMmgtMnptNCAwdjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white to-transparent opacity-5 animate-pulse" />

        <FloatingCard>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Expand Your Business
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Globally?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 font-bold">
              Join thousands of satisfied clients worldwide
            </p>
            <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
              Partner with Worldstar Enterprise and experience seamless
              international trade solutions backed by three decades of
              expertise.
            </p>
            <button className="group bg-white text-[#224b72] px-12 py-6 rounded-2xl text-xl font-black hover:bg-blue-100 hover:scale-110 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl">
              Start Your Journey Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </FloatingCard>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out both;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default Home;
