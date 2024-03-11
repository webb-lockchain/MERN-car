import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '../assets/icon/logo.svg'
import { GrayBtn } from './gallery/GrayBtn'
import { ReactComponent as Heartsvg } from './svg/heart.svg'

function classNames(...classes) {
    return classes
        .filter(Boolean)
        .join(' ')
}
export default function Header() {
    const [show,
        setShow] = useState(false)
    return (
        <div className="flex justify-center align-center h-fit py-6 lg:px-0 px-4">

            <div
                className="flex flex-wrap w-screen max-w-[1400px] justify-between items-center">
                <div
                    className="  "
                    itemScope=""
                    itemType="https://schema.org/AutomotiveBusiness"
                    bis_skin_checked="1">
                    <Link to="/">
                        <img
                            id="nav-logo"
                            itemProp="logo"
                            alt="TMC Logo"
                            src={logo}
                            className='w-[105px] h-16' />
                    </Link>
                </div>
                <div className="hidden xl:flex justify-between items-center ">
                    <Link
                        to='/'
                        className=" inline-flex  justify-center rounded-md bg-white px-[10px] py-2 navitem uppercase  hover:bg-gray-50">
                        Home
                    </Link>
                    <Link
                        to='/vehicles-for-sale/used-trucks/'
                        className="  inline-flex  justify-center rounded-md bg-white px-[10px] py-2 navitem uppercase  hover:bg-gray-50">
                        Used Pickups
                    </Link>
                    <Menu as="div" className="relative  text-left px-0">
                        <div>
                            <Menu.Button
                                className=" inline-flex  justify-center rounded-md bg-white px-[10px] py-2 navitem uppercase  hover:bg-gray-50">
                                Cars & Vans
                                <ChevronDownIcon className="mt-[2px] h-5 w-5 text-black" aria-hidden="true" />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                className="absolute      left-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/vehicles-for-sale/used-cars/'
                                            className={classNames(active
                                                ? 'bg-gray-100 text-gray-900   '
                                                : 'text-gray-700', 'block px-4 py-2 text-base   ')}>
                                            Used Cars
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/vehicles-for-sale/used-vans/'
                                            className={classNames(active
                                                ? 'bg-gray-100   text-gray-900'
                                                : 'text-gray-700', 'block px-4 py-2   text-base')}>
                                            Used Vans
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/vehicles-for-sale/electric/'
                                            className={classNames(active
                                                ? 'bg-gray-100   text-gray-900'
                                                : 'text-gray-700', 'block px-4 py-2   text-base')}>
                                            Electric Cars
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Link
                        to='/sell-your-vehicle/'
                        className=" inline-flex  justify-center rounded-md bg-white px-[10px] py-2 navitem uppercase  hover:bg-gray-50">
                        Sell your Vehicle
                    </Link>
                    <Menu as="div" className="relative  text-left px-0">
                        <div>
                            <Menu.Button
                                className=" inline-flex  justify-center rounded-md bg-white px-[10px] py-2 navitem uppercase  hover:bg-gray-50">
                                Finance
                                <ChevronDownIcon className="mt-[2px] h-5 w-5 text-black" aria-hidden="true" />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                className="absolute      left-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/motoring-hub/finance/'
                                            className={classNames(active
                                                ? 'bg-gray-100   text-gray-900'
                                                : 'text-gray-700   ', 'block px-4 py-2 text-base')}>
                                            Finance
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='https://tmcmotors.vaninsurance.co.uk/van-insurance/about-your-van'
                                            className={classNames(active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700', 'block px-4 py-2   text-base')}>
                                            Insurance
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/motoring-hub/warranties/'
                                            className={classNames(active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700', 'block px-4 py-2   text-base')}>
                                            Warranty
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    <Menu as="div" className="relative  text-left px-0">
                        <div>
                            <Menu.Button
                                className=" inline-flex  justify-center rounded-md bg-white px-[10px] py-2 navitem uppercase  hover:bg-gray-50">
                                Our Locations
                                <ChevronDownIcon className="mt-[2px] h-5 w-5 text-black" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                className="absolute      left-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/vehicles-for-sale/hampshire/'
                                            className={classNames(active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700', '  block px-4 py-2 text-base')}>
                                            Hampshire
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/vehicles-for-sale/huddersfield/'
                                            className={classNames(active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700', '  block px-4 py-2 text-base')}>
                                            Huddersfield
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Menu as="div" className="relative  text-left px-0">
                        <div>
                            <Menu.Button
                                className=" inline-flex  justify-center rounded-md bg-white px-[10px] py-2 navitem uppercase  hover:bg-gray-50">
                                More
                                <ChevronDownIcon className="mt-[2px] h-5 w-5 text-black" aria-hidden="true" />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items
                                className="absolute      left-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/meet-the-team/'
                                            className={classNames(active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700', '  block px-4 py-2 text-base')}>
                                            Meet The Team
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/motoring-hub/reviews/'
                                            className={classNames(active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700', '  block px-4 py-2 text-base')}>
                                            Reviews
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/motoring-hub/videos/'
                                            className={classNames(active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700', '  block px-4 py-2 text-base')}>
                                            Videos
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to='/motoring-hub/blog/'
                                            className={classNames(active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-700', '  block px-4 py-2 text-base')}>
                                            latest News
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <div className="hidden xl:flex justify-between items-center gap-2">
                    <Link
                        to="/shortlist"
                        className="w-10 h-10 p-2.5 rounded-[100px] border border-black justify-center items-center gap-2 inline-flex">
                        <div className="w-5 h-5 relative"><Heartsvg /></div>
                    </Link>
                    <Link to='/contact-us'>
                        <GrayBtn name="contact us" upperCase={true} />
                    </Link>
                </div>
                <div className="flex xl:hidden justify-end items-center ">
                    <Link to="/contact-us" className='text-xl pr-4'>
                        <span
                            className="bg-gray-900 text-center text-white px-4 py-2 rounded-full font-barlow text-base font-semibold leading-5 tracking-tight uppercase">CONTACT US</span>
                    </Link>
                    {/* <Disclosure.Button> */}
                    <span
                        onClick={() => setShow(true)}
                        className="w-10 h-10 border-2 border-gray-600 rounded-full flex justify-center items-center">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z"
                                fill="black" />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
                                fill="black" />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9 15C9 14.4477 9.44771 14 10 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H10C9.44771 16 9 15.5523 9 15Z"
                                fill="black" />
                        </svg>
                    </span>
                    {/* </Disclosure.Button> */}
                </div>
                <div
                    className={`${show
                        ? " right-0 "
                        : "-right-full "}top-0 transition-all z-[100] w-full fixed h-full bg-black bg-opacity-50 text-right`}>
                    <div
                        className="w-[265px] h-full  p-5 bg-white flex-col justify-start items-start gap-6 inline-flex">
                        <div className="self-stretch h-[83px] justify-between items-center inline-flex">
                            <div className="w-[88.28px] h-10 relative">
                                <svg width="89" height="41" viewBox="0 0 89 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.402344 31.0902V10.8696H13.3643V26.9424H19.586V10.8696H27.3631V26.9424H33.5848V11.3881C36.4364 12.6843 39.5473 27.4609 44.2136 27.4609C48.8799 27.4609 52.25 13.462 55.3608 10.8696V26.9424H61.5825V20.9799C61.5825 20.9799 65.7304 26.6832 70.1374 26.9424H87.5064C87.5064 26.9424 85.9509 31.0902 83.3585 31.0902H0.402344Z" fill="#0449C8" />
                                    <path d="M33.5844 4.64781H0.92041C0.92041 4.64781 2.47584 0.5 5.5867 0.5H88.2837V20.7206H70.137C70.137 20.7206 66.7669 20.7206 66.7669 16.0543C66.7669 11.388 70.137 11.388 70.137 11.388H83.8766V5.16629H69.8778C65.9892 5.16629 61.5821 11.388 61.5821 11.388C61.5821 11.388 61.3229 4.64781 55.3604 4.64781C52.5088 4.64781 51.4107 6.46248 48.6202 11.6472C46.3828 15.8044 44.2132 20.4613 44.2132 20.4613C44.2132 20.4613 42.3985 15.795 40.3246 11.388C38.1287 6.72171 36.2715 4.64781 33.5844 4.64781Z" fill="#E91E24" />
                                    <path d="M0 35.5314V34.7968H4.37741V35.5314H2.61263V40.4529H1.76201V35.5314H0Z" fill="#E91E24" />
                                    <path d="M5.42249 40.4529V34.7968H6.27587V37.2548H9.09564V34.7968H9.95179V40.4529H9.09564V37.9867H6.27587V40.4529H5.42249Z" fill="#E91E24" />
                                    <path d="M11.2724 40.4529V34.7968H14.8185V35.5314H12.1257V37.2548H14.6334V37.9867H12.1257V39.7183H14.8516V40.4529H11.2724Z" fill="#E91E24" />
                                    <path d="M18.1721 34.7968H19.2078L21.0085 39.1936H21.0748L22.8754 34.7968H23.9111V40.4529H23.0991V36.36H23.0467L21.3786 40.4446H20.7047L19.0366 36.3572H18.9841V40.4529H18.1721V34.7968Z" fill="#0449C8" />
                                    <path d="M30.1428 37.6249C30.1428 38.2288 30.0323 38.748 29.8114 39.1825C29.5904 39.6152 29.2876 39.9484 28.9028 40.1823C28.5198 40.4143 28.0843 40.5302 27.5964 40.5302C27.1067 40.5302 26.6694 40.4143 26.2846 40.1823C25.9016 39.9484 25.5997 39.6143 25.3787 39.1797C25.1578 38.7452 25.0473 38.2269 25.0473 37.6249C25.0473 37.021 25.1578 36.5027 25.3787 36.07C25.5997 35.6355 25.9016 35.3022 26.2846 35.0702C26.6694 34.8364 27.1067 34.7195 27.5964 34.7195C28.0843 34.7195 28.5198 34.8364 28.9028 35.0702C29.2876 35.3022 29.5904 35.6355 29.8114 36.07C30.0323 36.5027 30.1428 37.021 30.1428 37.6249ZM29.2977 37.6249C29.2977 37.1646 29.2231 36.777 29.074 36.4622C28.9267 36.1455 28.7242 35.9061 28.4664 35.7441C28.2105 35.5802 27.9205 35.4983 27.5964 35.4983C27.2705 35.4983 26.9796 35.5802 26.7237 35.7441C26.4678 35.9061 26.2653 36.1455 26.1161 36.4622C25.9688 36.777 25.8952 37.1646 25.8952 37.6249C25.8952 38.0852 25.9688 38.4736 26.1161 38.7903C26.2653 39.1052 26.4678 39.3445 26.7237 39.5084C26.9796 39.6704 27.2705 39.7514 27.5964 39.7514C27.9205 39.7514 28.2105 39.6704 28.4664 39.5084C28.7242 39.3445 28.9267 39.1052 29.074 38.7903C29.2231 38.4736 29.2977 38.0852 29.2977 37.6249Z" fill="#0449C8" />
                                    <path d="M30.7626 35.5314V34.7968H35.14V35.5314H33.3752V40.4529H32.5246V35.5314H30.7626Z" fill="#0449C8" />
                                    <path d="M40.8552 37.6249C40.8552 38.2288 40.7447 38.748 40.5238 39.1825C40.3028 39.6152 40 39.9484 39.6152 40.1823C39.2322 40.4143 38.7968 40.5302 38.3088 40.5302C37.8191 40.5302 37.3818 40.4143 36.997 40.1823C36.614 39.9484 36.3121 39.6143 36.0911 39.1797C35.8702 38.7452 35.7597 38.2269 35.7597 37.6249C35.7597 37.021 35.8702 36.5027 36.0911 36.07C36.3121 35.6355 36.614 35.3022 36.997 35.0702C37.3818 34.8364 37.8191 34.7195 38.3088 34.7195C38.7968 34.7195 39.2322 34.8364 39.6152 35.0702C40 35.3022 40.3028 35.6355 40.5238 36.07C40.7447 36.5027 40.8552 37.021 40.8552 37.6249ZM40.0101 37.6249C40.0101 37.1646 39.9355 36.777 39.7864 36.4622C39.6391 36.1455 39.4366 35.9061 39.1788 35.7441C38.9229 35.5802 38.6329 35.4983 38.3088 35.4983C37.983 35.4983 37.692 35.5802 37.4361 35.7441C37.1802 35.9061 36.9777 36.1455 36.8285 36.4622C36.6812 36.777 36.6076 37.1646 36.6076 37.6249C36.6076 38.0852 36.6812 38.4736 36.8285 38.7903C36.9777 39.1052 37.1802 39.3445 37.4361 39.5084C37.692 39.6704 37.983 39.7514 38.3088 39.7514C38.6329 39.7514 38.9229 39.6704 39.1788 39.5084C39.4366 39.3445 39.6391 39.1052 39.7864 38.7903C39.9355 38.4736 40.0101 38.0852 40.0101 37.6249Z" fill="#0449C8" />
                                    <path d="M41.9969 40.4529V34.7968H44.013C44.4512 34.7968 44.8149 34.8723 45.1039 35.0233C45.3948 35.1743 45.6121 35.3832 45.7557 35.6502C45.8993 35.9153 45.9711 36.2219 45.9711 36.5699C45.9711 36.916 45.8984 37.2207 45.7529 37.484C45.6093 37.7455 45.3921 37.9489 45.1012 38.0944C44.8121 38.2398 44.4485 38.3125 44.0103 38.3125H42.8503V37.5779H43.9329C44.2091 37.5779 44.4337 37.5383 44.6068 37.4592C44.7817 37.38 44.9097 37.2649 44.9907 37.1139C45.0717 36.963 45.1122 36.7816 45.1122 36.5699C45.1122 36.3563 45.0708 36.1713 44.9879 36.0148C44.9069 35.8583 44.779 35.7386 44.604 35.6557C44.431 35.571 44.2036 35.5287 43.9219 35.5287H42.8503V40.4529H41.9969ZM45.0242 38.1306L46.1865 40.4529H45.2144L44.0103 38.3125C44.0103 38.3125 44.3967 38.301 44.5483 38.2698C44.6999 38.2386 45.0242 38.1306 45.0242 38.1306Z" fill="#0449C8" />
                                    <path d="M53.9211 36.6362H53.0594C53.0263 36.452 52.9646 36.29 52.8744 36.1501C52.7841 36.0101 52.6737 35.8914 52.5429 35.7938C52.4122 35.6962 52.2659 35.6226 52.1038 35.5729C51.9436 35.5232 51.7733 35.4983 51.5929 35.4983C51.267 35.4983 50.9752 35.5802 50.7174 35.7441C50.4615 35.908 50.259 36.1482 50.1098 36.4649C49.9625 36.7816 49.8889 37.1683 49.8889 37.6249C49.8889 38.0852 49.9625 38.4736 50.1098 38.7903C50.259 39.107 50.4624 39.3464 50.7202 39.5084C50.9779 39.6704 51.2679 39.7514 51.5901 39.7514C51.7687 39.7514 51.9381 39.7275 52.0983 39.6796C52.2603 39.6299 52.4067 39.5572 52.5374 39.4614C52.6681 39.3657 52.7786 39.2488 52.8688 39.1107C52.9609 38.9708 53.0244 38.8106 53.0594 38.6301L53.9211 38.6329C53.875 38.9109 53.7857 39.1669 53.6532 39.4007C53.5225 39.6327 53.354 39.8334 53.1478 40.0027C52.9434 40.1703 52.7096 40.3001 52.4463 40.3922C52.183 40.4842 51.8958 40.5302 51.5846 40.5302C51.0949 40.5302 50.6585 40.4143 50.2755 40.1823C49.8926 39.9484 49.5906 39.6143 49.3697 39.1797C49.1506 38.7452 49.041 38.2269 49.041 37.6249C49.041 37.021 49.1515 36.5027 49.3724 36.07C49.5934 35.6355 49.8953 35.3022 50.2783 35.0702C50.6613 34.8364 51.0967 34.7195 51.5846 34.7195C51.8847 34.7195 52.1646 34.7628 52.4242 34.8493C52.6856 34.934 52.9204 35.0592 53.1284 35.2249C53.3365 35.3888 53.5086 35.5894 53.6449 35.827C53.7811 36.0626 53.8732 36.3324 53.9211 36.6362Z" fill="#E91E24" />
                                    <path d="M59.9332 37.6249C59.9332 38.2288 59.8227 38.748 59.6018 39.1825C59.3808 39.6152 59.078 39.9484 58.6932 40.1823C58.3102 40.4143 57.8748 40.5302 57.3868 40.5302C56.8971 40.5302 56.4598 40.4143 56.075 40.1823C55.692 39.9484 55.3901 39.6143 55.1691 39.1797C54.9482 38.7452 54.8377 38.2269 54.8377 37.6249C54.8377 37.021 54.9482 36.5027 55.1691 36.07C55.3901 35.6355 55.692 35.3022 56.075 35.0702C56.4598 34.8364 56.8971 34.7195 57.3868 34.7195C57.8748 34.7195 58.3102 34.8364 58.6932 35.0702C59.078 35.3022 59.3808 35.6355 59.6018 36.07C59.8227 36.5027 59.9332 37.021 59.9332 37.6249ZM59.0881 37.6249C59.0881 37.1646 59.0135 36.777 58.8644 36.4622C58.7171 36.1455 58.5146 35.9061 58.2568 35.7441C58.0009 35.5802 57.7109 35.4983 57.3868 35.4983C57.061 35.4983 56.7701 35.5802 56.5141 35.7441C56.2582 35.9061 56.0557 36.1455 55.9065 36.4622C55.7592 36.777 55.6856 37.1646 55.6856 37.6249C55.6856 38.0852 55.7592 38.4736 55.9065 38.7903C56.0557 39.1052 56.2582 39.3445 56.5141 39.5084C56.7701 39.6704 57.061 39.7514 57.3868 39.7514C57.7109 39.7514 58.0009 39.6704 58.2568 39.5084C58.5146 39.3445 58.7171 39.1052 58.8644 38.7903C59.0135 38.4736 59.0881 38.0852 59.0881 37.6249Z" fill="#E91E24" />
                                    <path d="M61.0749 34.7968H62.1106L63.9113 39.1936H63.9776L65.7782 34.7968H66.8139V40.4529H66.0019V36.36H65.9495L64.2813 40.4446H63.6075L61.9394 36.3572H61.8869V40.4529H61.0749V34.7968Z" fill="#E91E24" />
                                    <path d="M68.1324 40.4529V34.7968H70.1485C70.5885 34.7968 70.9531 34.8769 71.2421 35.0371C71.5312 35.1973 71.7475 35.4164 71.8912 35.6944C72.0348 35.9706 72.1066 36.2817 72.1066 36.6279C72.1066 36.9758 72.0339 37.2888 71.8884 37.5669C71.7448 37.843 71.5275 38.0621 71.2366 38.2242C70.9475 38.3844 70.5839 38.4644 70.1457 38.4644H68.9858V37.7409H70.0684C70.3464 37.7409 70.572 37.693 70.745 37.5972C70.9181 37.4997 71.0451 37.3671 71.1262 37.1996C71.2072 37.032 71.2477 36.8414 71.2477 36.6279C71.2477 36.4143 71.2072 36.2246 71.1262 36.0589C71.0451 35.8932 70.9172 35.7634 70.7423 35.6695C70.5692 35.5756 70.3409 35.5287 70.0574 35.5287H68.9858V40.4529H68.1324Z" fill="#E91E24" />
                                    <path d="M73.0626 40.4529H72.1567L74.1922 34.7968H75.1781L77.2135 40.4529H76.3077L74.7086 35.8242H74.6644L73.0626 40.4529ZM73.8291 38.238H75.5425L75.7906 38.956H73.5806L73.8291 38.238Z" fill="#E91E24" />
                                    <path d="M82.6733 34.7968V40.4529H81.889L79.014 36.3047H78.9615V40.4529H78.1081V34.7968H78.898L81.7757 38.9505H81.8282V34.7968H82.6733Z" fill="#E91E24" />
                                    <path d="M83.5596 34.7968H84.529L86.0065 37.368H86.0673L87.5448 34.7968H88.5142L86.4622 38.2325V40.4529H85.6116V38.2325L83.5596 34.7968Z" fill="#E91E24" />
                                </svg>

                            </div>
                            <div className="justify-start items-center gap-2 flex">
                                <div
                                    className="p-2.5 rounded-[100px] border border-black justify-center items-center gap-2 flex">
                                    <div className="w-5 h-5 relative">
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.17157 5.67157C4.73367 4.10948 7.26633 4.10948 8.82843 5.67157L10 6.84315L11.1716 5.67157C12.7337 4.10948 15.2663 4.10948 16.8284 5.67157C18.3905 7.23367 18.3905 9.76633 16.8284 11.3284L10 18.1569L3.17157 11.3284C1.60948 9.76633 1.60948 7.23367 3.17157 5.67157Z"
                                                fill="black" />
                                        </svg>

                                    </div>
                                </div>
                                <div
                                    onClick={() => setShow(false)}
                                    className="p-2.5 rounded-[100px] border border-black justify-center items-center gap-2 flex">
                                    <div className="w-5 h-5 relative">
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 15.5L15 5.5M5 5.5L15 15.5"
                                                stroke="#272727"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-start gap-6 flex">
                            <div className='flex flex-col gap-6 transition-all'>
                                <Link
                                    to='/'
                                    className="  inline-flex  justify-start rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                    Home
                                </Link>
                                <Link
                                    to='/vehicles-for-sale/used-trucks/'
                                    className="inline-flex    justify-start rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                    Used Pickups
                                </Link>
                                <Menu as="div" className="relative  text-left px-0">
                                    <div>
                                        <Menu.Button
                                            className="  flex w-full justify-between gap-x-1.5 rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                            Cars & Vans
                                            <ChevronDownIcon className="mt-[2px] h-5 w-5 text-black" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items
                                            className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/vehicles-for-sale/used-cars/'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        Used Cars
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/vehicles-for-sale/used-vans/'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        Used Vans
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/vehicles-for-sale/electric/'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        Electric Cars
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                                <Link
                                    to="/sell-your-vehicle/"
                                    className="inline-flex    justify-start rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                    Sell your Vehicle
                                </Link>

                                <Menu as="div" className="relative  text-left px-0">
                                    <div>
                                        <Menu.Button
                                            className="flex w-full   justify-between gap-x-1.5 rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                            Finance
                                            <ChevronDownIcon className="mt-[2px] h-5 w-5 text-gray-800" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items
                                            className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/motoring-hub/finance/'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        Finance
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='https://tmcmotors.vaninsurance.co.uk/van-insurance/about-your-van'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        Insurance
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/motoring-hub/warranties/'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        Warranty
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                                <Menu as="div" className="relative  text-left px-0">
                                    <div>
                                        <Menu.Button
                                            className="flex w-full   justify-between gap-x-1.5 rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                            Our Locations
                                            <ChevronDownIcon className="mt-[2px] h-5 w-5 text-black" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items
                                            className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/vehicles-for-sale/hampshire/'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        Hampshire
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/vehicles-for-sale/huddersfield/'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        Huddersfield
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                                <Menu as="div" className="relative  text-left px-0">
                                    <div>
                                        <Menu.Button
                                            className="flex w-full   justify-between gap-x-1.5 rounded-md text-black text-lg font-medium font-['Saira Condensed'] leading-relaxed  hover:bg-gray-50">
                                            More
                                            <ChevronDownIcon className="mt-[2px] h-5 w-5 text-black" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items
                                            className="block z-1     0 mt-[2px3 py-2 w-100 pl-0 origin-top-right divide-gray-100 rounded-md bg-white focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/meet-the-team/'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        Meet The Team
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/motoring-hub/reviews/'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        Reviews
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/motoring-hub/videos/'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        Videos
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/motoring-hub/blog/'
                                                        className={classNames(active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700', '  block px-6 py-2 text-base')}>
                                                        latest News
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}