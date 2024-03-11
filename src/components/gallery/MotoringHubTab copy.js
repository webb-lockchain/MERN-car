import {Tabs, TabsHeader, TabsBody, Tab, TabPanel} from "@material-tailwind/react";
import React from "react";
import { MotoringHubCard } from "./MotoringHubCard";

export function MotoringHubTab() {
    const [activeTab, setActiveTab] = React.useState("Reviews")
    const data = [
        {
            label: "Reviews",
            value: "Reviews",
            desc: [
                <MotoringHubCard name={"Ford Ranger Review"} desc={"Ford have produced an appealing all-round performer with the Ranger. With big differences through the range, let's have a closer look at the Ranger's main strengths within today's pick-up market."}
                type={"View Review"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/mkwprjxt/ford-ranger-list.png?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>,
            <MotoringHubCard name={"A Showroom Transformation is Underfoot"} desc={"Here's a stunning new arrival to our Oakhanger showroom here at The Motor Company. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this 2019 Black Edition S3 truly is an outstanding example and looks fantastic in contrasting white."}type={"View Review"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/velfgzqw/isuzu-dmax-list.png?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>,
            <MotoringHubCard name={"TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"} 
            desc={"Here's a stunning new arrival to our Oakhanger showroom here at The Motor Company. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this 2019 Black Edition S3 truly is an outstanding example and looks fantastic in contrasting white."}type={"View Review"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/rvbh5mqe/mitsubishi-l200-list.png?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>
           ]
        },
        {
            label: "Videos",
            value: "Videos",
            desc: [
                <MotoringHubCard name={"A New TMC Arrival - Audi S3 Quattro Black Edition"} desc={"Here's a stunning new arrival to our Oakhanger showroom here at The Motor Company. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this 2019 Black Edition S3 truly is an outstanding example and looks fantastic in contrasting white."}type={"View Video"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>,
            <MotoringHubCard name={"A Showroom Transformation is Underfoot"} desc={"Here's a stunning new arrival to our Oakhanger showroom here at The Motor Company. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this 2019 Black Edition S3 truly is an outstanding example and looks fantastic in contrasting white."}type={"View Video"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>,
            <MotoringHubCard name={"TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"} desc={"Here's a stunning new arrival to our Oakhanger showroom here at The Motor Company. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this 2019 Black Edition S3 truly is an outstanding example and looks fantastic in contrasting white."}type={"View Video"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-video.jpg?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>
           ]
        },
        {
            label: "Articles",
            value: "Articles",
            desc: [
                <MotoringHubCard name={"A New TMC Arrival - Audi S3 Quattro Black Edition"} desc={"Here's a stunning new arrival to our Oakhanger showroom here at The Motor Company. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this 2019 Black Edition S3 truly is an outstanding example and looks fantastic in contrasting white."}type={"View Articles"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/5lebeory/muscular-car-service-worker-repairing-vehicle.jpg?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>,
            <MotoringHubCard name={"How to choose the right pick-up truck insurance for your needs"} desc={"Choosing the right pick-up truck insurance policy and provider is not quite as straightforward as simply going with the same people who cover your car. There are differences between different insurance types."}
            type={"View Articles"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/5pqfkuua/construction-contractor-in-front-of-his-pickup-tru-2022-12-16-11-50-11-utc.jpeg?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>,
            <MotoringHubCard name={"TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"} desc={"Here's a stunning new arrival to our Oakhanger showroom here at The Motor Company. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this 2019 Black Edition S3 truly is an outstanding example and looks fantastic in contrasting white."}type={"View Articles"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/jsfjck1g/23-10-06-tmc-2552.jpg?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>
           ]
        }
    ];

    return (
        <Tabs value={activeTab} className="w-full">
            <TabsHeader
                className="bg-transparent w-fit p-0 mx-auto"
                indicatorprops={{
                className: "bg-gray-400 shadow-none !text-gray-900"
            }}>
                {data.map(({label, value}) => (
                    <Tab key={value} value={value} onClick={() => setActiveTab(value)}>
                        <div
                            className='bg-transparent w-fit border-2 border-gray-700 rounded-md text-gray-800 cursor-pointer  text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:bg-gray-700 hover:text-white'>
                            {label}
                        </div>
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody className='bg-gray-200 py-8'>
                {data.map(({value, desc}) => (
                    <TabPanel key={value} value={value}>
                        <div className="flex flex-wrap justify-center">
                            {/* {desc.map((item, index) => item)} */}
                            {desc.map((item, index) => item)}

                        </div>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}