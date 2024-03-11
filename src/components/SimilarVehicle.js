import { Link } from "react-router-dom";
// import { CustomCarousel1 } from "../components/gallery/CustomCarousel1";
import { WhiteBtn1 } from "../components/gallery/WhiteBtn1";
// import { VehicleCard1 } from "../components/gallery/VehicleCard1";
// import getData from "../data/shortlist";
import ResponsiveCarSlider from "./gallery/ResponsiveCarSlider";

export default function SimilarVehicle() {
  return (
    <>
      <div className="md:mt-[50px] mt-0 max-w-[1360px] bg-transparent w-full flex lg:flex-row flex-col  md:justify-between items-center md:mx-auto lg:pt-[50px] pt-[50px] md:pb-10">
        <div className=" lg:pb-0 flex flex-wrap justify-center items-center">
          <h1 className="subtitle  text-[48px] leading-[56px] md:text-[72px] md:leading-[80px] uppercase">
            similar
          </h1>
          <h1 className="magictitle text-[48px] leading-[56px] md:text-[72px] md:leading-[80px] uppercase">
            &nbsp;vehicle
          </h1>
        </div>
        <div className="hidden gap-3 lg:flex">
          <Link to="/motoring-hub/videos/">
            <WhiteBtn1 name="VIEW ALL VEHICLE" />
          </Link>
        </div>
      </div>

      <div className="px-5 w-full flex justify-center md:px-0 pb-3 lg:pb-10 ">
        <div className="max-w-[1360px] w-full">
          <ResponsiveCarSlider />
        </div>
      </div>
    </>
  );
}
