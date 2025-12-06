/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">


        <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            About FindUni
          </span>
        </div>



        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full blur-3xl opacity-60"></div>
              <img src="/icons/about.png"
                alt="Education illustration"
                loading="eager"
                height={500}
                width={500}
                style={{ width: "auto", height: "auto" }}
                className="relative z-10 drop-shadow-xl" />
            </div>
          </div>

          {/* Content Section */}

          <div className="flex-1 space-y-8">
            <div className="space-y-4">

              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Your Gateway to
                <span className="text-blue-600"> Higher Education</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                FindUni is Pakistan's most comprehensive university discovery platform. We help students make informed decisions by providing detailed information about 260+ universities across the country.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200"
                style={{ display: "flex", gap: "10px", alignItems: "center", padding: "0rem 0.5rem", height: "60px", width: "200px" }}
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-university text-white text-xl"></i>
                </div>

                <h4 className="font-bold text-slate-800">260+ Universities</h4>
              </div>


              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border border-teal-200" style={{ display: "flex", gap: "10px", alignItems: "center", padding: "0rem 0.5rem", height: "60px", width: "200px" }}>
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-slate-800">50+ Cities</h4>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200" style={{ display: "flex", gap: "10px", alignItems: "center", padding: "0rem 0.5rem", height: "60px", width: "200px" }}>
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-filter text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-slate-800">Smart Filters</h4>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200" style={{ display: "flex", gap: "10px", alignItems: "center", padding: "0rem 0.5rem", height: "60px", width: "200px" }}>
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-link text-white text-xl"></i>
                </div>
                <h4 className="font-bold text-slate-800">Direct Links</h4>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/colleges"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Explore Universities</span>
                <i className="fas fa-arrow-right"></i>
              </Link>

              <Link
                href="#mission"
                className="inline-flex items-center justify-center space-x-2 border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <span>Our Mission</span>
                <i className="fas fa-chevron-down"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
