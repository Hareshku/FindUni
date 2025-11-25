import React from "react";

const OurMission = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text text-sm font-semibold uppercase tracking-wider">
              Our Mission
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Empowering Students to Make
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> Informed Decisions</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                Bridging the Gap Between Dreams and Reality
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed">
                We understand the challenges students face when navigating the complex world of higher education. Our platform was born from the real experiences of students who struggled with finding reliable, organized information about Pakistani universities.
              </p>
            </div>

            {/* Mission Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Comprehensive Information</h4>
                  <p className="text-gray-400">Detailed profiles of universities across all provinces with sector classifications and direct links.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-clock text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Time-Saving Solution</h4>
                  <p className="text-gray-400">Streamlined access to university information, saving students valuable time in their research process.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="fas fa-users text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Student-Centered Approach</h4>
                  <p className="text-gray-400">Built by students, for students - understanding the real challenges of university selection.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Journey
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hUtmR-twzi0?si=oVp9UxjWhKN586x9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;