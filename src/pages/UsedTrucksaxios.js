import MainLayout from "../layouts/MainLayout";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import downarrow from '../assets/icon/down-arrow.png'
import { RefineSearch } from "../components/gallery/RefineSearch";
import sellcars from "../assets/images/usedpickup.png";
import { ReactComponent as CloseSVG } from "../components/svg/close.svg";
import HeroSection from "../components/gallery/HeroSection";
import { VehicleCard1 } from "../components/gallery/VehicleCard1";
import Representative from "../components/Representative";
import getDatas from "../data/review";
import axios from "axios";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    height: "100%",
    width: "100%",
    ariaHideApp:false,
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
};
export default function UsedTrucks() {
  // const [active, setActive] = React.useState(1);
  // const [ setData] = useState([]);
  // const [fr, setFr] = useState([]);
  // const [ff, setFf] = useState([]);
  // const [ft, setFt] = useState([]);
  // const [th, setTh] = useState([]);
  // const [se, setSe] = useState([]);
  const [page, setPage] = useState(1);
  // const page=1
  const [visible,setVisible]=useState(true);
  const pageSize =9;
  const [maxPageNum, setMaxPageNum] = useState(0);
  const [open, setOpen] = useState(false);
  const reviewData = getDatas();
  const [loading, setLoading] = useState(false);
  const [total,setTotal]=useState(0);
  const [showlist,setShowlist]=useState([])
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
  //     setPage(active + 1);
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
  //     setPage(active - 1);
  //   }
  // };

  const getStockData = async () => {
    setLoading(false);
    const url = 'https://place.pixserver.click/api/autotrader/stock?page=' + page + '&pageSize=' + pageSize;
    // const url="https://place.pixserver.click/api/autotrader/stock?page=1&pageSize=10";
    await axios.get(url, { mode: 'no-cors' })
      .then((response) => {
        if (response.status === 200) {
          // setData(response.data.data)
          // console.log("aaa",response.data.data.results)
          setShowlist([...showlist,...response.data.data.results]);
          setLoading(true);
          const totalResults = response.data.data.totalResults;
          console.log("totalResults",total)
          setTotal(totalResults);
          if (maxPageNum === 0) {
            const maxPageNums = Math.floor(totalResults / pageSize) + 1;
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
            setMaxPageNum(maxPageNums);
          }else console.log("aaaaaaa");

        }
      })
      .catch(err => {
        // console.log(err);//Toast;
      });
  }
const more=()=>{
  console.log(maxPageNum,page)
  if(maxPageNum>=page+1)
    setPage(page+1);
  else {setPage(page+1);setVisible(false);}
}
  useEffect(() => {
    getStockData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize]);
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
  //   setPage(item);
  // }

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
                onClick={() => {
                  
                  document.body.style.overflow = "hidden";
                  setOpen(true)
                }}
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
              {((showlist.length!==0)) &&
                (<div className="flex w-full flex-wrap items-center justify-between">
                  {showlist.map((ele) => {
                    let price = 'None';
                    if (ele.adverts.forecourtPrice.amountGBP === undefined) price = "Not set";
                    else price = ele.adverts.forecourtPrice.amountGBP.toLocaleString();
                    let imgurl = '';
                    if (ele.media.images.length === 0) imgurl = "https://m-qa.atcdn.co.uk/a/media/%7Bresize%7D/ad87652e6c094f80a194d9c8bd5e5134.jpg";
                    else imgurl = ele.media.images[0].href;
                    let item = {
                      name: ele.vehicle.make + " " + ele.vehicle.model,
                      price: price,
                      desc: ele.vehicle.derivative,
                      distance: ele.vehicle.odometerReadingMiles,
                      fuel: ele.vehicle.fuelType,
                      method: ele.vehicle.transmissionType,
                      location: ele.vehicle.derivative,
                      image: imgurl,
                      urlFinance: ele.vehicle.derivative,
                      from: ele.vehicle.fuel
                    };
                    return <VehicleCard1 item={item} ele={ele} />;
                  })}
                </div>) }{console.log(visible)}
              {(
                loading?
              visible&&(
                <div className="mt-24 w-full flex flex-row justify-between items-center">
                  <div className="hidden md:block w-fit border-b-2 border-gray-700 md:w-3/12  lg:w-4/12 xl:w-2/5"></div>
                  <div onClick={more} className=" w-full hover:cursor-pointer flex justify-center flex-row gap-2 items-center md:w-fit bg-black text-white text=[14px] hover:bg-gray-800 py-2  px-6 rounded-full mx-auto">
                    <div >View more</div>
                    <img src={downarrow} alt="downarrow" className="w-3 h-3"/>
                  </div>
                  <div className="hidden md:block w-fit border-b-2 border-gray-700 md:w-3/12 lg:w-4/12 xl:w-2/5"></div>
                </div>
              
              ):<div className="mt-10 flex w-full h-full text-center subtitle text-[60px]">Loading...</div>
              )}
            </div>
            <Representative />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
const FilterModal = ({ open, setOpen, data }) => {
  Modal.setAppElement(document.getElementById('root'));

  return (
    <Modal
      isOpen={open}
      onRequestClose={() =>{        
        setOpen(false)}}
      style={customStyles}
      aria={{
        labelledby:"heading",
        describedby:"full_description"
      }}
      // ariaHideApp={false}
      // returnFocusTo={document.activeElement}
      // shouldFocusAfterRender={false}
      //  backdrop={false}
      //  disableBackdrop={true} 
      // backdrop={false}
      contentLabel="all reviews"
    >
      <div
        onClick={() => {
          document.body.style.overflow="";
          setOpen(false)}}
        className="absolute w-8 h-8 p-2 rounded-full border border-black justify-center items-center gap-2 inline-flex  top-5 right-5"
      >
        <div className="w-4 h-4">
          <CloseSVG />
        </div>
      </div>
      <div className="flex items-center h-full w-full">
        <div className="mt-4 w-full">
          <RefineSearch />
        </div>
      </div>

    </Modal>
  );
};
