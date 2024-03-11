import MainLayout from "../layouts/MainLayout";
import MeetTeamCard from "../components/MeetTeamCard";
import EmpCard from "../components/gallery/EmpCard";
import team1 from "../assets/images/team/team1.png";
import team2 from "../assets/images/team/team2.png";
import team3 from "../assets/images/team/team3.png";
import team4 from "../assets/images/team/team4.png";
import team5 from "../assets/images/team/team5.png";
import team6 from "../assets/images/team/team6.png";
import team7 from "../assets/images/team/team7.png";
import team8 from "../assets/images/team/team8.png";
import team9 from "../assets/images/team/team10.png";
import team10 from "../assets/images/team/team10.png";
import team11 from "../assets/images/team/team11.png";
import revi from "../assets/images/revi.png";

// import platinum from "../assets/images/platinum.png";
// import info1 from "../components/svg/info1.svg";
import HeroPic from "../assets/images/hero_pic.png";

// import team2 from '../assets/images/team/team2.png'
// import { ReactComponent as CarSVG } from "../components/svg/car.svg";
// import {ReactComponent as AwardSVG} from '../components/svg/awardSymbol.svg'
// import { ReactComponent as StarSVG } from "../components/svg/star.svg";
import { ReactComponent as FeefoSVG } from "../components/svg/feefologo.svg";

