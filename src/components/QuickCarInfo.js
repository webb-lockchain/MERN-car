import checkout from "../assets/images/checkout.png";
export default function QuickCarInfo() {
  return (
    <div className="w-full px-4 bg-white rounded-2xl">
      <div className="py-2 font-bold text-xl   border-b-2">
        Your car informations:
      </div>
      <div className="text-sm mt-6 w-full">
        <div className="flex flex-row justify-between border-b-2 py-2  border-gray-300">
          <div className="  uppercase">rEgistration Number:</div>
          <div className="  uppercase font-bold">KM12AKK</div>
        </div>
        <div className="flex flex-row justify-between border-b-2 py-2 border-gray-300">
          <div className="  uppercase">Make/Brand:</div>
          <div className="  uppercase font-bold">VOLKSWAGEN</div>
        </div>
        <div className="flex flex-row justify-between border-b-2 py-2 border-gray-300">
          <div className="  uppercase">MODEL:</div>
          <div className="  uppercase font-bold">SHARAN</div>
        </div>
        <div className="flex flex-row justify-between border-b-2 py-2 border-gray-300">
          <div className="  uppercase">VERSION:</div>
          <div className="  uppercase font-bold">SELTOI BLUEMOTIKI</div>
        </div>
        <div className="flex flex-row justify-between border-b-2 py-2 border-gray-300">
          <div className="  uppercase">FUEL TYPE:</div>
          <div className="  uppercase font-bold">DIESEL</div>
        </div>
        <div className="flex flex-row justify-between border-b-2 py-2 border-gray-300">
          <div className="  uppercase">YEAR MANuFACTurE:</div>
          <div className="  uppercase font-bold">2012</div>
        </div>
        <div className="flex flex-row justify-between border-b-2 py-2 border-gray-300">
          <div className="  uppercase">color</div>
          <div className="  uppercase font-bold">black</div>
        </div>
        <div className="flex flex-row justify-between border-b-2 py-2 border-gray-300">
          <div className="  uppercase">ENGINE SIZE:</div>
          <div className="  uppercase font-bold">1,893 cc</div>
        </div>
        <div className="flex flex-row justify-between border-b-2 py-2 border-gray-300">
          <div className="  uppercase">Number of Doors</div>
          <div className="  uppercase font-bold">5</div>
        </div>
        <div className="flex flex-row justify-between border-b-2 py-2 border-gray-300">
          <div className="  uppercase">transmission</div>
          <div className="  uppercase font-bold">Semi-auto</div>
        </div>
      </div>
      <img src={checkout} alt="carinfo" className="mt-4 rounded-xl" />
    </div>
  );
}
