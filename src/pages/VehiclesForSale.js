import MainLayout from "../layouts/MainLayout";
import React from "react";
import {Button, IconButton} from "@material-tailwind/react";
import {ArrowRightIcon, ArrowLeftIcon} from "@heroicons/react/24/outline";
import {Select, Option} from "@material-tailwind/react";
import {Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react";
import { VehicleCard } from "../components/gallery/VehicleCard";
import {Typography} from "@material-tailwind/react";

function Icon({id, open}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open
            ? "rotate-180"
            : ""} h-5 w-5 transition-transform`}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
        </svg>
    );
}
const data = [
            <VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-0bdcd631c3d8411980c24883cebbeff5.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-f9b6390c0a3c436e8680c7e0d5a32acc.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-ff45d1af42b140a4bc21f28909db8d02.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-407e40791f3445c790f9e28e8fd3271c.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-650ecaea802047b09d6bb077c6a7746f.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-f31e53de67fe45ca9fe27f85d1447209.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-8fa785b8542d4b9ab3940a3042c653ef.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
    
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-8fa785b8542d4b9ab3940a3042c653ef.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
    
                ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
                ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
                ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-ef48f9fe005943fa893177b0db140941.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
           
                ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
                ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-8fa785b8542d4b9ab3940a3042c653ef.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
                ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
        
                    ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
                    ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
                    ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-ef48f9fe005943fa893177b0db140941.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
                    
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-0bdcd631c3d8411980c24883cebbeff5.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-f9b6390c0a3c436e8680c7e0d5a32acc.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-ff45d1af42b140a4bc21f28909db8d02.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ,<VehicleCard name={"Audi Q5"} price={17500}desc={"2.0TDI line Plus Tronic"}distance={74072}fuel={"Petrol"}method={"manual"}image={"https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"}url={"https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-tronic-q-suv-blue-automatic-diesel/id-202311063689522/"}url1={"https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"}/>
            ];
const amount = 6;

export default function VehiclesForSale() {
    const [active,
        setActive] = React.useState(1);
    const [open,
        setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value
        ? 0
        : value);

    const getItemProps = (index) => ({
        variant: active === index
            ? "filled"
            : "text",
        color: "gray",
        onClick: () => setActive(index)
    });

    const next = () => {
        if (active === 5) 
            return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) 
            return;
        setActive(active - 1);
    };
    return (
        <MainLayout>
            <div className="flex py-10 px-5 flex-wrap justify-evenly w-full bg-gray-200">
                <div className="w-4/5 px-[10px] lg:w-1/4">
                    <div className="bg-white px-[30px]">
                  <Typography variant="h3" className="py-4" color="gray">Refine Search</Typography>
                        <Accordion
                        className=" py-4"
                        open={open === 1}
                        icon={< Icon id = {
                        1
                    }
                    open = {
                        open
                    } />}>
                        <AccordionHeader onClick={() => handleOpen(1)}>Make / Model</AccordionHeader>
                        <AccordionBody className="">
                            <Select label="Min Price" className="mb-6">
                                <Option value="25000">£25,000</Option>
                                <Option value="27500">£27,500</Option>
                            </Select>
                            <div className="py-2"></div>
                            <Select label="Max Price" className="mb-6">
                                <Option value="25000">£25,000</Option>
                                <Option value="27500">£27,500</Option>
                            </Select>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className=" py-4"
                        open={open === 2}
                        icon={< Icon id = {
                        2
                    }
                    open = {
                        open
                    } />}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            Body Type
                        </AccordionHeader>
                        <AccordionBody>
                            <Select label="Min Price" className="mb-6">
                                <Option value="25000">£25,000</Option>
                                <Option value="27500">£27,500</Option>
                            </Select>
                            <div className="py-2"></div>
                            <Select label="Max Price" className="mb-6">
                                <Option value="25000">£25,000</Option>
                                <Option value="27500">£27,500</Option>
                            </Select>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className=" py-4"
                        open={open === 3}
                        icon={< Icon id = {
                        3
                    }
                    open = {
                        open
                    } />}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            Price
                        </AccordionHeader>
                        <AccordionBody>
                            <Select label="Min Price" className="mb-6">
                                <Option value="25000">£25,000</Option>
                                <Option value="27500">£27,500</Option>
                            </Select>
                            <div className="py-2"></div>
                            <Select label="Max Price" className="mb-6">
                                <Option value="25000">£25,000</Option>
                                <Option value="27500">£27,500</Option>
                            </Select>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className=" py-4"
                        open={open === 3}
                        icon={< Icon id = {
                        3
                    }
                    open = {
                        open
                    } />}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            Reg Year
                        </AccordionHeader>
                        <AccordionBody>
                            <Select label="Min Reg Year" className="mb-6">
                                <Option value="25000">1</Option>
                                <Option value="27500">2</Option>
                            </Select>
                            <div className="py-2"></div>
                            <Select label="Max Reg Year" className="mb-6">
                                <Option value="25000">3</Option>
                                <Option value="27500">4</Option>
                            </Select>
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
            <div className="w-11/12 lg:w-3/4 px-[10px] flex-col">
                <div className="w-full ">
                    <div className="flex flex-wrap items-center w-full justify-evenly">
                        {data.map((item, index) => {
                            if( index < amount*active && index >= amount*active - amount){
                                    return (<div className="w-full lg:w-1/2 2xl:w-1/3">{item}</div>);
                        }
                        return null;
                        })}
                    </div>
                    <div className="flex items-center gap-4 justify-center mt-[40px]">
                    <Button
                        variant="text"
                        className="flex items-center gap-2"
                        onClick={prev}
                        disabled={active === 1}>
                        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4"/>
                        Previous
                    </Button>
                    <div className="flex items-center gap-2">
                        <IconButton {...getItemProps(1)}>1</IconButton>
                        <IconButton {...getItemProps(2)}>2</IconButton>
                        <IconButton {...getItemProps(3)}>3</IconButton>
                        <IconButton {...getItemProps(4)}>4</IconButton>
                        <IconButton {...getItemProps(5)}>5</IconButton>
                    </div>
                    <Button
                        variant="text"
                        className="flex items-center gap-2"
                        onClick={next}
                        disabled={active === 5}>
                        Next
                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4"/>
                    </Button>
                    </div>
                </div>
                <div className=" px-11 mt-[50px] pt-[80px] my-5 bg-white" bis_skin_checked="1">
                    <Typography variant="h3" className="pb-[20px]">Representative Example</Typography>
                    <table className="table w-full">
                        <tbody className="w-full">
                        <tr>
                            <td>Product</td>
                            <td>APR</td>
                            <td>Total Amount Payable</td>
                            <td>Agreement Term</td>
                            <td>Monthly Payments</td>
                            <td>Fixed Interest Rate</td>
                        </tr>
                        <tr className="border-white">
                            <td>Hire Purchase</td>
                            <td>10.90%</td>
                            <td>£17,126.72</td>
                            <td>46</td>
                            <td>£296.39</td>
                            <td>10.90%</td>
                        </tr>
                        </tbody>
                    </table>
                    <p className="pt-[30px] pb-[80px]">
                    <strong>Disclosure</strong> We work with a number of carefully selected credit providers who may be able to offer you finance for your purchase. We are only able to offer finance products from these providers.
                    </p>
                    </div>
            </div>
        </div>
    </MainLayout>
    )
}
