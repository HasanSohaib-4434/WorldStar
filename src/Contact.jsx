import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Send,
  CheckCircle,
  XCircle,
} from "lucide-react";

/* ---------------- Scroll Reveal ---------------- */
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 },
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

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success | error

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.msg === "success") {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@worldstarenterprise.com",
      link: "mailto:info@worldstarenterprise.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+92 3074440040",
      link: "tel:+923074440040",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Gulshan Colony, Faisalabad, Pakistan",
      link: "#",
    },
    {
      icon: Building2,
      title: "Business Hours",
      detail: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#",
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
            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
              Get In{" "}
              <span className="bg-gradient-to-r from-[#224b72] to-blue-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Have a question or ready to start your next project? We're here to
              help. Reach out to our team and let's discuss how we can support
              your business needs.
            </p>
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#224b72] to-blue-600 mx-auto mt-8 rounded-full" />
          </div>
        </Reveal>
      </section>

      {/* ---------------- Contact Info Cards ---------------- */}
      <section className="py-16 px-6 z-10 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <a
                    href={info.link}
                    className="block bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 hover:border-[#224b72] hover:shadow-xl transition-all group"
                  >
                    <Icon className="w-10 h-10 text-[#224b72] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{info.detail}</p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Contact Form Section ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <Reveal>
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you're looking for product information, quotations, or
                  partnership opportunities, our team is ready to assist you.
                  Fill out the form and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#224b72] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Quick Response</h3>
                      <p className="text-gray-600">
                        We respond to all inquiries within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#224b72] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Expert Support</h3>
                      <p className="text-gray-600">
                        Dedicated team for product and business queries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#224b72] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Global Reach</h3>
                      <p className="text-gray-600">
                        Supporting clients worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Side - Form */}
            <Reveal delay={200}>
              <div className="bg-white rounded-3xl border-2 border-blue-100 p-8 shadow-xl">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#224b72] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#224b72] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company Ltd."
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#224b72] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#224b72] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your requirements..."
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#224b72] transition-colors resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#224b72] to-blue-600 text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {status === "success" && (
                  <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-semibold">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <p className="text-red-800 font-semibold">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Map/Additional Info ---------------- */}
      <section className="py-20 px-6 z-10 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We welcome clients, partners, and visitors to our office.
                Schedule an appointment to discuss your business needs in
                person.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-100 p-12 text-center">
              <MapPin className="w-16 h-16 text-[#224b72] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Worldstar Enterprise</h3>
              <p className="text-gray-600 text-lg mb-6">
                Gulshan Colony, Faisalabad, Punjab, Pakistan
              </p>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Our office is centrally located and easily accessible. Contact
                us to arrange a meeting and discover how we can support your
                business with quality products and reliable service.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
