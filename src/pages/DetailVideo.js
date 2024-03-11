import MainLayout from "../layouts/MainLayout";
import {WhiteBtn1} from "../components/gallery/WhiteBtn1";
import hampshire from '../assets/images/selleasy.png'
import {ReactComponent as ShareSVG} from '../components/svg/share.svg'
import {Link} from "react-router-dom";
import {useState} from "react";
import {ShareModal} from "../components/ShareModal";
import ResponsiveVideoSlider from "../components/gallery/ResponsiveVideoSlider";

export default function DetailVideo() {
    const [open,
        setOpen] = useState(false)
    return (
        <MainLayout>
            <div
                className="max-w-[1440px] px-[20px] xl:px-[100px] md:px-[50px] w-full mx-auto bg-white justify-end items-start gap-[50px] flex pt-5">
                <div
                    className="px-4 py-2.5 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-2 flex">
                    <div onClick={()=>setOpen(true)}
                        className="text-gray-800 text-sm font-semibold font-['Barlow'] uppercase leading-tight tracking-tight">share</div>
                    <div className="w-4 h-4 relative"><ShareSVG/></div>
                </div>
            </div>
            <ShareModal open={open} setOpen={setOpen}/>

            <div
                className="max-w-[1440px] px-[20px] xl:px-[100px] md:px-[50px] w-full mx-auto  py-[50px] bg-white justify-center items-start gap-[50px] flex xl:flex-row flex-col-reverse">
                <div
                    className="xl:w-1/2 w-full flex-col justify-start items-start gap-6 inline-flex">
                    <div
                        className="self-stretch text-neutral-800 text-5xl font-bold font-['Barlow Condensed'] uppercase scale-y-110">New arrival at tmc - 2019 Audi s3 quattro black edition auto</div>
                    <div
                        className="self-stretch text-black text-xl font-normal font-['Barlow'] leading-loose">Say
                        hello to one of our newest arrivals to the showroom, here at The Motor Company
                        in Oakhanger, near Bordon, Hampshire. With 296bhp, this Black Edition S3 Quattro
                        looks fantastic in contrasting white. It's a 1 owner car with 23,577 miles - and
                        comes with a Full Audi Service History, so it really is a great example of this
                        highly sought-after vehicle. Contact us for more information, or click on the
                        button below to see a wider selection of high quality used vehicles available
                        here at TMC.<br/><br/>Check
                        out the before and after difference to our used pick-up, SUV and 4x4 showroom
                        with this special time-lapse footage! We had smart new carpets installed in time
                        for the New Year, and we're delighted with how they add to the ambience in our
                        bright new showspace in Oakhanger, near Bordon, Hampshire. We are TMC - The
                        Motor Company.<br/><br/>We
                        are specialists in high-quality used 4x4, SUV and pick-up trucks covering
                        Hampshire, Surrey, Sussex, London, the South East and beyond. If you're looking
                        for a particular used pick-up truck, 4x4 or SUV - get in touch to see how we can
                        help you find your next used vehicle.
                        <br/><br/>We can also buy your used SUV, 4x4, pick-up truck or whatever used
                            vehicle you're looking to sell. We can offer you a higher price than you might
                            have expected, settle outstanding finance, and save you a lot of hassle and time
                            on your sale. Just click here for more information. Or, to see our latest
                            selection of high quality used vehicles for sale, click the link below.</div>
                </div>
                <div
                    className="xl:w-1/2 w-full self-stretch flex-col justify-start items-center gap-8 inline-flex">
                    <div className="w-fit">
                        <img className="rounded-3xl w-fit" src={hampshire} alt="'adsf"/>
                    </div>
                    <div
                        className="max-w-[1240px] bg-gray-100 w-full mx-auto  px-8 py-[50px] bg-neutral-100 rounded-3xl flex-col justify-start items-center gap-8 hidden xl:flex">
                        <div
                            className="w-[400px] mx-auto  self-stretch text-center scale-y-110 text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-10">
                            GEt a Quick Valuation on your vehicle
                        </div>
                        <div className="md:w-fit md:mx-auto mt-8">
                            <div
                                className="md:w-[454px] md:px-0 px-5 justify-start items-center gap-6 flex md:flex-row flex-col">
                                <div
                                    className="grow shrink w-full basis-0 h-12 px-6 py-3 bg-gray-800 rounded-[100px] shadow border border-gray-900 justify-center items-center gap-1 flex">
                                    <div
                                        className="text-white text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
                                        <Link to="/contact-us">enquire today</Link>
                                    </div>
                                </div>
                                <div
                                    className="grow shrink w-full  basis-0 h-12 px-6 py-3 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-1 flex">
                                    <div
                                        className="text-neutral-800 text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
                                        <Link to="/contact-us">VIDeo enquiry</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-4 max-w-[1240px] xl:hidden my-10  px-8 py-[50px] bg-gray-100 rounded-3xl flex-col justify-start items-center gap-8">
                <div
                    className="self-stretch md:w-[400px] mx-auto  text-center scale-y-110 text-gray-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-10">
                    GEt a Quick Valuation on your video
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
                            &nbsp;videos
                        </h1>
                    </div>
                    <div className="hidden gap-3 lg:flex">
                        <Link to="/motoring-hub/videos/">
                            <WhiteBtn1 name="VIEW ALL VIDEOS" />
                        </Link>
                    </div>
                </div>

                <div className="px-5 w-full flex justify-center md:px-0 pb-3 lg:pb-10 ">
                    <div className="max-w-[1360px] w-full">
                        <ResponsiveVideoSlider />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}