import MainLayout from "../layouts/MainLayout";
// import {Typography} from "@material-tailwind/react";
// import {useState} from "react";
import { CustomTab1 } from "../components/gallery/CustomTab1";
import getData from "../data/shortlist"; 
export default function ShortList(){
    // const [empty, setEmpty] = useState(true)
    const data = getData();
    const tabs = [
        {
            label: "All",
            value: "all"
        },
        {
            label: "Car",
            value: "car"
        },
        {
            label: "Truck",
            value: "truck"
        },
        {
            label: "vans",
            value: "van"
        },
    ];
    
    return(
        <MainLayout>
            <div className="w-full bg-[#F6F6F6] lg:py-8 lg:px-[100px] py-6 px-5">
                <CustomTab1 data={data} tabs={tabs} title={"my shortlist"}/>
            </div>
        </MainLayout>
    )
}