import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className="bg-gray-200  flex justify-center items-center">
            <div className='relative px-6 lg:pb-6 lg:pt-3 w-full max-w-[1400px]'>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <h1
                            className="lg:mt-[5rem] xl:mt-[5rem] 2xl:mt-[5.5rem] hidden lg:block text-6xl font-bold">
                            Used Vans & Pickup Trucks For Sale
                        </h1>
                        <h3 className="mt-4 hidden lg:block text-[1.625rem] font-bold">
                            FREE Home delivery and 1 Year Warranty*
                        </h3>
                        <p className="  hidden my-4 lg:block text-[1.1rem] font-bold">
                            As an award winning dealer we specialise in supplying the entire UK<br />
                            with high quality, pre-owned pick-up trucks, commercial vehicles and<br />
                            used second hand cars
                        </p>
                        <div className="hidden lg:block bg-gray-200 ps-2 border-0">
                            <ul className="flex flex-wrap justify-start gap-2 my-0 pl-0 -mx-2">
                                {/* <li className="mx-1"> */}
                                <Link
                                    to="/vehicles-for-sale"
                                    className="bg-[#333] border-2 border-gray-700 rounded-md cursor-pointer inline-block text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:bg-gray-700 text-white">Search Vehicles</Link>
                                <Link
                                    to="/sell-your-vehicle/"
                                    className="bg-transparent border-2 border-gray-700 rounded-md text-gray-800 cursor-pointer inline-block text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:bg-[#333] hover:text-white">Get Valuation</Link>
                                <Link
                                    to="https://www.mycarcreditscore.co.uk/TMCMotors/95641"
                                    className="bg-transparent border-2 border-gray-700 rounded-md text-gray-800 cursor-pointer inline-block text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:bg-[#333] hover:text-white">Free Finance Check</Link>
                                {/* </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2 hidden lg:block">
                        <div className="flex flex-wrap h-[500px]">
                            <div className="w-full">
                                <img
                                    src="https://bluesky-cogcms.cdn.imgeng.in/media/pgkfwdwd/tmc-banner.png"
                                    alt='hero'
                                    className=' h-[500px] object-cover object-center rounded-md bg'
                                    loading="lazy" />
                            </div>
                        </div>
                        <div className="flex w-full justify-center items-center">

                            <div className="hidden lg:flex mt-0 mx-1 w-[175px] h-[44px] justify-center ">
                                <img
                                    alt="feefo logo"
                                    title=""
                                    src="https://api.feefo.com/api/logo?merchantidentifier=thatchers-motor-company&amp;template=Service-Stars-White-175x44.png&amp;since=all" />
                            </div>
                            <div className="hidden lg:flex mt-0 mx-1 w-[60px] justify-center ">
                                <img
                                    alt="feefo logo"
                                    title=""
                                    src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/logos/feefo-square-23.png" />
                            </div>
                            <div className="hidden lg:flex mt-0 mx-1 w-[80px]  justify-center">
                                <img
                                    alt="feefo logo"
                                    title=""
                                    src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/logos/CarGurus2022.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap lg:hidden bg-gray-200">
                    <div className="w-full md:w-1/2 p-2">
                        <input
                            type='submit'
                            className="w-full border-2 border-blue-700 rounded-md text-white cursor-pointer inline-block text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle bg-blue-700 hover:bg-blue-800 hover:text-white"
                            value='Refine' />
                    </div>
                    <div className="w-full md:w-1/2 p-2">

                        <Link
                            to="/sell-your-vehicle/"
                            className="w-full border-2 border-gray-700 rounded-md text-white cursor-pointer inline-block text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle bg-gray-700 hover:bg-gray-800 hover:text-white">Get Valuation</Link>
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                        <Link
                            to="https://www.mycarcreditscore.co.uk/TMCMotors/95641"
                            className="w-full border-2 border-gray-700 rounded-md text-white cursor-pointer inline-block text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle bg-gray-700 hover:bg-gray-800 hover:text-white">Free Finance Check</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}