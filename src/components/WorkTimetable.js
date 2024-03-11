
export default function WorkTimetable() {  
  return (
      <div className="px-6 py-8 rounded-2xl bg-white w-full flex flex-col items-left">
        <div className=" text-2xl   font-bold">Opening Hours</div>
        <div className="flex flex-col mt-4">                             
            <div className="text-base w-full font-semibold flex text-gray-900 justify-between">
              <span className="min-w-[40%]  ">Monday</span>
              <span className="  ">8:30am-5:30pm</span>
            </div>
            <div className="text-base  w-full font-semibold flex text-gray-900 justify-between">
              <span className="min-w-[40%]   ">Tuesday</span>
              <span className="  ">8:30am-5:30pm</span>
            </div>
            <div className="text-base  w-full font-semibold flex text-gray-900 justify-between">
              <span className="min-w-[40%]   ">Wednesday</span>
              <span className="  ">8:30am-5:30pm</span>
            </div>
            <div className="text-base  w-full font-semibold flex text-gray-900 justify-between">
              <span className="min-w-[40%]   ">Thursday</span>
              <span className="  ">8:30am-5:30pm</span>
            </div>
            <div className="text-base  w-full font-semibold flex text-gray-900 justify-between">
              <span className="min-w-[40%]   ">Friday</span>
              <span className="  ">8:30am-5:30pm</span>
            </div>
            <div className="text-base  w-full font-semibold flex text-gray-900 justify-between">
              <span className="min-w-[40%]   ">Saturday</span>
              <span className="  ">8:30am-5:30pm</span>
            </div>
            <div className="text-base  w-full font-semibold flex text-gray-900 justify-between">
              <span className="min-w-[40%]   ">Sunday</span>
              <span className="  ">8:30am-5:30pm</span>
            </div>
        </div>
      </div>
  )
}