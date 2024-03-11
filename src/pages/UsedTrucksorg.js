import MainLayout from "../layouts/MainLayout";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { RefineSearch } from "../components/gallery/RefineSearch";
import sellcars from "../assets/images/usedpickup.png";
import { ReactComponent as CloseSVG } from "../components/svg/close.svg";
import HeroSection from "../components/gallery/HeroSection";
import { VehicleCard1 } from "../components/gallery/VehicleCard1";
import getData from "../data/shortlist";
import Representative from "../components/Representative";
import getDatas from "../data/review";
import axios from "axios";
const amount = 6;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
};
export default function UsedTrucks() {
  const data = getData();
  const [active, setActive] = React.useState(1);
  // const [data,setData]=useState([])

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };
  const [open, setOpen] = useState(false);
  const reviewData = getDatas();
  // const [loading, setLoading] = useState(false);
  // const [page, setPage]=useState(1);
  // const [pageSize,setPageSize]=useState(10)
  // const getStockData = async () => {
  //   setLoading(false);
  //   const url='http://172.252.77.140:8000/api/autotrader/stock?page='+page+'&pageSize='+pageSize;
  //   await axios.get(url)
  //   .then((response) => {
  //     console.log("response=>",response);
  //     if(response.status===200){
  //       setData([...response.data.data])
  //       setLoading(true);
  //     }
  //   })
  //   .catch(err=>{
  //     console.log(err);//Toast;
  //   })
  // }
  // useEffect(() => {
  //   getStockData();
  // }, [page,pageSize])
  return (
    <MainLayout>
      <HeroSection
        img={sellcars}
        mt={"mt-4 lg:mt-20"}
        words={["used", "pick-up truck"]}
      />
      <FilterModal open={open} setOpen={setOpen} data={reviewData} />
      <div className="flex pt-10 flex-col md:flex-row justify-center w-full bg-[#f6f6f6]">
        <div className="flex flex-col md:flex-row md:justify-between max-w-[1440px] ">
          <div className="px-5 md:block hidden min-w-[380px]  md:w-1/4">
            <RefineSearch />
          </div>
          <div className="w-full md:w-[72%]  flex-col">
            <div className="px-5 w-full flex flex-row md:justify-end justify-between">
              <div className="mb-6 w-[60%] md:w-1/2 lg:w-1/3 float-right border-0">
                <select className="w-full rounded-full border-2 border-gray-900 p-2 uppercase">
                  <option value="option1">Price - Low to High</option>
                  <option value="option2">Price - High to Low</option>
                  <option value="option3">Age - Newest First</option>
                  <option value="option1">MPG - Highest First</option>
                  <option value="option3">CO2 - Lowest First</option>
                  <option value="option1">Tax Cost/VED - Lowest First</option>
                </select>
              </div>
              <div
                onClick={() => setOpen(true)}
                className="mb-6 md:hidden rounded-full w-[37%] uppercase border-2 border-gray-900 flex flex-row items-center justify-between px-4 "
              >
                <div>filter</div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V4.25245C14 4.51767 13.8946 4.77202 13.7071 4.95956L9.62623 9.04044C9.43869 9.22798 9.33333 9.48233 9.33333 9.74755V11.3333L6.66667 14V9.74755C6.66667 9.48233 6.56131 9.22798 6.37377 9.04044L2.29289 4.95956C2.10536 4.77202 2 4.51767 2 4.25245V3Z"
                    stroke="#272727"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="test px-5 w-full ">
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
              <div className="flex items-center gap-4 justify-center mt-[40px]">
                <div
                  className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
                  onClick={prev}
                >
                  <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
                      active === 1
                        ? "bg-gray-900 text-white"
                        : "hover:text-white"
                    }`}
                    onClick={() => setActive(1)}
                  >
                    1
                  </div>
                  <div
                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
                      active === 2
                        ? "bg-gray-900 text-white"
                        : "hover:text-white"
                    }`}
                    onClick={() => setActive(2)}
                  >
                    2
                  </div>
                  <div
                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
                      active === 3
                        ? "bg-gray-900 text-white"
                        : "hover:text-white"
                    }`}
                    onClick={() => setActive(3)}
                  >
                    3
                  </div>
                  <div
                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
                      active === 4
                        ? "bg-gray-900 text-white"
                        : "hover:text-white"
                    }`}
                    onClick={() => setActive(4)}
                  >
                    4
                  </div>
                  <div
                    className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
                      active === 5
                        ? "bg-gray-900 text-white"
                        : "hover:text-white"
                    }`}
                    onClick={() => setActive(5)}
                  >
                    5
                  </div>
                </div>
                <div
                  className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
                  onClick={next}
                >
                  <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </div>
              </div>
            </div>
            <Representative />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
const FilterModal = ({ open, setOpen, data }) => { 
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
      contentLabel="all reviews"
    >
      <div
        onClick={() => setOpen(false)}
        className="absolute w-8 h-8 p-2 rounded-full border border-black justify-center items-center gap-2 inline-flex  top-5 right-5"
      >
        <div className="w-4 h-4">
          <CloseSVG />
        </div>
      </div>
      <div className="mt-4 w-full">
        <RefineSearch />
      </div>
    </Modal>
  );
};
