import MainLayout from "../layouts/MainLayout";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { RefineSearch } from "../components/gallery/RefineSearch";
import sellcars from "../assets/images/usedpickup.png";
import { ReactComponent as CloseSVG } from "../components/svg/close.svg";
import HeroSection from "../components/gallery/HeroSection";
import { VehicleCard1 } from "../components/gallery/VehicleCard1";
// import { VehicleContents } from "../components/gallery/VehicleContents";
// import getData from "../data/shortlist";
import Representative from "../components/Representative";
import getDatas from "../data/review";
import axios from "axios";
// const amount = 6;
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
  // const data = getData();
  const [active, setActive] = React.useState(1);
  const [data, setData] = useState([]);
  const [from, setFrom] = useState(0);
  // const [to, setTo] = useState(5);
  const [pgarr, setPgarr] = useState([1,2,3,4,5]);
  const [open, setOpen] = useState(false);
  const reviewData = getDatas();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 9;
  const [maxPageNum, setMaxPageNum] = useState(0);
  const next = () => {
    if (active < maxPageNum) {
      setActive(active + 1);
      setPage(active + 1);
      
      if(active === pgarr[4])
      {
        const newIndex = 5 * (from + 1) + 1;
        const newPageArr = [newIndex, newIndex + 1, newIndex + 2, newIndex + 3, newIndex + 4];
        setPgarr([...newPageArr]);
        setFrom(from + 1);
      }
    }
  };
  const prev = () => {
    if (active > 1) {
      setActive(active - 1);
      setPage(active - 1);

      if(active === pgarr[0])
      {
        const newIndex = 5 * (from - 1) + 1;
        const newPageArr = [newIndex, newIndex + 1, newIndex + 2, newIndex + 3, newIndex + 4];
        setPgarr([...newPageArr]);
        setFrom(from - 1);
      }
    }
  };

  const getStockData = async () => {
    setLoading(false);
    const url='https://place.pixserver.click/api/autotrader/stock?page=' + page + '&pageSize=' + pageSize;
    // const url="https://place.pixserver.click/api/autotrader/stock?page=1&pageSize=10";
    await axios.get(url,{mode:'no-cors'})
      .then((response) => {
        if (response.status === 200) {
          // console.log("reply:", response.data.data)
          setData(response.data.data)
          setLoading(true);          
          const totalResults = response.data.data.totalResults;
          const maxPageNum = Math.floor(totalResults / pageSize) + 1;

          setMaxPageNum(maxPageNum);
        }
      })
      .catch(err => {
        // console.log(err);//Toast;
      });
  }

  useEffect(() => {
    getStockData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page,pageSize,active,pgarr]);

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

            <div className="px-5 w-full ">
            {loading?
              (<div className="flex w-full flex-wrap items-center justify-between">
                {data.results.map((ele) => {
                  // console.log("=>",ele)
                  let price='None';
                  if(ele.adverts.forecourtPrice.amountGBP===undefined)price="Not set";
                  else price=ele.adverts.forecourtPrice.amountGBP.toLocaleString();
                  
                  let imgurl='';
                  if(ele.media.images.length===0)imgurl="https://m-qa.atcdn.co.uk/a/media/%7Bresize%7D/ad87652e6c094f80a194d9c8bd5e5134.jpg";
                  else imgurl=ele.media.images[0].href;
                    let item= {
                        name:ele.vehicle.make+" "+ele.vehicle.model,
                        price:price,
                        desc:ele.vehicle.derivative,
                        distance:ele.vehicle.odometerReadingMiles,
                        fuel:ele.vehicle.fuelType,
                        method:ele.vehicle.transmissionType,
                        location:ele.vehicle.derivative,
                        image:imgurl,
                        // urlDetail:"/viewdetail",
                        urlFinance:ele.vehicle.derivative,
                        from:ele.vehicle.fuel
                    } ;
                    return <VehicleCard1  item={item} ele={ele}/>;
                })} 
              </div>):(<div className="flex jusity-center items-center text-[90px]">Loading...</div>)}
              <div className="flex items-center gap-4 justify-center mt-[40px]">
                <div
                  className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
                  onClick={prev}
                >
                  <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2">
                  {pgarr.map((item)=>(
                     <div
                        className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white ${active === item
                          ? "bg-gray-900 text-white"
                          : "hover:text-white"
                          } ${item > maxPageNum ? "hidden" : ""}`}
                        onClick={() => {
                          setActive(item);
                          setPage(item)
                        }}
                      >
                        {item}
                      </div>
                  ))}                  
                </div>
                <div
                  className="flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
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
