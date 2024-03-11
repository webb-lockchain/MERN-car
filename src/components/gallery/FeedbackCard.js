import { Card, CardHeader, Typography } from "@material-tailwind/react";
import carguru from "../../assets/images/carguru.png";
// import {Link} from "react-router-dom";
import Modal from "react-modal";
import getData from "../../data/review";
import { ReviewCard1 } from "./ReviewCard1";
import logo from "../../assets/icon/logo.svg";
import { ReactComponent as CloseSVG } from "../svg/close.svg";
import { Rating } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import Feedback1 from "../../assets/images/feedback1.jpg";
import Feedback2 from "../../assets/images/feedback2.png";
import { ReactComponent as FeefoSVG } from "../svg/feefo.svg";
import React, { useState, useEffect } from 'react';
// import {Button, IconButton} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "30px",
    transform: "translate(-50%, -50%)",
    height: "700px",
    maxWidth: "auto",
    overflow:"hidden"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
};
const myStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "0px",
    transform: "translate(-50%, -50%)",
    overflowY: "auto !important",
    height: "100%",
    width:"100%",
    zIndex: 1001
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
    overflowY: "auto !important",
  },
};
function StarIcon(props) {
  const { size } = props;
  let className = `h-[${size}px] w-[${size}px] text-yellow-400 `;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const ReviewModal = ({ open, setOpen, data, screenwidth }) => {
  // open = props.
  const [active, setActive] = useState(1);

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      // style={customStyles}
      style={(screenwidth > 375) ? customStyles : myStyle}
      contentLabel="all reviews"
    // className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xs md:w-max md:max-w-none mx-auto bg-white p-4 rounded-lg"
    >
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col items-start">
            <img
              id="nav-logo"
              itemProp="logo"
              alt="TMC Logo"
              src={logo}
              className="w-18 h-8"
            />
            <Typography variant="h6" color="blue-gray" className="">
              TMC - The Motor Company
            </Typography>
          </div>
          <div className="">
            <div
              onClick={() => {
                document.body.style.overflow="";
                setOpen(false);
              }}
              className="w-8 h-8 p-2 rounded-full border border-black justify-center items-center gap-2 inline-flex  "
            >
              <div className="w-4 h-4">
                <CloseSVG />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-6 sm:justify-between items-center">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Rating value={5} />
              <Typography variant="h6" className="ml-2">
                4.9/5.0{" "}
              </Typography>
              <FeefoSVG />
            </div>
            <div className=""><Typography
              variant="small"
              className="mt-4 overflow-hidden text-gray-500 h-[21px] max-w-[320px] sm:max-w-[500px]"
            >
              Rating Service Independent given based 795 review verified
            </Typography></div>
          </div>
          <div className="flex flex-row ">
            <img src={Feedback1} alt="feedback" />
            <img src={Feedback2} alt="feedback" />
          </div>
        </div>
      </div>

      <div className="w-full justify-between flex-col sm:flex-row items-center gap-2 py-3 flex">
        <div className="flex gap-3 w-full sm:w-fit">
          <div className="px-4  w-1/2 sm:w-fit cursor-pointer py-3 bg-gray-800 hover:bg-gray-900 rounded-full justify-center items-center gap-2 flex">
            <div className="text-white text-sm font-semibold font-['Barlow'] uppercase tracking-tight">
              Newest
            </div>
          </div>
          <div className="px-4 py-3  w-1/2 sm:w-fit cursor-pointer bg-white hover:bg-gray-100 rounded-full border border-gray-800 justify-center items-center gap-2 flex">
            <div className="text-gray-800 text-sm font-semibold font-['Barlow'] uppercase  tracking-tight">
              popular
            </div>
          </div>
        </div>
        <div className="mt-5 w-full sm:w-fit pl-4 float-right items-end">
          <Select
            label="ALL RATINGS"
            variant="standard"
          // className="border-0 py-0"
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
          </Select>

          {/* <select className="mt-2 w-full  bg-white  border-2 border-gray-200 rounded-full py-3 px-6">                
                <option value="option3">2</option>
                <option value="option1">1</option>
              </select> */}



        </div>
      </div>
      <div className="overflow-y-scroll flex max-w-[500px] md:h-[350px] flex-row flex-wrap justify-between gap-4">
        {data.slice(active * 4, active * 4 + 4).map((item, i) => {
          return <ReviewCard1 key={i} data={item} />;
        })}
      </div>
      <div className="flex items-center gap-4 justify-center mt-[40px]">
        <div
          className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
          onClick={prev}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2">
          {/* <IconButton {...getItemProps(1)}>1</IconButton> */}
          <div
            className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 1 ? "bg-gray-900 text-white" : ""
              }`}
            onClick={() => setActive(1)}
          >
            1
          </div>
          <div
            className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 2 ? "bg-gray-900 text-white" : ""
              }`}
            onClick={() => setActive(2)}
          >
            2
          </div>
          <div
            className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${active === 3 ? "bg-gray-900 text-white" : ""
              }`}
            onClick={() => setActive(3)}
          >
            3
          </div>
          
        </div>
        <div
          className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
          onClick={next}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </div>
      </div>
    </Modal>
  );
};

export function FeedbackCard() {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  // let subtitle
  const reviewData = getData();
  return (
    <Card
      color="transparent"
      shadow={false}
      className="relative max-w-[1360px]  lg:w-[1100px]"
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex justify-center items-center gap-4 pt-0 pb-0"
      >
        <ReviewModal open={open} setOpen={setOpen} data={reviewData} screenwidth={screenWidth} />
        <div className="hidden lg:flex w-full gap-0.5 justify-center items-center">
          <div className="hidden lg:flex flex-col gap-0.5">
            <div className="flex items-center justify-center">
              <Typography variant="h5" color="blue-gray  ">
                Customer Average Rating:
              </Typography>
              <div className="5 flex items-center gap-0 w-[150px]">
                <StarIcon size={10} className="scale-100" />
                <StarIcon size={10} />
                <StarIcon size={10} />
                <StarIcon size={10} />
                <StarIcon size={10} />
              </div>
              <div className="blue-gray font-extrabold">4.9</div>
              <div className="blue-gray font-extrabold">/5</div>
              <div className="border-r-4 w-4 h-8 mr-2 border-gray-200"></div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="text-xs font-black text-gray-500 pr-1  ">
                Independent Service Rating
              </div>
              <div className="text-xs font-normal text-gray-500 pr-1  ">
                based on
              </div>
              <div className="text-xs font-black text-gray-500 pr-1  ">791</div>
              <div className="text-xs font-black text-gray-500 pr-1  ">
                verified reviews.
              </div>
              <div
                onClick={() => {
                  document.body.style.overflow="hidden"
                  setOpen(true)
                }}
                className="text-xs font-bold text-blue-600 cursor-pointer  "
              >
                Read all reviews
              </div>
            </div>
          </div>
          <div className="hidden lg:flex w-[120px]">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjQ4MCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjEuOTIiIHk9IjEuOTIiIHdpZHRoPSI0NzYuMTYiIGhlaWdodD0iNDc2LjE2IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjOUE5RkFBIiBzdHJva2Utd2lkdGg9IjMuODQiLz4KPHBhdGggZD0iTTM1LjE0ODggMzAxSDQzLjAyMDhWMjg4LjY2N0g1MC4xMDU2QzU4LjA4MjYgMjg4LjY2NyA2My4zODMgMjgzLjg5MiA2My4zODMgMjc2LjQ5MkM2My4zODMgMjY5LjA0IDU4LjA4MjYgMjY0LjI2NCA1MC4xMDU2IDI2NC4yNjRIMzUuMTQ4OFYzMDFaTTQ5LjM3MDkgMjcwLjgyNEM1My4wNDQ1IDI3MC44MjQgNTUuNDA2MSAyNzIuOTc2IDU1LjQwNjEgMjc2LjQ5MkM1NS40MDYxIDI3OS45NTYgNTMuMDQ0NSAyODIuMTA3IDQ5LjM3MDkgMjgyLjEwN0g0My4wMjA4VjI3MC44MjRINDkuMzcwOVpNNjcuMjE3OCAzMDFINzQuNjE3NVYyNjQuMjY0SDY3LjIxNzhWMzAxWk0xMDUuNDg5IDI5NC43NTVDMTA0LjMzNSAyOTQuNzU1IDEwMy43NTcgMjk0LjQ5MiAxMDMuNzU3IDI5My4wNzZWMjgzLjUyNEMxMDMuNzU3IDI3Ny4wNjkgOTkuNDAxNSAyNzMuNzEgOTEuODQ0NCAyNzMuNzFDODQuNzA3MSAyNzMuNzEgNzkuODc5IDI3Ny4xNzQgNzkuMzU0MiAyODIuNDIySDg2LjQ5MTVDODYuODA2MyAyODAuNDI4IDg4Ljc0ODEgMjc5LjExNiA5MS42MzQ1IDI3OS4xMTZDOTQuNzMwOCAyNzkuMTE2IDk2LjQ2MjcgMjgwLjY5IDk2LjQ2MjcgMjgzLjEwNFYyODQuNDE2SDkxLjEwOTdDODMuMDI3OCAyODQuNDE2IDc4LjcyNDQgMjg3LjY3IDc4LjcyNDQgMjkzLjM5Qzc4LjcyNDQgMjk4LjUzMyA4Mi45MjI4IDMwMS4zMTUgODguNzQ4MSAzMDEuMzE1QzkyLjk0NjUgMzAxLjMxNSA5NS42NzU1IDI5OS41ODMgOTcuNTY0NyAyOTYuNTkyQzk3LjUxMjMgMjk5LjE2MyA5OC43MTkzIDMwMSAxMDIuNTUgMzAxSDEwNi4zMjlWMjk0Ljc1NUgxMDUuNDg5Wk05Ni40NjI3IDI4OS44NzRDOTYuNDEwMiAyOTMuNTQ4IDk0LjA0ODYgMjk1Ljk2MiA5MC4xNjUxIDI5NS45NjJDODcuNjk4NSAyOTUuOTYyIDg2LjE3NjYgMjk0Ljc1NSA4Ni4xNzY2IDI5Mi44NjZDODYuMTc2NiAyOTAuNjA5IDg3Ljk2MDkgMjg5LjM0OSA5MS4wNTcyIDI4OS4zNDlIOTYuNDYyN1YyODkuODc0Wk0xMTEuMTMzIDI5My4yODVDMTExLjEzMyAyOTguNDI4IDExMy43MDUgMzAxIDExOC44NDggMzAxSDEyNC44ODNWMjk0Ljc1NUgxMjEuMjA5QzExOS4yNjggMjk0Ljc1NSAxMTguNTMzIDI5My45NjggMTE4LjUzMyAyOTIuMDc4VjI4MC4yN0gxMjQuNzI2VjI3NC4wMjVIMTE4LjUzM1YyNjYuNDY4SDExMS4xMzNWMjc0LjAyNUgxMDYuNjcyVjI4MC4yN0gxMTEuMTMzVjI5My4yODVaTTEzMi4wMzQgMjcxLjEzOUMxMzQuNDQ4IDI3MS4xMzkgMTM2LjMzNyAyNjkuMzU1IDEzNi4zMzcgMjY2Ljk5M0MxMzYuMzM3IDI2NC41NzkgMTM0LjQ0OCAyNjIuNzk1IDEzMi4wMzQgMjYyLjc5NUMxMjkuNjIgMjYyLjc5NSAxMjcuNzMgMjY0LjU3OSAxMjcuNzMgMjY2Ljk5M0MxMjcuNzMgMjY5LjM1NSAxMjkuNjIgMjcxLjEzOSAxMzIuMDM0IDI3MS4xMzlaTTEyOC4zMDggMzAxSDEzNS43NlYyNzQuMDI1SDEyOC4zMDhWMzAxWk0xNTYuMzQ2IDI3My43MUMxNTIuMiAyNzMuNzEgMTQ5LjczMyAyNzUuMjg1IDE0OC4wMDEgMjc3LjM4NEwxNDcuMzE5IDI3NC4wMjVIMTQwLjg2NFYzMDFIMTQ4LjI2NFYyODcuMTk4QzE0OC4yNjQgMjgyLjUyNyAxNTAuNDY4IDI3OS43OTggMTU0LjI5OSAyNzkuNzk4QzE1OC4wMjUgMjc5Ljc5OCAxNTkuNzU3IDI4Mi4yMTIgMTU5Ljc1NyAyODYuNzc4VjMwMUgxNjcuMTU3VjI4Ni4wNDNDMTY3LjE1NyAyNzYuODA3IDE2Mi4xNzEgMjczLjcxIDE1Ni4zNDYgMjczLjcxWk0xODkuODIgMjg3LjUxM0MxODkuODIgMjkyLjQ5OCAxODcuNjY4IDI5NS4xNzUgMTgzLjk5NCAyOTUuMTc1QzE4MC4zMjEgMjk1LjE3NSAxNzguNzQ2IDI5Mi44MTMgMTc4Ljc0NiAyODcuOTg1VjI3NC4wMjVIMTcxLjM0N1YyODguOTgyQzE3MS4zNDcgMjk4LjUzMyAxNzYuNDkgMzAxLjMxNSAxODIuMDUzIDMwMS4zMTVDMTg1Ljg4NCAzMDEuMzE1IDE4OC4yNDUgMjk5Ljg0NSAxODkuOTc3IDI5Ny43NDZMMTkwLjY1OSAzMDFIMTk3LjIxOVYyNzQuMDI1SDE4OS44MlYyODcuNTEzWk0yMzQuNjM5IDI3My43MUMyMzAuNTQ2IDI3My43MSAyMjcuMzk3IDI3NS4zOSAyMjUuNTA4IDI3OC4yNzZDMjIzLjgyOCAyNzQuODY1IDIyMC43MzIgMjczLjY1OCAyMTcuNDI2IDI3My43MUMyMTMuNDkgMjczLjc2MyAyMTEuMTI4IDI3NS4yODUgMjA5LjUwMSAyNzcuMzg0TDIwOC44MTkgMjc0LjAyNUgyMDIuMzY0VjMwMUgyMDkuNzY0VjI4Ni4zMDZDMjA5Ljc2NCAyODIuMjY1IDIxMS44NjMgMjc5Ljc5OCAyMTUuMDY0IDI3OS43OThDMjE4LjMxOCAyNzkuNzk4IDIxOS43ODcgMjgxLjg5NyAyMTkuNzg3IDI4NS45MzhWMzAxSDIyNy4xODdWMjg2LjI1M0MyMjcuMTg3IDI4Mi4xNiAyMjkuMzM5IDI3OS43OTggMjMyLjU0IDI3OS43OThDMjM1Ljc0MSAyNzkuNzk4IDIzNy4yMTEgMjgxLjg5NyAyMzcuMjExIDI4NS45MzhWMzAxSDI0NC42MVYyODUuNTE4QzI0NC42MSAyNzYuODU5IDI0MC4yMDIgMjczLjcxIDIzNC42MzkgMjczLjcxWk0yNjAuNzUzIDI3MS4wMzRIMjcxLjM1NFYzMDFIMjc5LjIyNlYyNzEuMDM0SDI4OS44OFYyNjQuMjY0SDI2MC43NTNWMjcxLjAzNFpNMzA2LjM0NyAyNzQuMDI1QzMwMi4xNDkgMjc0LjAyNSAzMDAuMDQ5IDI3NS42NTIgMjk4LjU4IDI3OC4wNjZMMjk3Ljg5OCAyNzQuMDI1SDI5MS4xOFYzMDFIMjk4LjU4VjI4Ny43NzVDMjk4LjU4IDI4My42ODIgMzAwLjI1OSAyODAuNzQzIDMwNC42NjggMjgwLjc0M0gzMDcuNjA3VjI3NC4wMjVIMzA2LjM0N1pNMzI4LjkxMiAyODcuNTEzQzMyOC45MTIgMjkyLjQ5OCAzMjYuNzYxIDI5NS4xNzUgMzIzLjA4NyAyOTUuMTc1QzMxOS40MTMgMjk1LjE3NSAzMTcuODM5IDI5Mi44MTMgMzE3LjgzOSAyODcuOTg1VjI3NC4wMjVIMzEwLjQzOVYyODguOTgyQzMxMC40MzkgMjk4LjUzMyAzMTUuNTgyIDMwMS4zMTUgMzIxLjE0NSAzMDEuMzE1QzMyNC45NzYgMzAxLjMxNSAzMjcuMzM4IDI5OS44NDUgMzI5LjA3IDI5Ny43NDZMMzI5Ljc1MiAzMDFIMzM2LjMxMlYyNzQuMDI1SDMyOC45MTJWMjg3LjUxM1pNMzQwLjE5NyAyOTIuMDI2QzM0MC41MTIgMjk3Ljc5OSAzNDUuNjAyIDMwMS4zMTUgMzUzLjEwNyAzMDEuMzE1QzM2MC4zNDkgMzAxLjMxNSAzNjUuMzg3IDI5Ny45MDQgMzY1LjM4NyAyOTIuNTUxQzM2NS4zODcgMjg2LjQ2MyAzNjAuMjQ0IDI4NS4wNDYgMzU0LjA1MiAyODQuNDE2QzM1MC4xNjggMjgzLjk0NCAzNDcuODU5IDI4My43MzQgMzQ3Ljg1OSAyODEuNjg3QzM0Ny44NTkgMjc5Ljk1NiAzNDkuNzQ4IDI3OC45MDYgMzUyLjYzNSAyNzguOTA2QzM1NS42MjYgMjc4LjkwNiAzNTcuNjczIDI4MC4yMTggMzU3Ljg4MyAyODIuMzdIMzY0Ljk2OEMzNjQuNiAyNzYuODU5IDM1OS42MTUgMjczLjY1OCAzNTIuMzcyIDI3My42NThDMzQ1LjQ0NSAyNzMuNjA1IDM0MC43NzQgMjc3LjEyMiAzNDAuNzc0IDI4Mi40NzVDMzQwLjc3NCAyODguMDM3IDM0NS42NTUgMjg5LjQ1NCAzNTEuOTUzIDI5MC4xODlDMzU2LjMwOCAyOTAuNzY2IDM1OC4xNDUgMjkwLjkyNCAzNTguMTQ1IDI5My4xMjhDMzU4LjE0NSAyOTUuMDE3IDM1Ni4yNTYgMjk2LjAxNCAzNTMuMTYgMjk2LjAxNEMzNDkuNTM4IDI5Ni4wMTQgMzQ3LjQ5MiAyOTQuMzg4IDM0Ny4yMjkgMjkyLjAyNkgzNDAuMTk3Wk0zNzEuMjI3IDI5My4yODVDMzcxLjIyNyAyOTguNDI4IDM3My43OTkgMzAxIDM3OC45NDIgMzAxSDM4NC45NzdWMjk0Ljc1NUgzODEuMzAzQzM3OS4zNjEgMjk0Ljc1NSAzNzguNjI3IDI5My45NjggMzc4LjYyNyAyOTIuMDc4VjI4MC4yN0gzODQuODE5VjI3NC4wMjVIMzc4LjYyN1YyNjYuNDY4SDM3MS4yMjdWMjc0LjAyNUgzNjYuNzY2VjI4MC4yN0gzNzEuMjI3VjI5My4yODVaTTQwMS4zMjEgMzAxLjMxNUM0MDguNTExIDMwMS4zMTUgNDEzLjE4MiAyOTcuMTE2IDQxNC4wMjIgMjkxLjg2OEg0MDYuNzI3QzQwNi4wOTcgMjk0LjM4OCA0MDMuOTk4IDI5NS43IDQwMS4wMDcgMjk1LjdDMzk3LjI4IDI5NS43IDM5NC44MTQgMjkzLjM5IDM5NC42NTYgMjg5LjU1OVYyODkuMTkySDQxNC4yMzJDNDE0LjM4OSAyODguMzUyIDQxNC40NDEgMjg3LjQ2IDQxNC40NDEgMjg2LjY3M0M0MTQuMzM2IDI3OC43NDggNDA4Ljg3OSAyNzMuNzEgNDAwLjc5NyAyNzMuNzFDMzkyLjQ1MiAyNzMuNzEgMzg2Ljk0MiAyNzkuMTY4IDM4Ni45NDIgMjg3LjU2NUMzODYuOTQyIDI5NS45MDkgMzkyLjM0NyAzMDEuMzE1IDQwMS4zMjEgMzAxLjMxNVpNMzk0LjgxNCAyODQuMzY0QzM5NS4yMzQgMjgxLjE2MyAzOTcuNjQ4IDI3OS4yMjEgNDAwLjg0OSAyNzkuMjIxQzQwNC4yMDggMjc5LjIyMSA0MDYuNDY0IDI4MS4wNTggNDA2Ljk4OSAyODQuMzY0SDM5NC44MTRaTTQzOC4wNiAyNzcuMzg0QzQzNi4zMjkgMjc1LjE4IDQzMy42NTIgMjczLjcxIDQyOS45MjYgMjczLjcxQzQyMi43MzYgMjczLjcxIDQxNy40MzYgMjc5LjExNiA0MTcuNDM2IDI4Ny40NkM0MTcuNDM2IDI5Ni4wMTQgNDIyLjczNiAzMDEuMzE1IDQyOS45NzggMzAxLjMxNUM0MzMuODYyIDMwMS4zMTUgNDM2LjQ4NiAyOTkuNTgzIDQzOC4yNyAyOTcuMjc0TDQzOS4wMDUgMzAxSDQ0NS40NlYyNjQuMjY0SDQzOC4wNlYyNzcuMzg0Wk00MzEuNjA1IDI5NS4yOEM0MjcuNTY0IDI5NS4yOCA0MjQuOTkzIDI5Mi4xMzEgNDI0Ljk5MyAyODcuNTEzQzQyNC45OTMgMjgyLjg5NCA0MjcuNTY0IDI3OS43NDYgNDMxLjYwNSAyNzkuNzQ2QzQzNS42NDYgMjc5Ljc0NiA0MzguMTY1IDI4Mi45NDcgNDM4LjE2NSAyODcuNTY1QzQzOC4xNjUgMjkyLjEzMSA0MzUuNjQ2IDI5NS4yOCA0MzEuNjA1IDI5NS4yOFpNMzMuNjc5NCAzNDIuOTNDMzMuNzMxOCAzNTAuMzgyIDM5LjU1NzEgMzU1LjMxNSA0OC44OTg2IDM1NS4zMTVDNTcuNTA1MyAzNTUuMzE1IDYzLjE3MzEgMzUwLjU5MiA2My4yMjU2IDM0My43MTdDNjMuMjc4MSAzMzYuMzE3IDU3LjcxNTIgMzM0LjQyOCA1MS40MTc2IDMzMy4yNzNDNDUuMzI5OSAzMzIuMTE5IDQyLjQ0MzUgMzMxLjQ4OSA0Mi40NDM1IDMyOC40OThDNDIuNDQzNSAzMjUuNjY0IDQ0Ljg1NzYgMzI0LjI0NyA0OC4yMTYzIDMyNC4yNDdDNTIuMDQ3NCAzMjQuMjQ3IDU0LjQwOSAzMjYuMzk4IDU0Ljc3NjMgMzI5LjQ5NUg2Mi40OTA5QzYyLjM4NTkgMzIyLjQ2MiA1Ni44NzU1IDMxNy45NDkgNDguMjE2MyAzMTcuOTQ5QzM5LjkyNDUgMzE3Ljk0OSAzNC41MTkgMzIyLjU2NyAzNC41MTkgMzI5LjA3NUMzNC41MTkgMzM2LjUyNyAzOS45NzcgMzM4LjUyMSA0Ni4xNjk2IDMzOS42NzZDNTIuMzA5OCAzNDAuODgzIDU1LjMwMTEgMzQxLjUxMyA1NS4zMDExIDM0NC42MDlDNTUuMzAxMSAzNDcuNDk1IDUyLjYyNDYgMzQ5LjA3IDQ5LjAwMzUgMzQ5LjA3QzQ0LjQ5MDIgMzQ5LjA3IDQxLjY1NjMgMzQ2LjYwMyA0MS4zOTM5IDM0My4wMzVMMzMuNjc5NCAzNDIuOTNaTTgwLjcwMTQgMzU1LjMxNUM4Ny44OTEyIDM1NS4zMTUgOTIuNTYxOSAzNTEuMTE2IDkzLjQwMTYgMzQ1Ljg2OEg4Ni4xMDY5Qzg1LjQ3NzEgMzQ4LjM4OCA4My4zNzc5IDM0OS43IDgwLjM4NjYgMzQ5LjdDNzYuNjYwNSAzNDkuNyA3NC4xOTM5IDM0Ny4zOSA3NC4wMzY1IDM0My41NTlWMzQzLjE5Mkg5My42MTE1QzkzLjc2OSAzNDIuMzUyIDkzLjgyMTQgMzQxLjQ2IDkzLjgyMTQgMzQwLjY3M0M5My43MTY1IDMzMi43NDggODguMjU4NiAzMjcuNzEgODAuMTc2NiAzMjcuNzFDNzEuODMyMyAzMjcuNzEgNjYuMzIxOSAzMzMuMTY4IDY2LjMyMTkgMzQxLjU2NUM2Ni4zMjE5IDM0OS45MDkgNzEuNzI3NCAzNTUuMzE1IDgwLjcwMTQgMzU1LjMxNVpNNzQuMTkzOSAzMzguMzY0Qzc0LjYxMzggMzM1LjE2MyA3Ny4wMjc4IDMzMy4yMjEgODAuMjI5MSAzMzMuMjIxQzgzLjU4NzggMzMzLjIyMSA4NS44NDQ1IDMzNS4wNTggODYuMzY5MyAzMzguMzY0SDc0LjE5MzlaTTExMy4wMzIgMzI4LjAyNUMxMDguODM0IDMyOC4wMjUgMTA2LjczNCAzMjkuNjUyIDEwNS4yNjUgMzMyLjA2NkwxMDQuNTgzIDMyOC4wMjVIOTcuODY1M1YzNTVIMTA1LjI2NVYzNDEuNzc1QzEwNS4yNjUgMzM3LjY4MiAxMDYuOTQ0IDMzNC43NDMgMTExLjM1MyAzMzQuNzQzSDExNC4yOTJWMzI4LjAyNUgxMTMuMDMyWk0xMjUuMTk0IDM1NUgxMzQuMzc4TDE0NC4wODcgMzI4LjAyNUgxMzYuMzJMMTI5LjkxNyAzNDcuNDQzTDEyMy40MSAzMjguMDI1SDExNS40ODVMMTI1LjE5NCAzNTVaTTE1MC4yNzkgMzI1LjEzOUMxNTIuNjkzIDMyNS4xMzkgMTU0LjU4MiAzMjMuMzU1IDE1NC41ODIgMzIwLjk5M0MxNTQuNTgyIDMxOC41NzkgMTUyLjY5MyAzMTYuNzk1IDE1MC4yNzkgMzE2Ljc5NUMxNDcuODY1IDMxNi43OTUgMTQ1Ljk3NiAzMTguNTc5IDE0NS45NzYgMzIwLjk5M0MxNDUuOTc2IDMyMy4zNTUgMTQ3Ljg2NSAzMjUuMTM5IDE1MC4yNzkgMzI1LjEzOVpNMTQ2LjU1MyAzNTVIMTU0LjAwNVYzMjguMDI1SDE0Ni41NTNWMzU1Wk0xNzEuODA5IDM1NS4zMTVDMTc5LjE1NiAzNTUuMzE1IDE4NC4wMzcgMzUxLjI3NCAxODUuMDg3IDM0NC44MTlIMTc3LjMyQzE3Ni43OTUgMzQ3LjU0OCAxNzQuODUzIDM0OS4yOCAxNzEuOTY3IDM0OS4yOEMxNjguMDgzIDM0OS4yOCAxNjUuNjE3IDM0Ni4xMzEgMTY1LjYxNyAzNDEuNTEzQzE2NS42MTcgMzM2Ljk0NyAxNjguMDgzIDMzMy43NDYgMTcxLjk2NyAzMzMuNzQ2QzE3NC44NTMgMzMzLjc0NiAxNzYuNjkgMzM1LjQyNSAxNzcuMzIgMzM4LjEwMUgxODUuMDM0QzE4My45ODUgMzMxLjY5OSAxNzkuNDE5IDMyNy43MSAxNzIuMDcyIDMyNy43MUMxNjMuNTE3IDMyNy43MSAxNTguMDU5IDMzMy4xNjggMTU4LjA1OSAzNDEuNTEzQzE1OC4wNTkgMzUwLjAxNCAxNjMuMjU1IDM1NS4zMTUgMTcxLjgwOSAzNTUuMzE1Wk0yMDIuMzE4IDM1NS4zMTVDMjA5LjUwNyAzNTUuMzE1IDIxNC4xNzggMzUxLjExNiAyMTUuMDE4IDM0NS44NjhIMjA3LjcyM0MyMDcuMDkzIDM0OC4zODggMjA0Ljk5NCAzNDkuNyAyMDIuMDAzIDM0OS43QzE5OC4yNzcgMzQ5LjcgMTk1LjgxIDM0Ny4zOSAxOTUuNjUzIDM0My41NTlWMzQzLjE5MkgyMTUuMjI4QzIxNS4zODUgMzQyLjM1MiAyMTUuNDM4IDM0MS40NiAyMTUuNDM4IDM0MC42NzNDMjE1LjMzMyAzMzIuNzQ4IDIwOS44NzUgMzI3LjcxIDIwMS43OTMgMzI3LjcxQzE5My40NDkgMzI3LjcxIDE4Ny45MzggMzMzLjE2OCAxODcuOTM4IDM0MS41NjVDMTg3LjkzOCAzNDkuOTA5IDE5My4zNDQgMzU1LjMxNSAyMDIuMzE4IDM1NS4zMTVaTTE5NS44MSAzMzguMzY0QzE5Ni4yMyAzMzUuMTYzIDE5OC42NDQgMzMzLjIyMSAyMDEuODQ1IDMzMy4yMjFDMjA1LjIwNCAzMzMuMjIxIDIwNy40NjEgMzM1LjA1OCAyMDcuOTg2IDMzOC4zNjRIMTk1LjgxWk0yMzguMjcyIDM1NUwyNDEuMTA2IDM0Ni45NzFIMjU1LjA2NUwyNTcuODk5IDM1NUgyNjYuMzQ5TDI1My4wMTkgMzE4LjI2NEgyNDMuNTcyTDIzMC4xMzcgMzU1SDIzOC4yNzJaTTI0OC4wMzMgMzI2LjY2MUwyNTIuOTE0IDM0MC42MkgyNDMuMjA1TDI0OC4wMzMgMzI2LjY2MVpNMjcyLjY3MiAzNTVIMjgwLjU0NEwyODUuMzcyIDMzOC43MzFMMjkwLjA5NSAzNTVIMjk3Ljk2N0wzMDYuODM2IDMyOC4wMjVIMjk5LjI3OUwyOTMuNzY5IDM0Ny4wNzZMMjg4LjgzNSAzMjguMDI1SDI4Mi4xNzFMMjc3LjA4IDM0Ny4wMjNMMjcxLjY3NSAzMjguMDI1SDI2My44NTVMMjcyLjY3MiAzNTVaTTMzMy45MTEgMzQ4Ljc1NUMzMzIuNzU2IDM0OC43NTUgMzMyLjE3OSAzNDguNDkyIDMzMi4xNzkgMzQ3LjA3NlYzMzcuNTI0QzMzMi4xNzkgMzMxLjA2OSAzMjcuODIzIDMyNy43MSAzMjAuMjY2IDMyNy43MUMzMTMuMTI4IDMyNy43MSAzMDguMyAzMzEuMTc0IDMwNy43NzUgMzM2LjQyMkgzMTQuOTEzQzMxNS4yMjggMzM0LjQyOCAzMTcuMTY5IDMzMy4xMTYgMzIwLjA1NiAzMzMuMTE2QzMyMy4xNTIgMzMzLjExNiAzMjQuODg0IDMzNC42OSAzMjQuODg0IDMzNy4xMDRWMzM4LjQxNkgzMTkuNTMxQzMxMS40NDkgMzM4LjQxNiAzMDcuMTQ2IDM0MS42NyAzMDcuMTQ2IDM0Ny4zOUMzMDcuMTQ2IDM1Mi41MzMgMzExLjM0NCAzNTUuMzE1IDMxNy4xNjkgMzU1LjMxNUMzMjEuMzY4IDM1NS4zMTUgMzI0LjA5NyAzNTMuNTgzIDMyNS45ODYgMzUwLjU5MkMzMjUuOTM0IDM1My4xNjMgMzI3LjE0MSAzNTUgMzMwLjk3MiAzNTVIMzM0Ljc1VjM0OC43NTVIMzMzLjkxMVpNMzI0Ljg4NCAzNDMuODc0QzMyNC44MzEgMzQ3LjU0OCAzMjIuNDcgMzQ5Ljk2MiAzMTguNTg2IDM0OS45NjJDMzE2LjEyIDM0OS45NjIgMzE0LjU5OCAzNDguNzU1IDMxNC41OTggMzQ2Ljg2NkMzMTQuNTk4IDM0NC42MDkgMzE2LjM4MiAzNDMuMzQ5IDMxOS40NzkgMzQzLjM0OUgzMjQuODg0VjM0My44NzRaTTM1Mi43OCAzMjguMDI1QzM0OC41ODEgMzI4LjAyNSAzNDYuNDgyIDMyOS42NTIgMzQ1LjAxMiAzMzIuMDY2TDM0NC4zMyAzMjguMDI1SDMzNy42MTNWMzU1SDM0NS4wMTJWMzQxLjc3NUMzNDUuMDEyIDMzNy42ODIgMzQ2LjY5MiAzMzQuNzQzIDM1MS4xIDMzNC43NDNIMzU0LjAzOVYzMjguMDI1SDM1Mi43OFpNMzc2LjA0OCAzMzEuMzg0QzM3NC4zMTYgMzI5LjE4IDM3MS42NCAzMjcuNzEgMzY3LjkxMyAzMjcuNzFDMzYwLjcyNCAzMjcuNzEgMzU1LjQyMyAzMzMuMTE2IDM1NS40MjMgMzQxLjQ2QzM1NS40MjMgMzUwLjAxNCAzNjAuNzI0IDM1NS4zMTUgMzY3Ljk2NiAzNTUuMzE1QzM3MS44NDkgMzU1LjMxNSAzNzQuNDczIDM1My41ODMgMzc2LjI1OCAzNTEuMjc0TDM3Ni45OTIgMzU1SDM4My40NDhWMzE4LjI2NEgzNzYuMDQ4VjMzMS4zODRaTTM2OS41OTMgMzQ5LjI4QzM2NS41NTIgMzQ5LjI4IDM2Mi45OCAzNDYuMTMxIDM2Mi45OCAzNDEuNTEzQzM2Mi45OCAzMzYuODk0IDM2NS41NTIgMzMzLjc0NiAzNjkuNTkzIDMzMy43NDZDMzczLjYzNCAzMzMuNzQ2IDM3Ni4xNTMgMzM2Ljk0NyAzNzYuMTUzIDM0MS41NjVDMzc2LjE1MyAzNDYuMTMxIDM3My42MzQgMzQ5LjI4IDM2OS41OTMgMzQ5LjI4WiIgZmlsbD0iIzI5MkYzNiIvPgo8cGF0aCBkPSJNMzIuOTA5MSA0NDUuMkg1NS4xNjE2VjQzOS45NjJINDEuOTU3M0w0OC43NTQzIDQzNC40MkM1Mi41NjQxIDQzMS4zNDcgNTQuOTg4NSA0MjguNjE5IDU0Ljk4ODUgNDI0LjE2QzU0Ljk4ODUgNDE4LjQ4OSA1MS4xMzU0IDQxNC42MzUgNDQuMDM1NCA0MTQuNjM1QzM3LjEwODUgNDE0LjYzNSAzMi44MjI2IDQxOS4wNTEgMzIuODIyNiA0MjQuNzY2VjQyNS42MzJIMzkuMVY0MjUuMTU2QzM5LjEgNDIxLjg2NSA0MS4wOTE1IDQxOS44NzQgNDMuOTkyMSA0MTkuODc0QzQ2Ljc2MjggNDE5Ljg3NCA0OC43MTEgNDIxLjQzMiA0OC43MTEgNDI0LjQyQzQ4LjcxMSA0MjYuODg3IDQ3LjA2NTkgNDI4LjcwNiA0NC40MjUgNDMwLjg3TDMyLjkwOTEgNDQwLjM5NVY0NDUuMlpNNTcuODI1MiA0MzAuNzRDNTcuODI1MiA0MzkuOTYyIDYyLjk3NyA0NDUuNDYgNzAuMjkzNSA0NDUuNDZDNzcuNjUzMiA0NDUuNDYgODIuODA1MSA0MzkuOTYyIDgyLjgwNTEgNDMwLjc0VjQyOS4zNTVDODIuODA1MSA0MjAuMzA3IDc3LjY1MzIgNDE0LjYzNSA3MC4yOTM1IDQxNC42MzVDNjIuOTc3IDQxNC42MzUgNTcuODI1MiA0MjAuMzA3IDU3LjgyNTIgNDI5LjM1NVY0MzAuNzRaTTc2LjU3MDkgNDMwLjUyNEM3Ni41NzA5IDQzNi44MDEgNzQuMDE2NyA0NDAuMTc4IDcwLjI5MzUgNDQwLjE3OEM2Ni42MTM2IDQ0MC4xNzggNjQuMDU5MyA0MzYuODAxIDY0LjA1OTMgNDMwLjUyNFY0MjkuNTcyQzY0LjA1OTMgNDIzLjMzNyA2Ni42MTM2IDQxOS45MTcgNzAuMjkzNSA0MTkuOTE3Qzc0LjAxNjcgNDE5LjkxNyA3Ni41NzA5IDQyMy4zMzcgNzYuNTcwOSA0MjkuNTcyVjQzMC41MjRaTTg1LjIwNzIgNDQ1LjJIMTA3LjQ2VjQzOS45NjJIOTQuMjU1NEwxMDEuMDUyIDQzNC40MkMxMDQuODYyIDQzMS4zNDcgMTA3LjI4NiA0MjguNjE5IDEwNy4yODYgNDI0LjE2QzEwNy4yODYgNDE4LjQ4OSAxMDMuNDMzIDQxNC42MzUgOTYuMzMzNCA0MTQuNjM1Qzg5LjQwNjYgNDE0LjYzNSA4NS4xMjA2IDQxOS4wNTEgODUuMTIwNiA0MjQuNzY2VjQyNS42MzJIOTEuMzk4VjQyNS4xNTZDOTEuMzk4IDQyMS44NjUgOTMuMzg5NSA0MTkuODc0IDk2LjI5MDEgNDE5Ljg3NEM5OS4wNjA4IDQxOS44NzQgMTAxLjAwOSA0MjEuNDMyIDEwMS4wMDkgNDI0LjQyQzEwMS4wMDkgNDI2Ljg4NyA5OS4zNjM5IDQyOC43MDYgOTYuNzIzIDQzMC44N0w4NS4yMDcyIDQ0MC4zOTVWNDQ1LjJaTTEyNi43NDggNDI5LjQ0MkMxMjkuNzM1IDQyOC42NjIgMTMyLjAyOSA0MjYuNDk4IDEzMi4wMjkgNDIyLjgxOEMxMzIuMDI5IDQxNy44MzkgMTI3Ljk2IDQxNC42MzUgMTIxLjEyIDQxNC42MzVDMTE0LjQ5NiA0MTQuNjM1IDEwOS45MDcgNDE4LjQ4OSAxMDkuODIgNDI0LjE2SDExNS45MjRDMTE2LjAxMSA0MjEuMzQ2IDExOC4wODkgNDE5LjUyOCAxMjEuMDMzIDQxOS41MjhDMTIzLjYzMSA0MTkuNTI4IDEyNS43MDkgNDIwLjgyNiAxMjUuNzA5IDQyMy4yOTRDMTI1LjcwOSA0MjUuNjc1IDEyNC4wMiA0MjcuMzY0IDEyMC42ODcgNDI3LjM2NEgxMTguMDQ2VjQzMi4zNDJIMTIxLjAzM0MxMjQuNTQgNDMyLjM0MiAxMjYuMzE1IDQzMy44NTcgMTI2LjMxNSA0MzYuMjM5QzEyNi4zMTUgNDM4Ljk2NiAxMjQuMTA3IDQ0MC41NjggMTIxLjI5MyA0NDAuNTY4QzExOC4wMDIgNDQwLjU2OCAxMTUuNTc4IDQzOC43NSAxMTUuNDkxIDQzNS4zMjlIMTA5LjMwMUMxMDkuMzAxIDQ0MS44MjMgMTEzLjg0NiA0NDUuNDYgMTIwLjk5IDQ0NS40NkMxMjguMTMzIDQ0NS40NiAxMzIuNjM1IDQ0MS44NjcgMTMyLjYzNSA0MzYuNjI4QzEzMi42MzUgNDMyLjIxMiAxMjkuOTk1IDQzMC4wOTEgMTI2Ljc0OCA0MjkuNDQyWiIgZmlsbD0iIzlBOUZBQSIvPgo8cGF0aCBkPSJNMzA3LjQgNDI2LjEzM0gyOTMuMzczQzI5My45OSA0MjMuMjgyIDI5Ni42MTQgNDIxLjM4NCAzMDAuMyA0MjEuMzg0QzMwMy45ODcgNDIxLjM4NCAzMDYuMzM4IDQyMy4wNjQgMzA3LjQgNDI2LjEzM00zMTYuMjg4IDQzMi4zODlWNDMxLjQzNkMzMTYuMjg4IDQyMC4yNiAzMDkuNzUxIDQxMy4zODcgMzAwLjE5OSA0MTMuMzg3QzI5Ni4xMjIgNDEzLjM4NyAyOTIuMTU0IDQxNS4wNjYgMjg5LjEzMiA0MTguMDgxQzI4Ni4xNzEgNDIxLjA0MSAyODQuNTU1IDQyNC44OTkgMjg0LjU1NSA0MjkuMDg1QzI4NC41NTUgNDMzLjI3MiAyODYuMDYyIDQzNy4xMyAyODguOTY4IDQ0MC4yMDdDMjkyLjA0NSA0NDMuNDQ5IDI5NS43MzEgNDQ1LjAxMSAzMDAuMzA4IDQ0NS4wMTFDMzA3LjAxNyA0NDUuMDExIDMxMS45ODQgNDQxLjgyNCAzMTQuODkgNDM1LjU2OEgzMDUuMTY2QzMwMy44MjMgNDM2Ljc0IDMwMi4zNyA0MzcuMjQ3IDMwMC41ODEgNDM3LjI0N0MyOTYuNzIzIDQzNy4yNDcgMjk0LjQzNSA0MzUuNTY4IDI5My42NTQgNDMyLjM4OUgzMTYuMjhIMzE2LjI4OFoiIGZpbGw9IiMyOTJGMzYiLz4KPHBhdGggZD0iTTM0MC43OTggNDI2LjEzM0gzMjYuNzcxQzMyNy4zODggNDIzLjI4MiAzMzAuMDEyIDQyMS4zODQgMzMzLjY5OSA0MjEuMzg0QzMzNy4zODUgNDIxLjM4NCAzMzkuNzI4IDQyMy4wNjQgMzQwLjc5OCA0MjYuMTMzTTM0OS42ODYgNDMyLjM4OVY0MzEuNDM2QzM0OS42ODYgNDIwLjI2IDM0My4xNDkgNDEzLjM4NyAzMzMuNTk3IDQxMy4zODdDMzI5LjUyIDQxMy4zODcgMzI1LjU1MyA0MTUuMDY2IDMyMi41MyA0MTguMDgxQzMxOS41NyA0MjEuMDQxIDMxNy45NTMgNDI0Ljg5OSAzMTcuOTUzIDQyOS4wODVDMzE3Ljk1MyA0MzMuMjcyIDMxOS40NjEgNDM3LjEzIDMyMi4zNjYgNDQwLjIwN0MzMjUuNDQzIDQ0My40NDkgMzI5LjEzIDQ0NS4wMTEgMzMzLjcwNyA0NDUuMDExQzM0MC40MTYgNDQ1LjAxMSAzNDUuMzgzIDQ0MS44MjQgMzQ4LjI4OCA0MzUuNTY4SDMzOC41NjVDMzM3LjIyMSA0MzYuNzQgMzM1Ljc2OCA0MzcuMjQ3IDMzMy45ODggNDM3LjI0N0MzMzAuMTI5IDQzNy4yNDcgMzI3Ljg0MSA0MzUuNTY4IDMyNy4wNiA0MzIuMzg5SDM0OS42ODZWNDMyLjM4OVoiIGZpbGw9IiMyOTJGMzYiLz4KPHBhdGggZD0iTTI3Mi4wNDYgNDIwLjk5MVY0NDQuMjg5SDI4MC43MDhWNDIwLjk5MUgyODQuMjNWNDE0LjI5SDI4MC43MDhWNDEzLjU2NEMyODAuNzA4IDQxMC44MjIgMjgxLjMyNSA0MDkuOTMyIDI4NC4wMDQgNDA5LjkzMkgyODQuMjNWNDAzLjg5NUMyODMuNzMgNDAzLjg5NSAyODMuMjc3IDQwMy44NCAyODIuODMyIDQwMy44NEMyNzUuNDUxIDQwMy44NCAyNzEuOTkxIDQwNi43NDUgMjcxLjk5MSA0MTMuMTczQzI3MS45OTEgNDEzLjUwOSAyNzIuMDQ2IDQxMy45IDI3Mi4wNDYgNDE0LjI5SDI2OC44MDVWNDIwLjk5OUgyNzIuMDQ2VjQyMC45OTFaIiBmaWxsPSIjMjkyRjM2Ii8+CjxwYXRoIGQ9Ik0zNTMuMDU0IDQyMC45OTJWNDQ0LjI5SDM2MS43MTVWNDIwLjk5MkgzNjUuMjM4VjQxNC4yOTFIMzYxLjcxNVY0MTMuNTY1QzM2MS43MTUgNDEwLjgyMyAzNjIuMzMyIDQwOS45MzMgMzY1LjAxMSA0MDkuOTMzSDM2NS4yM1Y0MDMuODk1QzM2NC43MyA0MDMuODk1IDM2NC4yNzcgNDAzLjg0MSAzNjMuODMyIDQwMy44NDFDMzU2LjQ1OSA0MDMuODQxIDM1Mi45OTEgNDA2Ljc0NiAzNTIuOTkxIDQxMy4xNzRDMzUyLjk5MSA0MTMuNTEgMzUzLjA0NiA0MTMuOSAzNTMuMDQ2IDQxNC4yOTFIMzQ5LjgwNVY0MjFIMzUzLjA0NkwzNTMuMDU0IDQyMC45OTJaIiBmaWxsPSIjMjkyRjM2Ii8+CjxwYXRoIGQ9Ik0zODguMTQyIDQyOS4zMThDMzg4LjE0MiA0MzMuMzk1IDM4NC45NTUgNDM2LjY5MSAzODEuMDUgNDM2LjY5MUMzNzcuMTQ1IDQzNi42OTEgMzczLjk1MSA0MzMuMzk1IDM3My45NTEgNDI5LjMxOEMzNzMuOTUxIDQyNS4yNDEgMzc3LjEzNyA0MjEuODkxIDM4MS4wNSA0MjEuODkxQzM4NC45NjMgNDIxLjg5MSAzODguMTQyIDQyNS4xODcgMzg4LjE0MiA0MjkuMzE4Wk0zOTYuOTEzIDQyOS4xQzM5Ni45MTMgNDI1LjAyMyAzOTUuMTc5IDQyMC44ODMgMzkyIDQxNy44NjhDMzg4Ljk4NiA0MTUuMDE4IDM4NS4yNDQgNDEzLjUxIDM4MC44NzggNDEzLjUxQzM3Ni44MDEgNDEzLjUxIDM3Mi44MzQgNDE1LjE4OSAzNjkuODExIDQxOC4yMDRDMzY2Ljg1MSA0MjEuMTY0IDM2NS4yMzQgNDI1LjAyMyAzNjUuMjM0IDQyOS4yMDlDMzY1LjIzNCA0MzMuMzk1IDM2Ni43NDIgNDM3LjI1NCAzNjkuNjQ3IDQ0MC4yNzZDMzcyLjcyNCA0NDMuNTE3IDM3Ni40MTEgNDQ1LjA4IDM4MC45ODggNDQ1LjA4QzM4NS41NjUgNDQ1LjA4IDM4OS4zMTQgNDQzLjQ2MyAzOTIuMzkxIDQ0MC4zODZDMzk1LjQwNiA0MzcuMzcxIDM5Ni45MTMgNDMzLjYyMiAzOTYuOTEzIDQyOS4xIiBmaWxsPSIjMjkyRjM2Ii8+CjxwYXRoIGQ9Ik00MTAuNDQyIDQyNC4yMjhDNDA2LjE5MyA0MjMuOTcgNDAyLjc3MiA0MjAuNTU3IDQwMi41MzggNDE2LjNINDIxLjEyNlY0MTYuMDk3QzQyMS4xMjYgNDA4Ljc5NSA0MTYuNDY0IDQwMy45MjkgNDEwLjAxMiA0MDMuOTI5QzQwMy4yMDIgNDAzLjkyOSAzOTguNTc4IDQwOC45MTkgMzk4LjU3OCA0MTUuNDAyQzM5OC41NzggNDIxLjUyNSA0MDMuMzY2IDQyNi45MjIgNDA5Ljg5NSA0MjYuOTIyQzQxNC42NDQgNDI2LjkyMiA0MTguNDE2IDQyNC4yOSA0MjAuNDM5IDQxOS40MTdINDE4LjU2NUM0MTcuMjE0IDQyMi4yNjcgNDE0LjMxNiA0MjQuMjM2IDQxMC45NSA0MjQuMjM2QzQxMC43NzggNDI0LjIzNiA0MTAuNjIyIDQyNC4yMzUgNDEwLjQ1IDQyNC4yMiIgZmlsbD0iI0ZGRDEwMCIvPgo8cGF0aCBkPSJNNDM0LjA1MiA0MjQuMjI4QzQzOC4zIDQyMy45NyA0NDEuNzIxIDQyMC41NTcgNDQxLjk1NiA0MTYuM0g0MjMuMzY3VjQxNi4wOTdDNDIzLjM2NyA0MDguNzk1IDQyOC4wMyA0MDMuOTI5IDQzNC40ODEgNDAzLjkyOUM0NDEuMjkyIDQwMy45MjkgNDQ1LjkxNiA0MDguOTE5IDQ0NS45MTYgNDE1LjQwMkM0NDUuOTE2IDQyMS41MjUgNDQxLjEyOCA0MjYuOTIyIDQzNC41OTggNDI2LjkyMkM0MjkuODU4IDQyNi45MjIgNDI2LjA4NSA0MjQuMjkgNDI0LjA1NCA0MTkuNDE3SDQyNS45MzdDNDI3LjI4OCA0MjIuMjY3IDQzMC4xODYgNDI0LjIzNiA0MzMuNTUyIDQyNC4yMzZDNDMzLjcyNCA0MjQuMjM2IDQzMy44OCA0MjQuMjM1IDQzNC4wNTIgNDI0LjIyIiBmaWxsPSIjRkZEMTAwIi8+CjxwYXRoIGQ9Ik0zMi4wMDc4IDk0LjQwMDRMMTA3LjIwOCAxNjkuNkwxODIuNDA4IDk0LjQwMDRIMzIuMDA3OFoiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTMyLjAwNzggOTQuNDAxMkgxMDcuMjA4VjE5LjIwMTJMMzIuMDA3OCA5NC40MDEyWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE2Ml8xMTA2NSkiLz4KPHBhdGggZD0iTTE4Mi40MDMgOTQuNDAwNEgxMDcuMjAzVjE2OS42TDE4Mi40MDMgOTQuNDAwNFoiIGZpbGw9IiM5QTlGQUEiLz4KPHBhdGggZD0iTTE2MC42ODUgMjIzLjA3OEwxMDcuMjEgMTY5LjYwMkw1My43MzQ0IDIyMy4wNzhIMTYwLjY4NVoiIGZpbGw9IiM5QTlGQUEiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xNjJfMTEwNjUiIHgxPSIzMi4wMDc4IiB5MT0iNTYuODAxMiIgeDI9IjEwNy4yMDgiIHkyPSI1Ni44MDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC40MDYyIiBzdG9wLWNvbG9yPSIjQzRDNEM0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Q5RDlEOSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
              alt="Feefo Platinum Trusted Service Award"
              className="ignore-purify-1h0Ih  ignore-purify-2n3Sp w-1/2"
            ></img>
            <img
              src={carguru}
              alt="sellcars"
              className="w-[70px] h-[60px] pl-1"
            />{" "}
            {/* </div> */}
          </div>
        </div>

        <div className="flex flex-col max-lg:w-[320px] max-lg:px-[15px] lg:hidden">
          <div className=" items-center justify-center">
            <Typography variant="h5" color="blue-gray" className="text-center">
              Customer Average Rating
            </Typography>
            <div className="5 flex items-center gap-0 w-[150px] mx-auto">
              <StarIcon size={10} className="scale-100" />
              <StarIcon size={10} />
              <StarIcon size={10} />
              <StarIcon size={10} />
              <StarIcon size={10} />
            </div>
            <div className="flex mx-auto items-center justify-center">
              <Typography color="blue-gray">4.9</Typography>
              <Typography color="blue-gray">/5</Typography>
            </div>
          </div>
          <div className="text-center py-4">
            Independent Service Rating based on 791 verified reviews.
            <p
              onClick={() => setOpen(true)}
              className="text-xs font-bold text-blue-600 cursor-pointer"
            >
              Read all reviews
            </p>
          </div>
          <div className="inline-flex mx-auto lg:hidden w-[120px]">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgwIiBoZWlnaHQ9IjQ4MCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjEuOTIiIHk9IjEuOTIiIHdpZHRoPSI0NzYuMTYiIGhlaWdodD0iNDc2LjE2IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjOUE5RkFBIiBzdHJva2Utd2lkdGg9IjMuODQiLz4KPHBhdGggZD0iTTM1LjE0ODggMzAxSDQzLjAyMDhWMjg4LjY2N0g1MC4xMDU2QzU4LjA4MjYgMjg4LjY2NyA2My4zODMgMjgzLjg5MiA2My4zODMgMjc2LjQ5MkM2My4zODMgMjY5LjA0IDU4LjA4MjYgMjY0LjI2NCA1MC4xMDU2IDI2NC4yNjRIMzUuMTQ4OFYzMDFaTTQ5LjM3MDkgMjcwLjgyNEM1My4wNDQ1IDI3MC44MjQgNTUuNDA2MSAyNzIuOTc2IDU1LjQwNjEgMjc2LjQ5MkM1NS40MDYxIDI3OS45NTYgNTMuMDQ0NSAyODIuMTA3IDQ5LjM3MDkgMjgyLjEwN0g0My4wMjA4VjI3MC44MjRINDkuMzcwOVpNNjcuMjE3OCAzMDFINzQuNjE3NVYyNjQuMjY0SDY3LjIxNzhWMzAxWk0xMDUuNDg5IDI5NC43NTVDMTA0LjMzNSAyOTQuNzU1IDEwMy43NTcgMjk0LjQ5MiAxMDMuNzU3IDI5My4wNzZWMjgzLjUyNEMxMDMuNzU3IDI3Ny4wNjkgOTkuNDAxNSAyNzMuNzEgOTEuODQ0NCAyNzMuNzFDODQuNzA3MSAyNzMuNzEgNzkuODc5IDI3Ny4xNzQgNzkuMzU0MiAyODIuNDIySDg2LjQ5MTVDODYuODA2MyAyODAuNDI4IDg4Ljc0ODEgMjc5LjExNiA5MS42MzQ1IDI3OS4xMTZDOTQuNzMwOCAyNzkuMTE2IDk2LjQ2MjcgMjgwLjY5IDk2LjQ2MjcgMjgzLjEwNFYyODQuNDE2SDkxLjEwOTdDODMuMDI3OCAyODQuNDE2IDc4LjcyNDQgMjg3LjY3IDc4LjcyNDQgMjkzLjM5Qzc4LjcyNDQgMjk4LjUzMyA4Mi45MjI4IDMwMS4zMTUgODguNzQ4MSAzMDEuMzE1QzkyLjk0NjUgMzAxLjMxNSA5NS42NzU1IDI5OS41ODMgOTcuNTY0NyAyOTYuNTkyQzk3LjUxMjMgMjk5LjE2MyA5OC43MTkzIDMwMSAxMDIuNTUgMzAxSDEwNi4zMjlWMjk0Ljc1NUgxMDUuNDg5Wk05Ni40NjI3IDI4OS44NzRDOTYuNDEwMiAyOTMuNTQ4IDk0LjA0ODYgMjk1Ljk2MiA5MC4xNjUxIDI5NS45NjJDODcuNjk4NSAyOTUuOTYyIDg2LjE3NjYgMjk0Ljc1NSA4Ni4xNzY2IDI5Mi44NjZDODYuMTc2NiAyOTAuNjA5IDg3Ljk2MDkgMjg5LjM0OSA5MS4wNTcyIDI4OS4zNDlIOTYuNDYyN1YyODkuODc0Wk0xMTEuMTMzIDI5My4yODVDMTExLjEzMyAyOTguNDI4IDExMy43MDUgMzAxIDExOC44NDggMzAxSDEyNC44ODNWMjk0Ljc1NUgxMjEuMjA5QzExOS4yNjggMjk0Ljc1NSAxMTguNTMzIDI5My45NjggMTE4LjUzMyAyOTIuMDc4VjI4MC4yN0gxMjQuNzI2VjI3NC4wMjVIMTE4LjUzM1YyNjYuNDY4SDExMS4xMzNWMjc0LjAyNUgxMDYuNjcyVjI4MC4yN0gxMTEuMTMzVjI5My4yODVaTTEzMi4wMzQgMjcxLjEzOUMxMzQuNDQ4IDI3MS4xMzkgMTM2LjMzNyAyNjkuMzU1IDEzNi4zMzcgMjY2Ljk5M0MxMzYuMzM3IDI2NC41NzkgMTM0LjQ0OCAyNjIuNzk1IDEzMi4wMzQgMjYyLjc5NUMxMjkuNjIgMjYyLjc5NSAxMjcuNzMgMjY0LjU3OSAxMjcuNzMgMjY2Ljk5M0MxMjcuNzMgMjY5LjM1NSAxMjkuNjIgMjcxLjEzOSAxMzIuMDM0IDI3MS4xMzlaTTEyOC4zMDggMzAxSDEzNS43NlYyNzQuMDI1SDEyOC4zMDhWMzAxWk0xNTYuMzQ2IDI3My43MUMxNTIuMiAyNzMuNzEgMTQ5LjczMyAyNzUuMjg1IDE0OC4wMDEgMjc3LjM4NEwxNDcuMzE5IDI3NC4wMjVIMTQwLjg2NFYzMDFIMTQ4LjI2NFYyODcuMTk4QzE0OC4yNjQgMjgyLjUyNyAxNTAuNDY4IDI3OS43OTggMTU0LjI5OSAyNzkuNzk4QzE1OC4wMjUgMjc5Ljc5OCAxNTkuNzU3IDI4Mi4yMTIgMTU5Ljc1NyAyODYuNzc4VjMwMUgxNjcuMTU3VjI4Ni4wNDNDMTY3LjE1NyAyNzYuODA3IDE2Mi4xNzEgMjczLjcxIDE1Ni4zNDYgMjczLjcxWk0xODkuODIgMjg3LjUxM0MxODkuODIgMjkyLjQ5OCAxODcuNjY4IDI5NS4xNzUgMTgzLjk5NCAyOTUuMTc1QzE4MC4zMjEgMjk1LjE3NSAxNzguNzQ2IDI5Mi44MTMgMTc4Ljc0NiAyODcuOTg1VjI3NC4wMjVIMTcxLjM0N1YyODguOTgyQzE3MS4zNDcgMjk4LjUzMyAxNzYuNDkgMzAxLjMxNSAxODIuMDUzIDMwMS4zMTVDMTg1Ljg4NCAzMDEuMzE1IDE4OC4yNDUgMjk5Ljg0NSAxODkuOTc3IDI5Ny43NDZMMTkwLjY1OSAzMDFIMTk3LjIxOVYyNzQuMDI1SDE4OS44MlYyODcuNTEzWk0yMzQuNjM5IDI3My43MUMyMzAuNTQ2IDI3My43MSAyMjcuMzk3IDI3NS4zOSAyMjUuNTA4IDI3OC4yNzZDMjIzLjgyOCAyNzQuODY1IDIyMC43MzIgMjczLjY1OCAyMTcuNDI2IDI3My43MUMyMTMuNDkgMjczLjc2MyAyMTEuMTI4IDI3NS4yODUgMjA5LjUwMSAyNzcuMzg0TDIwOC44MTkgMjc0LjAyNUgyMDIuMzY0VjMwMUgyMDkuNzY0VjI4Ni4zMDZDMjA5Ljc2NCAyODIuMjY1IDIxMS44NjMgMjc5Ljc5OCAyMTUuMDY0IDI3OS43OThDMjE4LjMxOCAyNzkuNzk4IDIxOS43ODcgMjgxLjg5NyAyMTkuNzg3IDI4NS45MzhWMzAxSDIyNy4xODdWMjg2LjI1M0MyMjcuMTg3IDI4Mi4xNiAyMjkuMzM5IDI3OS43OTggMjMyLjU0IDI3OS43OThDMjM1Ljc0MSAyNzkuNzk4IDIzNy4yMTEgMjgxLjg5NyAyMzcuMjExIDI4NS45MzhWMzAxSDI0NC42MVYyODUuNTE4QzI0NC42MSAyNzYuODU5IDI0MC4yMDIgMjczLjcxIDIzNC42MzkgMjczLjcxWk0yNjAuNzUzIDI3MS4wMzRIMjcxLjM1NFYzMDFIMjc5LjIyNlYyNzEuMDM0SDI4OS44OFYyNjQuMjY0SDI2MC43NTNWMjcxLjAzNFpNMzA2LjM0NyAyNzQuMDI1QzMwMi4xNDkgMjc0LjAyNSAzMDAuMDQ5IDI3NS42NTIgMjk4LjU4IDI3OC4wNjZMMjk3Ljg5OCAyNzQuMDI1SDI5MS4xOFYzMDFIMjk4LjU4VjI4Ny43NzVDMjk4LjU4IDI4My42ODIgMzAwLjI1OSAyODAuNzQzIDMwNC42NjggMjgwLjc0M0gzMDcuNjA3VjI3NC4wMjVIMzA2LjM0N1pNMzI4LjkxMiAyODcuNTEzQzMyOC45MTIgMjkyLjQ5OCAzMjYuNzYxIDI5NS4xNzUgMzIzLjA4NyAyOTUuMTc1QzMxOS40MTMgMjk1LjE3NSAzMTcuODM5IDI5Mi44MTMgMzE3LjgzOSAyODcuOTg1VjI3NC4wMjVIMzEwLjQzOVYyODguOTgyQzMxMC40MzkgMjk4LjUzMyAzMTUuNTgyIDMwMS4zMTUgMzIxLjE0NSAzMDEuMzE1QzMyNC45NzYgMzAxLjMxNSAzMjcuMzM4IDI5OS44NDUgMzI5LjA3IDI5Ny43NDZMMzI5Ljc1MiAzMDFIMzM2LjMxMlYyNzQuMDI1SDMyOC45MTJWMjg3LjUxM1pNMzQwLjE5NyAyOTIuMDI2QzM0MC41MTIgMjk3Ljc5OSAzNDUuNjAyIDMwMS4zMTUgMzUzLjEwNyAzMDEuMzE1QzM2MC4zNDkgMzAxLjMxNSAzNjUuMzg3IDI5Ny45MDQgMzY1LjM4NyAyOTIuNTUxQzM2NS4zODcgMjg2LjQ2MyAzNjAuMjQ0IDI4NS4wNDYgMzU0LjA1MiAyODQuNDE2QzM1MC4xNjggMjgzLjk0NCAzNDcuODU5IDI4My43MzQgMzQ3Ljg1OSAyODEuNjg3QzM0Ny44NTkgMjc5Ljk1NiAzNDkuNzQ4IDI3OC45MDYgMzUyLjYzNSAyNzguOTA2QzM1NS42MjYgMjc4LjkwNiAzNTcuNjczIDI4MC4yMTggMzU3Ljg4MyAyODIuMzdIMzY0Ljk2OEMzNjQuNiAyNzYuODU5IDM1OS42MTUgMjczLjY1OCAzNTIuMzcyIDI3My42NThDMzQ1LjQ0NSAyNzMuNjA1IDM0MC43NzQgMjc3LjEyMiAzNDAuNzc0IDI4Mi40NzVDMzQwLjc3NCAyODguMDM3IDM0NS42NTUgMjg5LjQ1NCAzNTEuOTUzIDI5MC4xODlDMzU2LjMwOCAyOTAuNzY2IDM1OC4xNDUgMjkwLjkyNCAzNTguMTQ1IDI5My4xMjhDMzU4LjE0NSAyOTUuMDE3IDM1Ni4yNTYgMjk2LjAxNCAzNTMuMTYgMjk2LjAxNEMzNDkuNTM4IDI5Ni4wMTQgMzQ3LjQ5MiAyOTQuMzg4IDM0Ny4yMjkgMjkyLjAyNkgzNDAuMTk3Wk0zNzEuMjI3IDI5My4yODVDMzcxLjIyNyAyOTguNDI4IDM3My43OTkgMzAxIDM3OC45NDIgMzAxSDM4NC45NzdWMjk0Ljc1NUgzODEuMzAzQzM3OS4zNjEgMjk0Ljc1NSAzNzguNjI3IDI5My45NjggMzc4LjYyNyAyOTIuMDc4VjI4MC4yN0gzODQuODE5VjI3NC4wMjVIMzc4LjYyN1YyNjYuNDY4SDM3MS4yMjdWMjc0LjAyNUgzNjYuNzY2VjI4MC4yN0gzNzEuMjI3VjI5My4yODVaTTQwMS4zMjEgMzAxLjMxNUM0MDguNTExIDMwMS4zMTUgNDEzLjE4MiAyOTcuMTE2IDQxNC4wMjIgMjkxLjg2OEg0MDYuNzI3QzQwNi4wOTcgMjk0LjM4OCA0MDMuOTk4IDI5NS43IDQwMS4wMDcgMjk1LjdDMzk3LjI4IDI5NS43IDM5NC44MTQgMjkzLjM5IDM5NC42NTYgMjg5LjU1OVYyODkuMTkySDQxNC4yMzJDNDE0LjM4OSAyODguMzUyIDQxNC40NDEgMjg3LjQ2IDQxNC40NDEgMjg2LjY3M0M0MTQuMzM2IDI3OC43NDggNDA4Ljg3OSAyNzMuNzEgNDAwLjc5NyAyNzMuNzFDMzkyLjQ1MiAyNzMuNzEgMzg2Ljk0MiAyNzkuMTY4IDM4Ni45NDIgMjg3LjU2NUMzODYuOTQyIDI5NS45MDkgMzkyLjM0NyAzMDEuMzE1IDQwMS4zMjEgMzAxLjMxNVpNMzk0LjgxNCAyODQuMzY0QzM5NS4yMzQgMjgxLjE2MyAzOTcuNjQ4IDI3OS4yMjEgNDAwLjg0OSAyNzkuMjIxQzQwNC4yMDggMjc5LjIyMSA0MDYuNDY0IDI4MS4wNTggNDA2Ljk4OSAyODQuMzY0SDM5NC44MTRaTTQzOC4wNiAyNzcuMzg0QzQzNi4zMjkgMjc1LjE4IDQzMy42NTIgMjczLjcxIDQyOS45MjYgMjczLjcxQzQyMi43MzYgMjczLjcxIDQxNy40MzYgMjc5LjExNiA0MTcuNDM2IDI4Ny40NkM0MTcuNDM2IDI5Ni4wMTQgNDIyLjczNiAzMDEuMzE1IDQyOS45NzggMzAxLjMxNUM0MzMuODYyIDMwMS4zMTUgNDM2LjQ4NiAyOTkuNTgzIDQzOC4yNyAyOTcuMjc0TDQzOS4wMDUgMzAxSDQ0NS40NlYyNjQuMjY0SDQzOC4wNlYyNzcuMzg0Wk00MzEuNjA1IDI5NS4yOEM0MjcuNTY0IDI5NS4yOCA0MjQuOTkzIDI5Mi4xMzEgNDI0Ljk5MyAyODcuNTEzQzQyNC45OTMgMjgyLjg5NCA0MjcuNTY0IDI3OS43NDYgNDMxLjYwNSAyNzkuNzQ2QzQzNS42NDYgMjc5Ljc0NiA0MzguMTY1IDI4Mi45NDcgNDM4LjE2NSAyODcuNTY1QzQzOC4xNjUgMjkyLjEzMSA0MzUuNjQ2IDI5NS4yOCA0MzEuNjA1IDI5NS4yOFpNMzMuNjc5NCAzNDIuOTNDMzMuNzMxOCAzNTAuMzgyIDM5LjU1NzEgMzU1LjMxNSA0OC44OTg2IDM1NS4zMTVDNTcuNTA1MyAzNTUuMzE1IDYzLjE3MzEgMzUwLjU5MiA2My4yMjU2IDM0My43MTdDNjMuMjc4MSAzMzYuMzE3IDU3LjcxNTIgMzM0LjQyOCA1MS40MTc2IDMzMy4yNzNDNDUuMzI5OSAzMzIuMTE5IDQyLjQ0MzUgMzMxLjQ4OSA0Mi40NDM1IDMyOC40OThDNDIuNDQzNSAzMjUuNjY0IDQ0Ljg1NzYgMzI0LjI0NyA0OC4yMTYzIDMyNC4yNDdDNTIuMDQ3NCAzMjQuMjQ3IDU0LjQwOSAzMjYuMzk4IDU0Ljc3NjMgMzI5LjQ5NUg2Mi40OTA5QzYyLjM4NTkgMzIyLjQ2MiA1Ni44NzU1IDMxNy45NDkgNDguMjE2MyAzMTcuOTQ5QzM5LjkyNDUgMzE3Ljk0OSAzNC41MTkgMzIyLjU2NyAzNC41MTkgMzI5LjA3NUMzNC41MTkgMzM2LjUyNyAzOS45NzcgMzM4LjUyMSA0Ni4xNjk2IDMzOS42NzZDNTIuMzA5OCAzNDAuODgzIDU1LjMwMTEgMzQxLjUxMyA1NS4zMDExIDM0NC42MDlDNTUuMzAxMSAzNDcuNDk1IDUyLjYyNDYgMzQ5LjA3IDQ5LjAwMzUgMzQ5LjA3QzQ0LjQ5MDIgMzQ5LjA3IDQxLjY1NjMgMzQ2LjYwMyA0MS4zOTM5IDM0My4wMzVMMzMuNjc5NCAzNDIuOTNaTTgwLjcwMTQgMzU1LjMxNUM4Ny44OTEyIDM1NS4zMTUgOTIuNTYxOSAzNTEuMTE2IDkzLjQwMTYgMzQ1Ljg2OEg4Ni4xMDY5Qzg1LjQ3NzEgMzQ4LjM4OCA4My4zNzc5IDM0OS43IDgwLjM4NjYgMzQ5LjdDNzYuNjYwNSAzNDkuNyA3NC4xOTM5IDM0Ny4zOSA3NC4wMzY1IDM0My41NTlWMzQzLjE5Mkg5My42MTE1QzkzLjc2OSAzNDIuMzUyIDkzLjgyMTQgMzQxLjQ2IDkzLjgyMTQgMzQwLjY3M0M5My43MTY1IDMzMi43NDggODguMjU4NiAzMjcuNzEgODAuMTc2NiAzMjcuNzFDNzEuODMyMyAzMjcuNzEgNjYuMzIxOSAzMzMuMTY4IDY2LjMyMTkgMzQxLjU2NUM2Ni4zMjE5IDM0OS45MDkgNzEuNzI3NCAzNTUuMzE1IDgwLjcwMTQgMzU1LjMxNVpNNzQuMTkzOSAzMzguMzY0Qzc0LjYxMzggMzM1LjE2MyA3Ny4wMjc4IDMzMy4yMjEgODAuMjI5MSAzMzMuMjIxQzgzLjU4NzggMzMzLjIyMSA4NS44NDQ1IDMzNS4wNTggODYuMzY5MyAzMzguMzY0SDc0LjE5MzlaTTExMy4wMzIgMzI4LjAyNUMxMDguODM0IDMyOC4wMjUgMTA2LjczNCAzMjkuNjUyIDEwNS4yNjUgMzMyLjA2NkwxMDQuNTgzIDMyOC4wMjVIOTcuODY1M1YzNTVIMTA1LjI2NVYzNDEuNzc1QzEwNS4yNjUgMzM3LjY4MiAxMDYuOTQ0IDMzNC43NDMgMTExLjM1MyAzMzQuNzQzSDExNC4yOTJWMzI4LjAyNUgxMTMuMDMyWk0xMjUuMTk0IDM1NUgxMzQuMzc4TDE0NC4wODcgMzI4LjAyNUgxMzYuMzJMMTI5LjkxNyAzNDcuNDQzTDEyMy40MSAzMjguMDI1SDExNS40ODVMMTI1LjE5NCAzNTVaTTE1MC4yNzkgMzI1LjEzOUMxNTIuNjkzIDMyNS4xMzkgMTU0LjU4MiAzMjMuMzU1IDE1NC41ODIgMzIwLjk5M0MxNTQuNTgyIDMxOC41NzkgMTUyLjY5MyAzMTYuNzk1IDE1MC4yNzkgMzE2Ljc5NUMxNDcuODY1IDMxNi43OTUgMTQ1Ljk3NiAzMTguNTc5IDE0NS45NzYgMzIwLjk5M0MxNDUuOTc2IDMyMy4zNTUgMTQ3Ljg2NSAzMjUuMTM5IDE1MC4yNzkgMzI1LjEzOVpNMTQ2LjU1MyAzNTVIMTU0LjAwNVYzMjguMDI1SDE0Ni41NTNWMzU1Wk0xNzEuODA5IDM1NS4zMTVDMTc5LjE1NiAzNTUuMzE1IDE4NC4wMzcgMzUxLjI3NCAxODUuMDg3IDM0NC44MTlIMTc3LjMyQzE3Ni43OTUgMzQ3LjU0OCAxNzQuODUzIDM0OS4yOCAxNzEuOTY3IDM0OS4yOEMxNjguMDgzIDM0OS4yOCAxNjUuNjE3IDM0Ni4xMzEgMTY1LjYxNyAzNDEuNTEzQzE2NS42MTcgMzM2Ljk0NyAxNjguMDgzIDMzMy43NDYgMTcxLjk2NyAzMzMuNzQ2QzE3NC44NTMgMzMzLjc0NiAxNzYuNjkgMzM1LjQyNSAxNzcuMzIgMzM4LjEwMUgxODUuMDM0QzE4My45ODUgMzMxLjY5OSAxNzkuNDE5IDMyNy43MSAxNzIuMDcyIDMyNy43MUMxNjMuNTE3IDMyNy43MSAxNTguMDU5IDMzMy4xNjggMTU4LjA1OSAzNDEuNTEzQzE1OC4wNTkgMzUwLjAxNCAxNjMuMjU1IDM1NS4zMTUgMTcxLjgwOSAzNTUuMzE1Wk0yMDIuMzE4IDM1NS4zMTVDMjA5LjUwNyAzNTUuMzE1IDIxNC4xNzggMzUxLjExNiAyMTUuMDE4IDM0NS44NjhIMjA3LjcyM0MyMDcuMDkzIDM0OC4zODggMjA0Ljk5NCAzNDkuNyAyMDIuMDAzIDM0OS43QzE5OC4yNzcgMzQ5LjcgMTk1LjgxIDM0Ny4zOSAxOTUuNjUzIDM0My41NTlWMzQzLjE5MkgyMTUuMjI4QzIxNS4zODUgMzQyLjM1MiAyMTUuNDM4IDM0MS40NiAyMTUuNDM4IDM0MC42NzNDMjE1LjMzMyAzMzIuNzQ4IDIwOS44NzUgMzI3LjcxIDIwMS43OTMgMzI3LjcxQzE5My40NDkgMzI3LjcxIDE4Ny45MzggMzMzLjE2OCAxODcuOTM4IDM0MS41NjVDMTg3LjkzOCAzNDkuOTA5IDE5My4zNDQgMzU1LjMxNSAyMDIuMzE4IDM1NS4zMTVaTTE5NS44MSAzMzguMzY0QzE5Ni4yMyAzMzUuMTYzIDE5OC42NDQgMzMzLjIyMSAyMDEuODQ1IDMzMy4yMjFDMjA1LjIwNCAzMzMuMjIxIDIwNy40NjEgMzM1LjA1OCAyMDcuOTg2IDMzOC4zNjRIMTk1LjgxWk0yMzguMjcyIDM1NUwyNDEuMTA2IDM0Ni45NzFIMjU1LjA2NUwyNTcuODk5IDM1NUgyNjYuMzQ5TDI1My4wMTkgMzE4LjI2NEgyNDMuNTcyTDIzMC4xMzcgMzU1SDIzOC4yNzJaTTI0OC4wMzMgMzI2LjY2MUwyNTIuOTE0IDM0MC42MkgyNDMuMjA1TDI0OC4wMzMgMzI2LjY2MVpNMjcyLjY3MiAzNTVIMjgwLjU0NEwyODUuMzcyIDMzOC43MzFMMjkwLjA5NSAzNTVIMjk3Ljk2N0wzMDYuODM2IDMyOC4wMjVIMjk5LjI3OUwyOTMuNzY5IDM0Ny4wNzZMMjg4LjgzNSAzMjguMDI1SDI4Mi4xNzFMMjc3LjA4IDM0Ny4wMjNMMjcxLjY3NSAzMjguMDI1SDI2My44NTVMMjcyLjY3MiAzNTVaTTMzMy45MTEgMzQ4Ljc1NUMzMzIuNzU2IDM0OC43NTUgMzMyLjE3OSAzNDguNDkyIDMzMi4xNzkgMzQ3LjA3NlYzMzcuNTI0QzMzMi4xNzkgMzMxLjA2OSAzMjcuODIzIDMyNy43MSAzMjAuMjY2IDMyNy43MUMzMTMuMTI4IDMyNy43MSAzMDguMyAzMzEuMTc0IDMwNy43NzUgMzM2LjQyMkgzMTQuOTEzQzMxNS4yMjggMzM0LjQyOCAzMTcuMTY5IDMzMy4xMTYgMzIwLjA1NiAzMzMuMTE2QzMyMy4xNTIgMzMzLjExNiAzMjQuODg0IDMzNC42OSAzMjQuODg0IDMzNy4xMDRWMzM4LjQxNkgzMTkuNTMxQzMxMS40NDkgMzM4LjQxNiAzMDcuMTQ2IDM0MS42NyAzMDcuMTQ2IDM0Ny4zOUMzMDcuMTQ2IDM1Mi41MzMgMzExLjM0NCAzNTUuMzE1IDMxNy4xNjkgMzU1LjMxNUMzMjEuMzY4IDM1NS4zMTUgMzI0LjA5NyAzNTMuNTgzIDMyNS45ODYgMzUwLjU5MkMzMjUuOTM0IDM1My4xNjMgMzI3LjE0MSAzNTUgMzMwLjk3MiAzNTVIMzM0Ljc1VjM0OC43NTVIMzMzLjkxMVpNMzI0Ljg4NCAzNDMuODc0QzMyNC44MzEgMzQ3LjU0OCAzMjIuNDcgMzQ5Ljk2MiAzMTguNTg2IDM0OS45NjJDMzE2LjEyIDM0OS45NjIgMzE0LjU5OCAzNDguNzU1IDMxNC41OTggMzQ2Ljg2NkMzMTQuNTk4IDM0NC42MDkgMzE2LjM4MiAzNDMuMzQ5IDMxOS40NzkgMzQzLjM0OUgzMjQuODg0VjM0My44NzRaTTM1Mi43OCAzMjguMDI1QzM0OC41ODEgMzI4LjAyNSAzNDYuNDgyIDMyOS42NTIgMzQ1LjAxMiAzMzIuMDY2TDM0NC4zMyAzMjguMDI1SDMzNy42MTNWMzU1SDM0NS4wMTJWMzQxLjc3NUMzNDUuMDEyIDMzNy42ODIgMzQ2LjY5MiAzMzQuNzQzIDM1MS4xIDMzNC43NDNIMzU0LjAzOVYzMjguMDI1SDM1Mi43OFpNMzc2LjA0OCAzMzEuMzg0QzM3NC4zMTYgMzI5LjE4IDM3MS42NCAzMjcuNzEgMzY3LjkxMyAzMjcuNzFDMzYwLjcyNCAzMjcuNzEgMzU1LjQyMyAzMzMuMTE2IDM1NS40MjMgMzQxLjQ2QzM1NS40MjMgMzUwLjAxNCAzNjAuNzI0IDM1NS4zMTUgMzY3Ljk2NiAzNTUuMzE1QzM3MS44NDkgMzU1LjMxNSAzNzQuNDczIDM1My41ODMgMzc2LjI1OCAzNTEuMjc0TDM3Ni45OTIgMzU1SDM4My40NDhWMzE4LjI2NEgzNzYuMDQ4VjMzMS4zODRaTTM2OS41OTMgMzQ5LjI4QzM2NS41NTIgMzQ5LjI4IDM2Mi45OCAzNDYuMTMxIDM2Mi45OCAzNDEuNTEzQzM2Mi45OCAzMzYuODk0IDM2NS41NTIgMzMzLjc0NiAzNjkuNTkzIDMzMy43NDZDMzczLjYzNCAzMzMuNzQ2IDM3Ni4xNTMgMzM2Ljk0NyAzNzYuMTUzIDM0MS41NjVDMzc2LjE1MyAzNDYuMTMxIDM3My42MzQgMzQ5LjI4IDM2OS41OTMgMzQ5LjI4WiIgZmlsbD0iIzI5MkYzNiIvPgo8cGF0aCBkPSJNMzIuOTA5MSA0NDUuMkg1NS4xNjE2VjQzOS45NjJINDEuOTU3M0w0OC43NTQzIDQzNC40MkM1Mi41NjQxIDQzMS4zNDcgNTQuOTg4NSA0MjguNjE5IDU0Ljk4ODUgNDI0LjE2QzU0Ljk4ODUgNDE4LjQ4OSA1MS4xMzU0IDQxNC42MzUgNDQuMDM1NCA0MTQuNjM1QzM3LjEwODUgNDE0LjYzNSAzMi44MjI2IDQxOS4wNTEgMzIuODIyNiA0MjQuNzY2VjQyNS42MzJIMzkuMVY0MjUuMTU2QzM5LjEgNDIxLjg2NSA0MS4wOTE1IDQxOS44NzQgNDMuOTkyMSA0MTkuODc0QzQ2Ljc2MjggNDE5Ljg3NCA0OC43MTEgNDIxLjQzMiA0OC43MTEgNDI0LjQyQzQ4LjcxMSA0MjYuODg3IDQ3LjA2NTkgNDI4LjcwNiA0NC40MjUgNDMwLjg3TDMyLjkwOTEgNDQwLjM5NVY0NDUuMlpNNTcuODI1MiA0MzAuNzRDNTcuODI1MiA0MzkuOTYyIDYyLjk3NyA0NDUuNDYgNzAuMjkzNSA0NDUuNDZDNzcuNjUzMiA0NDUuNDYgODIuODA1MSA0MzkuOTYyIDgyLjgwNTEgNDMwLjc0VjQyOS4zNTVDODIuODA1MSA0MjAuMzA3IDc3LjY1MzIgNDE0LjYzNSA3MC4yOTM1IDQxNC42MzVDNjIuOTc3IDQxNC42MzUgNTcuODI1MiA0MjAuMzA3IDU3LjgyNTIgNDI5LjM1NVY0MzAuNzRaTTc2LjU3MDkgNDMwLjUyNEM3Ni41NzA5IDQzNi44MDEgNzQuMDE2NyA0NDAuMTc4IDcwLjI5MzUgNDQwLjE3OEM2Ni42MTM2IDQ0MC4xNzggNjQuMDU5MyA0MzYuODAxIDY0LjA1OTMgNDMwLjUyNFY0MjkuNTcyQzY0LjA1OTMgNDIzLjMzNyA2Ni42MTM2IDQxOS45MTcgNzAuMjkzNSA0MTkuOTE3Qzc0LjAxNjcgNDE5LjkxNyA3Ni41NzA5IDQyMy4zMzcgNzYuNTcwOSA0MjkuNTcyVjQzMC41MjRaTTg1LjIwNzIgNDQ1LjJIMTA3LjQ2VjQzOS45NjJIOTQuMjU1NEwxMDEuMDUyIDQzNC40MkMxMDQuODYyIDQzMS4zNDcgMTA3LjI4NiA0MjguNjE5IDEwNy4yODYgNDI0LjE2QzEwNy4yODYgNDE4LjQ4OSAxMDMuNDMzIDQxNC42MzUgOTYuMzMzNCA0MTQuNjM1Qzg5LjQwNjYgNDE0LjYzNSA4NS4xMjA2IDQxOS4wNTEgODUuMTIwNiA0MjQuNzY2VjQyNS42MzJIOTEuMzk4VjQyNS4xNTZDOTEuMzk4IDQyMS44NjUgOTMuMzg5NSA0MTkuODc0IDk2LjI5MDEgNDE5Ljg3NEM5OS4wNjA4IDQxOS44NzQgMTAxLjAwOSA0MjEuNDMyIDEwMS4wMDkgNDI0LjQyQzEwMS4wMDkgNDI2Ljg4NyA5OS4zNjM5IDQyOC43MDYgOTYuNzIzIDQzMC44N0w4NS4yMDcyIDQ0MC4zOTVWNDQ1LjJaTTEyNi43NDggNDI5LjQ0MkMxMjkuNzM1IDQyOC42NjIgMTMyLjAyOSA0MjYuNDk4IDEzMi4wMjkgNDIyLjgxOEMxMzIuMDI5IDQxNy44MzkgMTI3Ljk2IDQxNC42MzUgMTIxLjEyIDQxNC42MzVDMTE0LjQ5NiA0MTQuNjM1IDEwOS45MDcgNDE4LjQ4OSAxMDkuODIgNDI0LjE2SDExNS45MjRDMTE2LjAxMSA0MjEuMzQ2IDExOC4wODkgNDE5LjUyOCAxMjEuMDMzIDQxOS41MjhDMTIzLjYzMSA0MTkuNTI4IDEyNS43MDkgNDIwLjgyNiAxMjUuNzA5IDQyMy4yOTRDMTI1LjcwOSA0MjUuNjc1IDEyNC4wMiA0MjcuMzY0IDEyMC42ODcgNDI3LjM2NEgxMTguMDQ2VjQzMi4zNDJIMTIxLjAzM0MxMjQuNTQgNDMyLjM0MiAxMjYuMzE1IDQzMy44NTcgMTI2LjMxNSA0MzYuMjM5QzEyNi4zMTUgNDM4Ljk2NiAxMjQuMTA3IDQ0MC41NjggMTIxLjI5MyA0NDAuNTY4QzExOC4wMDIgNDQwLjU2OCAxMTUuNTc4IDQzOC43NSAxMTUuNDkxIDQzNS4zMjlIMTA5LjMwMUMxMDkuMzAxIDQ0MS44MjMgMTEzLjg0NiA0NDUuNDYgMTIwLjk5IDQ0NS40NkMxMjguMTMzIDQ0NS40NiAxMzIuNjM1IDQ0MS44NjcgMTMyLjYzNSA0MzYuNjI4QzEzMi42MzUgNDMyLjIxMiAxMjkuOTk1IDQzMC4wOTEgMTI2Ljc0OCA0MjkuNDQyWiIgZmlsbD0iIzlBOUZBQSIvPgo8cGF0aCBkPSJNMzA3LjQgNDI2LjEzM0gyOTMuMzczQzI5My45OSA0MjMuMjgyIDI5Ni42MTQgNDIxLjM4NCAzMDAuMyA0MjEuMzg0QzMwMy45ODcgNDIxLjM4NCAzMDYuMzM4IDQyMy4wNjQgMzA3LjQgNDI2LjEzM00zMTYuMjg4IDQzMi4zODlWNDMxLjQzNkMzMTYuMjg4IDQyMC4yNiAzMDkuNzUxIDQxMy4zODcgMzAwLjE5OSA0MTMuMzg3QzI5Ni4xMjIgNDEzLjM4NyAyOTIuMTU0IDQxNS4wNjYgMjg5LjEzMiA0MTguMDgxQzI4Ni4xNzEgNDIxLjA0MSAyODQuNTU1IDQyNC44OTkgMjg0LjU1NSA0MjkuMDg1QzI4NC41NTUgNDMzLjI3MiAyODYuMDYyIDQzNy4xMyAyODguOTY4IDQ0MC4yMDdDMjkyLjA0NSA0NDMuNDQ5IDI5NS43MzEgNDQ1LjAxMSAzMDAuMzA4IDQ0NS4wMTFDMzA3LjAxNyA0NDUuMDExIDMxMS45ODQgNDQxLjgyNCAzMTQuODkgNDM1LjU2OEgzMDUuMTY2QzMwMy44MjMgNDM2Ljc0IDMwMi4zNyA0MzcuMjQ3IDMwMC41ODEgNDM3LjI0N0MyOTYuNzIzIDQzNy4yNDcgMjk0LjQzNSA0MzUuNTY4IDI5My42NTQgNDMyLjM4OUgzMTYuMjhIMzE2LjI4OFoiIGZpbGw9IiMyOTJGMzYiLz4KPHBhdGggZD0iTTM0MC43OTggNDI2LjEzM0gzMjYuNzcxQzMyNy4zODggNDIzLjI4MiAzMzAuMDEyIDQyMS4zODQgMzMzLjY5OSA0MjEuMzg0QzMzNy4zODUgNDIxLjM4NCAzMzkuNzI4IDQyMy4wNjQgMzQwLjc5OCA0MjYuMTMzTTM0OS42ODYgNDMyLjM4OVY0MzEuNDM2QzM0OS42ODYgNDIwLjI2IDM0My4xNDkgNDEzLjM4NyAzMzMuNTk3IDQxMy4zODdDMzI5LjUyIDQxMy4zODcgMzI1LjU1MyA0MTUuMDY2IDMyMi41MyA0MTguMDgxQzMxOS41NyA0MjEuMDQxIDMxNy45NTMgNDI0Ljg5OSAzMTcuOTUzIDQyOS4wODVDMzE3Ljk1MyA0MzMuMjcyIDMxOS40NjEgNDM3LjEzIDMyMi4zNjYgNDQwLjIwN0MzMjUuNDQzIDQ0My40NDkgMzI5LjEzIDQ0NS4wMTEgMzMzLjcwNyA0NDUuMDExQzM0MC40MTYgNDQ1LjAxMSAzNDUuMzgzIDQ0MS44MjQgMzQ4LjI4OCA0MzUuNTY4SDMzOC41NjVDMzM3LjIyMSA0MzYuNzQgMzM1Ljc2OCA0MzcuMjQ3IDMzMy45ODggNDM3LjI0N0MzMzAuMTI5IDQzNy4yNDcgMzI3Ljg0MSA0MzUuNTY4IDMyNy4wNiA0MzIuMzg5SDM0OS42ODZWNDMyLjM4OVoiIGZpbGw9IiMyOTJGMzYiLz4KPHBhdGggZD0iTTI3Mi4wNDYgNDIwLjk5MVY0NDQuMjg5SDI4MC43MDhWNDIwLjk5MUgyODQuMjNWNDE0LjI5SDI4MC43MDhWNDEzLjU2NEMyODAuNzA4IDQxMC44MjIgMjgxLjMyNSA0MDkuOTMyIDI4NC4wMDQgNDA5LjkzMkgyODQuMjNWNDAzLjg5NUMyODMuNzMgNDAzLjg5NSAyODMuMjc3IDQwMy44NCAyODIuODMyIDQwMy44NEMyNzUuNDUxIDQwMy44NCAyNzEuOTkxIDQwNi43NDUgMjcxLjk5MSA0MTMuMTczQzI3MS45OTEgNDEzLjUwOSAyNzIuMDQ2IDQxMy45IDI3Mi4wNDYgNDE0LjI5SDI2OC44MDVWNDIwLjk5OUgyNzIuMDQ2VjQyMC45OTFaIiBmaWxsPSIjMjkyRjM2Ii8+CjxwYXRoIGQ9Ik0zNTMuMDU0IDQyMC45OTJWNDQ0LjI5SDM2MS43MTVWNDIwLjk5MkgzNjUuMjM4VjQxNC4yOTFIMzYxLjcxNVY0MTMuNTY1QzM2MS43MTUgNDEwLjgyMyAzNjIuMzMyIDQwOS45MzMgMzY1LjAxMSA0MDkuOTMzSDM2NS4yM1Y0MDMuODk1QzM2NC43MyA0MDMuODk1IDM2NC4yNzcgNDAzLjg0MSAzNjMuODMyIDQwMy44NDFDMzU2LjQ1OSA0MDMuODQxIDM1Mi45OTEgNDA2Ljc0NiAzNTIuOTkxIDQxMy4xNzRDMzUyLjk5MSA0MTMuNTEgMzUzLjA0NiA0MTMuOSAzNTMuMDQ2IDQxNC4yOTFIMzQ5LjgwNVY0MjFIMzUzLjA0NkwzNTMuMDU0IDQyMC45OTJaIiBmaWxsPSIjMjkyRjM2Ii8+CjxwYXRoIGQ9Ik0zODguMTQyIDQyOS4zMThDMzg4LjE0MiA0MzMuMzk1IDM4NC45NTUgNDM2LjY5MSAzODEuMDUgNDM2LjY5MUMzNzcuMTQ1IDQzNi42OTEgMzczLjk1MSA0MzMuMzk1IDM3My45NTEgNDI5LjMxOEMzNzMuOTUxIDQyNS4yNDEgMzc3LjEzNyA0MjEuODkxIDM4MS4wNSA0MjEuODkxQzM4NC45NjMgNDIxLjg5MSAzODguMTQyIDQyNS4xODcgMzg4LjE0MiA0MjkuMzE4Wk0zOTYuOTEzIDQyOS4xQzM5Ni45MTMgNDI1LjAyMyAzOTUuMTc5IDQyMC44ODMgMzkyIDQxNy44NjhDMzg4Ljk4NiA0MTUuMDE4IDM4NS4yNDQgNDEzLjUxIDM4MC44NzggNDEzLjUxQzM3Ni44MDEgNDEzLjUxIDM3Mi44MzQgNDE1LjE4OSAzNjkuODExIDQxOC4yMDRDMzY2Ljg1MSA0MjEuMTY0IDM2NS4yMzQgNDI1LjAyMyAzNjUuMjM0IDQyOS4yMDlDMzY1LjIzNCA0MzMuMzk1IDM2Ni43NDIgNDM3LjI1NCAzNjkuNjQ3IDQ0MC4yNzZDMzcyLjcyNCA0NDMuNTE3IDM3Ni40MTEgNDQ1LjA4IDM4MC45ODggNDQ1LjA4QzM4NS41NjUgNDQ1LjA4IDM4OS4zMTQgNDQzLjQ2MyAzOTIuMzkxIDQ0MC4zODZDMzk1LjQwNiA0MzcuMzcxIDM5Ni45MTMgNDMzLjYyMiAzOTYuOTEzIDQyOS4xIiBmaWxsPSIjMjkyRjM2Ii8+CjxwYXRoIGQ9Ik00MTAuNDQyIDQyNC4yMjhDNDA2LjE5MyA0MjMuOTcgNDAyLjc3MiA0MjAuNTU3IDQwMi41MzggNDE2LjNINDIxLjEyNlY0MTYuMDk3QzQyMS4xMjYgNDA4Ljc5NSA0MTYuNDY0IDQwMy45MjkgNDEwLjAxMiA0MDMuOTI5QzQwMy4yMDIgNDAzLjkyOSAzOTguNTc4IDQwOC45MTkgMzk4LjU3OCA0MTUuNDAyQzM5OC41NzggNDIxLjUyNSA0MDMuMzY2IDQyNi45MjIgNDA5Ljg5NSA0MjYuOTIyQzQxNC42NDQgNDI2LjkyMiA0MTguNDE2IDQyNC4yOSA0MjAuNDM5IDQxOS40MTdINDE4LjU2NUM0MTcuMjE0IDQyMi4yNjcgNDE0LjMxNiA0MjQuMjM2IDQxMC45NSA0MjQuMjM2QzQxMC43NzggNDI0LjIzNiA0MTAuNjIyIDQyNC4yMzUgNDEwLjQ1IDQyNC4yMiIgZmlsbD0iI0ZGRDEwMCIvPgo8cGF0aCBkPSJNNDM0LjA1MiA0MjQuMjI4QzQzOC4zIDQyMy45NyA0NDEuNzIxIDQyMC41NTcgNDQxLjk1NiA0MTYuM0g0MjMuMzY3VjQxNi4wOTdDNDIzLjM2NyA0MDguNzk1IDQyOC4wMyA0MDMuOTI5IDQzNC40ODEgNDAzLjkyOUM0NDEuMjkyIDQwMy45MjkgNDQ1LjkxNiA0MDguOTE5IDQ0NS45MTYgNDE1LjQwMkM0NDUuOTE2IDQyMS41MjUgNDQxLjEyOCA0MjYuOTIyIDQzNC41OTggNDI2LjkyMkM0MjkuODU4IDQyNi45MjIgNDI2LjA4NSA0MjQuMjkgNDI0LjA1NCA0MTkuNDE3SDQyNS45MzdDNDI3LjI4OCA0MjIuMjY3IDQzMC4xODYgNDI0LjIzNiA0MzMuNTUyIDQyNC4yMzZDNDMzLjcyNCA0MjQuMjM2IDQzMy44OCA0MjQuMjM1IDQzNC4wNTIgNDI0LjIyIiBmaWxsPSIjRkZEMTAwIi8+CjxwYXRoIGQ9Ik0zMi4wMDc4IDk0LjQwMDRMMTA3LjIwOCAxNjkuNkwxODIuNDA4IDk0LjQwMDRIMzIuMDA3OFoiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTMyLjAwNzggOTQuNDAxMkgxMDcuMjA4VjE5LjIwMTJMMzIuMDA3OCA5NC40MDEyWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE2Ml8xMTA2NSkiLz4KPHBhdGggZD0iTTE4Mi40MDMgOTQuNDAwNEgxMDcuMjAzVjE2OS42TDE4Mi40MDMgOTQuNDAwNFoiIGZpbGw9IiM5QTlGQUEiLz4KPHBhdGggZD0iTTE2MC42ODUgMjIzLjA3OEwxMDcuMjEgMTY5LjYwMkw1My43MzQ0IDIyMy4wNzhIMTYwLjY4NVoiIGZpbGw9IiM5QTlGQUEiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xNjJfMTEwNjUiIHgxPSIzMi4wMDc4IiB5MT0iNTYuODAxMiIgeDI9IjEwNy4yMDgiIHkyPSI1Ni44MDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC40MDYyIiBzdG9wLWNvbG9yPSIjQzRDNEM0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Q5RDlEOSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
              alt="Feefo Platinum Trusted Service Award"
              className="ignore-purify-1h0Ih  ignore-purify-2n3Sp w-1/2"
            ></img>
            <img
              src={carguru}
              alt="sellcars"
              className="w-[70px] h-[60px] pl-1"
            />{" "}
            {/* </div> */}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
