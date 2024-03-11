// import { useState } from "react";
import { Link } from "react-router-dom";
export default function SPSBtns() {
    // const [open, setOpen] = useState(false);
  return (
    <div className="px-5 flex flex-row">
      <Link
        to="/shortlist"
        className="flex   cursor-pointer justify-center items-center text-sm leading-5 tracking-wider font-semibold font-barlow border-2 border-bray-800 px-4 py-2 rounded-full hover:bg-gray-400  bg-black text-white"
      >
        <div className="mr-2 uppercase ">shortlist</div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-black hover:none"
        >
          <path
            d="M2.87868 4.21193C1.70711 5.3835 1.70711 7.283 2.87868 8.45457L8.00004 13.5759L13.1213 8.45457C14.2929 7.283 14.2929 5.3835 13.1213 4.21193C11.9497 3.04036 10.0503 3.04036 8.87868 4.21193L8.00004 5.09065L7.12132 4.21193C5.94975 3.04036 4.05025 3.04036 2.87868 4.21193Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className="flex  cursor-pointer ml-4 justify-center items-center  text-sm leading-5 tracking-wider font-semibold font-barlow border-2 border-black px-4 py-2 rounded-full hover:bg-gray-400  bg-white text-black">
        <div className="mr-2 uppercase md:block hidden">print pdf</div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3333 11.3333H12.6667C13.403 11.3333 14 10.7364 14 10V7.33333C14 6.59695 13.403 6 12.6667 6H3.33333C2.59695 6 2 6.59695 2 7.33333V10C2 10.7364 2.59695 11.3333 3.33333 11.3333H4.66667M6 14H10C10.7364 14 11.3333 13.403 11.3333 12.6667V10C11.3333 9.26362 10.7364 8.66667 10 8.66667H6C5.26362 8.66667 4.66667 9.26362 4.66667 10V12.6667C4.66667 13.403 5.26362 14 6 14ZM11.3333 6V3.33333C11.3333 2.59695 10.7364 2 10 2H6C5.26362 2 4.66667 2.59695 4.66667 3.33333V6H11.3333Z"
            stroke="#272727"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        // onClick={() => setOpen(true)}
        className=" cursor-pointer flex ml-4 justify-center items-center text-sm leading-5 tracking-wider font-semibold font-barlow border-2 border-black px-4 py-2 rounded-full hover:bg-gray-400  bg-white text-black"
      >
        <div className="mr-2 uppercase md:block hidden">share</div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.78925 8.89462C5.9241 8.62543 6 8.32158 6 8C6 7.67842 5.9241 7.37457 5.78925 7.10538M5.78925 8.89462C5.46089 9.55006 4.78299 10 4 10C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6C4.78299 6 5.46089 6.44994 5.78925 7.10538M5.78925 8.89462L10.2108 11.1054M5.78925 7.10538L10.2108 4.89462M10.2108 4.89462C10.5391 5.55006 11.217 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 4.32158 10.0759 4.62543 10.2108 4.89462ZM10.2108 11.1054C10.0759 11.3746 10 11.6784 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C11.217 10 10.5391 10.4499 10.2108 11.1054Z"
            stroke="#272727"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
