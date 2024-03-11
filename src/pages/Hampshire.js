import MainLayout from "../layouts/MainLayout";
import React, { useEffect, useState } from "react";
// import { Button, IconButton } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { RefineSearch } from "../components/gallery/RefineSearch";
// import { VehicleCard } from "../components/gallery/VehicleCard";

import hampshire from "../assets/images/hampshire.png";
import hampshire1 from "../assets/images/hampshire1.png";
import { ReactComponent as CheckSVG } from "../components/svg/check3.svg";
import HeroSection from "../components/gallery/HeroSection";
import getData from "../data/shortlist";
import { VehicleCard1 } from "../components/gallery/VehicleCard1";
import Representative from '../components/Representative'
import MoreTrucks  from "../components/MoreTrucks";
const amount = 6;
export default function Hampshire() {
  
  // const [active, setActive] = React.useState(1);
  const active=1
  // const [fr, setFr] = useState([]);
  // const [ff, setFf] = useState([]);
  // const [ft, setFt] = useState([]);
  // const [th, setTh] = useState([]);
  // const [se, setSe] = useState([]);
  const [data, setData] = useState([]);
  // const [page, setPage] = useState(1);

  // const pageSize = 9;
  // const [maxPageNum, setMaxPageNum] = useState(0);
  // const next = () => {
  //   if (active < maxPageNum) {
  //     if (maxPageNum > 7) {
  //       if (active <= 3) {
  //         setFr([1, 2, 3, 4]);
  //         setTh([]);
  //         setSe(['a']);
  //         setFt([]);
  //       }
  //       else if ((active >= 3) && (active < maxPageNum - 4)) {
  //         setFr([1]);
  //         setSe(['a']);
  //         setTh([active, active + 1, active + 2]);
  //         setFt(['b']);
  //         setFf([maxPageNum]);
  //       }
  //       else if (active >= maxPageNum - 4) {
  //         setFr([1]);
  //         setSe(['a']);
  //         setTh([maxPageNum - 3, maxPageNum - 2, maxPageNum - 1]);
  //         setFt([]);
  //         setFf([maxPageNum])
  //       }
  //     }
  //     setActive(active + 1);
  //     // page=active + 1;
  //   }
  // };
  // const prev = () => {
  //   if (active > 1) {
  //     if (maxPageNum > 7) {
  //       if (active <= 5) {
  //         setFr([1, 2, 3, 4]);
  //         setTh([]);
  //         setSe(['a']);
  //         setFt([]);
  //       }
  //       else if ((active > 5) && (active <= maxPageNum - 3)) {
  //         setFr([1]);
  //         setSe(['a']);
  //         setTh([active - 2, active - 1, active]);
  //         setFt(['b']);
  //         setFf([maxPageNum]);
  //       }
  //       else if (active > maxPageNum - 3) {
  //         setFr([1]);
  //         setSe(['a']);
  //         setTh([maxPageNum - 3, maxPageNum - 2, maxPageNum - 1]);
  //         setFt([]);
  //         setFf([maxPageNum])
  //       }
  //     }

  //     setActive(active - 1);
  //     // page=active - 1;
  //   }
  // };
  // const thitem = (item) => {
  //   console.log("active=", active, "item=", item);
  //   if (item === maxPageNum - 3) {
  //     setTh([]);
  //     setFt([]);
  //     setFf([maxPageNum - 3, maxPageNum - 2, maxPageNum - 1, maxPageNum])
  //   }
  //   else {
  //     if (item === 4) {
  //       setFr([1, 2, 3, 4]);
  //       setSe(['a']);
  //       setTh([]);
  //       setFt([]);
  //       setFf([maxPageNum])
  //     }
  //     else {
  //       setFr([1]);
  //       setSe(['a']);
  //       // setTh([item-1,item,item+1]);
  //       setFt(['a']);
  //       setFf([maxPageNum])
  //       console.log(active, item)
  //     }

  //   }
  //   setActive(item);
  //   // page=item;
  // }
  useEffect(() => {
    // const totalResults = getData().length;
    // const maxPageNum = Math.floor(totalResults / pageSize) + 1;
    // if (maxPageNum > 7) {
    //   setFr([1, 2, 3, 4]);
    //   setSe(['a']);
    //   setTh([])
    //   setFt([]);
    //   setFf([maxPageNum])
    // }
    // else {
    //   setFr([1, 2, 3, 4, 5, 6, 7]);
    // }
    // setMaxPageNum(maxPageNum);
    setData(getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <MainLayout>
      <HeroSection
        img={hampshire1}
        words={["located at ", "hampshire"]}
        mt={"mt-5"}
      />
      <div className="px-5 2xl:px-0  max-w-[1440px] w-full mx-auto  py-[50px] bg-white justify-center items-start gap-[50px] flex xl:flex-row flex-col">
        <div className="xl:w-[48%]  w-full flex-col justify-start items-start gap-6 inline-flex">
          <div className="  self-stretch text-neutral-800 text-[36px] md:text-[72px] font-bold font-barlow-condensed uppercase leading-[55px] md:leading-[90px]">
            Used Pickup Trucks For Sale Hampshire
          </div>
          <div className="  mt-24 md:mt-24 self-stretch text-black text-[16px] font-normal font-barlow-condensed leading-[20px] md:leading-[36px]">
            Welcome to TMC Motors, a distinguished and award-winning dealership
            renowned for its extensive inventory of top-quality used vehicles,
            including pickup trucks, vans, and cars. At TMC Motors, we take
            pride not only in offering a wide selection of exceptional pre-owned
            vehicles but also in providing the convenience of vehicle trade-ins.
            Additionally, we offer a seamless option to sell your car for cash,
            complete with an instant quote.
            <br />
            <br />
            Our dedicated team excels in handling both local transactions in
            Huddersfield and sales that span long distances. Regardless of your
            location, we are fully equipped to meet your automotive needs.
            <br />
            <br />
            When you choose to do business with us, rest assured that
            exceptional service is our promise. As part of our commitment to
            convenience, we can even arrange for the pickup and delivery of your
            vehicle right at your doorstep.`
          </div>
        </div>
        <div className="xl:w-1/2 w-full self-stretch flex-col justify-start items-center gap-8 inline-flex">
          <div className="mt-8 xl:mt-0 w-fit">
            <img className="rounded-3xl w-fit" src={hampshire} alt="'adsf" />
          </div>
          <div className="  self-stretch text-black text-xl font-normal font-barlow leading-sm">
            The advantages of buying and selling vehicle with TMC include;
          </div>
          <div className="self-stretch h-[248px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                <div className="w-4 h-4 relative">
                  <CheckSVG />
                </div>
              </div>
              <div className="  grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                Close Brothers Motor Finance
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                <div className="w-4 h-4 relative">
                  <CheckSVG />
                </div>
              </div>
              <div className="  grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                Car Finance 24/7
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                <div className="w-4 h-4 relative">
                  <CheckSVG />
                </div>
              </div>
              <div className="  grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                Moto Novo
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                <div className="w-4 h-4 relative">
                  <CheckSVG />
                </div>
              </div>
              <div className="  grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                Credit Plus
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                <div className="w-4 h-4 relative">
                  <CheckSVG />
                </div>
              </div>
              <div className="  grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                Zuto
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                <div className="w-4 h-4 relative">
                  <CheckSVG />
                </div>
              </div>
              <div className="  grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                MoneyBarn
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                <div className="w-4 h-4 relative">
                  <CheckSVG />
                </div>
              </div>
              <div className="  grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                Advantage Finance
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                <div className="w-4 h-4 relative">
                  <CheckSVG />
                </div>
              </div>
              <div className="  grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                Alphera Financial Services
              </div>
            </div>
          </div>
          <div className="self-stretch">
            <span className="  text-black text-xl font-normal font-['Barlow'] leading-loose">
              To learn more about us or any vehicle in our stock, please call us
              <br />
              on&nbsp;
            </span>
            <span className="  text-blue-700 text-xl font-normal font-['Barlow'] underline leading-loose">
              01252 943974
            </span>
            <span className="  text-black text-xl font-normal font-['Barlow'] leading-loose">
              (Head Office) or&nbsp;
            </span>
            <span className="  text-blue-700 text-xl font-normal font-['Barlow'] underline leading-loose">
              01484 482511
            </span>
            <span className="  text-black text-xl font-normal font-['Barlow'] leading-loose">
              (Huddersfield)
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-10 flex-col md:flex-row justify-center w-full bg-[#f6f6f6]">
        <div className="flex flex-col md:flex-row md:justify-between max-w-[1440px] ">
          <div className="px-5 md:block hidden min-w-[380px]  md:w-1/4">
            <RefineSearch />
          </div>
          <div className="w-full md:w-[72%]  flex-col">
            <div className="px-5 w-full ">
              <div className="flex w-full flex-wrap items-center justify-evenly">
                {data.map((item, index) => {
                  if (
                    index < amount * active &&
                    index >= amount * active - amount
                  ) {
                    return <VehicleCard1 item={item} key={index} />;
                  }
                  return null;
                })}
              </div>
              {/* <div className="flex items-center gap-[6px] justify-center mt-[40px]">
                  <div
                    className="flex  justify-center items-center border-2 border-gray-300 w-8 h-8 rounded-full hover:bg-gray-300"
                    onClick={prev}
                  >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-[6px]">
                    {fr.map((item) => (
                      <div
                        className={`flex justify-center items-center border-2 border-gray-300 w-8 h-8 rounded-full hover:bg-gray-900 hover:text-white ${active === item
                          ? "bg-gray-900 text-white"
                          : "hover:text-white"
                          } ${item > maxPageNum ? "hidden" : ""}`}
                        onClick={() => {
                          setActive(item);
                          // page=item;
                        }}
                      >
                        {item}
                      </div>
                    ))}
                    {(se.length !== 0) && (<div>...</div>)}
                    {th.map((item) => (
                      <div
                        className={`flex justify-center items-center border-2 border-gray-300 w-8 h-8 rounded-full hover:bg-gray-900 hover:text-white ${active === item
                          ? "bg-gray-900 text-white"
                          : "hover:text-white"
                          } ${item > maxPageNum ? "hidden" : ""}`}
                        onClick={() => thitem(item)}
                      >
                        {item}
                      </div>
                    ))}
                    {(ft.length !== 0) && (<div>...</div>)}
                    {ff.map((item) => (
                      <div
                        className={`flex justify-center items-center border-2 border-gray-300 w-8 h-8 rounded-full hover:bg-gray-900 hover:text-white ${active === item
                          ? "bg-gray-900 text-white"
                          : "hover:text-white"
                          } ${item > maxPageNum ? "hidden" : ""}`}
                        onClick={() => {
                          setActive(item);
                          // page=item;
                        }}
                      >
                        {item}
                      </div>
                    ))}

                  </div>
                  <div
                    className="flex justify-center items-center border-2 border-gray-300 w-8 h-8 rounded-full hover:bg-gray-300"
                    onClick={next}
                  >
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                  </div>
                </div> */}
            </div>
            <div className="md:mx-10 bg-white pb-[50px]  md:bg-[#f6f6f6]">
              <Representative/>            
              <MoreTrucks/>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
