import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {};

const MagicLab = (props: Props) => {
  return (
    <div className="flex text-black snap-center mx-auto flex-col justify-center bg-white h-fit py-[3%] items-center">
      <div className="max-w-6xl mx-auto">
        {/* <div className="w-full justify-center flex items-center flex-col space-y-4  space-x-4 md:space-y-0 md:flex-row">
          <h2 className="text-3xl font-medium">Our </h2>
          <GlobeAltIcon className="h-20 text-cyan-400" />
          <h2 className="text-3xl font-medium">Objectives.</h2>
        </div> */}
        <div className="grid grid-cols-1 gap-x-10 mt-20 gap-y-[50px] md:grid-cols-2 xl:grid-cols-3 place-content-center">
          <div className="min-h-fit flex flex-col justify-center items-center">
            <div className="flex w-24 h-24 justify-center items-center rounded-full bg-[#f64d52]">
              <Image
                src="/icons/educationForAll.png"
                height={40}
                unoptimized={true}
                width={40}
                alt=""
                className="max-w-full w-12 inline-block"
              />
            </div>
            <div className="flex flex-col justify-items-center items-center">
              <h3 className="text-2xl text-black font-semibold text-center my-5">
                Education for all
              </h3>
              <p className="text-center text-gray-700 text-2xl font-semibold">
                Building 21st Century Skills while supporting rich traditions.
                <strong>
                  <br />
                </strong>
              </p>
            </div>
          </div>
          <div className="min-h-fit flex flex-col justify-center w items-center">
            <div className="flex w-24 h-24 justify-center items-center rounded-full bg-[#548bf4]">
              <Image
                src="/icons/collaboration.png"
                alt=""
                height={40}
                unoptimized={true}
                width={40}
                className="max-w-full w-16 inline-block"
              />
            </div>
            <div className="flex flex-col justify-items-center items-center">
              <h3 className="text-2xl text-black font-semibold text-center my-5">
                Collaboration
              </h3>
              <p className="text-center text-gray-700 text-2xl font-semibold">
                Sharing experiences and working together.
                <strong>
                  <br />
                </strong>
              </p>
            </div>
          </div>
          <div className="min-h-fit flex flex-col justify-center items-center">
            <div className="flex w-24 h-24 justify-center items-center rounded-full bg-[#ffaac3]">
              <Image
                src="/icons/healthFuture.png"
                height={40}
                unoptimized={true}
                width={40}
                alt=""
                className="max-w-full w-12 inline-block"
              />
            </div>
            <div className="flex flex-col justify-items-center items-center">
              <h3 className="text-2xl text-black font-semibold text-center my-5">
                Healthy futures
              </h3>
              <p className="text-center text-gray-700 text-2xl font-semibold">
                Investing in universal access to information.
                <strong>
                  <br />
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicLab;
