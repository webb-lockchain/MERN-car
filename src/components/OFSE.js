import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import Overview from "./Overview";
import Features from "./Features";
import Specification from "./Specification";
import Efficiency from "./Efficiency";

export default function OFSE(props) {
  const item=props.ele;
  const datas = [
    {
      label: "overview",
      value: "overview",
      content: <Overview ele={item}/>,
    },
    {
      label: "Features",
      value: "Features",
      content: <Features ele={item}/>,
    },
    {
      label: "specification",
      value: "specification",
      content: <Specification ele={item}/>,
    },
    {
      label: "efficiency",
      value: "efficiency",
      content: <Efficiency ele={item}/>,
    },
  ];
  const [activeTab, setActiveTab] = useState(datas[0].value);
  return (
    <div className="mt-6 w-full  max-w-[1600px] mx-auto bg-white rounded-2xl ">
      <Tabs id="custom-animation" value={activeTab}>
        <TabsHeader
          className="overflow-x-scroll md:overflow-x-hidden rounded-t-2xl p-0 border-b-2 border-gray-200 w-full bg-white"
          indicatorProps={{
            className:
              "border-b-2 bg-white rounded-none border-black shadow-none !text-white",
          }}
        >
          <div className="w-full flex ">
            {datas.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className="w-full text-left border-0 "
                indicatorprops={{
                  className: "bg-gray-200 hidden shadow-none !text-white",
                }}
              >
                <div
                  className={`${
                    activeTab !== value
                      ? "text-gray-400"
                      : "bg-white text-gray-900 border-gray-800"
                  } uppercase font-bold w-full text-center cursor-pointer text-base px-3 py-2 no-underline transition-all duration-150 ease-in-out align-middle`}
                >
                  {label}&nbsp;{label === "All" ? "VIDEO" : ""}
                </div>
              </Tab>
            ))}
          </div>
        </TabsHeader>
        <TabsBody
          animate={{
            initial: {
              y: 250,
            },
            mount: {
              y: 0,
            },
            unmount: {
              y: 250,
            },
          }}
        >
          {datas.map(({ value, content }) => (
            <TabPanel key={value} value={value}>
              {content}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
