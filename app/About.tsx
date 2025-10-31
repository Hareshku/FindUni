/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="py-10">
      <div className="flex snap-center max-w-7xl mx-auto flex-col items-center justify-around gap-4 md:flex-row px-10">
        <div className="">
          <Image
            src="/sapiens.svg"
            alt="logo"
            loading="eager"
            height={500}
            width={500}
          />
        </div>
        <div className="flex w-full text-white flex-col items-center justify-center p-5 md:w-[50%]">
          <div className="relative flex h-full w-full items-end">
            <div className="font-marker text-4xl text-center md:text-left w-full mb-5 font-black">
              <p className="underline underline-offset-2">ABOUT</p>
            </div>
          </div>
          <p className="text-md font-normal text-center md:text-left">
            UniStat is a free website that offers comprehensive support for
            students throughout the college admission process. From helping
            users curate a personalized list of best-fit universities in their
            desired country to providing insights into specific college
            requirements based on their country and curriculum, assisting in
            standardized test preparation, organizing essential deadlines
            through a user-friendly calendar, and offering valuable statistics
            and recommendations, Unistat is your go-to resource for college
            readiness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
