// import icons from '../assets/icon/car-crash.svg'
import { Link } from "react-router-dom"
export default function ValueCard({ data }) {
    return (
        <div className="mt-6 md:mt-0 flex flex-row text-white gap-6 md:gap-8">
            <div className="p-3 md:p-4 h-max flex justify-center items-center rounded-[16px] bg-opacity-25 bg-white">
                <img src={data.icon} alt="my" className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col">
                    <div className="text-white font-barlow-condensed text-2xl font-bold leading-10 uppercase  ">
                        {data.title}
                    </div>
                    <div className="mt-2 text-white font-barlow text-base font-normal leading-7  ">
                        {data.description}
                    </div>
                </div>
                <div className="mt-8 w-36 h-10 flex justify-center items-center border-2 border-white rounded-full font-barlow  text-sm hover:cursor-pointer hover:text-black hover:bg-white font-semibold leading-5 tracking-tighter uppercase">
                    <Link to={data.link}><div className="  ">FIND OUT MORE</div></Link>
                </div>
            </div>
        </div>

    )
}