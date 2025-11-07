import React from "react";
import Header from "../Header";
import Footer from "../Footer";
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
      name: "Haresh Kumar",
      designation: "Web Developer",
      image: "/haresh.png",
      linkedIn: "https://linkedin.com/in/haresh",
      // about:
      //   "High School Student by day. Web3 Developer by hobby. I am striving to create a positive change around me!",
    },
  ];
  return (
    <div>
      <div className="min-h-screen w-full bg-black relative text-white">
        <Header />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center w-full justify-start pt-28 pb-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h1>
              <p className="text-gray-400 text-lg">
                The passionate individuals behind UniStat
              </p>
            </div>
            <div className="grid grid-cols-1 w-full sm:grid-cols-2 place-items-center gap-8 md:grid-cols-3">
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
      </div>
      <Footer />
    </div>
  );
};

export default Team;