const teammates = [
  {
    name: "Gerard Thatcher",
    role: "Founder and Managing Director",
    about:
      "Gerard Thatcher founded TMC in 2016 - with a vision to provide a class-leading b" +
      "uying experience, matched with the highest-quality of used vehicles. With an eth" +
      "os of transparency, Gerard continues to champion an honest, supportive customer " +
      "journey that completely elevates the TMC experience above traditional competitio" +
      "n. He has decades in the motor trade behind him, having started in the industry " +
      "at just 15 - and enjoys instilling the confidence within his team to offer TMC’s" +
      " unique approach.",
    image: team1,
  },
  {
    name: "Chris Callow",
    role: "Sales Director",
    about: "Not only is Chris a wealth of knowledge on pick-up trucks and ",
    image: team2,
  },
  {
    name: "Mark Cross",
    role: "Sales Consultant",
    about:
      "With more than 30 years of experience in the business, Mark’s one of our in-hous" +
      "e experts in sourcing the best used cars and trucks. He’s been enjoying the spir" +
      "it and ethos of TMC for almost four years, helping customers find their ideal us" +
      "ed pick-ups. You may even have seen Mark on the big screen - outside of work, he" +
      "’s acted as an extra in many movies such as Kingsman the Golden Circle, Darkest " +
      "Hour and The Commuter. Meanwhile, his own dream machine would be a DeLorean - Gr" +
      "eat Scott!",
    image: team3,
  },
  {
    name: "Gerard Thatcher",
    role: "Sales Consultant",
    about:
      "A long-term member of the team, Ryan loves the challenges that TMC throws his wa" +
      "y. He’ll be busy working with our team to find the very best used vehicles, and " +
      "enjoys advising our visitors in their own search for a new truck or car. A BMW M" +
      "2 would be his ultimate driving machine - and when not at work, he’ll often be f" +
      "ound enjoying football or tennis. In fact, Ryan spent four years as a self-emplo" +
      "yed tennis coach prior to working here at TMC. only is Chris a wealth of knowled" +
      "ge on pick-up trucks and ",
    image: team4,
  },
  {
    name: "Chris Callow",
    role: "Sales Consultant",
    about:
      "Gerard Thatcher founded TMC in 2016 - with a vision to provide a class-leading b" +
      "uying experience, matched with the highest-quality of used vehicles. With an eth" +
      "os of transparency, Gerard continues to champion an honest, supportive customer " +
      "journey that completely elevates the TMC experience above traditional competitio" +
      "n. He has decades in the motor trade behind him, having started in the industry " +
      "at just 15 - and enjoys instilling the confidence within his team to offer TMC’s" +
      " unique approach.",
    image: team5,
  },
  {
    name: "Gerard Thatcher",
    role: "Sales Consultant",
    about: "Not only is Chris a wealth of knowledge on pick-up trucks and ",
    image: team6,
  },
  {
    name: "Chris Callow",
    role: "Sales Director",
    about: "Not only is Chris a wealth of knowledge on pick-up trucks and ",
    image: team7,
  },
  {
    name: "Mark Cross",
    role: "Sales Director",
    about: "Not only is Chris a wealth of knowledge on pick-up trucks and ",
    image: team8,
  },
  {
    name: "Chris Callow",
    role: "Sales Consultant ",
    about:
      "With more than 30 years of experience in the business, Mark’s one of our in-hous" +
      "e experts in sourcing the best used cars and trucks. He’s been enjoying the spir" +
      "it and ethos of TMC for almost four years, helping customers find their ideal us" +
      "ed pick-ups. You may even have seen Mark on the big screen - outside of work, he" +
      "’s acted as an extra in many movies such as Kingsman the Golden Circle, Darkest " +
      "Hour and The Commuter. Meanwhile, his own dream machine would be a DeLorean - Gr" +
      "eat Scott!",
    image: team9,
  },
  {
    name: "Chris Callow",
    role: "Sales Director",
    about:
      "A long-term member of the team, Ryan loves the challenges that TMC throws his wa" +
      "y. He’ll be busy working with our team to find the very best used vehicles, and " +
      "enjoys advising our visitors in their own search for a new truck or car. A BMW M" +
      "2 would be his ultimate driving machine - and when not at work, he’ll often be f" +
      "ound enjoying football or tennis. In fact, Ryan spent four years as a self-emplo" +
      "yed tennis coach prior to working here at TMC.",
    image: team10,
  },
  {
    name: "Gerard Thatcher",
    role: "Sales Director",
    about:
      "With more than 30 years of experience in the business, Mark’s one of our in-hous" +
      "e experts in sourcing the best used cars and trucks. He’s been enjoying the spir" +
      "it and ethos of TMC for almost four years, helping customers find their ideal us" +
      "ed pick-ups. You may even have seen Mark on the big screen - outside of work, he" +
      "’s acted as an extra in many movies such as Kingsman the Golden Circle, Darkest " +
      "Hour and The Commuter. Meanwhile, his own dream machine would be a DeLorean - Gr" +
      "eat Scott!",
    image: team11,
  },
];
export default function MeetTeam() {
  return (
    <MainLayout>
      <div className="w-full flex flex-col md:flex-row justify-center items-center py-[50px] md:py-[100px] px-[20px] md:px-0">
        <div className="w-full flex flex-col lg:flex-row justify-between max-w-[1380px]">
          <div className="w-full flex flex-col gap-[32px] md:gap-0 md:flex-row justify-between items-center">
            <div className="flex flex-col justify-between gap-[107px]">
              <div className="flex flex-col gap-[16px]">
                <div className="text-[50px] md:text-[100px] w-[74%] md:w-full ">
                  <h1 className="subtitle md:text-[100px] text-[70px] leading-[70px] md:leading-[100px] uppercase">
                    Meet
                  </h1>
                  <div className="flex flex-row">
                    <h1 className="subtitle md:text-[100px] text-[70px] leading-[70px] md:leading-[100px] uppercase">
                      The
                    </h1>
                    <h1 className="magictitle md:text-[100px] text-[70px] leading-[70px] md:leading-[100px] uppercase">
                      &nbsp;Team
                    </h1>
                  </div>
                </div>
                <MeetTeamCard title="Meet our team of experts and highly-trained consultants here at TMC" />
              </div>
              <div className="hidden md:flex flex-row gap-[12px]">
                <div className="hidden lg:flex mt-0 mx-1 w-[60px] justify-center ">
                  <img
                    alt="feefo logo"
                    title=""
                    src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/logos/feefo-square-23.png"
                  />
                </div>
                <div className="hidden lg:flex mt-0 mx-1 w-[80px]  justify-center">
                  <img
                    alt="feefo logo"
                    title=""
                    src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/logos/CarGurus2022.png"
                  />
                </div>
                <div className="hidden self-end relative lg:flex mt-0 mx-1 w-[175px] h-[44px] justify-center ">
                  <FeefoSVG />
                </div>
              </div>
            </div>
            <div className="h-full">
                <img src={HeroPic} alt="Hero Pictured" className="h-full"></img>
            </div>
            <div className="flex md:hidden flex-row gap-[12px] items-baseline">
                <img
                alt="feefo logo"
                title=""
                src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/logos/feefo-square-23.png"
                className="h-[50px]"
                />
                <img
                alt="feefo logo"
                title=""
                src="https://bluesky.sirv.com/Websites/tmcmotors_co_uk/img/logos/CarGurus2022.png"
                className="h-[50px]"
                />
                <img
                alt="feefo logo"
                src={revi}
                className="h-[30px]"
                />
              </div>
           
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col md:flex-row justify-center items-center py-[100px]  px-[20px] md:px-0">
        <div className="w-full flex flex-col max-w-[1380px]">
          <div className="mx-auto">
            <div className="flex flex-row   text-[30px] md:text-center text-left md:text-6xl ">
              <div className="text-gray-800 md:text-center text-left font-barlow-condensed font-bold leading-tight uppercase">
                Meet the
              </div>
              <div className="text-transparent bg-gradient-to-r from-red-500 to-blue-900 bg-clip-text font-barlow-condensed font-bold leading-tight uppercase">
                &nbsp;team
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-evenly">
            {teammates.map((item) => (
              <EmpCard data={item} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
