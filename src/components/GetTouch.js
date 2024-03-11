
export default function GetTouch() {
  return (
    <div className="flex flex-col items-left ">
      <div className="text-4xl font-bold  ">Get in touch with us</div>
      <div className="flex flex-col mt-6">
        <div className="mt-4">
          <div className="mb-2 w-full float-right border-0">
            <select className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6">
              <option value="option1">Gasoline</option>
              <option value="option2">Dissel</option>
              <option value="option3">Battery</option>
              <option value="option1">Hydrogen</option>
              <option value="option3">Uranium</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap flex-row justify-between">
          <div className="w-full lg:w-[46%] flex flex-col">
            <input
              type="text" placeholder="Title"
              className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
            ></input>
          </div>
          <div className="w-full lg:w-[46%] flex flex-col">
            <input
              type="text" placeholder="Name"
              className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
            ></input>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap flex-row justify-between">
          <div className="w-full lg:w-[46%] flex flex-col">
            <input
              type="text" placeholder="Email"
              className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
            ></input>
          </div>
          <div className="w-full lg:w-[46%] flex flex-col">
            <input
              type="text" placeholder="Contact number"
              className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
            ></input>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2 w-full float-right border-0">
            <select className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6">
              <option value="option1">Gasoline</option>
              <option value="option2">Dissel</option>
              <option value="option3">Battery</option>
              <option value="option1">Hydrogen</option>
              <option value="option3">Uranium</option>
            </select>
          </div>
        </div>
        <textarea
          className="mt-6 w-full pl-2 pt-4 border-2 border-gray-300 h-20 rounded-2xl"
          placeholder="Your Enquiry"
        ></textarea>
      </div>
    </div>
  );
}
