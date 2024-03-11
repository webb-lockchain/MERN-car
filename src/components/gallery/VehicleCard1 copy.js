// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
// } from "@material-tailwind/react";

import { Link } from 'react-router-dom'

export function VehicleCard1({item}) {  
    return (
        <div className='  md:max-w-[320px] w-full flex flex-col mt-8 min-w-fit md:min-w-[280px] rounded-lg overflow-hidden'> 
            <div className="w-full">
                <img src={item.image} alt="as" className=""/>
            </div>
            <div className=' mt-4 flex justify-between'>
                <div className="text-gray-700 font-bold font-barlow-condensed text-xl leading-8">
                    {item.name}                   </div>
                <div className="font-family: 'Barlow Condensed'; text-xl font-semibold leading-8 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">£{item.price}</div>

            </div>
            <div className=" mt-2 text-neutral-700 text-base font-normal font-['Barlow'] leading-normal  ">
                {item.desc}
            </div>

            <div className=' my-4 flex flex-wrap justify-between'>
                <div className="mt-2 flex-row min-w-[50px] justify-between items-center bg-white rounded-full px-2 py-1">
                    <div className="flex flex-row justify-between items-center ">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66667 11.1667H8V8.5H7.33333M8 5.83333H8.00667M14 8.5C14 11.8137 11.3137 14.5 8 14.5C4.68629 14.5 2 11.8137 2 8.5C2 5.18629 4.68629 2.5 8 2.5C11.3137 2.5 14 5.18629 14 8.5Z" stroke="#0449C8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-neutral-700 text-xs font-medium font-['Barlow'] leading-[17px]">{item.distance} &nbsp;miles</div></div>
                </div>
                <div className="mt-2 text-gray-700 font-barlow text-12 font-medium leading-17 bg-white rounded-full px-2 py-1">
                    <div className="flex flex-row justify-between items-center ">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66699 7.16667V2.5L2.66699 9.83333H7.33366L7.33366 14.5L13.3337 7.16667L8.66699 7.16667Z" stroke="#0449C8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-neutral-700 text-xs font-medium font-['Barlow'] leading-[17px]">{item.fuel}</div>
                    </div>
                </div>

                <div className="mt-2 text-gray-700 font-barlow text-12 font-medium leading-17 bg-white rounded-full px-2 py-1 ">
                    <div className="flex flex-row justify-between items-center ">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 5.16667C10.7364 5.16667 11.3333 5.76362 11.3333 6.5M14 6.5C14 8.70914 12.2091 10.5 10 10.5C9.59589 10.5 9.20577 10.4401 8.83805 10.3286L7.33333 11.8333H6V13.1667H4.66667V14.5H2.66667C2.29848 14.5 2 14.2015 2 13.8333V12.1095C2 11.9327 2.07024 11.7631 2.19526 11.6381L6.17138 7.66195C6.05993 7.29423 6 6.90412 6 6.5C6 4.29086 7.79086 2.5 10 2.5C12.2091 2.5 14 4.29086 14 6.5Z" stroke="#0449C8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-neutral-700 text-xs font-medium font-['Barlow'] leading-[17px]">{item.type}</div></div>
                </div>
                <div className="mt-2 text-gray-700 font-barlow text-12 font-medium leading-17 bg-white rounded-full px-2 py-1 ">
                    <div className="flex flex-row justify-between items-center ">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 5.16667C10.7364 5.16667 11.3333 5.76362 11.3333 6.5M14 6.5C14 8.70914 12.2091 10.5 10 10.5C9.59589 10.5 9.20577 10.4401 8.83805 10.3286L7.33333 11.8333H6V13.1667H4.66667V14.5H2.66667C2.29848 14.5 2 14.2015 2 13.8333V12.1095C2 11.9327 2.07024 11.7631 2.19526 11.6381L6.17138 7.66195C6.05993 7.29423 6 6.90412 6 6.5C6 4.29086 7.79086 2.5 10 2.5C12.2091 2.5 14 4.29086 14 6.5Z" stroke="#0449C8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-neutral-700 text-xs font-medium font-['Barlow'] leading-[17px]">{item.location}</div></div>
                </div>
            </div>
            <div className=" pt-4 flex justify-between border-t-[1px] border-gray-500">
                <Link to={item.urlDetail} className="bg-gray-900   rounded-full cursor-pointer px-4 py-[10px] text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:bg-gray-700 hover:text-white text-white text-sm font-semibold font-['Barlow'] uppercase leading-tight tracking-tight">View Details</Link>
                <div className=" flex flex-col h-fit">
                    <div className=" flex flex-row justify-end">
                        <div className="self-end pb-[2px] pr-2 text-neutral-900 text-[10px] font-normal font-['Barlow'] leading-none tracking-tight">From</div>
                        <div className="text-black text-sm font-semibold font-['Barlow Condensed'] leading-tight">{item.from}</div>
                    </div>
                    <Link to={item.urlFinance} className=" text-blue-700 text-[10px] font-bold font-['Barlow'] underline uppercase leading-tight tracking-tight">View finance options</Link>
                </div>
            </div>
        </div>
    );
}