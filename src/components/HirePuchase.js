
import TermRange from "./termRange";
import { useState } from "react";
import DepositeRange from "./depositeRange";
import Modal from 'react-modal'
// import {useState} from 'react';
// import { ReactComponent as FacebookSVG } from './svg/facebook.svg'
// import { ReactComponent as WhatsAppSVG } from './svg/whatsapp.svg'
// import { ReactComponent as EmailSVG } from './svg/email.svg'
import { ReactComponent as CloseSVG } from './svg/close.svg'
// import { ReactComponent as CopySVG } from './svg/copy.svg'
import { Typography } from '@material-tailwind/react'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    // borderRadius: '20px',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 1000
  }
};
export default function HirePuchase() {
  const [open, setOpen] = useState(false)
  const viewFinance = () => {
    document.body.style.overflow="hidden";
    setOpen(true);
  }
  return (
    <div className="mt-6 flex flex-col w-full border-2 rounded-2xl">
      <Modal
        isOpen={open}
        onRequestClose={() => {
          document.body.style.overflow="";
          setOpen(false);
        }}
        style={customStyles}
        contentLabel="all reviews">
        <div className='w-full  h-[100vh] sm:w-[350px] sm:h-fit md:w-[400px] p-2 sm:p-4'>
          <div className="flex justify-between w-full">
            <div
              className=" "
              itemScope=""
              itemType="https://schema.org/AutomotiveBusiness"
              bis_skin_checked="1">
              <Typography variant="h4" color="white" className="">
                Share To
              </Typography>
            </div>
            <div className="relative">
              <div
                onClick={() => {
                  document.body.style.overflow="";
                  setOpen(false);
                }}
                className="w-8 h-8 p-2  justify-center items-center gap-2 inline-flex  absolute top-0 right-0">
                <div className="w-8 h-8"><CloseSVG /></div>
              </div>
            </div>
          </div>
          <div className="flex h-full justify-center ">
            <div className="flex flex-col justify-center items-center gap-6">            
              <div className=" ">
                Your Volkswagen Caddy for <strong>£194.18</strong> a month at <strong>10.90%</strong> APR <strong>£0.00</strong> optional final payment
              </div>
              <div className=" text-sm w-full h-[70%] sm:h-[600px] overflow-y-scroll sm:overflow-hidden">
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  ">Finance Product</div>
                  <div className="   font-bold">Hire Purchase</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  uppercase">Duration of Agreement</div>
                  <div className="  uppercase font-bold">48 Months</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  uppercase">Vehicle Price</div>
                  <div className="  uppercase font-bold">£9,500.00</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  uppercase">Customer Deposit</div>
                  <div className="  uppercase font-bold">£1,900.00</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  uppercase">Total Deposit</div>
                  <div className="  uppercase font-bold">£1,900.00</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  uppercase">Vehicle Price</div>
                  <div className="  uppercase font-bold">£9,500.00</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  ">Total Deposit</div>
                  <div className="   font-bold">£1,900.00</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  uppercase">Balance to Finance</div>
                  <div className="  uppercase font-bold">£1,900.00</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  uppercase">Total Charge For Credit</div>
                  <div className="  uppercase font-bold">£1,720.64</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  uppercase">Total   Amount Payable</div>
                  <div className="  uppercase font-bold">£11.220.64</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  uppercase">48 Monthly Payments</div>
                  <div className="  uppercase font-bold">£194.1B</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  uppercase">APR</div>
                  <div className="  uppercase font-bold">10.9% APR</div>
                </div>
                <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                  <div className="  uppercase">Interest Rate(Fixed)</div>
                  <div className="  uppercase font-bold">10.9%</div>
                </div>
                <div className="flex flex-row justify-between py-2 px-4 border-gray-300">
                  <div className="  uppercase">Cash Price Inc VAT</div>
                  <div className="  uppercase font-bold">£1,900.00</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </Modal>


      <div className="rounded-t-2xl bg-white p-6">
        <div className="  text-center text-gray-700 font-barlow-condensed font-bold text-2xl leading-10">
          Hire Purchase
        </div>
        <div className="flex flex-row justify-center items-end">
          <div className="mt-2 text-[#0449cb] text-4xl font-bold text-center  ">
            £224.85
          </div>
          <div className="  text-md">/month</div>
        </div>
        {/* <div className="mt-10 flex flex-row justify-between">
          <div className=" ">Term</div>
          <div className="mb-4  ">45month</div>
        </div> */}
        <TermRange min={0} max={28} symbol={"£"} />
        {/* <div className="mt-14 flex flex-row justify-between">
          <div className=" ">Deposite</div>
          <div className="mb-4  ">£3,224.85</div>
        </div> */}
        <DepositeRange min={0} max={28} symbol={"£"} />
        <div className="mt-10"></div>
      </div>
      <div className="rounded-b-2xl py-4 px-6 flex flex-col md:justify-between md:flex-row">
        <div className="w-full md:w-[55%] bg-black text-white flex hover:bg-gray-700 justify-center items-center py-[10px] rounded-full uppercase ">APPLY FOR FINANCE</div>
        <div className="w-full md:w-[35%] bg-black mt-4 md:mt-0 text-white flex hover:bg-gray-700 justify-center items-center py-[10px] rounded-full uppercase " onClick={viewFinance}>VIEW FINANCE DETAILS</div>
      </div>
    </div>
  );
}
