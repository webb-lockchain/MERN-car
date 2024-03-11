import ChatDialog from "./ChatDialog";
import BotChatDialog from "./BotChatDialog";
import { useState } from "react";

export default function LiveChat() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [isBotChatOpen, setIsBotChatOpen] = useState(false);
  const openChat = () => {
    setIsChatOpen(!isChatOpen);
    document.body.style.overflow="hidden";
    setIsBotChatOpen(false);
  };

  const closeChat = () => {
    document.body.style.overflow="";
    setIsChatOpen(false);
  };


  const openBotChat = () => {
    document.body.style.overflow="hidden";
    setIsBotChatOpen(!isBotChatOpen);
    setIsChatOpen(false)
  };

  const closeBotChat = () => {
    document.body.style.overflow="";
    setIsBotChatOpen(false);
  };
  return (
    <div className="w-full h-full">
      {!(isChatOpen||isBotChatOpen)&&<div>
        <div
          className={`fixed right-[70px] bottom-4 cursor-pointer rounded-full z-20 w-14 h-14 shadow-smooth-6`} // ${isChatOpen? 'opacity-100' : 'opacity-0'}
          onClick={openChat}
        >
          <div className="absolute rounded-full -right-0.5 -bottom-0.5 bg-red-500 text-white p-3 w-4 h-4 text-center text-xxs flex justify-center items-center">
            1
          </div>
          <div className="rounded-full w-full h-full flex items-center justify-center bg-[#286090] hover:bg-[#0CB3E8] shadow-[0_0_2px_2px_white]">
            <svg className="text-[#ffffff] fill-[#ffffff] w-10 h-10">
              <use href="#logo"></use>
            </svg>
          </div>
        </div>
        <div
          className={`fixed right-0 bottom-4 cursor-pointer rounded-full z-20 w-14 h-14 shadow-smooth-6`} // ${isChatOpen? 'opacity-100' : 'opacity-0'}
          onClick={openBotChat}
        >
          <div className="absolute rounded-full -right-0.5 -bottom-0.5 bg-red-500 text-white p-3 w-4 h-4 text-center text-xxs flex justify-center items-center">
            2
          </div>
          <div className="rounded-l-full w-full h-full flex items-center justify-center bg-gradient-to-r from-red-600 to-blue-900 shadow-md">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_306_10565)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.5 9C13.5 8.86739 13.4473 8.74021 13.3536 8.64645C13.2598 8.55268 13.1326 8.5 13 8.5H3C2.86739 8.5 2.74021 8.55268 2.64645 8.64645C2.55268 8.74021 2.5 8.86739 2.5 9V14.5C2.49987 14.697 2.53858 14.8921 2.61391 15.0742C2.68925 15.2562 2.79973 15.4216 2.93905 15.561C3.07836 15.7003 3.24377 15.8108 3.42582 15.8861C3.60787 15.9614 3.80298 16.0001 4 16H12C12.398 16 12.78 15.8415 13.06 15.56C13.3415 15.2795 13.5 14.8975 13.5 14.5V9ZM13.5 1.5C13.5 1.102 13.342 0.7205 13.0605 0.4395C12.9213 0.300114 12.756 0.189548 12.574 0.114133C12.392 0.0387176 12.197 -6.67831e-05 12 8.63214e-08H4C3.602 8.63214e-08 3.2205 0.158 2.9395 0.4395C2.80011 0.57869 2.68955 0.744004 2.61413 0.925979C2.53872 1.10795 2.49993 1.30302 2.5 1.5V6C2.5 6.398 2.658 6.7795 2.9395 7.0605C3.07869 7.19989 3.244 7.31045 3.42598 7.38587C3.60795 7.46128 3.80302 7.50007 4 7.5H12C12.398 7.5 12.7795 7.342 13.0605 7.0605C13.1999 6.92131 13.3105 6.756 13.3859 6.57402C13.4613 6.39205 13.5001 6.19698 13.5 6V1.5ZM6 2C5.60888 2.0101 5.23717 2.17257 4.96411 2.45277C4.69105 2.73297 4.53823 3.10875 4.53823 3.5C4.53823 3.89125 4.69105 4.26703 4.96411 4.54723C5.23717 4.82743 5.60888 4.9899 6 5C6.39112 4.9899 6.76283 4.82743 7.03589 4.54723C7.30895 4.26703 7.46177 3.89125 7.46177 3.5C7.46177 3.10875 7.30895 2.73297 7.03589 2.45277C6.76283 2.17257 6.39112 2.0101 6 2ZM10 2C9.60888 2.0101 9.23717 2.17257 8.96411 2.45277C8.69105 2.73297 8.53823 3.10875 8.53823 3.5C8.53823 3.89125 8.69105 4.26703 8.96411 4.54723C9.23717 4.82743 9.60888 4.9899 10 5C10.3911 4.9899 10.7628 4.82743 11.0359 4.54723C11.3089 4.26703 11.4618 3.89125 11.4618 3.5C11.4618 3.10875 11.3089 2.73297 11.0359 2.45277C10.7628 2.17257 10.3911 2.0101 10 2ZM14.4145 8.5H14.5C14.898 8.5 15.2795 8.658 15.5605 8.9395C15.842 9.2205 16 9.602 16 10V13C16 13.398 15.842 13.7795 15.5605 14.0605C15.4213 14.1999 15.256 14.3105 15.074 14.3859C14.892 14.4613 14.697 14.5001 14.5 14.5V9C14.5 8.8245 14.47 8.6565 14.4145 8.5ZM1.5855 8.5H1.5C1.102 8.5 0.7205 8.658 0.4395 8.9395C0.300114 9.07869 0.189548 9.244 0.114133 9.42598C0.0387176 9.60795 -6.67831e-05 9.80302 8.63214e-08 10V13C8.63214e-08 13.398 0.158 13.7795 0.4395 14.0605C0.57869 14.1999 0.744004 14.3105 0.925979 14.3859C1.10795 14.4613 1.30302 14.5001 1.5 14.5V9C1.5 8.8245 1.53 8.6565 1.5855 8.5Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_306_10565">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>}

      <ChatDialog isOpen={isChatOpen} onClose={closeChat} />
      <BotChatDialog isOpen={isBotChatOpen} onClose={closeBotChat} />
    </div>
  );
}
