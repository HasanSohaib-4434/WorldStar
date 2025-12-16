import React, { useEffect, useRef, useState } from "react";
import {
  Stethoscope,
  Scissors,
  Activity,
  Heart,
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

const SurgicalInstruments = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const products = [
    {
      title: "Surgical Scissors",
      icon: Scissors,
      image: "/universal.jpeg",
      desc: "Precision surgical scissors for various medical procedures.",
      details:
        "Our surgical scissors range includes Mayo scissors, Metzenbaum scissors, iris scissors, bandage scissors, and specialty cutting instruments. Manufactured from high-grade German and Japanese stainless steel, each scissor features razor-sharp blades, smooth articulation, and ergonomic handles for precise cutting control. Available in straight and curved patterns, various lengths, and both reusable and disposable options. All scissors undergo sharpness testing, autoclave sterilization validation, and quality inspections to ensure optimal performance in surgical environments.",
    },
    {
      title: "Forceps & Clamps",
      icon: Activity,
      image: "/universal.jpeg",
      desc: "High-precision forceps and hemostatic clamps for surgery.",
      details:
        "We manufacture a comprehensive range including tissue forceps, hemostatic forceps, artery forceps, sponge holding forceps, and needle holders. Each instrument is precision-machined from medical-grade stainless steel with proper jaw alignment, controlled grip tension, and durable ratchet mechanisms. Available in various sizes from delicate micro-forceps to robust surgical clamps. Our forceps meet ASTM standards for surgical instruments with smooth surfaces that prevent tissue trauma and facilitate cleaning and sterilization.",
    },
    {
      title: "Dental Instruments",
      icon: Heart,
      image: "/universal.jpeg",
      desc: "Professional dental tools for dentists and oral surgeons.",
      details:
        "Our dental instrument collection includes extraction forceps, elevators, scalers, curettes, mirrors, explorers, probes, and periodontal instruments. Each tool is crafted from anti-corrosive surgical steel with ergonomic handles to reduce hand fatigue during procedures. We offer instruments in both American and German patterns to suit different practice preferences. All dental tools feature precise working ends, balanced weight distribution, and can withstand repeated autoclaving. Perfect for dental clinics, hospitals, and educational institutions.",
    },
    {
      title: "General Surgery Tools",
      icon: Stethoscope,
      image: "/universal.jpeg",
      desc: "Complete range of surgical instruments for operating rooms.",
      details:
        "Our general surgery portfolio includes scalpel handles and blades, retractors, suction tubes, needle drivers, towel clamps, surgical knives, bone instruments, and instrument sets. Each instrument is manufactured to American, German, or Japanese standards with precise dimensions and optimal functionality. We supply single instruments or complete surgical sets tailored to specific procedures like general surgery, orthopedics, gynecology, and neurosurgery. All instruments are tested for material composition, strength, and compliance with ISO 13485 medical device standards.",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Premium Materials",
      desc: "German & Japanese grade stainless steel",
    },
    {
      icon: Award,
      title: "Medical Standards",
      desc: "ISO 13485 and CE certified instruments",
    },
    {
      icon: Shield,
      title: "Quality Tested",
      desc: "100% inspection before delivery",
    },
    {
      icon: Globe,
      title: "Global Compliance",
      desc: "FDA, CE, and international certifications",
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
            <Stethoscope className="w-20 h-20 mx-auto mb-6 text-[#224b72]" />
            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
              Medical-Grade{" "}
              <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                Surgical Instruments
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Precision-engineered surgical instruments meeting American,
              German, and Japanese medical standards. Trusted by healthcare
              professionals worldwide for reliability, durability, and
              performance.
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
                Precision Medical Instruments
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Worldstar Enterprise has established itself as a trusted
                supplier of surgical instruments to hospitals, clinics, medical
                distributors, and healthcare institutions globally. Our
                instruments are manufactured using premium-grade stainless steel
                and undergo rigorous quality control processes to ensure they
                meet the exacting standards required for medical and surgical
                applications. Every instrument is precision-crafted,
                individually inspected, and tested for performance, durability,
                and compliance with international medical device regulations.
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
                Our Surgical Instrument Range
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive medical instruments manufactured to the highest
                quality standards for healthcare professionals.
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

      {/* ---------------- Quality & Certifications ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
              Quality Assurance & Certifications
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Manufacturing Standards
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our surgical instruments are manufactured in ISO 13485
                  certified facilities dedicated to medical device production.
                  We use premium German and Japanese grade stainless steel (AISI
                  420, 440, and 316L) known for corrosion resistance, hardness,
                  and biocompatibility. Each instrument undergoes multiple
                  quality checks including dimensional accuracy verification,
                  surface finish inspection, functional testing, and
                  sterilization compatibility validation. We maintain complete
                  traceability from raw material to finished product.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Global Compliance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All instruments comply with international medical device
                  regulations including FDA requirements for the USA, CE marking
                  for European markets, and ISO 7153 standards for surgical
                  instruments. Our products meet ASTM specifications for
                  material properties and performance characteristics. We
                  provide complete documentation including material
                  certificates, test reports, sterilization protocols, and
                  regulatory compliance certificates. Every shipment includes
                  certificates of conformity and quality assurance documentation
                  required for medical device importation.
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
              Source Medical Instruments
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Contact us for product catalogs, instrument specifications,
              certifications, and bulk pricing for hospitals and distributors.
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

export default SurgicalInstruments;
