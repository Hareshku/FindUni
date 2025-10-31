import React from "react";

const OurMission = () => {
  return (
    <div className="w-full text-white py-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="w-[40%]">
          <h1 className="text-2xl font-medium ">
            Our Mission is to provide skills and knowledge that help people make
            informed decisions about future
          </h1>

          <p className="mt-10 text-base">
            Driven by eager overseas students seeking higher education abroad,
            we encountered obstacles while navigating prerequisites and
            application procedures. In response, we created a website to
            streamline the college application process, providing students with
            readily arranged and accessible information, saving them valuable
            time.
          </p>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/P2pdhVHzSZA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
