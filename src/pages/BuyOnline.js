import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/gallery/HeroSection";
// import getData from "../data/shortlist";
import buyonline from '../assets/images/buyonline.png'
import { FeaturedVehiclesTab2 } from "../components/gallery/FeaturedVehiclesTab2"
// import { FeaturedVehiclesTab } from "./gallery/FeaturedVehiclesTab"
import roads from '../assets/images/roads.png'
import { Link } from 'react-router-dom'
export default function BuyOnline() {
    // const [empty, setEmpty] = useState(true)
    // const data = getData();
    // const tabs = [
    //     {
    //         label: "All",
    //         value: "all"
    //     },
    //     {
    //         label: "Car",
    //         value: "car"
    //     },
    //     {
    //         label: "Truck",
    //         value: "truck"
    //     },
    //     {
    //         label: "vans",
    //         value: "van"
    //     },
    // ];
    
    return (
        <MainLayout>
            <HeroSection img={buyonline} mt={"mt-4 lg:mt-20"} words={["Buy", "online"]} />
            <div className="w-full h-fit px-5 md:px-12 lg:px-24 flex justify-center items-center pb-12 md:pb-0">
                <div className="flex md:flex-row md:justify-between w-full max-w-[1360px] py-[100px] flex-col">
                    <div className='w-full md:mx-0 mx-auto md:self-start md:w-[43%]'>
                        <div className="text-gray-800 uppercase    py-2 font-barlow-condensed text-[39px] md:text-6xl font-bold leading-none tracking-tighter">
                            Buy online Safely and easily with TMC.
                        </div>
                        
                        <div className="  mt-12 text-black font-barlow text-base font-normal leading-8">
                            Discover a seamless online buying experience where quality meets convenience. At TMC, not only do we offer an unmatched collection of pre-owned vehicles, but we also provide an umbrella of services designed for your utmost satisfaction and peace of mind.
                        </div>
                        <div className="text-center flex justify-start md:justify-center rounded-full px-8 w-fit py-3 mt-10 text-white bg-black hover:bg-gray-800 border-2 border-black hover:cursor-pointer uppercase text-[10px] md:text-[15px]">search available in buy online</div>
                    </div>
                    <div className="w-full flex justify-center items-center lg:mt-0 mt-5 md:w-[53%]">
                        <div className='relative w-fit'>
                            <img src={roads} alt="road" className="w-full object-fit  rounded-[20px]" />
                            <div className='absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2'>
                                <svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.222656" width="55" height="55" rx="27.5" fill="#E91E24" />
                                    <path d="M39.5138 24.0449C42.1598 25.5884 42.1598 29.4116 39.5138 30.9551L24.0238 39.991C21.3572 41.5465 18.0083 39.623 18.0083 36.5359L18.0083 18.4641C18.0083 15.377 21.3572 13.4535 24.0238 15.009L39.5138 24.0449Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 lg:py-[7rem] w-full bg-gray-200">
                <div className="max-w-[1360px] w-full mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <FeaturedVehiclesTab2 title1="new on" title2="buy online" />
                        <Link
                            to="/vehicles-for-sale/"
                            className="mt-12 hover:cursor-pointer text-center text-white bg-[#272727] rounded-full px-4 py-2 border-2 border-black hover:text-white hover:bg-black">View All Vehicles</Link>
                    </div>
                </div>

            </div>
        </MainLayout>
    )
}