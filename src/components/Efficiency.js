export default function Efficiency (props) {
  const item=props.ele;
    return (
        <div className=" flex flex-col justify-center bg-white">
            <div className="text-sm mt-6 w-full md:w-1/2 bg-[#f6f6f6] rounded-2xl">
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">mpg(urban)</div>
                <div className="  uppercase font-bold">{item.vehicle.fuelEconomyNEDCUrbanMPG}</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">mpg(extra urban)</div>
                <div className="  uppercase font-bold">{item.vehicle.fuelEconomyNEDCExtraUrbanMPG}</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">c02 emissions</div>
                <div className="   font-bold">{item.vehicle.co2EmissionGPKM} g/kg</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">tax band</div>
                <div className="  uppercase font-bold">~</div>
              </div>
              <div className="flex flex-row justify-between py-2 px-4 border-gray-300">
                <div className="  uppercase">insurance group</div>
                <div className="  uppercase font-bold">{item.vehicle.insuranceGroup}</div>
              </div>
            </div>
        </div>
    )
  }