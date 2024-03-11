import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CompareQuotes from "../components/CompareQuotes";
import { useState } from "react";
import RecallQuotes from "../components/RecallQuotes";
import MyPortal from "../components/MyPortal";
export default function VanInsurance() {
  const datass = [
    {
      label: "compare quotes",
      value: "compare quotes",
      content: <CompareQuotes />,
    },
    {
      label: "recall quotes",
      value: "recall quotes",
      content: <RecallQuotes />,
    },
    {
      label: "my portal",
      value: "my portal",
      content: <MyPortal />,
    },
  ];

  const [activeTabs, setActiveTabs] = useState(datass[0].value);
  return (
    <div className="mt-6 py-4 w-full  max-w-[1600px] mx-auto bg-white rounded-2xl ">
      <div className="text-center uppercase subtitle text-[32px] leading-[40px]">
        van insurance
      </div>
      <Tabs id="custom-animation" value={activeTabs}>
        <TabsHeader
          className="overflow-x-scroll md:overflow-x-hidden rounded-none p-0 border-b-2 border-gray-200 w-full bg-white"
          indicatorProps={{
            className:
              "rounded-none bg-white border-b-2 border-black shadow-none !text-white",
          }}
        >
          <div className="w-full flex ">
            {datass.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTabs(value)}
                className="w-full text-left border-0 "
                indicatorProps={{
                  className: "bg-gray-200 hidden shadow-none !text-white",
                }}
              >
                <div
                  className={`${
                    activeTabs !== value
                      ? "text-gray-400"
                      : "bg-white text-gray-900"
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
          {datass.map(({ value, content }) => (
            <TabPanel key={value} value={value}>
              {content}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
