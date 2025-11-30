import React from "react";

const OurMission = () => {
  return (
    <div id="mission" className="w-full bg-gradient-to-br from-slate-50 to-blue-50 py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
              Our Mission
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Empowering Students to Make
            <span className="text-blue-600"> Informed Decisions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We believe every student deserves access to comprehensive, reliable information about higher education opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                Bridging the Gap Between Dreams and Reality
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We understand the challenges students face when navigating the complex world of higher education. Our platform was born from the real experiences of students who struggled with finding reliable, organized information about Pakistani universities.
              </p>

              {/* Mission Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Comprehensive Information</h4>
                    <p className="text-slate-600 text-sm">Detailed profiles of universities across all provinces with sector classifications and direct links.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-xl">
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Time-Saving Solution</h4>
                    <p className="text-slate-600 text-sm">Streamlined access to university information, saving students valuable time in their research process.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Student-Centered Approach</h4>
                    <p className="text-slate-600 text-sm">Built by students, for students - understanding the real challenges of university selection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video/Stats Section */}
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/cPq0YQpCbxU?si=Dht4HNBAU1q43OVR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">281+</div>
                <div className="text-sm text-slate-600 font-medium">Universities Listed</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-sm text-slate-600 font-medium">Cities Covered</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-slate-600 font-medium">Free Access</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600 font-medium">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
