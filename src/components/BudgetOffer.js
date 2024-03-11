import React from "react";
// import {Link} from 'react-router-dom'
import MultiRangeSlider from "./multiRangeSlider";
// import {Select, Option} from "@material-tailwind/react";
import { GrayBtn } from "./gallery/GrayBtn";
import { WhiteBtn } from "./gallery/WhiteBtn";
import { ReactComponent as Section2Pattern } from "./svg/section2Pattern.svg";
import { Link } from "react-router-dom";

export default function BudgetOffer() {
  return (
    <div className="p-5 lg:p-[100px]  mx-auto">
      <div className="block w-full max-w-[1280px] mx-auto">
        <div className="mb-6 w-full lg:justify-between justify-center lg:gap-[180px] items-center lg:items-start flex lg:flex-row flex-col ">
          <div className="w-full flex flex-wrap max-w-[750px] relative">
            <div className="subtitle text-[48px] leading-[56px] md:text-[64px] md:leading-[72px]">
              WHAT CAN I GET FOR <span className="inline md:hidden magictitle text-[48px] leading-[56px] md:text-[64px] md:leading-[72px]">MY BUDGET?</span>
            </div>
            <div className="hidden md:inline magictitle text-[48px] leading-[56px] md:text-[64px] md:leading-[72px]">
              MY BUDGET?
            </div>
            <div className="hidden lg:block -z-10 absolute right-[0px] top-[90px] scale-90 h-2/3 overflow-hidden">
              <Section2Pattern />
            </div>
          </div>         
          <div className="w-11/12 lg:max-w-[580px] lg:self-stretch self-center flex-col justify-end relative items-start gap-9 mt-9 flex">
            <div className="w-[100px] h-[3px] bg-gradient-to-r from-red-600 to-blue-700 absolute top-0 "></div>
            <div className="  lg:max-w-[440px] text-black mt-10 text-[14px] md:text-[20px] font-normal font-barlow ">
              Explore what you can get with your budget here at Thatchers Motor
              Company
            </div>
          </div>
        </div>
        <div className="mt-[50px] bg-[#f6f6f6] rounded-2xl w-full flex flex-col">
          <div className="hidden md:flex mt-[50px] w-3/4 px-5 mx-auto py-10 flex-col">
            <MultiRangeSlider min={0} max={28} symbol={"£"} />
            <div className="mt-8 flex flex-row justify-between text-black   font-bold">
              <div className="">£5,000</div>
              <div className="">£35,000</div>
            </div>
          </div>
          <div className="md:hidden mx-auto mt-[50px] w-3/4">
            <input className="w-full h-12 border-2 mx-auto p-2 rounded-md" placeholder="Please input Min value" type="text"/> 
            <input className="mt-8 mb-6 h-12 w-full border-2 p-2 rounded-md" placeholder="Please input Max value" type="text"/>

          </div>

          <Link
            to="vehicles-for-sale/used-trucks/"
            className="w-fit mx-auto mb-[50px]"
          >
            <GrayBtn
              name={"search offer"}
              handleClick={null}
              upperCase={true}
            />
          </Link>
        </div>
        <div className="w-full flex my-[50px]">
          <Link to="/sell-your-vehicle/" className="  mx-auto">
            <WhiteBtn
              name={"want to trade your vehicle?"}
              handleClick={null}
              upperCase={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
