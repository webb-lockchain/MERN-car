

import { Link } from 'react-router-dom'

export function VehicleArticle({ item, ele }) {
    const {
        title,
        image,
        detail
    } = item;
    return (
        <div className='  md:max-w-[320px] w-full flex flex-col mt-8 min-w-fit md:min-w-[280px] rounded-lg overflow-hidden'>
            <div className="w-full rounded-lg">
                <img src={image} alt={title} className='h-[240px]' />
            </div>
            <div className=' mt-4 flex justify-start'>
                <div className="text-gray-800 font-bold font-barlow-condensed text-2xl leading-8">
                    {title}  
                </div>
            </div>
            

            <div className=' my-4 flex flex-wrap gap-2 text-left'>
                {detail}
            </div>
            <div className=" pt-4 flex justify-start border-t-[1px] border-gray-500">
                <Link to="/vehicles-for-sale/viewdetail" state={ele} className="bg-gray-900   rounded-full cursor-pointer px-4 py-[10px] text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:bg-gray-700 hover:text-white text-white text-sm font-semibold font-['Barlow'] uppercase leading-tight tracking-tight">View Videos</Link>
                
            </div>
        </div>
    );
}