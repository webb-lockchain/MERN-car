import unslpash from '../assets/unslash.svg'
import UnsplashCard from "../components/UnsplashCard"
import washy from '../assets/images/washy.png'
import rocket from '../assets/images/rocket.png'
import rover from '../assets/images/rover.png'
import {useState} from 'react'
import { Link } from 'react-router-dom'

export default function ViralVideos() {
    const [tab,
        setTab] = useState(1)
        const values = [
            {
                icon: washy,
                title: "October 22, 2023",
                description: "Washy Clouds and a Weepy Sky Floating Upside Down’: Simon Armitage’s Arctic expe" +
                        "dition"
            }, {
                icon: rocket,
                title: "October 21, 2023",
                description: "Rocket Lab Expects to Resume Electron Launches before year-end after September f" +
                        "ailure"
            }, {
                icon: rover,
                title: "October 21, 2023",
                description: "Curiosity Rover Discovers New Evidence Mars Once had 'right conditions' for life"
            }
        ]
        const values2 = [
            {
                icon: washy,
                title: "October 22, 2023",
                description: "Rocket Lab Expects to Resume Electron Launches before year-end after September f" +
                "ailure"
            }, {
                icon: rocket,
                title: "October 21, 2023",
                description: "Curiosity Rover Discovers New Evidence Mars Once had 'right conditions' for life" +
                        "ailure"
            }, {
                icon: rover,
                title: "October 21, 2023",
                description: "Curiosity Rover Discovers New Evidence Mars Once had 'right conditions' for life"
            }
        ]
        const values1 = [
            {
                icon: washy,
                title: "October 22, 2023",
                description: "Curiosity Rover Discovers New Evidence Mars Once had 'right conditions' for life"
            }, {
                icon: rocket,
                title: "October 21, 2023",
                description: "Rocket Lab Expects to Resume Electron Launches before year-end after September f" +
                        "ailure"
            }, {
                icon: rover,
                title: "October 21, 2023",
                description: "Rocket Lab Expects to Resume Electron Launches before year-end after September f" +
                "ailure"
            }
        ]
    return (
        <div
            className="w-full h-fit  bg-[#000] flex justify-center items-center lg:p-[100px] px-4 py-[50px]">
            <div className="flex flex-col max-w-[1280px] w-full">
                <div className="">
                    <div className="flex flex-col xl:flex-row  xl:justify-between">
                        <div className="text-white text-[40px] md:text-6xl font-bold text-left md:text-center  ">MORNITORING HUB</div>
                        <div className="mt-6 xl:mt-0 flex flex-row self-center">
                            <div
                                onClick={() => setTab(1)}
                                className={`${tab===1?"bg-white text-black":"text-white hover:text-black hover:bg-white"} px-4 py-2  flex items-center justify-center  text-sm text-center  hover:cursor-pointer border-2 border-white rounded-full `}><div className=' '>REVIEWS</div></div>
                            <div
                                onClick={() => setTab(2)}
                                className={`${tab===2?"bg-white text-black":"text-white hover:text-black hover:bg-white"} mx-4 px-4 py-2  flex items-center justify-center  text-sm text-center  hover:cursor-pointer border-2 border-white rounded-full`}><div className=' '>VIDEOS</div></div>
                            <div
                                onClick={() => setTab(3)}
                                className={`${tab===3?"bg-white text-black":"text-white hover:text-black hover:bg-white"} px-4 py-2  flex items-center justify-center  text-sm text-center  hover:cursor-pointer border-2 border-white rounded-full`}><div className=' '>ARTICLES</div></div>
                        </div>
                    </div>
                </div>
                {tab === 1
                    ? <> <div className="mt-12 flex flex-row text-white">
                        <div className="w-full flex flex-col xl:flex-row justify-between items-center">
                            <div className='max-w-[630px] xl:self-start'>
                                <div
                                    className='text-white-80 font-barlow text-xs text-center font-normal leading-5  '>Review | October 22, 2023</div>
                                <div
                                    className='mt-10 text-white font-barlow-condensed text-left text-[30px] md:text-center  md:text-5xl font-medium leading-10  '>FORD RANGER REVIEW</div>
                                <div className='mt-8 text-white font-barlow text-base font-normal leading-7  '>Ford
                                    have produced an appealing all-round performer with the Ranger. With big
                                    differences through the range, let's have a closer look at the Ranger's main
                                    strengths within today's pick-up market.</div>
                                <div 
                                    className='mt-8 w-32 border-2 mx-auto border-white rounded-full py-2 font-barlow text-sm hover:cursor-pointer hover:text-black hover:bg-white font-semibold leading-5 tracking-tighter uppercase text-center'>
                                        <Link to="/motoring-hub/reviews/">
                                        View Details
                                        </Link>
                                        </div>
                            </div>
                            <div className=' xl:pt-0 pt-[40px]'>
                                <img src={unslpash} alt="unslash" className='w-fit h-fit'/>
                            </div>
                        </div>
                    </div> < div className = "mt-12 flex flex-row" > <div className="w-full flex flex-wrap justify-evenly ">
                        {values.map((item, index) => (<UnsplashCard key={index} data={item}/>))}
                    </div> </div>
                    </ >
                    : tab === 2
                        ? <> <div className="mt-12 flex flex-row text-white">
                            <div className="w-full flex flex-col xl:flex-row justify-between items-center">
                                <div className='max-w-[630px] xl:self-start'>
                                    <div
                                        className='text-white-80 font-barlow text-xs text-center font-normal leading-5'>Review | October 22, 2023</div>
                                    <div
                                        className='mt-6 text-white font-barlow-condensed text-center  text-5xl font-medium leading-10'>FORD RANGER VIDEO</div>
                                    <div className='mt-6 text-white font-barlow text-base font-normal leading-7'>Ford
                                        have produced an appealing all-round performer with the Ranger. With big
                                        differences through the range, let's have a closer look at the Ranger's main
                                        strengths within today's pick-up market.</div>
                                        <div 
                                    className='mt-6 w-32 border-2 mx-auto border-white rounded-full py-2 font-barlow text-sm hover:cursor-pointer hover:text-black hover:bg-white font-semibold leading-5 tracking-tighter uppercase text-center'>
                                        <Link to="/motoring-hub/reviews/">
                                        View Details
                                        </Link>
                                        </div>
                                </div>
                                <div className=' xl:pt-0 pt-[40px]'>
                                    <img src={unslpash} alt="unslash" className='w-fit h-fit'/>
                                </div>
                            </div>
                        </div> < div className = "mt-12 flex flex-row" > <div className="w-full flex flex-wrap justify-evenly ">
                            {values1.map((item, index) => (<UnsplashCard key={index} data={item}/>))}
                        </div> </div>
                </ >
                        : <> <div className="mt-12 flex flex-row text-white">
                            <div className="w-full flex flex-col xl:flex-row justify-between items-center">
                                <div className='max-w-[630px] xl:self-start'>
                                    <div
                                        className='text-white-80 font-barlow text-xs text-center font-normal leading-5'>Review | October 22, 2023</div>
                                    <div
                                        className='mt-6 text-white font-barlow-condensed text-center  text-5xl font-medium leading-10'>FORD RANGER ARTICLE</div>
                                    <div className='mt-6 text-white font-barlow text-base font-normal leading-7'>Ford
                                        have produced an appealing all-round performer with the Ranger. With big
                                        differences through the range, let's have a closer look at the Ranger's main
                                        strengths within today's pick-up market.</div>
                                        <div 
                                    className='mt-6 w-32 border-2 mx-auto border-white rounded-full py-2 font-barlow text-sm hover:cursor-pointer hover:text-black hover:bg-white font-semibold leading-5 tracking-tighter uppercase text-center'>
                                        <Link to="/motoring-hub/blog/">
                                        View Details
                                        </Link>
                                        </div>
                                </div>
                                <div className=' xl:pt-0 pt-[40px]'>
                                    <img src={unslpash} alt="unslash" className='w-fit h-fit'/>
                                </div>
                            </div>
                        </div> < div className = "mt-12 flex flex-row" > <div className="w-full flex flex-wrap justify-evenly ">
                            {values2.map((item, index) => (<UnsplashCard key={index} data={item}/>))}
                        </div> </div>
                </ >

            } </div>
        </div>
    )
}