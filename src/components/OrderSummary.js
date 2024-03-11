import stripe from "../assets/images/stripe.png";
import washy from "../assets/images/checkout.png";
import { Link } from "react-router-dom";
export default function OrderSummary(props) {
  const { step, price, addfee } = props.data;
  return (
    <div>
      <div className="mt-6 md:mt-0 mx-5 md:mx-0 bg-white rounded-xl px-4 py-4 flex flex-col">
        <div className="flex flex-row border-b-2 pb-2 justify-between">
          <div className=" subtitle text-[20px] leading-[28px]">
            Order Summary
          </div>
          <a href="/" className="underline text-[#0000ff] uppercase text-[10px] font-bold">change vehicle?</a>
        </div>
        <img src={washy} className="w-full rounded-lg mt-4" alt="as"></img>
        <div className="mt-2   font-bold text-lg">Land Rover Freelander 2</div>
        <div className="mt-2 text-[14px] border-b-2 pb-2 ">BV59PZB 2.2TD4e HSE 4WD Euro 4 (s/s) 5dr Grey</div>
        <div className="mt-6 flex flex-row border-b-2 pb-2 justify-between">
          <div className="uppercase   ">price:</div>
          <div className="   text-[#0000ff] font-bold">£{(price + addfee).toLocaleString()}</div>
        </div>
        <div className="mt-6 w-full bg-[#f6f6f6] rounded-xl py-2 flex justify-center items-cneter">
          <div className="flex flex-col">
            <div className="uppercase  text-[14px] md:text-[16px]  ">buy in full price:</div>
            <div className="   text-center font-barlow-condensed text-[28px] md:text-2xl font-semibold leading-40 bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
              £{(price + addfee).toLocaleString()}
            </div>
          </div>
        </div>

        {step >= 1 && <div className="mt-2 w-full flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="uppercase   ">car price</div>
            <div className="   ">£{price.toLocaleString()}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="uppercase    ">additional fee</div>
            <div className="   ">£{addfee.toLocaleString()}</div>
          </div>
          <div className="mt-4 w-full border-t-2 "></div>
          <div className="mt-4 flex flex-row justify-between">
            <div className="   uppercase">total payment</div>
            <div className="text-[28px] md:text-base   text-[#0000ff] font-bold">£{(price + addfee).toLocaleString()}</div>
          </div>
        </div>
        }


      </div>
      <div className="mt-4 mx-4 md:mx-0 flex flex-row justify-between ">
        <div className="flex flex-row justify-center items-center">
          <div className="   text-gray-700 font-barlow-condensed text-[10px] md:text-base lg:text-md font-normal leading-20 uppercase">
            powered by
          </div>
          <img src={stripe} alt="stripe " className="h-[17px] w-[47px]   " />
        </div>
        <div className="flex flex-row">
          <div className="   text-gray-700 font-barlow-condensed text-[10px] md:text-base lg:text-md font-normal leading-20 uppercase">
            view full
          </div>
          <div className=" text-gray-700 font-barlow-condensed text-[10px] md:text-base lg:text-md font-semibold leading-19 underline uppercase">
            <Link to="/privacy">&nbsp;terms & conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
