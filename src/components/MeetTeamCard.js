import { Link } from "react-router-dom";

export default function MeetTeamCard(props) {
  const { title } = props;
  return (
    <div className="flex flex-col items-left gap-[32px]">
      <div className="w-[74%] text-[11px] md:text-[18px] text-gray-800  ">{title}</div>
      <div className="flex flex-row justify-between md:justify-start">
        <button className="hover:text-gray-800 py-[12px] px-[24px] hover:bg-white rounded-full  text-white relative bg-gray-800">
          <span className="absolute inset-0 border-2 border-gray-800 rounded-full "></span>
          <span className="relative z-10 uppercase text-[12px] md:text-[14px]"><Link to="/vehicles-for-sale">View All Stock</Link></span>
        </button>
        <button className="text-gray-800 bg-white py-[12px] px-[24px] rounded-full  md:ml-4 hover:text-white relative hover:bg-gray-800">
          <span className="absolute inset-0 border-2 border-gray-800 rounded-full "></span>
          <span className="relative z-10   uppercase text-[12px] md:text-[14px]"> <Link  to="/contact-us">Contact us</Link></span>
        </button>
      </div>
    </div>
  )
}