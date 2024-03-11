import {useState} from "react";
export default function Overview(props) {
  const item=props.ele;
  const [more,setMore]=useState(false)
  const description=["OCTAVIA VRS CAME IN PART EXCHANGE AGAINST A NEW PICK UP TRUCK. PX TO CLEAR DUE TO AGE AND MILEAGE. BASED ON SITE AT TMC MOTORS, THE YARD, OAKHANGER, HANTS, GU35 0PN.","PLEASE CALL 01252597970 FOR FURTHER DETAILS OR TO ARRANGE A TEST DRIVE. NO WARRANTY OR FINANCE AVAILABLE."];
  const handleReadMore = () => {
    setMore(!more);
  };
  return (
      <div className="py-6 flex flex-col justify-center bg-white">
          <div className=" text-gray-900 font-barlow text-base font-normal leading-6 lowercase ">
          {more ? description.join(' ') : description[0]}
          </div>   
          <div className="mt-4 hover:cursor-pointer hover:text-blue-800 text-blue-600 font-barlow text-base font-normal leading-6"  onClick={handleReadMore}  >Read {more?'less':'more'} </div>
          <div className="text-sm mt-6 w-full md:w-1/2 bg-[#f6f6f6] rounded-2xl">
            <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
              <div className="  uppercase">Registration</div>
              <div className="  uppercase font-bold">{item.vehicle.registration}</div>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
              <div className="  uppercase">Color</div>
              <div className="  uppercase font-bold">Gray</div>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
              <div className="  uppercase">fule type</div>
              <div className="  uppercase font-bold">{item.vehicle.fuelType}</div>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
              <div className="  uppercase">BodyType</div>
              <div className="  uppercase font-bold">{item.vehicle.bodyType}</div>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
              <div className="  uppercase">OdometerReadingMiles</div>
              <div className="  uppercase font-bold">{parseInt(item.vehicle.odometerReadingMiles).toLocaleString()}</div>
            </div>
            <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
              <div className="  uppercase">EngineCapacityCC</div>
              <div className="  uppercase font-bold">{parseInt(item.vehicle.engineCapacityCC).toLocaleString()}</div>
            </div>
            <div className="flex flex-row justify-between py-2 px-4 border-gray-300">
              <div className="  uppercase">TransmissionType</div>
              <div className="  uppercase font-bold">{item.vehicle.transmissionType}</div>
            </div>
          </div>
      </div>
  )
}