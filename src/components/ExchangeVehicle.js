export default function ExchangeVehicle() {
  return (
    <div className="md:mt-12 mx-5 md:mx-0 p-8 bg-white rounded-2xl ">
      <div className="text-center subtitle text-[32px] leading-[40px] uppercase">
        part exchange your vehicle
      </div>
      <div className="mt-2 text-center  ">
        enter your registration number below to get a quote for part exchanging
        your vehicle.{" "}
      </div>
      <div className="w-full md:w-1/2 mx-auto">
        <div className="hidden  mt-8  pr-1 py-1 lg:flex flex-row justify-between w-full  bg-white rounded-full border-2 border-gray-300 text-gray-700 font-saira-condensed font-medium text-base leading-6">
          <input
            type="text"
            className="w-1/2 ml-6 outline-none"
            placeholder="Enter your registration number"
          />
          <div
            // onClick={() => setOpenQuick(false)}
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
          <div className="hover:text-white text-center mt-8 w-fit hover:cursor-pointer bg-white rounded-full text-black py-3 px-6 hover:bg-gray-800 shadow-lg">
            GET A QUICK VALUATIONS
          </div>
        </div>
      </div>
    </div>
  );
}
