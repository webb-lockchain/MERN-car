import {Select, Option, Tabs, TabsHeader, TabsBody, Tab, TabPanel} from "@material-tailwind/react";
import {CustomCarousel} from "./CustomCarousel";
import { VehicleCard } from "./VehicleCard";
import React from "react";
import { useMediaQuery } from "react-responsive";


export function FeaturedVehiclesTab1() {
    const [activeTab, setActiveTab] = React.useState("Used Cars")
    const isMd = useMediaQuery({ minDeviceWidth: 600 });
    // const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
    // const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 1224 });
    // const isPortrait = useMediaQuery({ orientation: 'portrait' });
    // const isRetina = useMediaQuery({ minResolution: '2dppx' });

    const data = [
        {
            label: "Used Cars",
            value: "Used Cars",
            desc: [ 
            <VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-f9b6390c0a3c436e8680c7e0d5a32acc.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-ff45d1af42b140a4bc21f28909db8d02.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-407e40791f3445c790f9e28e8fd3271c.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-650ecaea802047b09d6bb077c6a7746f.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-f31e53de67fe45ca9fe27f85d1447209.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ]
        }, {
            label: "Used Tracks",
            value: "Used Tracks",
            desc: [
            <VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-8fa785b8542d4b9ab3940a3042c653ef.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
           
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-8fa785b8542d4b9ab3940a3042c653ef.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ]
        }, {
            label: "Used Vans",
            value: "Used Vans",
            desc: [
                <VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
                ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
                ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-ef48f9fe005943fa893177b0db140941.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
             
                ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
                ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-0bdcd631c3d8411980c24883cebbeff5.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
                ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
               ]
        }
    ];

    return (
        <Tabs value={activeTab} onClick={() => console.log(activeTab)} className="w-full p">
            <TabsHeader
                className="bg-transparent w-[600px] mx-auto"
                indicatorprops={{
                className: "bg-gray-400 shadow-none w-fit !text-gray-900"
            }}>
                {/* {data.map(({label, value}) => (
                    <Tab key={value} value={value} onClick={() => setActiveTab(value)}>
                        <div
                            className='bg-transparent border-2 border-gray-700 rounded-md text-gray-800 cursor-pointer  text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:bg-gray-700 hover:text-white'>
                            {label}
                        </div>
                    </Tab>
                ))} */}
                <div className="w-2/3  mx-auto">
                    <Select label="Select Vehicle" value={activeTab} className=""> 
                        {data.map(({label,value}) => (
                            <Option key={value} value={value} >
                                <Tab key={value} value={value} 
                                    onClick={() => setActiveTab(value)} 
                                    className="text-justify">
                                    {label}
                                </Tab>
                            </Option>))}
                    </Select>
                </div>
            </TabsHeader>
            <TabsBody>
                {data.map(({value, desc}) => (
                    <TabPanel key={value} value={value}>
                        <CustomCarousel>
                            {/* {desc.map((item, index) => item)} */}
                                {!isMd?desc.map((item, index) => item):
                                desc.map((item, index) => (
                                    index%2===0?<div className="justify-between hidden sm:flex lg:hidden" key={index}>{item}{desc[index+1]}</div>:null))}
                        </CustomCarousel>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}