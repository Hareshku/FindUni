"use client";
import Link from "next/link";
import React from "react";
import { Parallax } from "react-parallax";

const Volunteer = () => {
  return (
    <div className="flex items-center  min-h-fit w-full bg-white ">
      <div className="w-1/2">
        <Parallax bgImage="/volunteer-image.jpg" strength={500}>
          <div
            className="w-full h-auto"
            style={{ height: "250px", objectFit: "cover" }}
          />
        </Parallax>
      </div>
      <div className="w-1/2  bg-opacity-90 text-[black] p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Become a Volunteer</h2>
          <p className="mb-4">
            This year, we need coders, OTs and Special Educators, a Marketing
            person and a group to collect mobility and hockey gear
          </p>
          <Link
            href="mailto:sameembaba22@gmail.com"
            className="text-white bg-blue-500 py-2 px-4 rounded-lg  hover:bg-blue-400 transition-colors duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
