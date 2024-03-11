import {Typography} from "@material-tailwind/react"
import {CustomCarousel} from "./gallery/CustomCarousel"
import aboutUsImg1 from '../assets/images/aboutus1.png'
import { Link } from "react-router-dom"

export default function AboutUsSummary() {
    return (
        <div className="flex justify-center align-center lg:py-[7rem] max-w-[1140px] mx-auto lg:mb-36 mb-5 py-[50px]">
            <div className='flex  lg:flex-row flex-col justify-center items-center lg:items-start p-5'>
                <div className=" px-3 max-w-[600px] relative">
                    <Typography
                        variant="h3"
                        color="black"
                        className="absolute top-0 z-10 bg-white p-2 scale-y-110 italic rounded-2xl">
                        About Us
                    </Typography>
                    <CustomCarousel>
                        <img
                            src={aboutUsImg1}
                            alt="first"
                            className="h-full w-full object-cover"/>
                        <img
                            src="https://bluesky-cogcms.cdn.imgeng.in/media/oazflmkq/med-square-29.jpg"
                            alt="second"
                            className="h-full w-full object-cover"/>
                        <img
                            src="https://bluesky-cogcms.cdn.imgeng.in/media/e0njx4ec/med-square-64.jpg"
                            alt="third"
                            className="h-full w-full object-cover"/>
                    </CustomCarousel>

                </div>
                <div className="px-3  max-w-[600px] -mt-6 ">
                    <p className="mt-16 lg:mt-0 py-4 text-gray-800 font-barlow text-xl md:text-2xl font-semibold ">
                        TMC is your local specialist when it comes to buying a new pick-up truck, van or
                        car. With the largest selection of high-quality used pick-up trucks for sale in
                        the south, every used vehicle at TMC has been hand-picked by our specialists -
                        and undergoes a rigorous multi-point inspection, full valet and test prior to
                        sale.
                    </p>

                    <p className="py-4 text-gray-800 font-barlow text-base font-medium leading-6">
                        We are TMC - The Motor Company. We are a family run business based in Oakhanger,
                        near Bordon in Hampshire. We provide high-quality used cars for sale locally for
                        Farnham, Surrey, London and the South East - but our customers come from all
                        across the UK to visit our countryside showroom. So why is this? Put simply,
                        quality and service. We’re proud to be a multi award-winning dealership,
                        recognised for our outstanding levels of customer service. Established since
                        2016 in the local Farnham area, and with over 25 years of experience in the
                        Motor Trade - we hope you’d expect nothing less.​​
                    </p>
                    <p className="py-4 pb-11 text-gray-800 font-barlow text-base font-medium leading-6">
                        We operate a strictly no-pressure approach, allowing you to take your own time
                        to browse and inspect our vehicles. Meanwhile, our trained specialists will
                        always be on hand for expert help and advice as and when you need it.
                    </p>
                    <div className='flex flex-col w-full md:w-fit md:flex-row justify-center items-center mt-6 gap-4'>
                        <a href="tel:01252943974"
                            className="w-full md:w-fit bg-gray-900 uppercase font-semibold text-base rounded-full text-white border-2 border-gray-900 hover:bg-black hover:text-white py-2 px-3 text-center"
                            formNoValidate="formnoValidate">
                            Speak To An Advisor
                        </a>
                        <Link to="/contact-us"
                            className="w-full md:w-fit bg-white uppercase font-semibold text-base rounded-full text-black border-2 border-black hover:bg-black hover:text-white py-2 px-3 text-center"
                            formNoValidate="formnoValidate">
                            Visit Us
                        </Link>
                        <Link to="/meet-the-team"
                            className="w-full md:w-fit uppercase bg-white font-semibold text-base rounded-full text-black border-2 border-black hover:bg-black hover:text-white py-2 px-3 text-center"
                            formNoValidate="formnoValidate">
                            Meet The Team
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}