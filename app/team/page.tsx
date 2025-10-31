import React from "react";
import Header from "../Header";
import Head from "next/head";

import Member from "./Member";

type Member = {
  name: string;
  designation: string;
  image: any;
  linkedIn: string;
};

const Team = async () => {
  const team = [
    {
      name: "Mohd Sameem Baba",
      designation: "Web Developer",
      image: "/sameem.svg",
      linkedIn: "https://linkedin.com/in/sameembaba",
      // about:
      //   "High School Student by day. Web3 Developer by hobby. I am striving to create a positive change around me!",
    },
    {
      name: "Sara Jarrar",
      designation: "Developer",
      image: "/sara.svg",
      linkedIn: "",
      about: "",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-black relative text-white">
      <Header />
      <div className="max-w-[90rem] h-screen overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent snap-y snap-mandatory mx-auto">
        <div className="flex flex-col h-full items-center w-full justify-start mt-28">
          <h1 className="font-bold text-3xl uppercase text-left pl-10 w-full tracking-widest text-gray-300 mb-8">
            Core
          </h1>
          <div className="grid grid-cols-1 w-full px-20 sm:grid-cols-2 place-items-center gap-5 gap-y-10 md:grid-cols-3">
            {team.map((member: Member, i: number) => (
              <Member
                key={i}
                linkedIn={member.linkedIn}
                name={member.name}
                designation={member.designation}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <SideNavbar /> */}
    </div>
  );
};

export default Team;
