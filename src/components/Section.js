import info2 from "./svg/info2.svg";
import info4 from "./svg/info4.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Section() {
  const [tab, setTab] = useState(1);

  return (
    <div className="relative w-full  custom-gradients flex justify-center px-5 md:px-0 py-[50px] md:py-[100px]">
      <div className="relative w-full sm:px-4 flex max-w-[1280px] flex-col justify-between text-white ">
        <div className="flex flex-row justify-center itmes-center md:justify-start">
          <div
            onClick={() => setTab(1)}
            className={`${
              tab === 1
                ? "bg-white text-black"
                : "hover:text-black hover:bg-white"
            } text-sm  border-2 border-white rounded-full px-4 text-center py-2  hover:cursor-pointer`}
          >
            <div className="md: ">HOW TO BUY</div>
          </div>
          <div
            onClick={() => setTab(2)}
            className={`${
              tab === 2
                ? "bg-white text-black"
                : "hover:text-black hover:bg-white"
            } text-sm ml-1 border-2 border-white rounded-full px-4 text-center py-2  hover:cursor-pointer`}
          >
            <div className="md: ">HOW TO SELL</div>
          </div>
        </div>
        {tab === 1 ? (
          <div className=" mt-6 md:mt-[50px] flex flex-col md:flex-row md:justify-between ">
            <div className="flex flex-col justify-between md:w-1/3  w-full">
              <div className="">
                <div className="text-white font-barlow-condensed text-4xl md:text-6xl font-bold leading-10 uppercase md: ">
                  HOW TO BUY
                </div>
                <div className="mt-4 md: ">
                  We have a whole range of pick-up trucks, used vans for
                  business, and used cars for sale.
                </div>
              </div>
              <Link to="vehicles-for-sale/used-trucks/">
                <div className="text-sm mt-4 md:mt-0 border-2 border-white rounded-full w-[169px] text-center py-3 hover:text-black hover:bg-white hover:cursor-pointer">
                    <div className=" md: ">VIEW OUR VEHICLES</div>
                  
                </div>
              </Link>
            </div>
            <div className="mt-[50px] md:mt-0 flex flex-col gap-2 items-start justify-between w-full md:w-[62%] w-full">
              <div className="flex flex-col">
                <div className="flex flex-row justify-left items-center">
                  <div className="w-2 h-2 bg-white rounded-full ml-4 mr-4"></div>
                  <div className="text-white font-barlow-condensed text-2xl font-bold leading-8 uppercase md: ">
                    BUY ONLINE
                  </div>
                </div>
                <div className="mt-2 md: ">
                  Order online or over the phone with one of our consultants,
                  complete the transaction and we'll deliver the vehicle
                  directly to your home with the peace of mind of a money back
                  guarantee if you're not satisfied.
                </div>
              </div>
              <div className="md:mt-6 mt-4 flex flex-col">
                <div className="flex  h-fit flex-row justify-left items-center h-10">
                  <div className="w-2 h-2 bg-white rounded-full ml-4 mr-4"></div>
                  <div className="text-white font-barlow-condensed text-2xl font-bold leading-8 uppercase md:  h-fit">
                    Click & Collect
                  </div>
                </div>
                <div className=" mt-2 ">
                  <div className=" md: ">
                  Order online or over the phone with one of our consultants,
                  complete the transaction and come to collect the vehicle from
                  our safe collection zone away from our showroom. All with the
                  peace of mind of a money back guarantee if you're not
                  satisfied.
                  </div>
                </div>
              </div>
              <div className="md:mt-6 mt-4 flex flex-col">
                <div className="flex flex-row justify-left items-center">
                  <div className="w-2 h-2 bg-white rounded-full ml-4 mr-4"></div>
                  <div className="text-white font-barlow-condensed text-2xl font-bold leading-8 uppercase md: ">
                    Visit Our Showroom
                  </div>
                </div>
                <div className=" md:  mt-2 ">
                  We operate a strictly no-pressure approach, allowing you to
                  take your own time to browse and inspect our vehicles.
                  Meanwhile, our trained specialists will always be on hand for
                  expert help and advice as and when you need it.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className=" mt-6 md:mt-[50px] flex flex-col md:flex-row md:justify-between ">
            <div className="flex flex-col justify-between md:w-1/3  w-full">
              <div className="">
                <div className="text-white font-barlow-condensed text-4xl md:text-6xl font-bold leading-10 uppercase md: ">
                  HOW TO SELL
                </div>
                <div className="mt-4 md: ">
                  We have a whole range of pick-up trucks, used vans for
                  business, and used cars for sale.
                </div>
              </div>
              <Link to="/sell-your-vehicle/">
                <div className="text-sm mt-4 md:mt-0 border-2 border-white rounded-full w-[169px] text-center py-3 hover:text-black hover:bg-white hover:cursor-pointer md: ">
                  SELL YOUR VEHICLE
                </div>
              </Link>
            </div>
            <div className="mt-[50px] md:mt-0 flex flex-col justify-between w-full md:w-[62%]">
              <div className="flex flex-col">
                <div className="flex flex-row justify-left items-center">
                  <div className="w-2 h-2 bg-white rounded-full ml-4 mr-4"></div>
                  <div className="text-white font-barlow-condensed text-2xl font-bold leading-8 uppercase md: ">
                    Sell Online
                  </div>
                </div>
                <div className=" md: ">
                  Simply enter your registration and some basic details and
                  we'll line up a valuation for you. If you're happy with the
                  price we'll get your vehicle collected with full payment on
                  arrival. No further haggling.
                </div>
              </div>
              <div className="md:mt-6 mt-4 flex flex-col">
                <div className="flex flex-row justify-left items-center">
                  <div className="w-2 h-2 bg-white rounded-full ml-4 mr-4"></div>
                  <div className="text-white font-barlow-condensed text-2xl font-bold leading-8 md:  uppercase md: ">
                    Contact Us
                  </div>
                </div>
                <div className=" md: ">
                  Order online or over the phone with one of our consultants,
                  complete the transaction and come to collect the vehicle from
                  our safe collection zone away from our showroom. All with the
                  peace of mind of a money back guarantee if you're not
                  satisfied.Simply enter your registration and some basic
                  details and we'll line up a valuation for you. If you're happy
                  with the price we'll get your vehicle collected with full
                  payment on arrival. No further haggling.
                </div>
              </div>
              <div className="md:mt-6 mt-4 flex flex-col">
                <div className="flex flex-row justify-left items-center">
                  <div className="w-2 h-2 bg-white rounded-full ml-4 mr-4"></div>
                  <div className="text-white font-barlow-condensed text-2xl font-bold leading-8 uppercase md: ">
                    Visit Our Showroom
                  </div>
                </div>
                <div className=" md: ">
                  We operate a strictly no-pressure approach, allowing you to
                  take your own time to browse and inspect our vehicles.
                  Meanwhile, our trained specialists will always be on hand for
                  expert help and advice as and when you need it.
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="absolute hidden md:block -top-40 right-0 -translate-y-1/2 z-10">
          <img src={info2} alt="cars" className="w-fit h-fit"></img>
        </div>
      </div>
      <div className="absolute hidden md:block bottom-0 left-0  -translate-y-1/2 z-10">
        <img src={info4} alt="cars" className="w-fit h-fit"></img>
      </div>
    </div>
  );
}
