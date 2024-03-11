import { useState } from "react";

export default function EmpCard(props) {
  const { name, role, about, image } = props.data;
  const [more,setMore]=useState(false);
  return (
    <div className="m-2 flex flex-col max-w-[300px] border-2 rounded-md hover:cursor-pointer hover:border-gray-400 hover:shadow-lg">
      <img src={image} alt={name} />
      <div className="px-4 pb-4">
        <div className="mt-6 text-gray-700 font-barlow-condensed text-2xl font-bold leading-8  ">
          {name}
        </div>
        <div className="mt-3 text-black font-inter text-base font-normal  ">
          {role}
        </div>
        <div className={`mt-3 w-full h-[50px]  ${more?'overflow-y-scroll':'overflow-hidden'} text-blue-gray-600  font-inter text-base font-normal  `}>
          {about}
        </div>

        <div className="mt-2 hover:text-[#0449c8] text-blue-600   " onClick={()=>setMore(!more)}>{!more?"Know more":"Know less"}</div>
      </div>
    </div>
  );
}
