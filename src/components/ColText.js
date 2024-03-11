import { Typography } from "@material-tailwind/react"
export default function ColText() {
  return (
      <div className="py-[60px] lg:flex justify-center bg-gray-200">
          <div className="max-w-[1140px]">
              <div className="flex flex-wrap ">
                  <div className="w-full lg:w-1/3 px-3 py-4">
                      <div
                          className="flex grow basis-1 flex-col justify-center  p-0 mt-2">
                            <Typography variant='h4'>Complete peace of mind</Typography>
                          <p className="text-left  py-4">
                          Our professional drivers collect hundreds of used vehicles every year. We’ll always be honest, transparent and professional in making sure your sale is as smooth and trouble-free as possible.</p>
                      </div>
                  </div>
                  <div className="w-full lg:w-1/3 px-3 py-4">
                      <div
                          className="flex grow basis-1 flex-col justify-center  p-0 mt-2">
                          <Typography variant='h4'>A hassle free sale</Typography>
                          <p className="text-left  py-4">
                          No advertising fees, strangers, nuisance callers or tyre-kickers on your doorstep. We pay your money directly to your bank account, collect your vehicle when possible, and can also settle outstanding finance prior to sale.</p>
                          </div>
                  </div>
                  <div className="w-full lg:w-1/3 px-3 py-4">
                      <div
                          className="flex grow basis-1 flex-col justify-center  p-0 mt-2">
                          <Typography variant='h4'>A great price for your car</Typography>
                          <p className="text-left  py-4">
                          It could be more than you would expect - higher than what you’ll get from many dealers in part exchange, or from online buying services.</p>
                       </div>
                  </div>
              </div>
          </div>
      </div>
  )
}