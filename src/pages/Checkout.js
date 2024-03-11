import MainLayout from "../layouts/MainLayout";
import Buyfullnow from "../components/Buyfullnow";
import Landrover from "../components/Landrover";
import Paywithcard from "../components/Paywithcard";
import OrderSummary from "../components/OrderSummary";
import { useState,useEffect } from "react";

export default function Checkout() {
  const [curtab, setCurtab] = useState(0);
  useEffect(()=>{
    // setCurtab(0);
  })
  const [data,setData]=useState({step:0,price:2500,addfee:0});
  const next = () => {
    if (curtab < 3) {
      setCurtab(curtab + 1);
      setData(prevData=>({...prevData,step:curtab+1}));
    }
  };
  const prev = () => {
    if (curtab >0) {
      setCurtab(curtab - 1);
      setData(prevData=>({...prevData,step:curtab-1}));
    }
    else window.location.href="vehicles-for-sale/viewdetail";
  };
    
  return (
    <MainLayout>
      <div className="w-full bg-[#F6F6F6] lg:py-8 lg:px-[100px] py-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-[27%] w-full md:order-1 order-2">
            <OrderSummary data={data}/>
          </div>
          <div className="testflex flex-col md:w-[70%] w-full md:order-2 order-1">
            <div className="relative w-4/5 mx-auto">
              {curtab===0&&(<div className="absolute w-full top-[23px] flex flex-row justify-center">
                <div className="w-[40%] xl:w-[43%] border-t-2 border-[#b3b3b3]"></div>
                <div className="w-[40%] xl:w-[43%] border-t-2 border-[#b3b3b3]"></div>
              </div>)}
              {curtab===1&&(<div className="absolute w-full top-[23px] flex flex-row justify-center">
                <div className="w-[40%] xl:w-[43%] border-t-2 border-green-500"></div>
                <div className="w-[40%] xl:w-[43%] border-t-2 border-[#b3b3b3]"></div>
              </div>)}
              {curtab===2&&(<div className="absolute w-full top-[23px] flex flex-row justify-center">
                <div className="w-[40%] xl:w-[43%] border-t-2 border-green-500"></div>
                <div className="w-[40%] xl:w-[43%] border-t-2 border-green-500"></div>
              </div>)}
              <div className="flex flex-row justify-between">
                <div className="min-w-[47px] flex flex-col items-center z-10 ">
                  {curtab>=1?<label className="custom-checkbox2">
                        <input type="checkbox" checked className="hidden" />
                        <span className="checkmark"></span>
                    </label>:(curtab<1?<div className="bg-black text-white border-2 h-12 w-12 flex justify-center items-center text-center font-barlow text-18 font-normal font-semibold leading-26 rounded-2xl">
                    1
                  </div>:<div className="bg-white border-2 h-12 w-12 flex justify-center items-center text-center font-barlow text-18 font-normal font-semibold leading-26 rounded-2xl">
                    1
                  </div>)
                  }
                  {curtab>=1?<div className="text-center text-[#48b74f]">Confirm Details </div>:<div className="text-center text-black">Confirm Details </div>}
                </div>
                <div className="flex flex-col items-center z-10">

                {curtab>=2?<label className="custom-checkbox2">
                        <input type="checkbox" checked className="hidden" />
                        <span className="checkmark"></span>
                    </label>:(curtab===1?<div className="bg-black text-white border-2 h-12 w-12 flex justify-center items-center text-center font-barlow text-18 font-normal font-semibold leading-26 rounded-2xl">
                    2
                  </div>:<div className="bg-white border-2 h-12 w-12 flex justify-center items-center text-center font-barlow text-18 font-normal font-semibold leading-26 rounded-2xl">
                    2
                  </div>)
                  }
                  {curtab>=2?<div className="text-center text-[#48b74f]">Organise Collection or delivery </div>:<div className="text-center text-black">Organise Collection or delivery</div>}


                </div>
                <div className="flex flex-col items-center z-10">
                {curtab===2?<div className="bg-black text-white border-2 h-12 w-12 flex justify-center items-center text-center font-barlow text-18 font-normal font-semibold leading-26 rounded-2xl">
                    3
                  </div>:<div className="bg-white border-2 h-12 w-12 flex justify-center items-center text-center font-barlow text-18 font-normal font-semibold leading-26 rounded-2xl">
                    3
                  </div>}
                  <div className="">Reserve Vehicle </div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-5 bg-white flex flex-col">
              <div className="w-full">
                {curtab === 0 ? (
                  <Buyfullnow />
                ) : curtab === 1 ? (
                  <Landrover />
                ) : (
                  <Paywithcard />
                )}
              </div>
              <div className="mt-8 w-full flex justify-between text-[10px] sm:text-[14px]">
                <div onClick={prev} className="rounded-full border-black border-2 px-8 py-2 md:px-4 text-center uppercase bg-white hover:bg-black text-black hover:text-white hover:cursor-pointer">
                  Cancel
                </div>
                {curtab!==2?<div
                  className="rounded-full border-black border-2 text-center px-8  py-2 md:px-4 uppercase bg-white hover:bg-black text-black hover:text-white hover:cursor-pointer"
                  onClick={next}
                >
                  continue
                </div>:
                <div
                  className="rounded-full border-black border-2 text-center px-6  flex flex-row items-center py-2 md:px-4 uppercase bg-black hover:bg-gray-800 text-white hover:cursor-pointer"
                  onClick={next}
                >
                  confirm payoment
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M4.00039 7.91006V6.31006C4.00039 4.10092 5.79125 2.31006 8.00039 2.31006C10.2095 2.31006 12.0004 4.10092 12.0004 6.31006V7.91006C12.884 7.91006 13.6004 8.6264 13.6004 9.51006V13.5101C13.6004 14.3937 12.884 15.1101 12.0004 15.1101H4.00039C3.11673 15.1101 2.40039 14.3937 2.40039 13.5101V9.51006C2.40039 8.6264 3.11673 7.91006 4.00039 7.91006ZM10.4004 6.31006V7.91006H5.60039V6.31006C5.60039 4.98458 6.67491 3.91006 8.00039 3.91006C9.32587 3.91006 10.4004 4.98458 10.4004 6.31006Z"
                      fill="white"
                    />
                    <path
                      d="M4.00039 7.91006V6.31006C4.00039 4.10092 5.79125 2.31006 8.00039 2.31006C10.2095 2.31006 12.0004 4.10092 12.0004 6.31006V7.91006C12.884 7.91006 13.6004 8.6264 13.6004 9.51006V13.5101C13.6004 14.3937 12.884 15.1101 12.0004 15.1101H4.00039C3.11673 15.1101 2.40039 14.3937 2.40039 13.5101V9.51006C2.40039 8.6264 3.11673 7.91006 4.00039 7.91006ZM10.4004 6.31006V7.91006H5.60039V6.31006C5.60039 4.98458 6.67491 3.91006 8.00039 3.91006C9.32587 3.91006 10.4004 4.98458 10.4004 6.31006Z"
                      stroke="white"
                    />
                  </svg>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
