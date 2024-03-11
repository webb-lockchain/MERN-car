import {Tabs, TabsHeader, TabsBody, Tab, TabPanel} from "@material-tailwind/react";
import { MotoringHubCard } from "./MotoringHubCard";
import React from "react";

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
        }, {
            label: "Videos",
            value: "Videos",
            desc: [
                <MotoringHubCard name={"A New TMC Arrival - Audi S3 Quattro Black Edition"} desc={"Here's a stunning new arrival to our Oakhanger showroom here at The Motor Company. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this 2019 Black Edition S3 truly is an outstanding example and looks fantastic in contrasting white."}type={"View Video"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>,
            <MotoringHubCard name={"A Showroom Transformation is Underfoot"} desc={"Here's a stunning new arrival to our Oakhanger showroom here at The Motor Company. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this 2019 Black Edition S3 truly is an outstanding example and looks fantastic in contrasting white."}type={"View Video"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>,
            <MotoringHubCard name={"TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"} desc={"Here's a stunning new arrival to our Oakhanger showroom here at The Motor Company. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this 2019 Black Edition S3 truly is an outstanding example and looks fantastic in contrasting white."}type={"View Video"}image={"https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-video.jpg?width=525&height=295&mode=crop&scale=both"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}/>
           ]
        }, {
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
        <Tabs value={activeTab} className="w-full px-2">
            <TabsHeader
                className="bg-transparent w-[600px]  mx-auto"
                indicatorprops={{
                className: "bg-gray-600 shadow-none hidden !text-gray-900"
            }}>
                {data.map(({label, value}) => (
                    <Tab key={value} value={value} onClick={() => setActiveTab(value)} className="w-full">
                        <div
                            className={` w-[200px]   cursor-pointer  text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:text-[#054ac5]`}>
                            {label}
                        </div>
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({value, desc}) => (
                    <TabPanel key={value} value={value}>
                        <div className="flex flex-row">
                            {desc.map((item, index) => (<div key={index}  className='px-11 w-full md:w-1/2 xl:w-1/3 mt-6 max-w-[800px] mx-auto'>{item}</div>))}
                        </div>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}