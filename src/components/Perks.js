
import roads from "../assets/images/roads.png";
export default function Perks(){
    return(
        <div className="px-5 mt-6 rounded-none md:rounded-2xl bg-white py-[24px] flex flex-col justify-center items-center">
                  <div className="w-full   font-barlow text-xl font-bold text-gray-900  leading-6 ">
                    Perks of Buying Online with TMC...
                  </div>
                  <div className="mt-6 relative w-fit">
                    <img
                      src={roads}
                      alt="road"
                      className="w-full object-fit  rounded-[20px]"
                    />
                    <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                      <svg
                        width="56"
                        height="55"
                        viewBox="0 0 56 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.222656"
                          width="55"
                          height="55"
                          rx="27.5"
                          fill="#E91E24"
                        />
                        <path
                          d="M39.5138 24.0449C42.1598 25.5884 42.1598 29.4116 39.5138 30.9551L24.0238 39.991C21.3572 41.5465 18.0083 39.623 18.0083 36.5359L18.0083 18.4641C18.0083 15.377 21.3572 13.4535 24.0238 15.009L39.5138 24.0449Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
    )
}