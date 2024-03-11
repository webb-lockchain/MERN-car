import MainLayout from "../layouts/MainLayout";
import VadX from "../components/VadX";
import {useState } from "react";
import { ShareModal } from "../components/ShareModal";
import HirePuchase from "../components/HirePuchase";
import SPSBtns from "../components/SPSBtns";
import ExchangeVehicle from "../components/ExchangeVehicle";
import SimiarVehicle from "../components/SimilarVehicle";
import NeedAssistance from "../components/NeedAssistance";
import Carslider from "../components/Carslider";
import VanInsurance from "../components/VanInsurance";
import Representative1 from "../components/Representative1";
import Asksell from "../components/Asksell";
import Carlock from "../components/Carlock";
import Perks from "../components/Perks";
import Needanother from "../components/Needanother";
import OFSE from "../components/OFSE";
import LandroverOrigin from "../components/LandroverOrigin";
import { useLocation } from "react-router-dom";

export default function Viewdetail() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const item = location.state;
  let imglist=[];
  if(item.media.images.length===0)imglist=["https://m-qa.atcdn.co.uk/a/media/%7Bresize%7D/ad87652e6c094f80a194d9c8bd5e5134.jpg"];
  else{
    for(let i=0;i<item.media.images.length;i++)      
      imglist.push(item.media.images[i].href);
  }
  
  return (
    <MainLayout>
      <div className="flex py-10 flex-col md:flex-row justify-center w-full  bg-[#f6f6f6]">
        <div className="flex flex-col md:flex-row md:justify-between max-w-[1280px] ">
          <ShareModal open={open} setOpen={setOpen} />
          <div className="flex flex-col">
            <div className="w-full flex justify-end">
              <SPSBtns />
            </div>
            <div className="mt-8 w-full flex flex-col md:flex-row md:justify-between bg-[#f6f6f6]">
              <div className=" w-full md:w-[47%]">
                <div className="">
                  <div className="mx-5 ">
                    <Carslider images={imglist}/>
                  </div>
                  <div className="md:hidden block mx-5">
                    <LandroverOrigin  ele={item}/>
                    <HirePuchase />
                  </div>
                  <div className="mt-6 mx-5">
                    <VadX ele={item}/>
                  </div>
                  <div className="md:hidden block bg-white">
                    <OFSE ele={item}/>
                  </div>
                  <div className="mx-5 hidden md:block">
                    <VanInsurance />
                    <NeedAssistance />
                  </div>
                </div>
              </div>
              <div className="md:px-0 mt-8 md:mt-0 w-full md:w-1/2 flex flex-col mb-8 pb-4">
                <div className="md:block hidden">
                  <LandroverOrigin   ele={item}/>
                  <HirePuchase />
                  <OFSE ele={item}/>
                </div>
                <div className="mx-5 md:mx-0">
                  <Needanother />
                </div>
                <Perks />
                <div className="mx-5 md:mx-0">
                  <Carlock />
                  <Asksell />
                </div>

                <div className="mt-6 md:mt-0 block md:hidden bg-white">
                  <VanInsurance />
                </div>
                <div className="block mx-5 md:hidden">
                  <NeedAssistance/>
                </div>
                 <div className="mx-5 md:mx-0">                  
                  <Representative1 />
                </div>
              </div>
            </div>
            <ExchangeVehicle />
            <SimiarVehicle />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
