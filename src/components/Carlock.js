import carlock from "../assets/images/carlock.png";
export default function Carlock(){
    return(
        <div className="mt-6  w-full flex flex-row rounded-xl relative">
                  <img
                    src={carlock}
                    alt="carlock"
                    className="w-[42%] h-[173px] md:h-fit"
                    style={{
                      borderRadius: "16px 0px 0px 16px",
                      background:
                        "linear-gradient(271deg, #272727 0.43%, rgba(39, 39, 39, 0.76) 17.95%, rgba(39, 39, 39, 0.00) 49.96%), url(" +
                        carlock +
                        "), lightgray 50% / cover no-repeat",
                    }}
                  />
                  <div
                    className="w-[58%] bg-black flex flex-col justify-center items-center"
                    style={{ borderRadius: "0px 16px 16px 0px " }}
                  >
                    <div className="w-full md:w-3/5 text-center font-barlow-cnodensed text-[24px] text-white leading-[32px]">
                      Want to book a test drive?
                    </div>
                    <div className="w-4/5 md:block hidden mt-4 text-black bg-white hover:bg-gray-300 rounded-full py-2 text-center text-[14px] hover:cursor-pointer">
                      BOOK A TEST DRIVE
                    </div>
                    <div className="w-[95%] md:hidden block mt-4 text-black bg-white hover:bg-gray-300 rounded-full py-2 text-center text-[14px] hover:cursor-pointer">
                      BOOK
                    </div>
                  </div>
                </div>

    )
}