import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
export default function MoreTruck(){
    const [current, setCurrent] = useState(0);
    const viewcontent = (index) => {
        setCurrent(index);
      };
    const data1 = [
        {
          cartype: "Ford",
          contents: [
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
            "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
            "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
          ],
        },
        {
          cartype: "Fiat",
          contents: [
            "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
            "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
          ],
        },
        {
          cartype: "Mitsubishi",
          contents: [
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 5 (s/s) 4dr (Eco Axle)",
            "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
            "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
          ],
        },
        {
          cartype: "Isuzu",
          contents: [
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
            "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
          ],
        },
        {
          cartype: "Nissan",
          contents: [
            "Ranger 2.2 TDCi Limited Super Cab Pickup 4WD Euro 5 4dr",
            "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
            "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
            "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
          ],
        },
        {
          cartype: "Toyota",
          contents: [
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
            "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
          ],
        },
        {
          cartype: "Volkswagen",
          contents: [
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited Super Cab Pickup 4WD Euro 5 4dr",
            "Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr",
            "Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
            "Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr",
            "Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco Axle)",
          ],
        },
      ];
    return(
        <div className="mx-5 md:px-8 mt-[50px] py-5 bg-white rounded-2xl"
              bis_skin_checked="1"
            >
              <Typography variant="h3" className="  pb-[10px]  uppercase">
                More Trucks
              </Typography>
              <div className="overflow-x-scroll md:overflow-x-hidden   mt-6 flex flex-row justify-wrap justify-between  uppercase gap-[16px]">
                {data1.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => viewcontent(index)}
                    className={`${
                      index === current
                        ? "bg-gray-900 text-white  "
                        : "text-black hover:text-blue bg-white hover:bg-gray-300"
                    }   mt-6 md:mt-0  rounded-full py-1 hover:cursor-pointer px-3   border-2 border-black`}
                  >
                    {item.cartype}
                  </div>
                ))}
              </div>
              <div className="mt-16 md:mt-6 mb-8 flex flex-wrap justiy-between">
                {data1[current].contents.map((item, index) => (
                  <div key={index + "1"} className="  min-w-[45%] underline">
                    {item}
                  </div>
                ))}
              </div>
            </div>
    )
}