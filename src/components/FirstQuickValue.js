
export default function FirstQuickValue({ visible }) {
  const handleBack = () => {
    visible(0); // This will call the setOpenQuick function and pass true as an argument
  };
  const handleContinue = () => {
    visible(2); // This will call the setOpenQuick function and pass true as an argument
  };
  return (
    <div className="w-full bg-[#f6f6f6] flex flex-col md:flex-row justify-center items-center py-[50px]  px-[20px] md:px-0">
      <div className="w-full lg:w-3/5 mx-auto">
        <div className="flex flex-col bg-white rounded-2xl p-8">
          <div className="uppercase text-2xl    font-bold">
            get a quick valuation on your vehicle
          </div>
          <div className="mt-2   ">
            Input your car info and get your vehicle quick valuation
          </div>
          <div className="mt-8  ">
            Registration Number
            <span className="text-red-600 font-bold">*</span>
          </div>
          <input
            type="text"
            className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
          ></input>
          <div className="mt-4 flex flex-wrap flex-row justify-between">
            <div className="w-full lg:w-[30%] flex flex-col">
              <div className="  ">
                Make/Brand
                <span className="text-red-600 font-bold">*</span>
              </div>
              <input
                type="text"
                className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
              ></input>
            </div>
            <div className="w-full lg:w-[30%] flex flex-col">
              <div className="  ">
                Model<span className="text-red-600 font-bold">*</span>
              </div>
              <input
                type="text"
                className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
              ></input>
            </div>
            <div className="w-full lg:w-[30%] flex flex-col">
              <div className="  ">
                Version<span className="text-red-600 font-bold">*</span>
              </div>
              <input
                type="text"
                className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
              ></input>
            </div>
          </div>
          <div className="mt-4  ">
            Fuel Type<span className="text-red-600 font-bold">*</span>
          </div>

          <div className="mb-2 w-full float-right border-0">
            <select className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6">
              <option value="option1">Gasoline</option>
              <option value="option2">Dissel</option>
              <option value="option3">Battery</option>
              <option value="option1">Hydrogen</option>
              <option value="option3">Uranium</option>
            </select>
          </div>

          <div className="mt-4">
            Year Manufacture
            <span className="text-red-600 font-bold">*</span>
          </div>
          <div className="mb-2 w-full float-right border-0">
            <select className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6">
              <option value="option1">2023</option>
              <option value="option2">2022</option>
              <option value="option3">2021</option>
              <option value="option1">2020</option>
              <option value="option3">2019</option>
            </select>
          </div>

          <div className="mt-4">
            Engine Size<span className="text-red-600 font-bold">*</span>
          </div>
          <input
            type="text"
            className="mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
          ></input>
          <div className="mt-4 flex flex-col lg:flex-row md:justify-between">
            <div className="w-full lg:w-[30%] flex flex-col">
              <div className="">
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
            <div className="w-full lg:w-[30%] flex flex-col">
              <div className="">
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
            <div className="w-full lg:w-[30%] flex flex-col">
              <div className="">
                Transmission
                <span className="text-red-600 font-bold">*</span>
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
          <div className="mt-8 border-t-2"></div>
          <div className="mt-8 flex flex-wrap flex-row w-full justify-between">
            <div className="hover:cursor-pointer px-2 uppercase py-2 md:px-8 rounded-full border-2 border-black bg-white hover:text-white hover:bg-black"
              onClick={handleBack}
            >
             <div className="flex flex-row  px-1 justify-center items-center">
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
              <div className="ml-2 text-[14px] ">GO BACK</div>
            </div>
            </div>
            <div
              className="text-[14px] px-3 hover:cursor-pointer uppercase py-2 md:px-8 rounded-full border-2 border-black bg-white hover:text-white hover:bg-black"
              onClick={handleContinue}
            >
              continue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
