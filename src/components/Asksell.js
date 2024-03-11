
import carintro from "../assets/images/carintoro.png";
export default function Asksell(){
    return(
        <div className="mt-6 w-full flex flex-row rounded-xl">
        <img
          src={carintro}
          alt="carlock"
          className="w-[42%] h-[184px] md:h-fit"
          style={{
            borderRadius: "16px 0px 0px 16px",
            background:
              "white",
          }}
        />
        <div
          className="w-[58%] bg-white flex flex-col justify-center items-center"
          style={{ borderRadius: "0px 16px 16px 0px " }}
        >
          <div className="text-gray-800 text-center   font-bold text-xl ">
            Want to sell you vehicle?
          </div>
          <div className="text-black text-center   ">
            try to value your car first to see how worth your car is.
          </div>
          <div className="mt-2 md:mt-4 text-white bg-black hover:bg-gray-800 mb-2 border-2 w-[95%] md:w-4/5 rounded-full py-2 text-center  text-[14px] ">
            VALUE MY CAR
          </div>
        </div>
      </div>
    )
}