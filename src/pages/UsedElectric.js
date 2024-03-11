import MainLayout from "../layouts/MainLayout";
import React from "react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { RefineSearch } from "../components/gallery/RefineSearch";
import usedelectric from "../assets/images/usedelectric.png";
import HeroSection from "../components/gallery/HeroSection";
import { VehicleCard1 } from "../components/gallery/VehicleCard1";
import getData from "../data/shortlist";
import Representative from "../components/Representative";
import { useEffect, useState } from "react";

const amount = 6;
export default function UsedCars() {
  // const data = getData();
  // const [active, setActive] = React.useState(1);
  const active = 1;
  // const pageSize = 9;
  // const [maxPageNum, setMaxPageNum] = useState(0);
  const [data, setData] = useState([]);
  // const [fr, setFr] = useState([]);
  // const [ff, setFf] = useState([]);
  // const [ft, setFt] = useState([]);
  // const [th, setTh] = useState([]);
  // const [se, setSe] = useState([]);
  // const [page, setPage] = useState(1);
  

  // const next = () => {
  //   if (active < maxPageNum) {
  //     if(maxPageNum>7){
  //       if (active <= 3) {
  //         setFr([1, 2, 3, 4]);
  //         setTh([]);
  //         setSe(['a']);
  //         setFt([]);
  //       }
  //       else if ((active >= 3) && (active < maxPageNum - 4)) {
  //         setFr([1]);
  //         setSe(['a']);
  //         setTh([active , active + 1, active + 2]);
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
  //     if(maxPageNum>7){
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
  // const thitem=(item)=>{
  //   console.log("active=",active,"item=",item);                       
  //   if(item===maxPageNum-3){
  //     setTh([]);
  //     setFt([]);
  //     setFf([maxPageNum-3,maxPageNum-2,maxPageNum-1,maxPageNum])
  //   }
  //   else{
  //     if(item===4){
  //       setFr([1,2,3,4]);
  //       setSe(['a']);
  //       setTh([]);
  //       setFt([]);
  //       setFf([maxPageNum])
  //     }
  //     else{
  //       setFr([1]);
  //       setSe(['a']);
  //       // setTh([item-1,item,item+1]);
  //       setFt(['a']);
  //       setFf([maxPageNum])
  //       console.log(active,item)
  //     }

  //   }
  //   setActive(item);
  //   // page=item;
  // }
  useEffect(()=>{
    // const totalResults = getData().length;
    // const maxPageNum = Math.floor(totalResults / pageSize) + 1;
    // if (maxPageNum > 7) {
    //   setFr([1,2,3,4]);
    //   setSe(['a']);
    //   setTh([])
    //   setFt([]);
    //   setFf([maxPageNum])
    // }
    // else{
    //   setFr([1,2,3,4,5,6,7]);
    // }
    // setMaxPageNum(maxPageNum);
    setData(getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <MainLayout>
      <HeroSection
        img={usedelectric}
        mt={"mt-4 lg:mt-20"}
        words={["used", "Electric cars"]}
      />

      <div className="flex py-10 px-5 flex-col md:flex-row justify-center w-full bg-[#f6f6f6]">
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
                <option value="option2">Engine Size - Highest First</option>
                <option value="option3">Engine Size - Lowest First</option>
                <option value="option2">Mileeage - Lowest First</option>
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
            <Representative/>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
