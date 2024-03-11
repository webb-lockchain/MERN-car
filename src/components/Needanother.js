export default function Needanother() {
  return (
    <div className="bg-white rounded-2xl mt-[50px] p-[24px] flex flex-col justify-center items-center">
      <div className="subtitle text-[24px] leading-[32px] font-normal">
        Need another way to buy?
      </div>
      <div className="mt-2   text-black text-center font-barlow text-base font-normal leading-6 ">
        Want to try another way of buying click Reserve Vehicle, Checking you
        finance availability, or have any question? Make an enquiry
      </div>
      <div className="w-full mt-6 flex flex-col md:flex-row justify-between">
        <div className="border-2 bg-black text-white hover:bg-gray-700 flex flex-row justify-center items-center py-[10px] w-full  md:w-[30%] rounded-full uppercase">
          <div className="flex flex-row items-center  ">Reserve Vehicle</div>
        </div>
        <div className="border-2 bg-black text-white hover:bg-gray-700 flex flex-row justify-center items-center py-[10px] w-full mt-2 md:mt-0 md:w-[30%] rounded-full uppercase">
          <div className="flex flex-row items-center  ">Make an inquiry</div>
        </div>
        <div className="border-2 bg-black text-white hover:bg-gray-700 flex flex-row justify-center items-center py-[10px] w-full mt-2 md:mt-0  md:w-[30%] rounded-full uppercase">
          <div className="flex flex-row items-center  ">Free finance check</div>
        </div>
      </div>
    </div>
  );
}
