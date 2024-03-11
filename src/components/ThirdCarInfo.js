import React, { useState } from "react";


export default function ThirdCarInfo({ visible }) {

  const [lettersClicked, setLettersClicked] = useState(false);
  const [smsClicked, setSmsClicked] = useState(false);
  const [phoneClicked, setPhoneClicked] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);

  const handleBack = () => {
    visible(2); // This will call the setOpenQuick function and pass true as an argument
  };
  const handleContinue = () => {
    visible(0); // This will call the setOpenQuick function and pass true as an argument
  };
  return (
    <>
      <div className="w-full bg-white rounded-2xl p-8 flex flex-col">
        <div className="  uppercase font-bold text-black text-3xl">
          your contact details
        </div>
        <div className="  mt-10">
          You’re nearly finished. All we need now is few more details including
          you contact information which we will use to let you know our
          valuation of your car. When you have filled out the form, please click
          the get valuation button and we’ll contact you within 24 hours (one
          working day)
        </div>

        <div className="mt-8 flex flex-col lg:flex-row md:justify-between">
          <div className="w-full lg:w-[46%] flex flex-col">
            <div className=" ">
              Number of Doors
              <span className="text-red-600 font-bold">*</span>
            </div>
            <div className="mb-2 w-full float-right border-0">
              <select className="mt-2 w-full  bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6">
                <option value="option1">4</option>
                <option value="option2">3</option>
                <option value="option3">2</option>
                <option value="option1">1</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-[46%] flex flex-col">
            <div className="  ">
              Colour<span className="text-red-600 font-bold">*</span>
            </div>
            <div className="mb-2 w-full float-right border-0">
              <select className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6">
                <option value="option1">
                  <div className="flex flex-row pl-2 items-center">
                    <div className="w-5 h-5 border-2 border-red-500 rounded-full bg-red-500"></div>
                    <div className="ml-2">Black</div>
                  </div>
                </option>
                <option value="option2">
                  <div className="flex flex-row pl-2 items-center">
                    <div className="w-5 h-5 border-2 border-red-500 rounded-full bg-red-500"></div>
                    <div className="ml-2">Red</div>
                  </div>
                </option>
                <option value="option3">
                  <div className="flex flex-row pl-2 items-center">
                    <div className="w-5 h-5 border-2 border-red-500 rounded-full bg-red-500"></div>
                    <div className="ml-2">Blue</div>
                  </div>
                </option>
                <option value="option1">
                  <div className="flex flex-row pl-2 items-center">
                    <div className="w-5 h-5 border-2 border-red-500 rounded-full bg-red-500"></div>
                    <div className="ml-2">White</div>
                  </div>
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap flex-row justify-between">
          <div className="w-full lg:w-[46%] flex flex-col">
            <div className="  ">
              First Name
              <span className="text-red-600 font-bold">*</span>
            </div>
            <input
              type="text"
              className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
            ></input>
          </div>
          <div className="w-full lg:w-[46%] flex flex-col">
            <div className="  ">
              Last Name<span className="text-red-600 font-bold">*</span>
            </div>
            <input
              type="text"
              className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
            ></input>
          </div>
        </div>

        <div className="mt-8   ">
          Email Address<span className="text-red-600 font-bold">*</span>
        </div>
        <input
          type="text"
          className="outline-none mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
        />
        <div className="mt-4 flex flex-wrap flex-row justify-between">
          <div className="w-full lg:w-[46%] flex flex-col">
            <div className="  ">
              Mobile Phone
              <span className="text-red-600 font-bold">*</span>
            </div>
            <input
              type="text"
              className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
            ></input>
          </div>
          <div className="w-full lg:w-[46%] flex flex-col">
            <div className="  ">
              Telephone Number<span className="text-red-600 font-bold">*</span>
            </div>
            <input
              type="text"
              className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
            ></input>
          </div>
        </div>
        <div className="mt-8   ">
          Postcode<span className="text-red-600 font-bold">*</span>
        </div>
        <input
          type="text"
          className="outline-none mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
        />
        <div className="flex flex-wrap flex-row mt-8 uppercase">
          <div className={`mt-2 mr-3 p-2 bg-[#f6f6f6] rounded-lg uppercase ${lettersClicked ? 'font-bold' : ''}`}>
            <label className="custom-checkboxr mr-3">
              <input type="checkbox" className="hidden" onChange={() => setLettersClicked(!lettersClicked)} />
              <span className="checkmark"></span>
            </label>
            LETTERS
          </div>
          <div className={`mt-2 mr-0 md:mr-3 p-2 bg-[#f6f6f6] rounded-lg uppercase ${smsClicked ? 'font-bold' : ''}`}>
            <label className="custom-checkboxr mr-3">
              <input type="checkbox" className="hidden" onChange={() => setSmsClicked(!smsClicked)} />
              <span className="checkmark"></span>
            </label>
            SMS
          </div>
          <div className={`mt-2 mr-3 p-2 bg-[#f6f6f6] rounded-lg uppercase ${phoneClicked ? 'font-bold' : ''}`}>
            <label className="custom-checkboxr mr-3">
              <input type="checkbox" className="hidden" onChange={() => setPhoneClicked(!phoneClicked)} />
              <span className="checkmark"></span>
            </label>
            Phone
          </div>
          <div className={`mt-2 mr-0 md:mr-3 p-2 bg-[#f6f6f6] rounded-lg uppercase ${emailClicked ? 'font-bold' : ''}`}>
            <label className="custom-checkboxr mr-3">
              <input type="checkbox" className="hidden" onChange={() => setEmailClicked(!emailClicked)} />
              <span className="checkmark"></span>
            </label>
            Email
          </div>
        </div>

        <div className="mt-8 border-t-2"></div>
        <div className="mt-8 flex flex-row justify-between">
          <div
            className="hover:cursor-pointer uppercase py-2 px-3 text-[14px] rounded-full border-2 border-black bg-white hover:text-white hover:bg-black"
            onClick={handleBack}
          >
            <div className="flex flex-row justify-center items-center">
              <svg
                // class="svg-icon"
                className="w-5 h-5"
                // style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M896 810.666667c-8.533333 0-17.066667-4.266667-25.6-8.533333l-384-256C477.866667 537.6 469.333333 524.8 469.333333 512s8.533333-25.6 17.066667-34.133333l384-256c12.8-8.533333 29.866667-8.533333 42.666667 0C930.133333 226.133333 938.666667 238.933333 938.666667 256l0 512c0 17.066667-8.533333 29.866667-21.333333 38.4C908.8 810.666667 904.533333 810.666667 896 810.666667zM588.8 512l264.533333 174.933333L853.333333 337.066667 588.8 512z" />
                <path d="M512 810.666667c-8.533333 0-17.066667-4.266667-25.6-8.533333l-384-256C93.866667 537.6 85.333333 524.8 85.333333 512s8.533333-25.6 17.066667-34.133333l384-256c12.8-8.533333 29.866667-8.533333 42.666667 0C546.133333 226.133333 554.666667 238.933333 554.666667 256l0 512c0 17.066667-8.533333 29.866667-21.333333 38.4C524.8 810.666667 520.533333 810.666667 512 810.666667zM204.8 512l264.533333 174.933333L469.333333 337.066667 204.8 512z" />
              </svg>
              <div className="ml-2">GO BACK</div>
            </div>
          </div>
          <div
            className="hover:cursor-pointer text-[14px] px-3 uppercase py-2 rounded-full border-2 border-black bg-white hover:text-white hover:bg-black"
            onClick={handleContinue}
          >
            continue
          </div>
        </div>
      </div>
    </>
  );
}
