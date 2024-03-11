import {Typography} from "@material-tailwind/react"
import {MotoringHubTab} from "./gallery/MotoringHubTab"

export default function MotoringHubSummary() {
    return (
        <div className="py-12 lg:py-[7rem] block bg-white">
            <div className="flex flex-col justify-center items-center mx-[29.5px] px-3">
                <Typography variant="h1" className='pb-6'>
                    Mortoring Hub
                </Typography>
                <MotoringHubTab/>
            </div>

        </div>
    )
}