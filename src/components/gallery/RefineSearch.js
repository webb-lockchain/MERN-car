import { Typography } from "@material-tailwind/react";
import { Accordion, AccordionHeader } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { WhiteBtn } from "./WhiteBtn";
import { GrayBtn } from "./GrayBtn";
import React, { useState, useEffect } from 'react';
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-90" : "-rotate-90"
        } h-5 w-5 transition-transform transform origin-center `}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
export function RefineSearch({ setSearch }) {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenHeight]);
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(!selected);
  }
  const [open, setOpen] = useState([]);

  const handleOpen = (value) => {
    if (!open.includes(value)) setOpen([...open, value]);
    else setOpen(open.filter(item => item !== value));
  }
  const handleResize = () => {
    setScreenHeight(window.innerHeight);
  };
  const [silverClicked, setSilverClicked] = useState(false);
  const [redClicked, setRedClicked] = useState(false);
  const [blackClicked, setBlackClicked] = useState(false);
  const [colorSearch,setColorSearch]=useState('*')
  return (
    <div className="overflow-y-scroll h-[600px] md:h-auto md:overflow-y-hidden  bg-white px-[30px] rounded-2xl">
      <Typography variant="h3" className="py-4  " color="gray">
        Refine Search
      </Typography>

      <Accordion
        className="remove-border"
        open={open.includes(2)}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className="flex items-center  ">MAKE / MODEL</div>
        </AccordionHeader>
        <div className={`${open.includes(2) ? "block py-4 " : "hidden py-4 "}`}>
          <Select label="All Makes" className="mb-6">
            <Option value="25000">All Makes</Option>
            <Option value="25000">Ford</Option>
            <Option value="27500">Isuzu</Option>
          </Select>
          <div className="py-2"></div>
          <Select label="All Models" className="mb-6">
            <Option value="25000">All Models</Option>
            <Option value="27500">Amarok(82)</Option>
            <Option value="27500">D-max</Option>
          </Select>
        </div>
      </Accordion>
      <Accordion
        className="remove-border"
        open={open.includes(3)}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(3)}>
          <div className="flex items-center  ">BODY TYPE</div>
        </AccordionHeader>
        <div className={`${open.includes(3) ? "block py-4 " : "hidden py-4 "}`}>
          <Select label="Body Type" className="mb-6">
            <Option value="25000">All bodytypes</Option>
            <Option value="25000">Pickup</Option>
          </Select>
        </div>
      </Accordion>
      <Accordion
        className="remove-border"
        open={open.includes(9)}
        icon={<Icon id={9} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(9)}>
          <div className="flex items-center  ">PRICE</div>
        </AccordionHeader>
        <div className={`${open.includes(9) ? "block py-4 " : "hidden py-4 "}`}>
          <div className="w-full">


            <div className="text-[14px] toggle-container flex w-full justify-center items-center" onClick={toggleSelected}>
              <div className={` dialog-button ${selected ? "" : "disabled"}`}>
                {selected ? "CASH" : "FINANCE"}
              </div>
              <div className="flex w-2/3 flex-row justify-between text-white uppercase ">
                <div >cash</div>
                <div >Finance</div>
              </div>
            </div>


          </div>
          <div className="flex flex-col gap-4  justify-between mt-6">
            <div className="w-full flex flex-row items-center">
              <div className="uppercase text-lg  ">min:</div>
              <select
                type="text"
                placeholder="Address 1"
                className="mt-2 bg-[#f6f6f6] px-6 py-3 ml-2 border-2 w-full rounded-full"
              >
                <option>1,000</option>
                <option>1,500</option>
                <option>2,000</option>
              </select>
            </div>
            <div className="w-full flex flex-row items-center">
              <div className="uppercase text-lg  ">max:</div>
              <select
                type="text"
                placeholder="Address 1"
                className="mt-2 bg-[#f6f6f6] px-6 ml-2 py-3 border-2 w-full rounded-full"
              >
                <option>1,500</option>
                <option>2,000</option>
                <option>2,500</option>
              </select>
            </div>
          </div>
        </div>
      </Accordion>

      <Accordion
        className="remove-border"
        open={open.includes(5)}
        icon={<Icon id={5} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(5)}>
          <div className="flex items-center  ">MILEAGE</div>
        </AccordionHeader>
        <div className={`${open.includes(5) ? "block py-4 " : "hidden py-4 "}`}>
          <Select label="0" className="mb-6">
            <Option value="25000">1,000</Option>
            <Option value="27500">2,000</Option>
            <Option value="27500">3,000</Option>
            <Option value="27500">4,000</Option>
          </Select>
          <div className="py-2"></div>
          <Select label="Any" className="mb-6">
            <Option value="25000">13,000</Option>
            <Option value="27500">14,000</Option>
            <Option value="27500">15,000</Option>
            <Option value="27500">16,000</Option>
          </Select>
        </div>
      </Accordion>
      <Accordion
        className="remove-border"
        open={open.includes(6)}
        icon={<Icon id={6} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(6)}>
          <div className="flex items-center  ">TRANSMISSION</div>
        </AccordionHeader>
        <div className={`${open.includes(6) ? "block py-4 " : "hidden py-4 "}`}>
          <Select label="transmission" className="mb-6">
            <Option value="25000">All Transmission</Option>
            <Option value="27500">automatic</Option>
            <Option value="27500">manual</Option>
          </Select>
        </div>
      </Accordion>
      <Accordion
        className="remove-border"
        open={open.includes(7)}
        icon={<Icon id={7} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(7)}>
          <div className="flex items-center  ">FUEL TYPE</div>
        </AccordionHeader>
        <div className={`${open.includes(7) ? "block py-4 " : "hidden py-4 "}`}>
          <Select label="fuel type" className="mb-6 z-20">
            <Option value="25000">All Fueltype</Option>
            <Option value="27500">disel</Option>
          </Select>
        </div>
      </Accordion>
      <Accordion
        className="overflow-visible remove-border"
        open={open.includes(8)}
        icon={<Icon id={8} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(8)}>
          <div className="flex items-center  ">COLOUR</div>
        </AccordionHeader>
        <div className={`${open.includes(8) ? "block py-4 " : "hidden py-4 "}`}>
          <div className="flex flex-col uppercase">
            <div className={`mr-3 p-2  uppercase ${blackClicked ? 'font-bold' : ''}`}>
              <label className="custom-checkboxr mr-3">
                <input type="checkbox" className="hidden" onChange={() => {
                                                              if(!blackClicked)setColorSearch(colorSearch+'black');
                                                              else{
                                                                var s=colorSearch;
                                                                setColorSearch(s.replace('black',''));
                                                              }
                                                              setBlackClicked(!blackClicked);
                                                          }} />
                <span className="checkmark"></span>
              </label>
              black
            </div>
            <div className={`mr-0 md:mr-3 p-2  uppercase ${redClicked ? 'font-bold' : ''}`}>
              <label className="custom-checkboxr mr-3">
                <input type="checkbox" className="hidden" onChange={() => {
                                                              if(!redClicked)setColorSearch(colorSearch+'red');
                                                              else{
                                                                var s=colorSearch;
                                                                setColorSearch(s.replace('red',''));
                                                              }
                                                              setRedClicked(!redClicked);
                                                          }} />
                <span className="checkmark"></span>
              </label>
              red
            </div>
            <div className={`mr-0 md:mr-3 p-2  uppercase ${silverClicked ? 'font-bold' : ''}`}>
              <label className="custom-checkboxr mr-3">
                <input type="checkbox" className="hidden" onChange={() => {
                                                              if(!silverClicked)setColorSearch(colorSearch+'silver');
                                                              else{
                                                                var s=colorSearch;
                                                                setColorSearch(s.replace('silver',''))
                                                              }
                                                              setSilverClicked(!silverClicked);
                                                          }} />
                <span className="checkmark"></span>
              </label>
              silver
            </div>
          </div>
        </div>
      </Accordion>
      <div className="mt-10 flex pb-4">
        <div className="w-1/2 pr-1" onClick={()=>setSearch({color:colorSearch})}>
          <GrayBtn name="APPLY" isFit={false} />
        </div>
        <div className="w-1/2 pl-1" onClick={()=>{
                                        setSilverClicked(false);
                                        setBlackClicked(false);
                                        setRedClicked(false);
                                        setSearch({color:'*'})}
                                    }>
          <WhiteBtn name="RESET" isFit={false} />
        </div>
      </div>
    </div>
  );
}
