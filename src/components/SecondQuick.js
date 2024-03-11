
import QuickCarInfo from "./QuickCarInfo";
export default function SecondQuickValue({ visible }) {
  const handleBack = () => {
    visible(1); // This will call the setOpenQuick function and pass true as an argument
  };
  const handleContinue = () => {
    visible(3); // This will call the setOpenQuick function and pass true as an argument
  };

  return (
    <div className="w-full bg-[#f6f6f6] flex flex-col md:flex-row justify-center items-center py-[50px]  px-[20px] md:px-0">
      <div className="w-full max-w-[1360px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between rounded-2xl">
          <div className="w-full md:w-[27%]">
            <QuickCarInfo />
          </div>
          <div className="w-full md:w-[70%]">
            <div className="w-full bg-white rounded-2xl p-8 flex flex-col">
              <div className="  uppercase font-bold text-black text-3xl">
                Additional Information
              </div>
              <div className="  mt-4">
                You are 2 steps away from your valuation.
              </div>
              <div className="mt-8   ">
                What is the current Mileage?{" "}
              </div>
              <input
                type="text"
                className="outline-none mt-2 w-full bg-[#f6f6f6] border-2 border-gray-200 rounded-full py-3 px-6"
              ></input>
              <div className="mt-8 border-t-2"></div>
              <div className="mt-8 flex flex-wrap flex-row w-full text-[14px] justify-between">
                <div className="hover:cursor-pointer uppercase py-2 px-2 md:px-8 rounded-full border-2 border-black bg-white hover:text-white hover:bg-black"
                  onClick={handleBack}
                >
                  <div className="flex flex-row justify-center items-center">
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
                    <div className="ml-2">GO BACK</div>
                  </div>
                </div>
                <div className="hover:cursor-pointer uppercase py-2 px-3 md:px-8 rounded-full border-2 border-black bg-white hover:text-white hover:bg-black"
                  onClick={handleContinue}
                >
                  continue
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
