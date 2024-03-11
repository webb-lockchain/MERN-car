import MainLayout from "../layouts/MainLayout";
import Value from "../components/Value"
import ContactCard from "../components/ContactCard";
import ContactHudderCard from "../components/ContactHudderCard";
import contactuscar from "../assets/images/contactuscar.png";
import WorkTimetable from "../components/WorkTimetable";
import GetTouch from "../components/GetTouch";
import ConsumerInfo from "../components/ConsumerInfo";
export default function ContactUs() {
  return (
    <MainLayout>
      <div className="bg-[#f6f6f6] w-full h-fit  px-5 lg:px-24 flex justify-center items-center pb-12 md:pb-0 ">
        <div className="flex flex-col  w-full max-w-[1280px]">
          <div className="mt-8 flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="text-[40px] text-center md:text-left md:text-6xl font-bold   uppercase">
              contact us
            </div>
            <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end">
              <div className="  text-lg">Connect with us on</div>
              <div className=" flex flex-row items-center ">
                <a href="https://www.facebook.com/tmcmotorsales">
                   <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M18.7209 21.1938V27.3327H24.1481C26.6667 27.3327 26.6667 24.8142 26.6667 24.8142V7.81416C26.6667 4.66602 24.1481 4.66602 24.1481 4.66602H6.51852C6.51852 4.66602 4 4.66602 4 7.81416V24.8142C4 27.3327 6.51852 27.3327 6.51852 27.3327H14.9466V21.1938H12.011V17.7833H14.9466V13.3234C14.9466 13.3234 14.9466 10.9623 17.4628 10.9623L21.6564 10.9623V14.504H18.7209V17.7833H21.6564V21.1938H18.7209Z"
                    fill="url(#paint0_linear_270_9201)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_270_9201"
                      x1="5.10072"
                      y1="15.9994"
                      x2="26.6463"
                      y2="15.9994"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E91E24" />
                      <stop offset="1" stop-color="#1E32E9" />
                    </linearGradient>
                  </defs>
                </svg>
                </a>
                <a href="https://www.instagram.com/tmcmotorsales/">
                   <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M18.8283 13.1716C20.3904 14.7337 20.3904 17.2663 18.8283 18.8284C17.2662 20.3905 14.7335 20.3905 13.1714 18.8284C11.6094 17.2663 11.6094 14.7337 13.1714 13.1716C14.7335 11.6095 17.2662 11.6095 18.8283 13.1716Z"
                    fill="url(#paint0_linear_270_9203)"
                  />
                  <path
                    d="M21.25 4H10.75C7.02782 4 4 7.02782 4 10.75V21.25C4 24.9722 7.02782 28 10.75 28H21.25C24.9722 28 28 24.9722 28 21.25V10.75C28 7.02782 24.9722 4 21.25 4ZM16 22C12.6916 22 10 19.3091 10 16C10 12.6909 12.6916 10 16 10C19.3084 10 22 12.6909 22 16C22 19.3091 19.3084 22 16 22ZM22.75 10C22.3358 10 22 9.66418 22 9.25C22 8.83572 22.3358 8.5 22.75 8.5C23.1642 8.5 23.5 8.83572 23.5 9.25C23.5 9.66418 23.1642 10 22.75 10Z"
                    fill="url(#paint1_linear_270_9203)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_270_9203"
                      x1="12.3884"
                      y1="16"
                      x2="19.9927"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E91E24" />
                      <stop offset="1" stop-color="#1E32E9" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_270_9203"
                      x1="5.16547"
                      y1="16"
                      x2="27.9784"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E91E24" />
                      <stop offset="1" stop-color="#1E32E9" />
                    </linearGradient>
                  </defs>
                </svg>
                </a>
               <a href="https://www.youtube.com/channel/UCRKpJyWUA02C2ChaJ7FTg1g">
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M0.666687 4C0.666687 1.79086 2.45755 0 4.66669 0H23.3334C25.5425 0 27.3334 1.79086 27.3334 4V16C27.3334 18.2091 25.5425 20 23.3334 20H4.66668C2.45754 20 0.666687 18.2091 0.666687 16V4Z"
                    fill="url(#paint0_linear_270_9207)"
                  />
                  <path
                    d="M11.6471 11.7285V8.39022C11.6471 7.62217 12.477 7.14083 13.1437 7.52224L16.2856 9.31979C16.9817 9.71803 16.9494 10.7325 16.2293 11.0856L13.0874 12.6264C12.423 12.9522 11.6471 12.4685 11.6471 11.7285Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_270_9207"
                      x1="1.96165"
                      y1="10"
                      x2="27.3094"
                      y2="10"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E91E24" />
                      <stop offset="1" stop-color="#1E32E9" />
                    </linearGradient>
                  </defs>
                </svg>
               </a>
               <a href="https://wa.me/+447985432019">
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M16.6666 26.6667C22.9259 26.6667 28 21.5926 28 15.3333C28 9.07411 22.9259 4 16.6666 4C10.4074 4 5.33331 9.07411 5.33331 15.3333C5.33331 17.7215 6.07198 19.9372 7.33331 21.7643L5.94708 26.0864C5.69487 26.8727 6.45057 27.6086 7.22995 27.3355L12 25.6643C13.4231 26.3082 15.003 26.6667 16.6666 26.6667Z"
                    fill="url(#paint0_linear_270_9210)"
                  />
                  <path
                    d="M10.6667 10.084C10.6667 9.66977 11.0025 9.33398 11.4167 9.33398H13.0313C13.398 9.33398 13.7109 9.59904 13.7711 9.96069L14.3256 13.2876C14.3798 13.6124 14.2157 13.9345 13.9212 14.0817L12.7601 14.6623C13.5974 16.7427 15.2579 18.4033 17.3384 19.2405L17.919 18.0794C18.0662 17.7849 18.3883 17.6209 18.7131 17.675L22.04 18.2295C22.4016 18.2898 22.6667 18.6027 22.6667 18.9693V20.584C22.6667 20.9982 22.3309 21.334 21.9167 21.334H20.4167C15.0319 21.334 10.6667 16.9688 10.6667 11.584V10.084Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_270_9210"
                      x1="6.43403"
                      y1="16"
                      x2="27.9796"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E91E24" />
                      <stop offset="1" stop-color="#1E32E9" />
                    </linearGradient>
                  </defs>
                </svg>
               </a>
               
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col lg:flex-row lg:justify-between items-start">
            <div className="flex flex-col w-full lg:w-[48%]">
              <div className=" flex flex-col md:flex-row bg-white rounded-2xl">
                <ContactCard
                  title="TMC Oakhanger ( Head Office )"
                  location="The Goodwood Building The Yard, Oakhanger Bordon, GU35 9JU"
                  number1="+01252 943974" number2="+01252 943974" number3="01252 943974"
                />
                <ContactHudderCard
                  title="TMC-Huddersfield"
                  location="6 Barge Street, Huddersfield, HD1 3LN"
                  number="+01484 482511"
                />
              </div>
              <div className="mt-6"></div>
              <WorkTimetable />
              <div className="mt-6"></div>
              <img src={contactuscar} alt="contactuscar" className="rounded-2xl"/>
            </div>
            <div className="mt-8 lg:mt-0 flex flex-col w-full lg:w-[48%] mb-[100px] rounded-2xl bg-white">
              <div className="w-full py-8 px-5 md:px-10">
                <GetTouch />
                <div className="mt-20">
                  <ConsumerInfo />
                </div>
                <div className="mt-16 border-2 border-gray-800 text-center uppercase :cursor-pointer hover:text-white hover:bg-gray-800 bg-white w-full rounded-full text-black text-base font-semibold leading-relaxed">
                  Enquire Today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Value/>
    </MainLayout>
  );
}
