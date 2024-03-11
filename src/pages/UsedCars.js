import MainLayout from "../layouts/MainLayout";
import React, { useEffect, useState } from "react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { RefineSearch } from "../components/gallery/RefineSearch";
import usedcars from "../assets/images/usedcars.png";
import HeroSection from "../components/gallery/HeroSection";
import { VehicleCard1 } from "../components/gallery/VehicleCard1";
import getData from "../data/shortlist";
import Representative from "../components/Representative";
// import downarrow from '../assets/icon/down-arrow.png'
const amount = 6;

export default function UsedCars() {
  // const [active, setActive] = React.useState(1);
  const active=1
  // const [visible, setVisible] = useState(true);
  // const [fr, setFr] = useState([]);
  // const [ff, setFf] = useState([]);
  // const [ft, setFt] = useState([]);
  // const [th, setTh] = useState([]);
  // const [se, setSe] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
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
  // const more=()=>{
  //   if(maxPageNum>=page+1)
  //     setPage(page+1);
  //   else {setPage(page+1);setVisible(false);}
  // }
  return (
    <MainLayout>
      <HeroSection
        img={usedcars}
        mt={"mt-4 lg:mt-20"}
        words={["used", "cars"]}
      />
      <div className="flex py-10 px-5 flex-col md:flex-row justify-center w-full  bg-[#f6f6f6]">
        <div className="flex flex-col md:flex-row md:justify-between max-w-[1440px] ">
          <div className="md:block hidden min-w-[380px]  md:w-1/4">
            <RefineSearch />
          </div>
          <div className="w-full md:w-[72%]  flex-col">
            <div className="mb-6 w-full md:w-1/2 lg:w-1/3 float-right border-0">
              <select className="w-full rounded-full border-2 border-gray-300 p-2">
                <option value="option1">Price - Low to High</option>
                <option value="option2">Price - High to Low</option>
                <option value="option3">Age - Newest First</option>
                <option value="option1">MPG - Highest First</option>
                <option value="option3">CO2 - Lowest First</option>
                <option value="option1">Tax Cost/VED - Lowest First</option>
                {/* <option value="option2">Engine Size - Highest First</option>
                    <option value="option3">Engine Size - Lowest First</option>
                    <option value="option2">Mileeage - Lowest First</option> */}
              </select>
            </div>
            <div className="w-full ">
              <div className="flex w-full flex-wrap items-center justify-between">
                {data.map((item, index) => {
                  if (
                    index < amount * active &&
                    index >= amount * active - amount
                  ) {
                    return <VehicleCard1 key={index} item={item} />;
                  }
                  return null;
                })}
              </div>
              {/* {(
                loading ?
                  visible && (
                    <div className="mt-24 flex flex-col">
                      <div className="border-b-2 border-gray-700 w-full"></div>
                      <div onClick={more} className="-mt-6 w-full hover:cursor-pointer flex justify-center flex-row gap-2 items-center md:w-fit bg-black text-white text=[14px] hover:bg-gray-800 py-2  px-6 rounded-full mx-auto">
                        <div >More results.</div>
                        <img src={downarrow} alt="downarrow" className="w-3 h-3" />
                      </div>
                    </div>

                  ) : <div className="mt-10 flex w-full h-full text-center subtitle text-[60px]">Loading...</div>
              )} */}
            </div>
            <Representative />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
