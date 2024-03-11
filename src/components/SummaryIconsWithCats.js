import { Typography } from "@material-tailwind/react"
import {Link} from "react-router-dom"

export default function SummaryIconsWithCats() {
  return (
      <div className="py-12 lg:flex justify-center items-center">
          <div className="max-w-[1140px]">
              <div className="flex flex-wrap ">
                  <div className="w-full lg:w-1/3 px-3">
                      <div className="my-6 ">
                          <div className="flex flex-wrap justify-center items-center mt-2">
                              <img
                                  src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/icons/shared/mob-car.png"
                                  className="img-fluid"
                                  alt="car and mobile"
                                  width="113"
                                  height="97"/>
                          </div>
                      </div>
                      <div
                          className="flex grow basis-1 flex-col justify-center items-center p-0 mt-2">
                            <Typography variant='h5'>Value My Car</Typography>
                          <p className="text-center w-1/2 py-4">
                          We sell all brands of cars and trucks meaning we can give you a great price.
                          </p>
                          <Link to='/sell-your-vehicle/' className='pt-4 font-semibold'>Find Out More</Link>
                      </div>
                  </div>
                  <div className="w-full lg:w-1/3 px-3">
                      <div className="my-6 ">
                          <div className="flex flex-wrap justify-center items-center mt-2">
                              <img
                                  src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/icons/shared/checklist-car.png"
                                  className="img-fluid"
                                  alt="car and mobile"
                                  width="119"
                                  height="97"/>
                          </div>
                      </div>
                      <div
                          className="flex grow basis-1 flex-col justify-center items-center p-0 mt-2">
                          <Typography variant='h5'>Affordable Finance</Typography>
                          <p className="text-center w-1/2 py-4">
                          Affordable, flexible finance solutions. We offer a wide range of finance packages to help with your new purchase.
                          </p>
                          <Link to='/buy-online/' className='pt-4 font-semibold'>Find Out More</Link>
                      </div>
                  </div>
                  <div className="w-full lg:w-1/3 px-3">
                      <div className="my-6 ">
                          <div className="flex flex-wrap justify-center items-center mt-2">
                              <img
                                  src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/icons/shared/shield-hand.png"
                                  className="img-fluid"
                                  alt="car and mobile"
                                  width="97"
                                  height="98"/>
                          </div>
                      </div>
                      <div
                          className="flex grow basis-1 flex-col justify-center items-center p-0 mt-2">
                          <Typography variant='h5'>Meet the Team</Typography>
                          <p className="text-center w-1/2 py-4">
                          We have been selling a wide range of used vehicles for many years and pride ourselves in our personal customer service.
                          </p>
                          <Link to='/meet-the-team/' className='pt-4 font-semibold'>Find Out More</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}