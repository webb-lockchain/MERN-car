
import { Link } from 'react-router-dom'

export function VehicleCard(props) {
    const {
        name,
        price,
        desc,
        distance,
        fuel,
        method,
        image,
        url,
        url1,
    } = props;
    
    return (
        <div className='px-2 flex flex-col m-8 min-w-[286px]'>
            <img src={image} alt={name} />
            <div className='mt-4 flex justify-between'>
                <div className="text-gray-700 font-bold font-barlow-condensed text-xl leading-8">
                    {name}                        </div>

                <div className="font-family: 'Barlow Condensed'; text-xl font-semibold leading-8 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">£{price}</div>

            </div>
            <div className="mt-2 text-gray-700 font-barlow text-16 font-normal leading-24">
                {desc}
            </div>

            <div className='mt-4 flex justify-between'>
                <div className="m-2 flex-row justify-between items-center bg-white rounded-full px-2 py-1 text-sm">
                    <div className="flex flex-row justify-between items-center ">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66667 11.1667H8V8.5H7.33333M8 5.83333H8.00667M14 8.5C14 11.8137 11.3137 14.5 8 14.5C4.68629 14.5 2 11.8137 2 8.5C2 5.18629 4.68629 2.5 8 2.5C11.3137 2.5 14 5.18629 14 8.5Z" stroke="#0449C8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="ml-1">{distance}</div></div>
                </div>
                <div className="m-2 text-gray-700 font-barlow text-sm font-medium leading-17 bg-white rounded-full px-2 py-1">
                    <div className="flex flex-row justify-between items-center ">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66699 7.16667V2.5L2.66699 9.83333H7.33366L7.33366 14.5L13.3337 7.16667L8.66699 7.16667Z" stroke="#0449C8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="ml-1">{fuel}</div>
                    </div>
                </div>

                <div className="m-2 text-gray-700 font-barlow text-sm font-medium leading-17 bg-white rounded-full px-2 py-1 ">
                    <div className="flex flex-row justify-between items-center ">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 5.16667C10.7364 5.16667 11.3333 5.76362 11.3333 6.5M14 6.5C14 8.70914 12.2091 10.5 10 10.5C9.59589 10.5 9.20577 10.4401 8.83805 10.3286L7.33333 11.8333H6V13.1667H4.66667V14.5H2.66667C2.29848 14.5 2 14.2015 2 13.8333V12.1095C2 11.9327 2.07024 11.7631 2.19526 11.6381L6.17138 7.66195C6.05993 7.29423 6 6.90412 6 6.5C6 4.29086 7.79086 2.5 10 2.5C12.2091 2.5 14 4.29086 14 6.5Z" stroke="#0449C8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="ml-1">{method}</div></div>
                </div>
            </div>
            <div className="mt-4 w-full border-t-2 "></div>
            <div className="mt-4 flex flex-wrap flex-row justify-between">
                <Link to={url} className="bg-black rounded-full text-white cursor-pointer  text-sm font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:bg-gray-700 hover:text-white my-auto">View Details</Link>
                <div className="">
                    <div className="flex flex-row justify-end">
                        <div className="text-gray-900 font-barlow text-10 font-normal leading-16 tracking-tighter text-right">
                            From
                        </div>
                        <div className="ml-1 text-black font-barlow-condensed text-14 font-semibold leading-20">
                            {method}
                        </div>
                    </div>
                    <Link to={url1} className="text-blue-500 font-barlow text-xs font-bold leading-20 tracking-wider underline uppercase">View finance options</Link>
                </div>
            </div>
        </div>
    );
}