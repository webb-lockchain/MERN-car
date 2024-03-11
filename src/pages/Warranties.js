import MainLayout from "../layouts/MainLayout";
// import {Typography} from "@material-tailwind/react";
import HeroSection from "../components/gallery/HeroSection";
import {ReactComponent as CheckSVG} from '../components/svg/check3.svg'
import {ReactComponent as BookSVG} from '../components/svg/book.svg'
import {ReactComponent as ThumbSVG} from '../components/svg/thumb.svg'
import {ReactComponent as DolarSVG} from '../components/svg/dolar.svg'
// import financeImg1 from '../assets/images/finance.png'
import warranty from '../assets/images/warranty.png'
// import {ReactComponent as CheckSVG} from '../components/svg/check3.svg'

const data = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
]
export default function Warranties() {
    return (
        <MainLayout>
            <HeroSection
                img={warranty}
                words={["motoring hub ", "warranties"]}
                mt={"mt-0"}
                long={true}/>
            <div className="h-fit w-full mx-auto max-w-[1440px]  px-5 sm:px-[30px] md:px-[50px] lg:px-[80px] xl:px-[100px] pt-[100px] bg-white justify-center items-start gap-[50px] flex xl:flex-row flex-col">

                <div className="xl:w-[45%] w-full flex-col justify-start items-start gap-6 inline-flex">
                    <div
                        className="xl:w-[1117px] text-neutral-800   text-left md:text-center text-[32px] md:text-7xl font-bold font-barlow uppercase leading-none md:leading-[80px]">The Road to Peace of Mind</div>
                    <div
                        className="self-stretch text-black text-xl font-normal font-barlow leading-loose">Here
                        at The Motor Company, we’re confident in the vehicles we sell. But we also
                        understand the need for complete peace of mind when changing to an unfamiliar
                        vehicle - and that’s why we’ve partnered with Crystal Clear Warranties.</div>
                    <div
                        className="self-stretch text-black text-xl font-normal font-barlow leading-loose">We
                        offer only their highest “Diamond” level of cover, to offer you almost complete
                        reassurance on the road ahead.</div>
                    <div
                        className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative"><CheckSVG/></div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-barlow leading-normal">No excess to pay on a claim</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative"><CheckSVG/></div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-barlow leading-normal">No limit on your total number of claims</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div
                                className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                <div className="w-4 h-4 relative"><CheckSVG/></div>
                            </div>
                            <div
                                className="grow shrink basis-0 text-black text-base font-semibold font-barlow leading-normal">An individual claim limit of up to £3,000</div>
                        </div>
                    </div>
                    <div
                        className="mt-6 self-stretch text-black text-xl font-normal font-barlow leading-loose">A
                        £3,000 claim limit is unusually high compared to what you’ll get from other
                        dealerships, which often put this limit nearer the £500 mark - our warranty
                        really will protect your vehicle and your finances in the event of a claim.</div>

                </div>
                <div className="xl:w-[52%] w-full mt-0 lg:mt-[120px] self-stretch flex-col justify-start items-center gap-8 inline-flex">
                    <div className="justify-start items-start flex flex-wrap lg:flex-row w-full">
                        <div className="m-2 w-[31%] grow shrink basis-0 p-4  bg-gray-100 rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
                            <div
                                className="p-4 bg-gradient-to-r from-red-600 to-blue-700 rounded-2xl border border-red-600 justify-center items-center gap-1 inline-flex">
                                <div className="w-8 h-8 relative"><BookSVG/></div>
                            </div>
                            <div
                                className="self-stretch text-center text-neutral-800 text-[14px] md:text-2xl font-semibold font-barlow ">Underwritten by TMC</div>
                        </div>
                        <div className="m-2 w-[31%] grow shrink basis-0 p-4  bg-gray-100 rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
                            <div
                                className="p-4 bg-gradient-to-r from-red-600 to-blue-700 rounded-2xl border border-red-600 justify-center items-center gap-4 inline-flex">
                                <div className="w-8 h-8 relative"><ThumbSVG/></div>
                            </div>
                            <div
                                className="self-stretch text-center text-neutral-800 text-[14px] md:text-2xl font-semibold font-barlow ">Highest Level of Cover</div>
                        </div>
                        <div className="m-2 w-[31%] grow shrink basis-0  p-4 bg-gray-100 rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
                            <div
                                className="p-4 bg-gradient-to-r from-red-600 to-blue-700 rounded-2xl border border-red-600 justify-center items-center gap-1 inline-flex">
                                <div className="w-8 h-8 relative"><DolarSVG/></div>
                            </div>
                            <div
                                className="self-stretch text-center text-neutral-800 text-[14px] md:text-2xl font-semibold font-barlow">Up to £3,000 Claim Limit</div>
                        </div>
                    </div>
                    <div
                        className="self-stretch text-black text-xl font-normal font-barlow leading-loose">The
                        Diamond warranty will also cover you for diagnostics, and is underwritten by us
                        at TMC. This means you're not dealing with a third party to recover your costs -
                        making the whole process easier and faster.</div>
                    <div
                        className="self-stretch text-black text-xl font-normal font-barlow leading-loose">With
                        cover starting from just £199, no excess costs to pay on claims, and coverage
                        periods of 3, 6 or 12 months available - you can relax in the knowledge that
                        parts and labour can be taken care of in the event of a mechanical or electrical
                        failure.</div>
                </div>
            </div>
            <div
                className="max-w-[1440px]  px-5 md:px-[100px] pt-[50px] mx-auto bg-white justify-start items-center gap-[50px] ">
                <div className="flex flex-wrap justify-evenly">
                    {data.map((item, i) => (
                        <div
                            className="w-[300px] flex-col justify-start items-start pt-5 lg:pt-20 gap-4 inline-flex">
                            <div
                                className="w-[535px] text-black text-2xl font-semibold font-barlow ">Engine</div>
                            <div
                                className="self-stretch  flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="p-0.5 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                        <div className="w-3.5 h-3.5 relative"><CheckSVG/></div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-black text-sm font-medium font-barlow leading-[17px]">No excess to pay on a claim</div>
                                </div>
                                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="p-0.5 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                        <div className="w-3.5 h-3.5 relative"><CheckSVG/></div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-black text-sm font-medium font-barlow leading-[17px]">No limit on your total number of claims</div>
                                </div>
                                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="p-0.5 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                        <div className="w-3.5 h-3.5 relative"><CheckSVG/></div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-black text-sm font-medium font-barlow leading-[17px]">An individual claim limit of up to £3,000</div>
                                </div>
                                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="p-0.5 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                        <div className="w-3.5 h-3.5 relative"><CheckSVG/></div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-black text-sm font-medium font-barlow leading-[17px]">An individual claim limit of up to £3,000</div>
                                </div>
                                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="p-0.5 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                        <div className="w-3.5 h-3.5 relative"><CheckSVG/></div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-black text-sm font-medium font-barlow leading-[17px]">No excess to pay on a claim</div>
                                </div>
                                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="p-0.5 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                        <div className="w-3.5 h-3.5 relative"><CheckSVG/></div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-black text-sm font-medium font-barlow leading-[17px]">No limit on your total number of claims</div>
                                </div>
                                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="p-0.5 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                        <div className="w-3.5 h-3.5 relative"><CheckSVG/></div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-black text-sm font-medium font-barlow leading-[17px]">An individual claim limit of up to £3,000</div>
                                </div>
                                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                                    <div
                                        className="p-0.5 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                                        <div className="w-3.5 h-3.5 relative"><CheckSVG/></div>
                                    </div>
                                    <div
                                        className="grow shrink basis-0 text-black text-sm font-medium font-barlow leading-[17px]">An individual claim limit of up to £3,000</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="w-full md:self-stretch pt-10 text-black text-xl font-normal font-barlow leading-sm md:leading-loose">From
                    pumps to pistons, head gaskets to hoses - apply for your warranty as soon as
                    possible after purchase, before it’s too late. And enjoy peace of mind on the
                    road ahead.</div>
            </div>
            <div className="max-w-[1240px] w-full mx-auto px-5 md:px-8 py-[50px] bg-neutral-100 rounded-3xl flex-col justify-start items-center gap-8 ">
                <div className="bg-[#f6f6f6] rounded-2xl py-[50px] md:px-0 px-8">
                    <div className="  text-center text-neutral-800 text-[20px] md:text-[32px] font-bold font-barlow uppercase leading-10">
                    Ready to Request a warranty
                </div>
                <div className="md:w-fit md:mx-auto mt-8">
                    <div
                        className="md:w-[454px]  justify-start items-center gap-6 flex md:flex-row flex-col">
                        <div
                            className="grow shrink w-full basis-0 h-12 px-6 py-3 bg-gray-800 rounded-[100px] shadow border border-gray-900 justify-center items-center gap-1 flex">
                            <div
                                className="text-white w-full text-sm font-semibold font-barlow text-center uppercase leading-snug tracking-tight">Request a warranty</div>
                        </div>
                        <div
                            className="grow shrink w-full  basis-0 h-12 px-6 py-3 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-1 flex">
                            <div
                                className="text-sm font-semibold font-barlow uppercase leading-snug tracking-tight">Contact us</div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </MainLayout>
    )
}