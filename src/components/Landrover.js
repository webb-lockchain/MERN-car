import React, { useState } from "react"
import { Link } from "react-router-dom";
import Datepicker from "tailwind-datepicker-react"
export default function Landrover() {
  const [show, setShow] = useState(false);
  const [bestTime, setBestTime] = useState('morning');

  const [termChecked, setTermChecked] = useState(false);
  const [policyChecked, setPolicyChecked] = useState(false);
  const [contractChecked, setContractChecked] = useState(false);
  const [phoneChecked, setPhoneChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [smsChecked, setSmsChecked] = useState(false);
  const [letterChecked, setLetterChecked] = useState(false);


  const handleChange = (selectedDate) => {
  }
  const handleClose = (state) => {
    setShow(state)
  }
  const options = {
    // title: "Demo Title",
    // autoHide: true,
    // todayBtn: false,
    // clearBtn: true,
    // clearBtnText: "Clear",
    // maxDate: new Date("2030-01-01"),
    // minDate: new Date("1950-01-01"),
    theme: {
      // background: "bg-gray-700 dark:bg-gray-800",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      // disabledText: "bg-red-500",
      input: "",
      inputIcon: "",
      selected: "",
    },
    // icons: {
    //   // () => ReactElement | JSX.Element
    //   prev: () => <span>Previous</span>,
    //   next: () => <span>Next</span>,
    // },
    datepickerClassNames: "top-240 rounded-full",
    // defaultDate: new Date("2022-01-01"),
    // language: "en",
    // disabledDates: [],
    // weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    // inputNameProp: "date",
    // inputIdProp: "date",
    // inputPlaceholderProp: "Select Date",
    // inputDateFormatProp: {
    //   day: "numeric",
    //   month: "long",
    //   year: "numeric"
    // }
  }


  return (
    <div className="">
      <div className="text-gray-900 font-barlow-condensed text-[20px] md:text-4xl font-bold leading-40 uppercase   ">
        getting your land rover freelander 2
      </div>
      <div className="mt-8 flex flex-col w-full">
        <div className="">
          Choose how you’d like to get Land Rover Freelancer 2:
        </div>
        <select
          type="text"
          placeholder="Address 1"
          className="mt-2 bg-[#f6f6f6] px-6 py-3 border-2 w-full rounded-full"
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div className="mt-2 bg-[#f6f6f6] px-6 py-2 border-2 text-blue-700 font-semibold w-full rounded-full flex flex-row justify-left items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33398 8.66675L6.00065 11.3334L12.6673 4.66675"
            stroke="#0449C8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="ml-3 ">Your vehicle will be ready in 4 days</div>
      </div>
      <div className="mt-6">I’d like to have my vehicle on</div>



      {/* <input
        type="text"
        placeholder="28/11/2023"
        className="mt-2 bg-[#f6f6f6] px-6 py-3 border-2 w-full rounded-full"
      ></input> */}
      <div className="mt-2">

        <Datepicker  options={options}  onChange={handleChange} show={show} setShow={handleClose} />
      </div>



      <div className="mt-8  p-6 bg-[#f6f6f6] flex flex-col rounded-2xl">
        <div className="text-gray-900 font-barlow-condensed text-32 font-bold leading-40 uppercase ">
          what to expect
        </div>
        <div className="mt-2">
          We would like to, from time to time, send you details of any offers
          and latest news. Please can you indicate, by checking the appropriate
          boxes below, which channels you would like to be contacted by.
        </div>
        <div className="mt-2">
          Please select the best time(s) for us to contact you:
        </div>
        <div className="mt-2">
          Please select the best time(s) for us to contact you:
        </div>
        <div className="mt-4 flex flex-row">
          <div className="uppercase flex flex-col md:flex-row">
            <div className="text-sm bg-white rounded-md py-2 pr-4 pl-2 flex flex-row">
              <label className="custom-checkboxl">
                <input type="checkbox" className="hidden" checked={bestTime === "morning"} onChange={() => setBestTime('morning')} />
                <span className="checkmark"></span>
              </label>
              <div className={`ml-3 + ${bestTime === 'morning' ? 'font-bold' : ''}`}>morning</div>
            </div>
            <div className="mt-[14px] md:mt-0 md:ml-[14px] text-sm bg-white rounded-md py-2 pr-4 pl-2 flex flex-row">
              <label className="custom-checkboxl">
                <input type="checkbox" className="hidden" checked={bestTime === "afternoon"} onChange={() => setBestTime('afternoon')} />
                <span className="checkmark"></span>
              </label>
              <div className={`ml-3 + ${bestTime === 'afternoon' ? 'font-bold' : ''}`}>afternoon</div>
            </div>
            <div className="mt-[14px] md:mt-0 md:ml-[14px] text-sm bg-white rounded-md py-2 pr-4 pl-2 flex flex-row">
              <label className="custom-checkboxl">
                <input type="checkbox" className="hidden" checked={bestTime === "night"} onChange={() => setBestTime('night')} />
                <span className="checkmark"></span>
              </label>
              <div className={`ml-3 + ${bestTime === 'night' ? 'font-bold' : ''}`}>night</div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className=" ">Anything you would like to add</div>
          <input type="text" className="mt-2 w-full px-6 py-3 bg-white text-black rounded-xl border-2" placeholder="Note"></input>
        </div>
      </div>
      <div className="mt-8 text-gray-800   font-barlow-condensed text-32 font-bold leading-8 uppercase">
        Make This Land Rover Freelander 2 Yours Today
      </div>
      <div className="mt-10 md:mt-0">
        You're almost there - just one last step to complete! Just go to the secure payment gateway to pay the £2,500 payable now and make this Land Rover Freelander 2 yours today!
      </div>
      <div className="mt-8 md:mt-4 flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <label className="mt-1 custom-checkboxr">
              <input type="checkbox" className="hidden" onChange={() => setTermChecked(!termChecked)} />
              <span className="checkmark"></span>
            </label>
            <div className={`ml-3 + ${termChecked ? 'font-bold' : ''}`}>
              I have read and accept the <Link to="/privacy" className="text-blue-500 underline">Terms and Conditions</Link>
            </div>
          </div>          
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"  className="mt-1">
            <path d="M8.66667 10.6667H8V8H7.33333M8 5.33333H8.00667M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="#0449C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>
        <div className="mt-[14px] flex flex-row justify-between">
          <div className="flex flex-row">
            <label className="mt-1 custom-checkboxr">
              <input type="checkbox" className="hidden" onChange={() => setPolicyChecked(!policyChecked)} />
              <span className="checkmark"></span>
            </label>
            <div className={`ml-3 + ${policyChecked ? 'font-bold' : ''}`}>
              I have read and accept the <Link to="/privacy" className="text-blue-500 underline">Privacy Policy</Link>
            </div>
          </div>          
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
            <path d="M8.66667 10.6667H8V8H7.33333M8 5.33333H8.00667M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="#0449C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>
        <div className="mt-[14px] flex flex-row items-start">
          <label className="mt-1 custom-checkboxr">
            <input type="checkbox" className="hidden" onChange={() => setContractChecked(!contractChecked)} />
            <span className="checkmark"></span>
          </label>
          <div className={`ml-3 + ${contractChecked ? 'font-bold' : ''}`}>I acknowledge that I have the right to cancel my contract within 14 days of receiving the vehicle (subject to <Link to="/privacy" className="text-blue-500">Terms and Conditions</Link>)</div>
        </div>
      </div>
      <div className="mt-8 bg-[#f6f6f6] rounded-2xl">
        <div className="p-6 flex flex-col">
          <div className="text-gray-800   font-barlow-condensed text-32 font-bold leading-8 uppercase">
            Your Preferences
          </div>

          <div className="mt-5 ">We would like to, from time to time, send you details of any offers and latest news. Please can you indicate, by checking the appropriate boxes below, which channels you would like to be contacted by.</div>
          <div className="mt-4 flex flex-col md:flex-row">
            <div className="flex flex-row items-center py-2 pl-2 pr-4">
              <label className="custom-checkboxr">
                <input type="checkbox" className="hidden" onChange={() => setPhoneChecked(!phoneChecked)} />
                <span className="checkmark"></span>
              </label>
              <div className={`ml-3 uppercase + ${phoneChecked ? 'font-bold' : ''}`} >phone</div>

            </div>
            <div className="mt-[14px] md:mt-0 flex flex-row items-center py-2 pl-2 pr-4">
              <label className="custom-checkboxr">
                <input type="checkbox" className="hidden" onChange={() => setEmailChecked(!emailChecked)} />
                <span className="checkmark"></span>
              </label>
              <div className={`ml-3 uppercase + ${emailChecked ? 'font-bold' : ''}`} >email</div>
            </div>
            <div className="mt-[14px] md:mt-0 flex flex-row items-center py-2 pl-2 pr-4">
              <label className="custom-checkboxr">
                <input type="checkbox" className="hidden" onChange={() => setSmsChecked(!smsChecked)} />
                <span className="checkmark"></span>
              </label>
              <div className={`ml-3 uppercase + ${smsChecked ? 'font-bold' : ''}`} >sms</div>
            </div>
            <div className="mt-[14px] md:mt-0 flex flex-row items-center py-2 pl-2 pr-4">
              <label className="custom-checkboxr">
                <input type="checkbox" className="hidden" onChange={() => setLetterChecked(!letterChecked)} />
                <span className="checkmark"></span>
              </label>
              <div className={`ml-3 uppercase + ${letterChecked ? 'font-bold' : ''}`} >letter</div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
