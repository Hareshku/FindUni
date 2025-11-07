/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src="/sapiens.svg"
                alt="Education illustration"
                loading="eager"
                height={450}
                width={450}
                style={{ width: "auto", height: "auto" }}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-white space-y-6">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text text-sm font-semibold uppercase tracking-wider">
                  About UniStat
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Your Gateway to
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> Higher Education</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                UniStat is a comprehensive platform designed to simplify your university selection process in Pakistan. We provide detailed insights into over 100 universities across all provinces.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <i className="fas fa-university text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">100+ Universities</h4>
                      <p className="text-sm text-gray-400">Comprehensive database</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">All Provinces</h4>
                      <p className="text-sm text-gray-400">Complete coverage</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Universities
                </button>
                <button className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;