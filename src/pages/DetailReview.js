import MainLayout from "../layouts/MainLayout";
// import {Typography} from "@material-tailwind/react";
// import {CustomCarousel1} from "../components/gallery/CustomCarousel1";
// import {MotoringHubCard} from "../components/gallery/MotoringHubCard";
import {WhiteBtn1} from "../components/gallery/WhiteBtn1";
import hampshire from '../assets/images/hampshire.png'
// import hampshire1 from '../assets/images/hampshire1.png'
import {ReactComponent as ShareSVG} from '../components/svg/share.svg'
import {Link} from "react-router-dom";
import {ReactComponent as CheckSVG} from '../components/svg/check3.svg'
import {useState} from "react";
import {ShareModal} from "../components/ShareModal";
import ResponsiveReviewSlider from "../components/gallery/ResponsiveReviewSlider";


export default function DetailVideo() {
    const [open,
        setOpen] = useState(false)
    return (
        <MainLayout>
            <div
                className="max-w-[1440px] px-[20px] xl:px-[100px] md:px-[50px] w-full mx-auto bg-white justify-end items-start gap-[50px] flex pt-5">
                <ShareModal open={open} setOpen={setOpen}/>

                <div
                    className="px-4 py-2.5 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-2 flex">
                    <div onClick={()=>setOpen(true)}
                        className="text-gray-800 text-sm font-semibold font-['Barlow'] uppercase leading-tight tracking-tight">share</div>
                    <div className="w-4 h-4 relative"><ShareSVG/></div>
                </div>
            </div>
            <div className="max-w-[1440px] px-[20px] xl:px-[100px] md:px-[50px] w-full mx-auto  py-[50px] bg-white justify-center items-start gap-[50px] overflow-auto">
                <div className="w-full overflow-auto">
                    <div className="lg:w-1/2 float-right lg:hidden block p-5">
                        <div className=" flex-col justify-start items-center gap-8 inline-flex">
                            <div className="w-fit  relative bg-gray-100 rounded-2xl">
                                <div className="w-fit">
                                    <img className="rounded-3xl w-fit" src={hampshire} alt="'adsf"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 float-right lg:block hidden p-5">
                        <div className=" flex-col justify-start items-center gap-8 inline-flex">
                            <div className="w-fit  relative bg-gray-100 rounded-2xl">
                                <div className="w-fit">
                                    <img className="rounded-3xl w-fit" src={hampshire} alt="'adsf"/>
                                </div>
                            </div>
                            <div className="self-stretch  flex-col justify-start items-center flex">
                                <div
                                    className="self-stretch bg-gray-100 rounded-tl-2xl rounded-tr-2xl border border-zinc-100 flex-col justify-start items-start flex">
                                    <div
                                        className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-center gap-2 inline-flex">
                                        <div
                                            className="grow shrink basis-0 text-gray-800 text-xl font-semibold font-['Barlow Condensed'] leading-7">Statistics:</div>
                                    </div>
                                    <div
                                        className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-center gap-2 inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                            <div
                                                className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Introduced:</div>
                                        </div>
                                        <div
                                            className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">2011</div>
                                    </div>
                                    <div
                                        className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-center gap-2 inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                            <div
                                                className="grow shrink basis-0 text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Engine sizes and power:</div>
                                        </div>
                                        <div
                                            className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">1,968</div>
                                    </div>
                                    <div
                                        className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-start gap-2 inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                            <div
                                                className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Fuel Type:</div>
                                        </div>
                                        <div
                                            className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">2.2 TDCi 4 cylinder diesel with 150bhp to 160bhp<br/>3.2 TDCi 5 cylinder diesel with 200bhp</div>
                                    </div>
                                    <div
                                        className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-center gap-2 inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                            <div
                                                className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Cab sizes:</div>
                                        </div>
                                        <div
                                            className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">Single, crew, double</div>
                                    </div>
                                    <div
                                        className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-center gap-2 inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                            <div
                                                className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Payload:</div>
                                        </div>
                                        <div
                                            className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">1,050kg</div>
                                    </div>
                                    <div
                                        className="self-stretch px-4 py-2 border-b justify-start items-center gap-2 inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                            <div
                                                className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Towing capacity:</div>
                                        </div>
                                        <div
                                            className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">1,800kg (Raptor and base model) to 3,500kg</div>
                                    </div>
                                    <div
                                        className="self-stretch px-4 py-2 border-b justify-start items-center gap-2 inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                            <div
                                                className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Drivetrain:</div>
                                        </div>
                                        <div
                                            className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">Selectable 4WD</div>
                                    </div>
                                    <div className="self-stretch px-4 py-2 border-b justify-start items-start gap-2 inline-flex">
                                        <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                            <div
                                                className="w-[200px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Models of note:</div>
                                        </div>
                                        <div
                                            className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">The
                                            high-spec Ranger Wildtrak is a dynamic, well equipped lifestyle pick-upThe
                                            Raptor is a real beast, and designed for serious off-roading at speed</div>
                                    </div>
                                </div>
                                <div
                                    className="self-stretch p-6 bg-gray-100 rounded-bl-2xl rounded-br-2xl justify-center cursor-pointer hover:bg-white hover:text-black items-center gap-6 inline-flex">
                                    <div
                                        className="grow shrink basis-0 h-12 px-6 py-3 bg-gray-800 rounded-[100px] shadow border text-white hover:text-black hover:bg-white  border-gray-900 justify-center items-center gap-1 flex">
                                        <div
                                            className="  text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">Buy This Car now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="self-stretch text-gray-800 pb-6 text-4xl font-bold font-['Barlow Condensed'] uppercase ">Ford Ranger (2011-Present)
                    </div>
                    <div
                        className="self-stretch pb-6 flex-col justify-start items-start gap-2 flex">
                        <div
                            className="self-stretch text-gray-800 text-xl font-medium font-['Barlow'] leading-loose">Review WHERE THE RANGER SHINES:</div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative"><CheckSVG/></div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Strong all-round pick-up capability</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative"><CheckSVG/></div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Style is great for Raptor modification</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative"><CheckSVG/></div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Strong towing capacity</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative"><CheckSVG/></div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">High-quality interior</div>
                        </div>
                    </div>
                    <div
                        className="self-stretch pb-6 flex-col justify-start items-start gap-2 flex">
                        <div
                            className="self-stretch text-gray-800 text-xl font-medium font-['Barlow'] leading-loose">RECOMMENDED FOR:</div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative"><CheckSVG/></div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Work and family balance</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative"><CheckSVG/></div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Towing</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative"><CheckSVG/></div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">A family pick-up</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative"><CheckSVG/></div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">Outdoor and leisure pursuits</div>
                        </div>
                    </div>
                    <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
                        <div
                            className="self-stretch text-black text-xl font-normal font-['Barlow'] leading-loose">TMC says:</div>
                        <div
                            className="self-stretch text-gray-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-10">“
                            Ford’s Ranger truly is a smart, all-round performer that continues to sell very
                            well. “</div>
                    </div>
                    <div
                        className="self-stretch  text-gray-800 text-xl font-normal font-['Barlow'] leading-loose">It’s
                        hard to think of a vehicle that does everything, but Ford have certainly given
                        it their best shot with the ever-popular Ford Ranger.<br/><br/>The
                        Ranger is firmly established as one of the modern breed of pick-up trucks, as is
                        evident from both inside and outside the cab. It’s a great looking truck for
                        sure, but continues to shine as you climb aboard – the quality of the interior
                        finishfinish impresses, and particularly on high level
                    </div>
                    <div
                        className=" text-gray-800 text-xl font-normal font-['Barlow'] leading-loose">specification
                        finish impresses, and particularly on high level specification Limited and
                        Wildtrak trucks where toys such as dual-zone climate control, leather interior
                        and reversing camera become available. The cab of the Ranger is a comfortable
                        environment to travel in, pleasant as family transport and composed enough on
                        the open road to keep everyone happy.<br/><br/>Meanwhile,
                        when it’s time to go to work, the Ranger pulls its weight with one of the best
                        towing capacities in its class – up to 3,500kg – and a payload capacity of
                        1,050kg within its sizeable trailer. With good ground clearance and selectable
                        four-wheel-drive, it’s also built to be an off-road explorer with the tough
                        underpinnings to cope.<br/><br/>From
                        2016 onwards, the Ranger upped its own game even further. With updated styling
                        and a new choice of 2-litre turbo diesel engines offering a range of power
                        options, the newer Ranger is even more refined and car-like to drive when it
                        comes to everyday use. Capable as the old machine always was, the new shape is
                        certainly the one to go for if your budget can stretch that far.<br/>The
                        range-topping Raptor is an astonishing, high-tech piece of kit – with such
                        extensive modifications that, underneath the chunky styling tweaks, it’s
                        essentially an entirely different animal. Its capability for off-road driving,
                        including at speed, is unsurpassed among pick-up trucks – but you’ll be paying a
                        lot more for the privilege, as Raptors will understandably sell at a
                        considerably higher premium than their Ranger cousins. Nevertheless, if your
                        budget doesn’t stretch quite that far, there are plenty of ways to modify your
                        standard Ranger to great effect with upgrades such as the Raptor grille and
                        wheel-arch extensions – something that’s already popular among Ranger owners in
                        the UK.<br/>It’s
                        not difficult to see what makes the Ford Ranger a popular choice. With its bold
                        yet sleek styling, the Ranger has won hearts among the pick-up truck community
                        as one of the best-looking trucks out there. And with Raptor styling, the
                        Ranger’s already imposing presence can be stepped-up a gear to suit the owner's
                        own personal taste. It’s not all about looks, however. It’s a genuinely capable
                        off-road machine, along with a strong towing capacity to boot. If you’re after a
                        good all-round balance between work and play with your pick-up, then the Ford
                        Ranger certainly offers one of the most attractive packages on the market.</div>
                </div>
                <div className="lg:hidden block mx-4">
                    <div className="flex-col justify-start items-center gap-8 inline-flex">
                        <div className="mt-6  self-stretch  flex-col justify-start items-center flex">
                            <div className="self-stretch bg-gray-100 rounded-tl-2xl rounded-tr-2xl border border-zinc-100 flex-col justify-start items-start flex">
                                <div className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 text-gray-800 text-xl font-semibold font-['Barlow Condensed'] leading-7">Statistics:</div>
                                </div>
                                <div
                                    className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div
                                            className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Introduced:</div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">2011</div>
                                </div>
                                <div
                                    className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div
                                            className="grow shrink basis-0 text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Engine sizes and power:</div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">1,968</div>
                                </div>
                                <div
                                    className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-start gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div
                                            className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Fuel Type:</div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">2.2 TDCi 4 cylinder diesel with 150bhp to 160bhp<br/>3.2 TDCi 5 cylinder diesel with 200bhp</div>
                                </div>
                                <div
                                    className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div
                                            className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Cab sizes:</div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">Single, crew, double</div>
                                </div>
                                <div
                                    className="self-stretch px-4 py-2 border-b border-gray-300 border-opacity-20 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div
                                            className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Payload:</div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">1,050kg</div>
                                </div>
                                <div
                                    className="self-stretch px-4 py-2 border-b justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div
                                            className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Towing capacity:</div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">1,800kg (Raptor and base model) to 3,500kg</div>
                                </div>
                                <div
                                    className="self-stretch px-4 py-2 border-b justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div
                                            className="w-[100px] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Drivetrain:</div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">Selectable 4WD</div>
                                </div>
                                <div
                                    className="self-stretch px-4 py-2 border-b justify-start items-start gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2 flex">
                                        <div className=" w-[95%] text-gray-800 text-sm font-normal font-['Barlow Condensed'] uppercase leading-tight">Models of note:</div>
                                    </div>
                                    <div className=" grow shrink basis-0 text-gray-800 text-sm font-semibold font-['Barlow Condensed'] leading-tight">The
                                        high-spec Ranger Wildtrak is a dynamic, well equipped lifestyle pick-upThe
                                        Raptor is a real beast, and designed for serious off-roading at speed</div>
                                </div>
                            </div>
                            <div
                                className="self-stretch p-6 bg-gray-100 rounded-bl-2xl rounded-br-2xl justify-center cursor-pointer hover:bg-white hover:text-black items-center gap-6 inline-flex">
                                <div
                                    className="grow shrink basis-0 h-12 px-6 py-3 bg-gray-800 rounded-[100px] shadow border text-white hover:text-black hover:bg-white  border-gray-900 justify-center items-center gap-1 flex">
                                    <div
                                        className="  text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">Buy This Car now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className=" mx-4 max-w-[1240px] xl:hidden my-10  px-8 py-[50px] bg-gray-100 rounded-3xl flex-col justify-start items-center gap-8">
                <div
                    className="self-stretch md:w-[400px] mx-auto  text-center scale-y-110 text-gray-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-10">
                    GEt a Quick Valuation on your article
                </div>
                <div className="md:w-fit md:mx-auto mt-8">
                    <div
                        className="md:w-[454px] md:px-0 px-5 justify-start items-center gap-6 flex md:flex-row flex-col">
                        <div
                            className="grow shrink w-full basis-0 px-6 py-3 bg-gray-800 rounded-[100px] shadow border border-gray-900 justify-center items-center gap-1 flex">
                            <div
                                className="text-white text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
                                <Link to="/contact-us">enquire today</Link>
                            </div>
                        </div>
                        <div
                            className="grow shrink w-full  basis-0 px-6 py-3 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-1 flex">
                            <div
                                className="text-gray-800 text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
                                <Link to="/contact-us">VIDeo enquiry</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full mb-10">
                <div className="mx-4 md:mt-[20px] mt-0 max-w-[1360px] bg-transparent md:w-full flex lg:flex-row flex-col  md:justify-between items-center md:mx-auto lg:pt-[50px] pt-[20px] md:pb-10">
                    <div className=" lg:pb-0 flex flex-wrap justify-center items-center">
                        <h1 className="subtitle  text-[48px] leading-[56px] md:text-[72px] md:leading-[80px] uppercase">
                            similar
                        </h1>
                        <h1 className="magictitle text-[48px] leading-[56px] md:text-[72px] md:leading-[80px] uppercase">
                            &nbsp;reviews
                        </h1>
                    </div>
                    <div className="hidden gap-3 lg:flex">
                        <Link to="/motoring-hub/videos/">
                            <WhiteBtn1 name="VIEW ALL REVIEWS" />
                        </Link>
                    </div>
                </div>

                <div className="px-5 w-full flex justify-center md:px-0 pb-3 lg:pb-10 ">
                    <div className="max-w-[1360px] w-full">
                        <ResponsiveReviewSlider />
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}