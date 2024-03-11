import ValueCard from "../components/ValueCard"

import carcrash from '../assets/icon/car-crash.svg'
import guarantee from '../assets/icon/guarantee.svg'
import peoplecarry from '../assets/icon/people-carry.svg'

export default function Value() {
    const values = [
        { icon: carcrash, link:"/vehicles-for-sale/used-cars/", title: "Value My Car", description: "We sell all brands of cars and trucks meaning we can give you a great price.", },
        { icon: guarantee, link:"/buyonline", title: "Affordable Finance", description: "Affordable, flexible finance solutions. We offer a wide range of finance packages to help with your new purchase.", },
        { icon: peoplecarry, link:"/meet-the-team/", title: "Meet the team", description: "We have been selling a wide range of used vehicles for many years and pride ourselves in our personal customer service.", }
    ]
    return (
        <div className="w-full h-fit  custom-gradients px-5 md:px-24 flex justify-center items-center lg:py-[100px] py-[50px]">
            <div className="max-w-[1280px] w-full flex flex-col justify-center gap-6 lg:grid lg:grid-cols-3 lg:gap-[50px]">
                {values.map((item, index) => (<ValueCard key={index} data={item} />))}
            </div>
        </div>
    )
}