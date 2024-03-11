export default function Specification(props) {
  const item=props.ele;
  return (
    <div className="p-6 lg:flex justify-center bg-white">
      <div className="w-full flex md:flex-row flex-col md:justify-between">
        <div className="text-sm w-full md:w-[48%] bg-[#f6f6f6] rounded-2xl">
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">0~60 time</div>
            <div className="  uppercase font-bold">~</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">bhp</div>
            <div className="  uppercase font-bold">{item.vehicle.enginePowerBHP}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">torque</div>
            <div className="  uppercase font-bold">~</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">max speed(mph)</div>
            <div className="  uppercase font-bold">{item.vehicle.topSpeedMPH}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">aspiration</div>
            <div className="  uppercase font-bold">~</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">drive axle</div>
            <div className="  uppercase font-bold">{item.vehicle.axleConfiguration==null?'~':item.vehicle.axleConfiguration}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">engine size</div>
            <div className="  uppercase font-bold">{parseInt(item.vehicle.engineCapacityCC).toLocaleString()}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">mpg(urban)</div>
            <div className="  uppercase font-bold">{item.vehicle.fuelEconomyNEDCUrbanMPG==null?'~':item.vehicle.fuelEconomyNEDCUrbanMPG}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">mpg(extra urban)</div>
            <div className="  uppercase font-bold">{item.vehicle.fuelEconomyNEDCUrbanMPG==null?'~':item.vehicle.fuelEconomyNEDCExtraUrbanMPG}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">height(mm)</div>
            <div className="  uppercase font-bold">{parseInt(item.vehicle.heightMM).toLocaleString()}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">length(mm)</div>
            <div className="  uppercase font-bold">{parseInt(item.vehicle.lengthMM).toLocaleString()}</div>
          </div>
          <div className="flex flex-row justify-between py-2 px-4 border-gray-300">
            <div className="  uppercase">width(mm)</div>
            <div className="  uppercase font-bold">{parseInt(item.vehicle.widthMM).toLocaleString()} </div>
          </div>
        </div>
        <div className="text-sm w-full mt-8 md:mt-0 md:w-[48%] bg-[#f6f6f6] rounded-2xl">
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">kerb weight</div>
            <div className="  uppercase font-bold">{item.vehicle.minimumKerbWeightKG==null?'~':item.vehicle.minimumKerbWeightKG}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">gross weight</div>
            <div className="  uppercase font-bold">{item.vehicle.grossVehicleWeightKG==null?'~':item.vehicle.grossVehicleWeightKG}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">market segment</div>
            <div className="  uppercase font-bold">~</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">bore</div>
            <div className="  uppercase font-bold">~</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">cylinders</div>
            <div className="  uppercase font-bold">{item.vehicle.cylinders==null?'~':item.vehicle.cylinders}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">fuel delivery</div>
            <div className="  uppercase font-bold">~</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">drive type</div>
            <div className="  uppercase font-bold">{item.vehicle.drivetrain==null?'~':item.vehicle.drivetrain}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">engine location</div>
            <div className="  uppercase font-bold">~</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">forward gears</div>
            <div className="  uppercase font-bold">~</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">seats</div>
            <div className="  uppercase font-bold">{item.vehicle.seats==null?'~':item.vehicle.seats}</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
            <div className="  uppercase">valves</div>
            <div className="  uppercase font-bold">{item.vehicle.valves==null?'~':item.vehicle.valves}</div>
          </div>
          <div className="flex flex-row justify-between py-2 px-4 border-gray-300">
            <div className="  uppercase">tax band </div>
            <div className="  uppercase font-bold">~</div>
          </div>
        </div>
      </div>
    </div>
  )
}