import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function HowToBuyAndSell() {
    const [activeTab,
        setActiveTab] = useState(1);
    return (
        <div className="pt-12 pb-[80px] px-3">
            <div className='flex justify-center items-center flex-col'>
                <div className="flex border-b">
                    <button
                        onClick={() => setActiveTab(1)}
                        className={`border-[2px] py-2 px-7 ${activeTab === 1
                        ? 'font-bold bg-gray-50  '
                        : 'text-gray-500   border-b-2 border-transparent hover:text-blue-500 hover:border-blu' +
                            'e-500'}`}>How to Buy</button>
                    <button
                        onClick={() => setActiveTab(2)}
                        className={`border-[2px] py-2 px-7 ${activeTab === 2
                        ? 'font-bold bg-gray-50'
                        : 'text-gray-500 border-b-2 border-transparent hover:text-blue-500 hover:border-blu' +
                            'e-500'}`}>How to Sell</button>
                </div>

                {activeTab === 1 && <div className="pt-[112px] pb-[48px] bg-gray-200 w-full">
                    <div className='px-3 w-full'>
                        <div className="mb-[80px] w-full">
                            <div className='flex justify-center   items-center text-4xl font-bold mb-2'>
                                How to Buy
                            </div>
                            <div className='flex justify-center items-center text-base font-bold  '>
                                We have a whole range of
                                <Link
                                    to='/vehicles-for-sale/used-trucks/'
                                    className='pl-2 underline text-gray-700 hover:text-gray-500  '>
                                    pick-up trucks
                                </Link>,
                                <Link
                                    to='/vehicles-for-sale/used-vans/'
                                    className='px-2 underline text-gray-700 hover:text-gray-500  '>
                                    used vans
                                </Link>
                                for business, and
                                <Link
                                    to='/vehicles-for-sale/used-cars/'
                                    className='px-2 underline text-gray-700 hover:text-gray-500  '>
                                    used cars
                                </Link>
                                for sale
                            </div>
                        </div>
                        <div className='flex flex-wrap mb-[48px]'>
                            <div className="w-full lg:w-1/3 p-3">
                                <div className="w-full flex">
                                    <div
                                        className='w-[70px]  rounded-[50px] bg-gray-900 text-white text-[40px] font-normal text-center'>1</div>
                                    <div className='text-[28px] font-bold text-start -mt-2 pl-3  '>Buy Online</div>
                                </div>
                                <div className='pl-[82px] -mt-2'>
                                    <div>
                                        Order online or over the phone with one of our consultants, complete the
                                        transaction and come to collect the vehicle from our safe collection zone away
                                        from our showroom. All with the peace of mind of a money back guarantee if
                                        you're not satisfied.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 p-3">
                                <div className="w-full flex">
                                    <div
                                        className='w-[70px]  rounded-[50px] bg-gray-900 text-white text-[40px] font-normal text-center'>2</div>
                                    <div className='text-[28px] font-bold text-start -mt-2 pl-3  '>Click & Collect</div>
                                </div>
                                <div className='pl-[82px] -mt-2'>
                                    <div className='  '>
                                        Order online or over the phone with one of our consultants, complete the
                                        transaction and come to collect the vehicle from our safe collection zone away
                                        from our showroom. All with the peace of mind of a money back guarantee if
                                        you're not satisfied.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 p-3 ">
                                <div className="w-full flex">
                                    <div
                                        className='w-[70px]  rounded-[50px] bg-gray-900 text-white text-[40px] font-normal text-center'>3</div>
                                    <div className='text-[28px] font-bold text-start -mt-2 pl-3'>Visit Our Showroom</div>
                                </div>
                                <div className='pl-[82px] -mt-2'>
                                    <div className='  '>
                                        We operate a strictly no-pressure approach, allowing you to take your own time
                                        to browse and inspect our vehicles. Meanwhile, our trained specialists will
                                        always be on hand for expert help and advice as and when you need it.</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Link
                                to="/vehicles-for-sale/"
                                className="bg-blue-700 font-semibold text-base rounded mb-4 text-white py-3 px-2 text-center  ">View Our Vehicle</Link>
                        </div>
                    </div>
                </div>}
                {activeTab === 2 && <div className="pt-[112px] pb-[48px] bg-gray-200 w-full">
                    <div className='px-3 w-full'>
                        <div className="mb-[80px] w-full">
                            <div className='flex justify-center items-center text-4xl font-bold mb-2  '>
                                How to Sell
                            </div>
                            <div className='flex justify-center items-center text-base font-bold  '>
                                We have a whole range of
                                <Link
                                    to='/vehicles-for-sale/used-trucks/'
                                    className='pl-2 underline text-gray-700 hover:text-gray-500  '>
                                    pick-up trucks
                                </Link>,
                                <Link
                                    to='/vehicles-for-sale/used-vans/'
                                    className='px-2 underline text-gray-700 hover:text-gray-500  '>
                                    used vans
                                </Link>
                                for business, and
                                <Link
                                    to='/vehicles-for-sale/used-cars/'
                                    className='px-2 underline text-gray-700 hover:text-gray-500  '>
                                    used cars
                                </Link>
                                for sale
                            </div>
                        </div>
                        <div className='flex flex-wrap mb-[48px]'>
                            <div className="w-full lg:w-1/3 p-3">
                                <div className="w-full flex">
                                    <div
                                        className='w-[70px]  rounded-[50px] bg-gray-900 text-white text-[40px] font-normal text-center  '>1</div>
                                    <div className='text-[28px] font-bold text-start -mt-2 pl-3  '>Sell Online</div>
                                </div>
                                <div className='pl-[82px] -mt-2'>
                                    <div className='  '>
                                        Simply enter your registration and some basic details and we'll line up a
                                        valuation for you. If you're happy with the price we'll get your vehicle
                                        collected with full payment on arrival. No further haggling.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 p-3">
                                <div className="w-full flex">
                                    <div
                                        className='w-[70px]  rounded-[50px] bg-gray-900 text-white text-[40px] font-normal text-center'>2</div>
                                    <div className='  text-[28px] font-bold text-start -mt-2 pl-3  '>Contact Us</div>
                                </div>
                                <div className='pl-[82px] -mt-2'>
                                    <div className='  '>
                                        Speak to our team today, either online or over the phone. Our consultants are
                                        ready to help you, with expert advice about your vehicle. All with the peace of
                                        mind of a money back guarantee if you're not satisfied.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 p-3 ">
                                <div className="w-full flex">
                                    <div
                                        className='w-[70px]  rounded-[50px] bg-gray-900 text-white text-[40px] font-normal text-center'>3</div>
                                    <div className='text-[28px] font-bold text-start -mt-2 pl-3  '>Visit Our Showroom</div>
                                </div>
                                <div className='pl-[82px] -mt-2'>
                                    <div className='  '>
                                        We operate a strictly no-pressure approach, allowing you to take your own time
                                        to browse and inspect our vehicles. Meanwhile, our trained specialists will
                                        always be on hand for expert help and advice as and when you need it.</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center">
                            <Link
                                to="/sell-your-vehicle/"
                                className="bg-blue-700 font-semibold text-base rounded mb-4 text-white py-3 px-2 text-center  ">Sell Your Vehicle</Link>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}