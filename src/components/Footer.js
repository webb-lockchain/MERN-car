import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from "../assets/icon/logo.svg";
const SITEMAP = [
  {
    title: "TMC Oakhanger (Head Office)",
    links: [
      "The Goodwood Building, The Yard, Oakhanger ",
      "Bordon, GU35 9JU",
      "Careers",
      "Our Team",
      "Projects",
    ],
  },
  {
    title: "TMC - Huddersfield",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Opening Hours",
    links: [
      "Monday.8:30am–5:30pm",
      "Tuesday.8:30am–5:30pm",
      "Wednesday.8:30am–5:30pm",
      "Thursday.8:30am–5:30pm",
      "Friday.8:30am–5:30pm",
      "Saturday.9:00am–5:00pm",
      "Sunday.10:00am–4:00pm",
    ],
  },
  {
    title: "Links",
    links: [
      "Home./",
      "Site Map./sitemap/",
      "Disclaimer./disclaimer/",
      "Privacy Policy./privacy-policy/",
      "Cookie Policy./cookies-notice/",
      "FCA Disclaimer./fca-disclaimer",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full  px-7 md:pl-24 md:pr-20 pt-[50px] md:pt-[100px] pb-8 md:pb-[96px]  font-inter bg-svg-background">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="w-full flex flex-col md:flex-row md:justify-between ">
          <div className=" w-full  md:w-fit flex flex-col md:justify-start items-center">
            <img
              id="nav-logo"
              itemProp="logo"
              alt="TMC Logo"
              src={logo}
              className="w-26  font-inter h-12"
            />
            <ul className="mt-10 md:mt-9 flex nav--social items-center font-inter ">
              <li className="flex items-center mr-2">
                <a href="https://www.facebook.com/tmcmotorsales">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2005 13.2466V17.0834H15.5926C17.1667 17.0834 17.1667 15.5093 17.1667 15.5093V4.88434C17.1667 2.91675 15.5926 2.91675 15.5926 2.91675H4.57407C4.57407 2.91675 3 2.91675 3 4.88434V15.5093C3 17.0834 4.57407 17.0834 4.57407 17.0834H9.84162V13.2466H8.0069V11.1151H9.84162V8.32763C9.84162 8.32763 9.84162 6.85193 11.4142 6.85194L14.0353 6.85193V9.06547H12.2005V11.1151H14.0353V13.2466H12.2005Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>

              <li className="flex items-center mr-2">
                <a href="https://www.instagram.com/tmcmotorsales/">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2678 8.23223C13.2441 9.20854 13.2441 10.7915 12.2678 11.7678C11.2915 12.7441 9.70854 12.7441 8.73223 11.7678C7.75592 10.7915 7.75592 9.20854 8.73223 8.23223C9.70854 7.25592 11.2915 7.25592 12.2678 8.23223Z"
                      fill="#676A71"
                    />
                    <path
                      d="M13.7812 2.5H7.21875C4.89239 2.5 3 4.39239 3 6.71875V13.2812C3 15.6076 4.89239 17.5 7.21875 17.5H13.7812C16.1076 17.5 18 15.6076 18 13.2812V6.71875C18 4.39239 16.1076 2.5 13.7812 2.5ZM10.5 13.75C8.43228 13.75 6.75 12.0682 6.75 10C6.75 7.93183 8.43228 6.25 10.5 6.25C12.5677 6.25 14.25 7.93183 14.25 10C14.25 12.0682 12.5677 13.75 10.5 13.75ZM14.7188 6.25C14.4599 6.25 14.25 6.04012 14.25 5.78125C14.25 5.52233 14.4599 5.3125 14.7188 5.3125C14.9776 5.3125 15.1875 5.52233 15.1875 5.78125C15.1875 6.04012 14.9776 6.25 14.7188 6.25Z"
                      fill="white"
                    />
                  </svg>{" "}
                </a>
              </li>

              <li className="flex items-center mr-2">
                {" "}
                <a href="https://www.youtube.com/channel/UCRKpJyWUA02C2ChaJ7FTg1g">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.166504 4.75C0.166504 2.54086 1.95737 0.75 4.1665 0.75H12.8332C15.0423 0.75 16.8332 2.54086 16.8332 4.75V9.25C16.8332 11.4591 15.0423 13.25 12.8332 13.25H4.1665C1.95737 13.25 0.166504 11.4591 0.166504 9.25V4.75Z"
                      fill="white"
                    />
                    <path
                      d="M7.0293 7.47926V6.64096C7.0293 5.8729 7.85923 5.39156 8.52589 5.77297L9.31488 6.22437C10.011 6.62261 9.97863 7.63711 9.25859 7.99021L8.46959 8.37712C7.80517 8.70294 7.0293 8.21927 7.0293 7.47926Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="1.5"
                    />
                  </svg>{" "}
                </a>
              </li>

              <li className="flex items-center mr-2">
                {" "}
                <a href="https://wa.me/+07985432019">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9168 16.6667C14.8288 16.6667 18.0002 13.4953 18.0002 9.58333C18.0002 5.67132 14.8288 2.5 10.9168 2.5C7.00481 2.5 3.8335 5.67132 3.8335 9.58333C3.8335 11.0759 4.29516 12.4607 5.0835 13.6027L4.44726 15.5864C4.19505 16.3727 4.95076 17.1086 5.73013 16.8355L8.00016 16.0402C8.88964 16.4426 9.87707 16.6667 10.9168 16.6667Z"
                      fill="white"
                    />
                    <path
                      d="M7.1665 6.302C7.1665 6.04312 7.37637 5.83325 7.63525 5.83325H8.64441C8.87356 5.83325 9.06911 5.99891 9.10679 6.22494L9.45334 8.30426C9.48717 8.50724 9.38466 8.70855 9.2006 8.80058L8.47491 9.16343C8.99817 10.4637 10.036 11.5016 11.3363 12.0248L11.6992 11.2992C11.7912 11.1151 11.9925 11.0126 12.1955 11.0464L14.2748 11.393C14.5008 11.4306 14.6665 11.6262 14.6665 11.8553V12.8645C14.6665 13.1234 14.4566 13.3333 14.1978 13.3333H13.2603C9.89477 13.3333 7.1665 10.605 7.1665 7.2395V6.302Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <div className="w-full ">
              <Typography
                variant="small"
                color="white"
                className="mb-4 font-bold  text-xl"
              >
                TMC Oakhanger (Head Office)
              </Typography>
              <Typography
                as="li"
                color="white"
                className="font-normal text-base mb-2 flex flex-row"
              >
                <svg
                  width="20"
                  height="20"
                  className="mt-1 mr-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99984 16.667H14.9998C15.4582 16.667 15.8332 17.042 15.8332 17.5003C15.8332 17.9587 15.4582 18.3337 14.9998 18.3337H4.99984C4.5415 18.3337 4.1665 17.9587 4.1665 17.5003C4.1665 17.042 4.5415 16.667 4.99984 16.667ZM9.99984 5.83366C9.08317 5.83366 8.33317 6.58366 8.33317 7.50033C8.33317 8.41699 9.08317 9.16699 9.99984 9.16699C10.9165 9.16699 11.6665 8.41699 11.6665 7.50033C11.6665 6.58366 10.9165 5.83366 9.99984 5.83366ZM9.99984 1.66699C12.7248 1.66699 15.8332 3.71699 15.8332 7.62533C15.8332 10.1087 14.0582 12.7253 10.5082 15.4503C10.2082 15.6837 9.7915 15.6837 9.4915 15.4503C5.9415 12.717 4.1665 10.1087 4.1665 7.62533C4.1665 3.71699 7.27484 1.66699 9.99984 1.66699Z"
                    fill="white"
                  />
                </svg>
                <div className="text-left md:block hidden">
                  The Goodwood Building, The
                  <br /> Yard, Oakhanger Bordon, GU35
                  <br /> 9JU
                </div>
                <div className="text-left md:hidden block w-full">
                  The Goodwood Building, The Yard, Oakhanger Bordon, GU35 9JU
                </div>
              </Typography>
              <p className=" mb-2">
                <a
                  href="tel:01252 943974"
                  className="flex text-white text-decoration-none"
                >
                  +7 (708) 802 88 88
                </a>
              </p>
              <p className=" mb-2">
                <a
                  href="tel:+441252 218030"
                  className="flex text-white text-decoration-none"
                >
                  +7 (700) 51 51 518
                </a>
              </p>
              <a
                href="https://wa.me/+07985432019"
                className="mb-2 flex justify-left items-center"
              >
                {/* <a href="https://wa.me/+07985432019"> */}

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="mr-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.8675 11.7016C13.6546 11.5952 12.6111 11.0823 12.4168 11.0109C12.2225 10.9402 12.0811 10.9052 11.9389 11.118C11.7975 11.3294 11.3911 11.808 11.2675 11.9494C11.1432 12.0916 11.0196 12.1087 10.8075 12.003C10.5953 11.8959 9.91106 11.6723 9.10035 10.9494C8.46964 10.3866 8.04321 9.69158 7.91964 9.47873C7.79607 9.26658 7.90607 9.15158 8.0125 9.04587C8.10821 8.95087 8.22464 8.79801 8.33107 8.67444C8.4375 8.55016 8.4725 8.46159 8.54321 8.31944C8.61464 8.17801 8.57892 8.05444 8.52535 7.94801C8.4725 7.84159 8.04821 6.79659 7.87107 6.37159C7.69893 5.95802 7.52393 6.01445 7.39393 6.0073C7.26964 6.00159 7.12821 6.00016 6.98678 6.00016C6.84536 6.00016 6.61536 6.05302 6.42107 6.26587C6.22607 6.47802 5.67822 6.99159 5.67822 8.03659C5.67822 9.08087 6.43821 10.0902 6.54464 10.2323C6.65107 10.3737 8.04107 12.518 10.1704 13.4373C10.6775 13.6559 11.0725 13.7866 11.3803 13.8837C11.8889 14.0459 12.3518 14.023 12.7175 13.968C13.1246 13.9073 13.9732 13.4544 14.1503 12.9587C14.3268 12.463 14.3268 12.038 14.2739 11.9494C14.2211 11.8609 14.0796 11.808 13.8668 11.7016H13.8675ZM9.99464 16.9894H9.99178C8.72709 16.9897 7.48562 16.6497 6.3975 16.0051L6.14036 15.8523L3.4675 16.5537L4.18107 13.948L4.01322 13.6809C3.30617 12.5554 2.932 11.2529 2.93393 9.92373C2.93536 6.03088 6.1025 2.86374 9.99749 2.86374C11.8832 2.86374 13.6561 3.59945 14.9889 4.93373C15.6463 5.58843 16.1674 6.36699 16.522 7.22437C16.8765 8.08175 17.0576 9.00093 17.0546 9.92873C17.0532 13.8216 13.8861 16.9894 9.99464 16.9894ZM16.0032 3.92016C15.2162 3.12797 14.2798 2.49984 13.2483 2.07217C12.2167 1.6445 11.1106 1.4258 9.99392 1.42874C5.3125 1.42874 1.50108 5.23945 1.49965 9.92301C1.49894 11.4202 1.88965 12.8816 2.63322 14.1694L1.42822 18.5716L5.93107 17.3901C7.17669 18.0688 8.57256 18.4244 9.99106 18.4244H9.99464C14.6761 18.4244 18.4875 14.6137 18.4889 9.92944C18.4924 8.81321 18.2745 7.70737 17.8478 6.6759C17.4211 5.64442 16.7942 4.70778 16.0032 3.92016Z"
                    fill="white"
                  />
                </svg>
                <div className="text-white">+7 (708) 802 88 88</div>
                {/* </a */}
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <Typography
              variant="small"
              color="white"
              className="mb-4 font-bold  text-xl"
            >
              TMC - Huddersfield
            </Typography>
            <Typography
              as="li"
              color="white"
              className="font-normal text-base mb-2 flex flex-row"
            >
              <svg
                width="20"
                height="20"
                className="mt-1 mr-1"
                  viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99984 16.667H14.9998C15.4582 16.667 15.8332 17.042 15.8332 17.5003C15.8332 17.9587 15.4582 18.3337 14.9998 18.3337H4.99984C4.5415 18.3337 4.1665 17.9587 4.1665 17.5003C4.1665 17.042 4.5415 16.667 4.99984 16.667ZM9.99984 5.83366C9.08317 5.83366 8.33317 6.58366 8.33317 7.50033C8.33317 8.41699 9.08317 9.16699 9.99984 9.16699C10.9165 9.16699 11.6665 8.41699 11.6665 7.50033C11.6665 6.58366 10.9165 5.83366 9.99984 5.83366ZM9.99984 1.66699C12.7248 1.66699 15.8332 3.71699 15.8332 7.62533C15.8332 10.1087 14.0582 12.7253 10.5082 15.4503C10.2082 15.6837 9.7915 15.6837 9.4915 15.4503C5.9415 12.717 4.1665 10.1087 4.1665 7.62533C4.1665 3.71699 7.27484 1.66699 9.99984 1.66699Z"
                  fill="white"
                />
              </svg>

              <div>
                6 Barge Street,
                <br />
                Huddersfield, HD1 3LN
              </div>
            </Typography>
            <p className="">
              <a
                href="tel:01484 482511"
                className="flex text-white text-decoration-none"
              >
                +7 (708) 802 88 88
              </a>
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <Typography
              variant="small"
              color="white"
              className="mb-4 font-bold  font-inter text-xl"
            >
              Opening Hours
            </Typography>
            {SITEMAP[2].links.map((link, key) => (
              <div className="flex justify-between py-[1px]" key={key}>
                <Typography
                  key={key + "1"}
                  as="li"
                  color="white"
                  className="font-normal text-base"
                >
                  {link.split(".")[0]}
                </Typography>
                <div className="mr-10"></div>
                <Typography
                  key={key + "2"}
                  as="li"
                  color="white"
                  className="font-normal  font-inter text-base"
                >
                  {link.split(".")[1]}
                </Typography>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-0 md:text-left">
            <Typography
              variant="small"
              color="white"
              className="mb-4 font-bold  text-xl"
            >
              Links
            </Typography>
            <div className="h-full">
              <div>
                {SITEMAP[3].links.map((link, key) => (
                  <Typography
                    key={key + "3"}
                    as="li"
                    color="white"
                    className="font-normal text-base font-inter py-[1px]"
                  >
                    <Link
                      to={link.split(".")[1]}
                      className="font-normal text-base hover:scale-105"
                    >
                      {link.split(".")[0]}
                    </Link>
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
