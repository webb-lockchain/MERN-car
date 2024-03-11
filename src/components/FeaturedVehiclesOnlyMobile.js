import {Typography} from "@material-tailwind/react"
import {FeaturedVehiclesTab1} from "./gallery/FeaturedVehiclesTab1"
import {Link} from 'react-router-dom'

export default function FeaturedVehiclesOnlyMobile() {
    return (
        <div className="py-12 lg:py-[7rem] block lg:hidden bg-gray-200">
            <div className="flex flex-col justify-center items-center mx-[29.5px] px-3">
                <Typography variant="h1" className='pb-6'>
                    Featured Vehicles
                </Typography>
                <FeaturedVehiclesTab1/>
                <Link
                    to="/vehicles-for-sale/"
                    className="mt-12 bg-[#333] border-2 border-gray-700 rounded-md  cursor-pointer inline-block text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle text-white">View All Vehicles</Link>
            </div>

        </div>
    )
}