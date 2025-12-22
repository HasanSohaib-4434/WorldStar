import React, { useEffect, useRef, useState } from "react";
import {
  Package,
  Users,
  Truck,
  Palette,
  CheckCircle,
  DollarSign,
  FileText,
  Ship,
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
      className={`transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Data ---------------- */
  const team = [
    { name: "Azhar Iqbal", role: "CEO", emoji: "👨‍💼" },
    {
      name: "M. Mushtaq Sheikh",
      role: "Operations Director",
      emoji: "👨‍💻",
    },
    { name: "Abdul Malik", role: "Sourcing & Marketing Director", emoji: "👨🏻‍💼" },
    {
      name: "Ahmad Naveed",
      role: "Production & Development Director",
      emoji: "🕴️",
    },
  ];

  const services = [
    {
      title: "Product Development & Sourcing",
      desc: "End-to-end product development with trusted global manufacturers.",
      icon: Package,
    },
    {
      title: "Strategic Negotiation",
      desc: "Best prices on top-quality products through aggressive supplier negotiation.",
      icon: Truck,
    },
    {
      title: "Brand Supply & Growth",
      desc: "We help build and scale brands through consistent, high-grade supply.",
      icon: Palette,
    },
    {
      title: "Shipping & Logistics",
      desc: "Reliable air & sea freight with full transparency.",
      icon: Ship,
    },
  ];

  const steps = [
    { title: "Enquiry", icon: FileText },
    { title: "Quotation", icon: DollarSign },
    { title: "Confirmation", icon: CheckCircle },
    { title: "Production", icon: Package },
    { title: "Quality Control", icon: CheckCircle },
    { title: "Delivery", icon: Ship },
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* ---------------- Parallax Background ---------------- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl"
          style={{ top: scrollY * 0.3, left: "10%" }}
        />
        <div
          className="absolute w-[30rem] h-[30rem] bg-[#224b72] rounded-full opacity-5 blur-3xl"
          style={{ top: scrollY * 0.15, right: "5%" }}
        />
      </div>

      {/* ---------------- Hero ---------------- */}
      <section className="relative py-28 px-6 bg-gradient-to-br from-white via-blue-50 to-white z-10">
        <Reveal>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
              About{" "}
              <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                Worldstar
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Trusted global trade solutions built on three decades of
              excellence.
            </p>
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#224b72] to-blue-600 mx-auto mt-8 rounded-full" />
          </div>
        </Reveal>
      </section>

      {/* ---------------- Who We Are ---------------- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-4xl font-black mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                Worldstar Enterprise provides complete sourcing, manufacturing,
                and logistics solutions for global businesses.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is simple: deliver quality, reliability, and growth
                opportunities to our partners worldwide.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#224b72] to-blue-600 opacity-20 blur-3xl rounded-full" />
              <img
                src="whoWeAre.png"
                alt="Global Presence"
                className="w-[28rem] h-[28rem] relative z-10 object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal delay={200}>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#224b72] to-blue-600 opacity-20 blur-3xl rounded-full" />
              <img
                src="Global Presence.png"
                alt="Global Presence"
                className="w-80 h-80 relative z-10 object-contain"
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h2 className="text-4xl font-black mb-6">
                A Global Presence with Vast Industry Experience
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                With manufacturers and suppliers across countries, and sales
                operations across Europe, Asia, North America, and Africa
              </p>
              <p className="text-lg text-gray-600">
                Worldstar Enterprises leverages its global supply chain and
                shipping infrastructure to streamline large-scale product
                sourcing with speed, reliability, and precision.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ---------------- Company History ---------------- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-4xl font-black mb-6">
                30+ Years of Global Trade Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Worldstar Enterprises has grown from a regional trading firm
                into a trusted international sourcing and logistics partner.
              </p>
              <p className="text-lg text-gray-600">
                Our experience across manufacturing, quality control, and global
                logistics allows us to handle complex supply chains with
                confidence and precision.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#224b72] to-blue-600 opacity-20 blur-3xl rounded-full" />
              <img
                src="thirtyplus.png"
                alt="Thirthy Plus"
                className="w-100 h-100 relative z-10 object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Mission & Vision ---------------- */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-white relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <Reveal>
            <div className="bg-white p-10 rounded-3xl border-2 border-blue-100 hover:shadow-xl transition-all">
              <h3 className="text-3xl font-black mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To empower businesses worldwide by providing reliable sourcing,
                transparent trade processes, and consistent quality — enabling
                long-term growth and trust.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-white p-10 rounded-3xl border-2 border-blue-100 hover:shadow-xl transition-all">
              <h3 className="text-3xl font-black mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To become a globally recognized trade partner known for
                integrity, innovation, and unmatched supply-chain expertise.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black text-center mb-16">
              What We Do
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 150}>
                  <div className="group bg-white border-2 border-blue-100 p-8 rounded-3xl hover:border-[#224b72] hover:shadow-2xl transition-all hover:-translate-y-2">
                    <Icon className="w-12 h-12 text-[#224b72] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                    <p className="text-gray-600">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Our Team ---------------- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black text-center mb-16">Our Team</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {team.map((member, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#224b72] to-blue-600 rounded-full flex items-center justify-center text-6xl shadow-xl group-hover:scale-110 transition-transform">
                    {member.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why Trust Us ---------------- */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl font-black mb-16">
              Why Clients Trust Worldstar
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "30+ Years Industry Experience",
              "Transparent & Ethical Trade",
              "Strict Quality Control",
              "Long-Term Client Partnerships",
            ].map((text, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="bg-white p-8 rounded-2xl border-2 border-blue-100 hover:border-[#224b72] hover:shadow-xl transition-all">
                  <CheckCircle className="w-10 h-10 text-[#224b72] mx-auto mb-4" />
                  <p className="font-semibold text-gray-800">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black text-center mb-16">
              Our Process
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={i} delay={i * 120}>
                  <div className="text-center bg-white p-8 rounded-2xl border-2 border-blue-100 hover:border-[#224b72] hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#224b72] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
