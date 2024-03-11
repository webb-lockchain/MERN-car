import { Link } from "react-router-dom";
import React, { useState } from "react";
export default function ConsumerInfo() {  
  const [lettersClicked, setLettersClicked] = useState(false);
  const [smsClicked, setSmsClicked] = useState(false);
  const [phoneClicked, setPhoneClicked] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);
  return (
      <div className="flex flex-col items-left ">
        <div className="text-2xl font-bold  ">Consumer Information</div>
        <div className="flex flex-col mt-8   ">    
        We would like to stay in touch with you to keep up to date with our latest product news, marketing services and offers. If you would like to receive future information by either of the methods below, please indicate by selecting the option. All information provided will be used and processed in accordance with our Privacy Policy. For more information please see our <Link to="/privacy"><span className="underline hover:text-blue-500">Privacy Policy.</span></Link>
        </div>   
        {/* <div className="flex flex-wrap flex-row mt-8">
          <div className="mt-2 mr-2 p-2 bg-[#f6f6f6] rounded-xl"><input type="checkbox"/> &nbsp;Phone</div>
          <div className="mt-2 mr-2 p-2 bg-[#f6f6f6] rounded-xl"><input type="checkbox" className=""/> &nbsp;Email</div>
          <div className="mt-2 mr-2 p-2 bg-[#f6f6f6] rounded-xl"><input type="checkbox" className=""/> &nbsp;SMS</div>
          <div className="mt-2 mr-2 p-2 bg-[#f6f6f6] rounded-xl"><input type="checkbox" className=""/> &nbsp;Letter</div>
        </div> */}
        
         <div className="flex flex-wrap flex-row mt-8 uppercase">
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
          </div>
        
      </div>
  )
}