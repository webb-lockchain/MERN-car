import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
// import { CustomCarousel } from "./CustomCarousel";
import { VehicleCard1 } from "./VehicleCard1";
import React, { useState } from "react";

export function CustomTab1({ title, data, tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  // tabData = new Array(data.length)
  // tabData = data
  return (
    <div className="">
        <h1 className="block md:hidden mb-8 text-gray-800  text-left subtitle text-[48px] leading-[56px] uppercase">
              {title}
            </h1>
      <Tabs value={activeTab} className=" w-full">
        <TabsHeader
          className="overflow-x-scroll md:overflow-x-hidden lg:pb-[50px] pb-6 bg-transparent w-full   flex lg:flex-row flex-col lg:justify-between lg:items-center px-6"
          indicatorProps={{
            className: "bg-gray-600 shadow-none hidden !text-gray-900",
          }}
        >
          <div className="md:flex hidden pb-8 lg:pb-0  flex-wrap justify-center items-center">
            <h1 className="text-gray-800 text-left font-barlow-condensed text-6xl font-bold leading-tight uppercase">
              {title}
            </h1>
          </div>
          <div className=" flex gap-3">
            {tabs.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className="w-fit"
              >
                <div
                  className={`${
                    activeTab !== value
                      ? "text-black bg-white"
                      : "bg-gray-900 text-white "
                  }hover:cursor-pointer uppercase text-center  rounded-full px-4 py-2  w-fit border-2 border-black hover:text-white hover:bg-black`}
                >
                  {label}
                </div>
              </Tab>
            ))}
          </div>
        </TabsHeader>
        <TabsBody className="">
          {tabs.map(({ value }) => (
            <TabPanel key={value} value={value}>
              <div className=" flex flex-wrap w-full justify-evenly">
                {value === "all"
                  ? data.map((item) => (
                      <VehicleCard1 key={item.name} item={item} />
                    ))
                  : data
                      .filter((item) => item.type === value)
                      .map((item) => (
                        <VehicleCard1 key={item.name} item={item} />
                      ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
