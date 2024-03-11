// import { Typography } from "@material-tailwind/react"
import  {FeaturedVehiclesTab2}  from "./gallery/FeaturedVehiclesTab2"
import { Link } from 'react-router-dom'
export default function FeaturedVehicles() {
    return (
        <div className="py-12 lg:py-[7rem] w-full bg-gray-200">
            <div className="max-w-[1280px] w-full mx-auto">
                <div className="flex flex-col justify-center items-center  px-0 sm:px-3 landing-carousel">
                    <FeaturedVehiclesTab2 title1="featured" title2="vehicles" />
                    <Link
                        to="/vehicles-for-sale/"
                        className="mt-12 hover:cursor-pointer text-center text-black bg-white rounded-full px-4 py-2 border-2 border-black hover:text-white hover:bg-black">View All Vehicles</Link>
                </div>
            </div>

        </div>
    )
}