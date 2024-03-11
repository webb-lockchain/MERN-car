import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
// import { CustomCarousel1 } from "./CustomCarousel1";
// import { VehicleCard } from "./VehicleCard";
import React, { useState } from "react";
import { VehicleCard1 } from "./VehicleCard1";
import getData from "../../data/shortlist"; 
import ResponsiveCarSlider from "./ResponsiveCarSlider";
export function FeaturedVehiclesTab2(props) {
    const [activeTab, setActiveTab] = useState("Cars")
    const data1 = getData()
    const data = [
        {
            label: "Cars",
            value: "Cars",
            desc: [<div className="flex justify-between overflow-hidden">
                <VehicleCard1 item={data1[0]} /> 
                <VehicleCard1 item={data1[1]} />
                <VehicleCard1 item={data1[2]} />
                <VehicleCard1 item={data1[3]} />

            </div>, <div className="flex justify-between overflow-hidden">
                <VehicleCard1 item={data1[3]} />
                <VehicleCard1 item={data1[5]} />
                <VehicleCard1 item={data1[1]} />
                <VehicleCard1 item={data1[2]} />

            </div>]
        }, {
            label: "Trucks",
            value: "Trucks",
            desc: [<div className="flex justify-between overflow-hidden">
                <VehicleCard1 item={data1[5]} />
                <VehicleCard1 item={data1[2]} />
                <VehicleCard1 item={data1[3]} />
                <VehicleCard1 item={data1[2]} />

            </div>, <div className="flex justify-between overflow-hidden">
                <VehicleCard1 item={data1[2]} />
                <VehicleCard1 item={data1[5]} />
                <VehicleCard1 item={data1[2]} />
                <VehicleCard1 item={data1[1]} />

            </div>]
        }, {
            label: "Vans",
            value: "Vans",
            desc: [<div className="flex justify-between overflow-hidden">
                <VehicleCard1 item={data1[2]} />
                <VehicleCard1 item={data1[3]} />
                <VehicleCard1 item={data1[5]} />
                <VehicleCard1 item={data1[2]} />

            </div>, <div className="flex justify-between overflow-hidden">
                <VehicleCard1 item={data1[2]} />
                <VehicleCard1 item={data1[5]} />
                <VehicleCard1 item={data1[4]} />
                <VehicleCard1 item={data1[2]} />

            </div>]
        }
    ];

    return (
        <Tabs value={activeTab} className=" w-full">
            <TabsHeader
                className=" lg:pb-[50px] pb-6 bg-transparent w-full  flex lg:flex-row flex-col justify-between items-center px-6"
                indicatorProps={{
                    className: "hidden"
                }}
                >
                <div className="gap-4 pb-8 lg:pb-0 flex flex-wrap justify-center items-center">
                    <h1 className="text-gray-800 text-center font-barlow-condensed text-[40px] md:text-6xl font-bold leading-10 uppercase   tracking-tighter">
                        {props.title1}&nbsp;
                    </h1>
                    <h1 className="text-center md:text-left text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text font-barlow-condensed text-[40px] md:text-6xl    font-bold leading-none md:leading-tight uppercase tracking-tighter">
                        {props.title2}
                    </h1>
                </div> 
                <div className="z-10 flex gap-[1px] md:gap-3">
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value} onClick={() => setActiveTab(value)} className="w-fit">
                            <div className={`${activeTab !== value ? "text-black bg-white test" : "bg-gray-900 text-white "}hover:cursor-pointer uppercase text-center  rounded-full px-4 py-2  w-fit border-2 border-black hover:text-white hover:bg-black`}>
                            <div className=" md: ">{label}</div>
                            </div>
                        </Tab>
                    ))}
                </div>
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                       <ResponsiveCarSlider/>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}