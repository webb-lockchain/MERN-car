// import road from "../assets/images/road.png";
// import overcar from "../assets/images/overcar.png";
import { ReactComponent as Section2Star } from "./svg/section2Star.svg";
import { ReactComponent as Check2 } from "./svg/check2.svg";
import { ReactComponent as CircleWithCheck } from "./svg/circleWithCheck.svg";
// import { ReactComponent as Section2Pattern } from "./svg/section2Pattern.svg";

export default function Section2() {
  return (
    <div className="mx-auto max-w-[1340px] w-full">
      <div className="flex flex-col md:flex-row px-5 py-[50px] md:justify-between">
        <div className="">
          <div className="flex w-full lg:max-w-[400px] bg-[#F6F6F6] p-6 my-4 rounded-[16px] ">
            <div className="min-w-[64px] h-[64px] rounded-lg border border-red-600 bg-gradient-to-r from-red-600 to-blue-900 flex justify-center items-center">
              <Section2Star className="w-full" />
            </div>
            <div className="  ml-4 text-gray-700 font-barlow font-semibold text-[18px] md:ml-6 md:text-lg leading-none md:leading-8 flex items-center">
              Multi-award winning van and pick-up truck specialist
            </div>
          </div>
          <div className="flex w-full lg:max-w-[400px] bg-[#F6F6F6] p-6 my-4 rounded-[16px] ">
            <div className="min-w-[64px] h-[64px] rounded-lg border border-red-600 bg-gradient-to-r from-red-600 to-blue-900 flex justify-center items-center">
              <Check2 className="w-full" />
            </div>

            <div className="  ml-4 text-gray-700 font-barlow font-semibold  text-[18px] md:ml-6 md:text-lg leading-none md:leading-8 flex items-center">
              We carry out multi-point inspections as standard
            </div>
          </div>
          <div className="flex w-full lg:max-w-[400px] bg-[#F6F6F6] p-6 my-4 rounded-[16px] ">
            <div className="min-w-[64px] h-[64px] rounded-lg border border-red-600 bg-gradient-to-r from-red-600 to-blue-900 flex justify-center items-center">
              <CircleWithCheck className="w-full" />
            </div>
            <div className="  ml-4 text-gray-700 font-barlow font-semibold  text-[18px] md:ml-6 md:text-lg leading-none md:leading-8 flex items-center">
                14-day money back guarantee available
            </div>
          </div>
        </div>
        <div className="w-full h-[250px] md:h-[400px] md:w-1/2 flex justify-center items-center lg:mt-0 mt-5">
          {/* <div className="relative w-fit">
            <img
              src={road}
              alt="road"
              className="w-full object-fit  rounded-[20px]"
            />
            <img
              src={overcar}
              alt="overcar"
              className="w-1/2 md:w-2/3 absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10"
            />
            <div className="absolute top-[40%] left-[45%] z-10">
              <svg
                width="56"
                height="55"
                viewBox="0 0 56 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.222656"
                  width="55"
                  height="55"
                  rx="27.5"
                  fill="#E91E24"
                />
                <path
                  d="M39.5138 24.0449C42.1598 25.5884 42.1598 29.4116 39.5138 30.9551L24.0238 39.991C21.3572 41.5465 18.0083 39.623 18.0083 36.5359L18.0083 18.4641C18.0083 15.377 21.3572 13.4535 24.0238 15.009L39.5138 24.0449Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="hidden lg:block absolute top-[70%] scale-50 right-10 h-[190px] overflow-hidden -z-10">
              <Section2Pattern />
            </div>
          </div> */}

          <iframe class="video_homepage w-full h-[250px] md:h-[400px]"  src="https://www.youtube.com/embed/buNT9D2_WCc?si=jAJ6y8S1KbzD6Zgr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
        </div>
      </div>
    </div>
  );
}
