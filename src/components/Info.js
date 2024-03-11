import { Select, Option } from "@material-tailwind/react";
import cars from "../assets/images/cars.png";
import SearchBtn from "./gallery/SearchBtn";
import info1 from "./svg/info1.svg";
import info2 from "./svg/info2.svg";
import info3 from "./svg/info3.svg";
import { Link } from "react-router-dom";

export default function Info({ history }) {
  return (
    <div className="pb-10 pt-[10px] md:pt-[70px]">
      <div className="max-w-[1480px] px-5 mx-auto relative">
        <div className="w-full flex justify-center xl:justify-between items-center gap-10 flex-col xl:flex-row z-10">
          <div className="flex flex-wrap max-w-[560px] text-5xl xl:text-7xl z-10 justify-start leading-6">
            <div className="subtitle md:text-[100px] text-[70px] leading-[70px] md:leading-[100px]">
              USED&nbsp;
            </div>
            <h1 className="magictitle md:text-[100px] text-[70px] leading-[70px] md:leading-[100px]">
              VANS &
            </h1>
            <h1 className="magictitle md:text-[100px] text-[70px] leading-[70px] md:leading-[100px]">
              PICKUP&nbsp;
            </h1>
            <div className="subtitle md:text-[100px] text-[70px] leading-[70px] md:leading-[100px]">
              TRUCKS
            </div>
            <div className="subtitle md:text-[100px] text-[70px] leading-[70px] md:leading-[100px]">
              FOR SALE
            </div>
          </div>
          <div className=" flex flex-col h-full justify-between max-w-[560px] xl:self-start self-center">
            <p className="  text-black font-barlow text-base font-normal leading-7">
              As an award winning dealer we specialise in supplying the entire
              UK with high quality, pre-owned pick-up trucks, commercial vehicles
              andused second hand cars
            </p>
            <h1 className=" mt-8 text-center px-3 w-fit md:px-4 py-2 mb-10 border-2 border-red-500 rounded-full font-barlow md:text-[18px] text-[13px] font-semibold leading-6 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
              FREE Home delivery and 1 Year Warranty*
            </h1>
          </div>
        </div>
        <div className="relative h-fit w-full z-10 ">
          <img
            src={cars}
            alt="cars"
            className="mt-16 md:mt-0 xl:absolute xl:right-1 xl:top-10 mx-auto z-10 xl:mt-0 "
          ></img>
        </div>
        <div className="absolute top-[82%] left-[15%] block md:top-[90%] md:left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <img src={info1} alt="cars" className="md:w-fit md:h-fit w-[77px] h-[77px]"></img>
        </div>
        <div className="absolute hidden xl:block top-[222px] -left-8 -translate-x-1/2 -translate-y-1/2 z-10">
          <img src={info2} alt="cars" className="w-fit h-fit"></img>
        </div>

        <div className="absolute hidden xl:block top-[522px] -right-[180px]  z-10">
          <img src={info3} alt="cars" className="w-fit h-fit"></img>
        </div>
      </div>
      <div className="w-full xl:mt-[130px] -mt-[20px] md:-mt-[90px] h-fit opacity-95 bg-gradient-to-r from-red-600 to-blue-900 flex flex-col justify-center items-center pt-[110px] xl:pt-[170px]  relative">
        <div className="absolute bottom-0 w-full h-1/2 lg:h-4/5 bg-gradient-to-b from-transparent  to-white -z-20"></div>
        <div className="lg:w-fit md:w-2/3 sm:w-5/6  w-11/12">
          <div className="bg-white rounded-[10px] lg:rounded-full border border-black border-opacity-10 justify-start items-center gap-4  flex-row lg:inline-flex py-1 lg:pl-8 lg:pr-0 px-4 ">
            <div className="lg:p-0 py-2">
              <Select label="SELECT TYPE" variant="standard">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </div>
            <div className="lg:p-0 py-2">
              <Select label="SELECT BRAND" variant="standard">
                <Option value="1">nissan</Option>
                <Option value="2">toyoda</Option>
              </Select>
            </div>
            <div className="lg:p-0 py-2">
              <Select label="SELECT MODEL" variant="standard">
                <Option value="7000">1</Option>
                <Option value="8000">2</Option>
              </Select>
            </div>
            <Link to="/vehicles-for-sale/" className="lg:p-0 py-2">
              <SearchBtn name={"Search"} />
            </Link>
          </div>
        </div>
        <div className="mt-8 w-full sm:flex sm:justify-center items-center mb-[50px]">
          <div className="sm:gap-4 sm:flex block mx-auto items-center sm:w-fit w-11/12 sm:p-0 px-4">
            <Link
              to="/sell-your-vehicle/"
              className="px-4 py-3 bg-[#131313] hover:bg-[#272727] cursor-pointer mb-4 sm:mb-0 w-full sm:w-fit hover:cursor-pointer flex justify-center border border-black items-center rounded-full"
            >
              <div className="flex flex-row">
                <div className="text-zinc-950 text-sm font-semibold uppercase text-white">
                  Get Valuations
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 7L18 12M18 12L13 17M18 12L6 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <Link
              to="https://www.mycarcreditscore.co.uk/TMCMotors/95641"
              className="px-4 py-3 bg-[#131313] cursor-pointer hover:bg-[#272727]  w-full sm:w-fit hover:cursor-pointer flex justify-center border border-black items-center  rounded-full"
            >
              <div className="flex flex-row">
                <div className="text-zinc-950 text-sm font-semibold uppercase text-white ">
                  Free Finance Check
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 7L18 12M18 12L13 17M18 12L6 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
