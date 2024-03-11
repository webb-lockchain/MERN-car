export default function Representative1() {
  return (
    <div className="mt-6 w-full flex flex-col rounded-2xl bg-white p-8">
      <div className="uppercase text-2xl font-bold text-gray-800  ">
        representative example
      </div>
      <div className="w-full">
        <div className="mt-6 lg:flex justify-center bg-white">
          <div className="w-full flex flex-col md:flex-row md:justify-between">
            <div className="text-sm w-full md:w-[48%] bg-[#f6f6f6] rounded-2xl">
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">finance product</div>
                <div className="  font-bold">Hire Purchase</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">duration of agreement</div>
                <div className="  font-bold">48 Months</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">vehicle price</div>
                <div className="  uppercase font-bold">£1,000.00</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">custom deposit</div>
                <div className="  uppercase font-bold">£2,200.00</div>
              </div>

              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">total deposit</div>
                <div className="  uppercase font-bold">£2,200.00</div>
              </div>
              <div className="flex flex-row justify-between py-2 px-4 border-gray-300">
                <div className="  uppercase">balance to finance</div>
                <div className="  uppercase font-bold">£8,800.00</div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-sm w-full md:w-[48%] bg-[#f6f6f6] rounded-2xl">
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">total charge for credit</div>
                <div className="  uppercase font-bold">£1,992.80</div>
              </div>

              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">total amount payable</div>
                <div className="  uppercase font-bold">£12,992.80</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">48 monthly payments</div>
                <div className="  uppercase font-bold">£224.85</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">apr</div>
                <div className="  uppercase font-bold">10.9% apr</div>
              </div>
              <div className="flex flex-row justify-between border-b-2 py-2 px-4 border-gray-300">
                <div className="  uppercase">interest rate(fixed)</div>
                <div className="  uppercase font-bold">10.9%</div>
              </div>
              <div className="flex flex-row justify-between py-2 px-4 border-gray-300">
                <div className="  uppercase">cash price inc vat</div>
                <div className="  uppercase font-bold">£11,000.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
