import MainLayout from "../layouts/MainLayout";
import sellcars from "../assets/images/sellcars.png";
import selleasy from "../assets/images/selleasy.png";
import FirstQuickValue from "../components/FirstQuickValue";
import HeroSection from "../components/gallery/HeroSection";
import { useState } from "react";

export default function SellYourVehicle() {
  const [openQuick, setOpenQuick] = useState(true);
  const [showQuick, setShowQuick] = useState(0);

  return (
    <MainLayout>
      {openQuick ? (
        <>
          <HeroSection
            img={sellcars}
            overBGh={"1/3"}
            words={["Sell", "Your", "Vehicle"]}
          />
          <div className="w-full flex flex-col md:flex-row justify-center items-center py-[100px]  px-[20px] md:px-0">
            <div className="w-full flex flex-col md:flex-row justify-between max-w-[1280px]">
              <div className="max-w-[535px] ">
                <div className="text-gray-900   font-barlow-condensed text-6xl font-bold leading-tight uppercase">
                  WE MAKE
                </div>
                <div className="text-gray-900     font-barlow-condensed text-6xl font-bold leading-tight uppercase">
                  SELLING EASY!
                </div>

                <p className="mt-6">
                  At TMC, we are always looking to buy high quality used trucks
                  and cars. So whether you're selling or part exchanging we
                  always provide the very best prices! We can also settle any
                  outstanding finance too! We specialise in used pick-up trucks,
                  vans and used cars and have vast experience with all aspects
                  of the used vehicle market and our sales team will be
                  delighted to make the experience an enjoyable one for you.
                </p>
                <div className="mt-8"></div>
                <p className="">
                  We value each vehicle on an individual basis by looking at its
                  condition, specifications and history, rather than the book
                  value alone – so if it is the right car or van for us, we
                  would be happy to pay more than its estimated market value. We
                  have been purchasing used trucks and cars for many years and,
                  when available, will travel to you wherever necessary in order
                  to make the transaction as smooth as possible
                </p>
              </div>
              <div className="max-w-[658px] mt-6 md:mt-0">
                <img src={selleasy} alt="selleasy" />
                <div className="mt-12 p-8 rounded-lg bg-gray-200">
                  <div className="text-center text-gray-700 font-barlow-condensed text-4xl font-bold leading-10 uppercase">
                    GET A QUICK VALUATION
                  </div>
                  <div className="text-center text-gray-700 font-barlow-condensed text-4xl font-bold leading-10 uppercase">
                    ON YOUR VEHICLE
                  </div>
                  {/* <div className="hidden  mt-12   lg:flex flex-row justify-between w-full bg-white rounded-full border-2 border-gray-300 text-gray-700 font-saira-condensed font-medium text-base leading-6" >
                    <input type="text" className="w-full ml-6 outline-none" placeholder="Enter your registration number" />
                    <div onClick={() => setOpenQuick(false)} className="hover:bg-gray-600 w-fit text-sm rounded-full text-center hover:cursor-pointer text-white py-3 px-6 bg-gray-800 shadow-lg">
                      GET A QUICK VALUATIONS
                    </div>
                  </div> */}
                  <div className="hidden  mt-8  pr-1 py-1 lg:flex flex-row justify-between w-full  bg-white rounded-full border-2 border-gray-300 text-gray-700 font-saira-condensed font-medium text-base leading-6">
                    <input
                      type="text"
                      className="w-1/2 ml-6 outline-none"
                      placeholder="Enter your registration number"
                    />
                    <div
                      onClick={() => setOpenQuick(false)}
                      className="hover:bg-gray-600 text-sm rounded-full text-center hover:cursor-pointer text-white py-3 px-6 bg-gray-800 shadow-lg"
                    >
                      GET A QUICK VALUATIONS
                    </div>
                  </div>

                  <div className="lg:hidden flex flex-col justify-center items-center">
                    <div className=" mt-12   lg:hidden flex flex-row justify-between w-full bg-white rounded-full border-2 border-gray-300 text-gray-700 font-saira-condensed font-medium text-base leading-6">
                      <input
                        type="text "
                        className="h-12 px-6 border-2  rounded-full  w-full outline-none"
                        placeholder="Enter your registration number"
                      />
                    </div>
                    <div onClick={() => setOpenQuick(false)} className="hover:text-white text-center mt-8 w-fit hover:cursor-pointer bg-white rounded-full text-black py-3 px-6 hover:bg-gray-800 shadow-lg">
                      GET A QUICK VALUATIONS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center px-[20px] md:px-0">
            <div className="w-full max-w-[1280px] flex flex-wrap  justify-between">
              <div className="flex flex-col justify-center items-center">
                <div className="p-4 rounded-xl border border-gradient bg-gradient-to-r from-red-500 to-blue-500">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.4505 7.33331C25.1836 6.53319 24.4505 6 23.5833 6H8.91669C8.0495 6 7.31644 6.53319 7.0495 7.33331L4.25 14.6667V24.6667C4.25 25.3997 4.85025 26 5.58331 26H6.91669C7.64975 26 8.25 25.3997 8.25 24.6667V24H24.25V24.6667C24.25 25.3997 24.8503 26 25.5833 26H26.9167C27.6497 26 28.25 25.3997 28.25 24.6667V14.6667L25.4505 7.33331ZM8.91669 20C7.78388 20 6.91669 19.1334 6.91669 18C6.91669 16.8666 7.78388 16 8.91669 16C10.0495 16 10.9167 16.8666 10.9167 18C10.9167 19.1334 10.0495 20 8.91669 20ZM23.5833 20C22.4505 20 21.5833 19.1334 21.5833 18C21.5833 16.8666 22.4505 16 23.5833 16C24.7161 16 25.5833 16.8666 25.5833 18C25.5833 19.1334 24.7161 20 23.5833 20ZM6.91669 13.3333L8.91669 8H23.5833L25.5833 13.3333H6.91669Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="mt-6 max-w-[130px] text-gray-700 text-center font-barlow font-semibold text-lg leading-8">
                  We can collect your vehicle
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="p-4 rounded-xl border border-gradient bg-gradient-to-r from-red-500 to-blue-500">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.15001 6.3999C5.3827 6.3999 3.95001 7.83259 3.95001 9.5999V11.1999H29.55V9.5999C29.55 7.83259 28.1173 6.3999 26.35 6.3999H7.15001Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29.55 14.3999H3.95001V22.3999C3.95001 24.1672 5.3827 25.5999 7.15001 25.5999H26.35C28.1173 25.5999 29.55 24.1672 29.55 22.3999V14.3999ZM7.15001 20.7999C7.15001 19.9162 7.86636 19.1999 8.75001 19.1999H10.35C11.2337 19.1999 11.95 19.9162 11.95 20.7999C11.95 21.6836 11.2337 22.3999 10.35 22.3999H8.75001C7.86636 22.3999 7.15001 21.6836 7.15001 20.7999ZM15.15 19.1999C14.2664 19.1999 13.55 19.9162 13.55 20.7999C13.55 21.6836 14.2664 22.3999 15.15 22.3999H16.75C17.6337 22.3999 18.35 21.6836 18.35 20.7999C18.35 19.9162 17.6337 19.1999 16.75 19.1999H15.15Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="mt-6 max-w-[130px] text-gray-700 text-center font-barlow font-semibold text-lg leading-8">
                  Quick and Hassle free
                </div>
              </div>
              <div className="mt-8 md:mt-0 flex flex-col justify-center items-center">
                <div className="p-4 rounded-xl border border-gradient bg-gradient-to-r from-red-500 to-blue-500">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.25 28.8002C23.3192 28.8002 29.05 23.0694 29.05 16.0002C29.05 8.93095 23.3192 3.2002 16.25 3.2002C9.18075 3.2002 3.45 8.93095 3.45 16.0002C3.45 23.0694 9.18075 28.8002 16.25 28.8002ZM17.25 9.60019C17.25 9.04791 16.8023 8.60019 16.25 8.60019C15.6977 8.60019 15.25 9.04791 15.25 9.60019V16.0002C15.25 16.2654 15.3554 16.5198 15.5429 16.7073L20.0684 21.2328C20.4589 21.6233 21.0921 21.6233 21.4826 21.2328C21.8731 20.8423 21.8731 20.2091 21.4826 19.8186L17.25 15.586V9.60019Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="mt-6 max-w-[130px] text-gray-700 text-center font-barlow font-semibold text-lg leading-8">
                  We can settle your Finance
                </div>
              </div>
              <div className="mt-8 md:mt-0 flex flex-col justify-center items-center">
                <div className="p-4 rounded-xl border border-gradient bg-gradient-to-r from-red-500 to-blue-500">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.55 19.2002V24.0002C5.55 26.6512 10.5644 28.8002 16.75 28.8002C22.9356 28.8002 27.95 26.6512 27.95 24.0002V19.2002C27.95 21.8512 22.9356 24.0002 16.75 24.0002C10.5644 24.0002 5.55 21.8512 5.55 19.2002Z"
                      fill="white"
                    />
                    <path
                      d="M5.55 11.2002V16.0002C5.55 18.6512 10.5644 20.8002 16.75 20.8002C22.9356 20.8002 27.95 18.6512 27.95 16.0002V11.2002C27.95 13.8512 22.9356 16.0002 16.75 16.0002C10.5644 16.0002 5.55 13.8512 5.55 11.2002Z"
                      fill="white"
                    />
                    <path
                      d="M27.95 8.0002C27.95 10.6512 22.9356 12.8002 16.75 12.8002C10.5644 12.8002 5.55 10.6512 5.55 8.0002C5.55 5.34923 10.5644 3.2002 16.75 3.2002C22.9356 3.2002 27.95 5.34923 27.95 8.0002Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="mt-6 max-w-[130px] text-gray-700 text-center font-barlow font-semibold text-lg leading-8">
                  We can collect your vehicle
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center py-[50px] md:py-[100px]  px-[20px] md:px-0">
            <div className="w-full max-w-[1280px] flex flex-col md:flex-row justify-between">
              <div className=" flex flex-row">
                <div className="mt-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0047 3.59562H15.9875V3.59812C15.3937 3.65687 13.8372 4.08219 11.905 4.82562C9.95716 5.57562 8.04967 5.84906 6.45529 6.26094C4.87279 6.66969 5.16373 8.56719 5.16373 8.56719C5.16373 8.56719 5.75748 16.2438 5.99904 17.5081C7.15342 23.5494 15.8709 28.4062 15.8709 28.4062H15.875C15.875 28.4062 24.7603 23.6947 25.9625 17.54C26.215 16.2478 26.8375 8.38969 26.8375 8.38969C26.8375 8.38969 27.1425 6.44094 25.4878 6.05719C23.8331 5.67344 21.8644 5.4375 19.875 4.7275C17.9172 4.02844 16.6084 3.63969 16.0228 3.59656V3.59375C16.0167 3.59406 16.0107 3.59468 16.0047 3.59562ZM19.1478 6.41719C20.6715 6.96438 22.1462 7.25188 23.4506 7.50656C23.4506 7.50656 24.6294 7.7925 24.8334 7.83656C24.8334 7.83656 24.8834 7.82906 24.8687 8.15844C24.8665 8.20938 24.8603 8.21656 24.8556 8.27406C24.6197 11.27 24.1815 16.345 24.0119 17.2156C23.4953 19.8647 21.099 22.3125 19.1875 23.8941C18.1365 24.7577 17.0286 25.5496 15.8712 26.2644C14.741 25.5416 13.6592 24.746 12.6325 23.8825C10.7344 22.2769 8.37623 19.82 7.87342 17.195C7.70967 16.3394 7.28717 11.3584 7.06092 8.42219C7.05948 8.38412 7.05531 8.34621 7.04842 8.30875C7.0389 8.18856 7.04594 8.06764 7.06935 7.94938C7.48685 7.84562 7.93935 7.74781 8.41654 7.64406C9.68341 7.37 11.1231 7.05813 12.6206 6.485C14.3081 5.83938 15.509 5.51625 15.9925 5.41937C16.3056 5.48156 17.1372 5.69406 19.1478 6.41719Z"
                      fill="#272727"
                    />
                    <path
                      d="M15.9703 6.09092H15.9575V6.09279C15.5181 6.13717 14.3663 6.46779 12.9347 7.04561C11.49 7.62967 10.0738 7.84061 8.88846 8.16092C7.71159 8.47904 7.92815 9.97342 7.92815 9.97342C7.92815 9.97342 8.37002 16.009 8.54971 17.0047C9.40784 21.75 15.8716 25.54 15.8716 25.54H15.875C15.875 25.54 22.4288 21.8303 23.3125 17.0169C23.4981 16.0069 23.955 9.86529 23.955 9.86529C23.955 9.86529 24.1791 8.34279 22.9625 8.03967C21.746 7.73654 20.296 7.54842 18.8281 6.98717C17.3831 6.43467 16.4153 6.12654 15.9822 6.09154V6.08936L15.9703 6.09092Z"
                      fill="#272727"
                    />
                  </svg>
                </div>
                <div className="ml-8 max-w-[284px]  flex flex-col">
                  <div className="text-gray-800 font-barlow-condensed font-bold text-2xl leading-10 uppercase">
                    Complete peace of mind
                  </div>

                  <div className="text-gray-800 font-barlow text-base font-normal leading-7">
                    Our professional drivers collect hundreds of used vehicles
                    every year. We’ll always be honest, transparent and
                    professional in making sure your sale is as smooth and
                    trouble-free as possible.
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex flex-row">
                <div className="mt-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8956 4.1486C11.277 3.6396 8.45999 4.3966 6.43165 6.41964C4.26613 8.5795 3.54745 11.636 4.27561 14.3909C5.41221 13.4043 7.13719 13.4503 8.21883 14.5291C8.59703 14.9063 8.84863 15.362 8.97365 15.8435C9.84555 15.7181 10.7638 15.99 11.4347 16.6591C11.9462 17.1692 12.2261 17.8229 12.2745 18.4902C12.943 18.5388 13.5978 18.8179 14.109 19.3278C14.6205 19.8379 14.9004 20.4916 14.9488 21.1588C15.6182 21.2068 16.274 21.486 16.7857 21.9964C17.9156 23.1234 17.9156 24.9504 16.7857 26.0774L16.3158 26.5462L17.6981 27.8534C18.0822 28.2166 18.6843 28.2076 19.0574 27.833C19.4046 27.4844 19.4355 26.9386 19.15 26.555L19.0745 26.4792C19.0402 26.4448 19.0089 26.4084 18.9807 26.3706L18.7772 26.1664C18.3874 25.775 18.3874 25.1408 18.7772 24.7494C19.167 24.3582 19.7989 24.3582 20.1888 24.7494L20.4688 25.0306C20.5278 25.0898 20.5836 25.1508 20.6366 25.2134L20.7866 25.3642C21.1564 25.7354 21.756 25.7354 22.1258 25.3642C22.4956 24.993 22.4956 24.391 22.1258 24.0198L21.8252 23.718C21.624 23.5162 21.5266 23.2494 21.5332 22.9848C21.5322 22.7272 21.6296 22.4692 21.8254 22.2728C22.2152 21.8814 22.8472 21.8814 23.237 22.2728L23.4648 22.5014C23.8748 22.913 24.5396 22.913 24.9498 22.5014C25.3598 22.0896 25.3598 21.4222 24.9498 21.0106L24.899 20.9596C24.8372 20.9054 24.7766 20.8488 24.7178 20.7896L23.1672 19.2332C22.7774 18.842 22.7774 18.2076 23.1672 17.8163C23.557 17.4251 24.189 17.4251 24.5788 17.8163L26.0358 19.2789C26.0698 19.3052 26.1024 19.3339 26.1336 19.3651L26.2522 19.4843C26.8868 20.0036 27.8228 19.9664 28.4142 19.3727C29.0452 18.7394 29.0452 17.7125 28.4142 17.0791L26.9374 15.5966C26.9178 15.5796 26.8988 15.5618 26.8806 15.5432L20.8966 9.45904H19.3636L15.9408 12.0622C14.2846 13.3218 11.9196 13.0017 10.6578 11.3471C9.39543 9.69178 9.71541 7.32772 11.3725 6.0675L13.8956 4.1486Z"
                      fill="#272727"
                    />
                    <path
                      d="M21.3158 7.45922C21.5838 7.45922 21.8408 7.56688 22.0286 7.75802L27.4194 13.2391C28.41 11.2785 28.3172 8.91596 27.1168 7.02116C26.4412 5.95448 25.4852 5.145 24.3904 4.64666C24.3666 4.63582 24.3432 4.62408 24.3204 4.61142C23.6918 4.26342 22.9686 4.06494 22.196 4.06494H17.2959C17.2653 4.09516 17.2326 4.12356 17.198 4.14992L12.5831 7.6596C11.8061 8.25054 11.6562 9.3583 12.2482 10.1345C12.8408 10.9116 13.9522 11.062 14.7301 10.4704L18.4212 7.66326C18.5952 7.5309 18.8079 7.45922 19.0265 7.45922H21.3158ZM12.6929 21.9966L11.3796 23.3064C11.0318 23.6534 10.4678 23.6534 10.12 23.3064C9.78032 22.9676 9.7724 22.4232 10.0962 22.0748L10.1213 22.0502L11.4347 20.7402L11.4584 20.7162C11.7641 20.434 12.22 20.4048 12.5567 20.6288C12.6048 20.6608 12.6505 20.698 12.6929 20.7402C13.0407 21.0872 13.0407 21.6496 12.6929 21.9966ZM12.7968 25.9752C13.0484 26.2262 13.4132 26.2956 13.7274 26.1834C13.8474 26.1404 13.9601 26.0712 14.0563 25.9752L15.3697 24.6652C15.7175 24.3184 15.7175 23.7558 15.3697 23.409C15.3262 23.3656 15.2793 23.3276 15.23 23.2952C14.8843 23.0676 14.4145 23.1054 14.1101 23.409L12.7968 24.719C12.7006 24.8148 12.631 24.9272 12.588 25.047C12.4756 25.3604 12.5451 25.7242 12.7968 25.9752ZM6.82656 17.1805L5.5132 18.4904C5.1654 18.8373 4.60148 18.8373 4.25366 18.4904C3.91396 18.1516 3.90604 17.6072 4.22988 17.2588L4.25496 17.2341L5.5683 15.9241L5.59204 15.9002C5.8977 15.6179 6.35364 15.5887 6.69034 15.8127C6.73844 15.8447 6.78412 15.8819 6.82656 15.9242C7.17438 16.2711 7.17438 16.8336 6.82656 17.1805ZM9.77866 19.4064L8.4653 20.7162C8.11748 21.0632 7.55356 21.0632 7.20576 20.7162C6.86606 20.3774 6.85812 19.8331 7.18198 19.4846L7.20706 19.4599L8.5204 18.15L8.54412 18.1261C8.8498 17.8437 9.30574 17.8146 9.64244 18.0386C9.69054 18.0706 9.7362 18.1078 9.77866 18.1501C10.1265 18.497 10.1265 19.0595 9.77866 19.4064Z"
                      fill="#272727"
                    />
                  </svg>
                </div>
                <div className="ml-8 max-w-[284px] flex flex-col">
                  <div className="text-gray-800 font-barlow-condensed font-bold text-2xl leading-10 uppercase">
                    A hassle free sale
                  </div>

                  <div className="text-gray-800 font-barlow text-base font-normal leading-7">
                    No advertising fees, strangers, nuisance callers or
                    tyre-kickers on your doorstep. We pay your money directly to
                    your bank account, collect your vehicle when possible, and
                    can also settle outstanding finance prior to sale.
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex flex-row">
                <div className="mt-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0047 3.59562H15.9875V3.59812C15.3937 3.65687 13.8372 4.08219 11.905 4.82562C9.95716 5.57562 8.04967 5.84906 6.45529 6.26094C4.87279 6.66969 5.16373 8.56719 5.16373 8.56719C5.16373 8.56719 5.75748 16.2438 5.99904 17.5081C7.15342 23.5494 15.8709 28.4062 15.8709 28.4062H15.875C15.875 28.4062 24.7603 23.6947 25.9625 17.54C26.215 16.2478 26.8375 8.38969 26.8375 8.38969C26.8375 8.38969 27.1425 6.44094 25.4878 6.05719C23.8331 5.67344 21.8644 5.4375 19.875 4.7275C17.9172 4.02844 16.6084 3.63969 16.0228 3.59656V3.59375C16.0167 3.59406 16.0107 3.59468 16.0047 3.59562ZM19.1478 6.41719C20.6715 6.96438 22.1462 7.25188 23.4506 7.50656C23.4506 7.50656 24.6294 7.7925 24.8334 7.83656C24.8334 7.83656 24.8834 7.82906 24.8687 8.15844C24.8665 8.20938 24.8603 8.21656 24.8556 8.27406C24.6197 11.27 24.1815 16.345 24.0119 17.2156C23.4953 19.8647 21.099 22.3125 19.1875 23.8941C18.1365 24.7577 17.0286 25.5496 15.8712 26.2644C14.741 25.5416 13.6592 24.746 12.6325 23.8825C10.7344 22.2769 8.37623 19.82 7.87342 17.195C7.70967 16.3394 7.28717 11.3584 7.06092 8.42219C7.05948 8.38412 7.05531 8.34621 7.04842 8.30875C7.0389 8.18856 7.04594 8.06764 7.06935 7.94938C7.48685 7.84562 7.93935 7.74781 8.41654 7.64406C9.68341 7.37 11.1231 7.05813 12.6206 6.485C14.3081 5.83938 15.509 5.51625 15.9925 5.41937C16.3056 5.48156 17.1372 5.69406 19.1478 6.41719Z"
                      fill="#272727"
                    />
                    <path
                      d="M15.9703 6.09092H15.9575V6.09279C15.5181 6.13717 14.3663 6.46779 12.9347 7.04561C11.49 7.62967 10.0738 7.84061 8.88846 8.16092C7.71159 8.47904 7.92815 9.97342 7.92815 9.97342C7.92815 9.97342 8.37002 16.009 8.54971 17.0047C9.40784 21.75 15.8716 25.54 15.8716 25.54H15.875C15.875 25.54 22.4288 21.8303 23.3125 17.0169C23.4981 16.0069 23.955 9.86529 23.955 9.86529C23.955 9.86529 24.1791 8.34279 22.9625 8.03967C21.746 7.73654 20.296 7.54842 18.8281 6.98717C17.3831 6.43467 16.4153 6.12654 15.9822 6.09154V6.08936L15.9703 6.09092Z"
                      fill="#272727"
                    />
                  </svg>
                </div>
                <div className="max-w-[284px] ml-8 flex flex-col">
                  <div className="text-gray-800 font-barlow-condensed font-bold text-2xl leading-10 uppercase">
                    A great price for your car
                  </div>

                  <div className="text-gray-800 font-barlow text-base font-normal leading-7">
                    It could be more than you would expect - higher than what
                    you’ll get from many dealers in part exchange, or from
                    online buying services.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
          <FirstQuickValue visible={setOpenQuick}/>
      )}
    </MainLayout>
  );
}
