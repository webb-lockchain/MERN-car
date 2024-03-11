import avatar from "../assets/images/avatar.png";
const ChatDialog = ({ isOpen, onClose }) => {
  return (
    <div className={`bg-white fixed sm:w-[370px] rounded-none sm:rounded-3xl shadow-lg flex flex-col  sm:right-[35px] sm:top-auto sm:left-auto sm:h-[650px] transition-all ${isOpen ? " z-50 inset-0  sm:bottom-11" : "block -bottom-[700px]"
      }`}
    >
      <div className=" h-32 rounded-3xl shadow-black w-full pt-4 flex items-start justify-between rounded-t-4xl bg-[#ffffff] text-[#000000]">
        <div className="flex flex-row items-center h-32">
          <img
            src="https://visitorchat-client.s3.eu-west-2.amazonaws.com/app/chatbox/1631261759-Capture.PNG"
            className="max-w-[200px] mx-auto"
            alt="bot"
          />
          <div className="  font-bold">Chat</div>
        </div>
        <div
          className="border-2 border-black rounded-full w-8 h-8 flex items-start cursor-pointer hover:drop-shadow-lg mr-2"
          onClick={onClose}
        >
          <svg className="fill-current w-3 h-3 my-auto mx-auto">
            <use href="#times"></use>
          </svg>
        </div>
      </div>
      <div className="mx-2 flex-grow rounded-3xl shadow-black flex flex-col rounded-t-4xl rounded-b-4xl overflow-hidden bg-[#ffffff] text-[#000000]">
        <div className="h-full bg-[#f9f9f9]  message-container flex-grow p-2 flex flex-col gap-y-4 overflow-y-auto  text-sm">
          <div className="h-full flex flex-col justify-between">
            <div className="flex w-full self-start">
              <div className="relative self-start w-full">
                <div className=" px-3 py-2 rounded-t-xl w-full  text-black flex flex-row">
                  <img src={avatar} alt="avatar" className="w-10 h-10" />
                  <div className=" ml-4 flex flex-col">
                    <div className="font-bold">Samantha</div>
                    <div className="border-2 p-3 mt-2 rounded-2xl bg-white whitespace-pre-wrap break-words">
                      Hello, I'm here to help. Let me know if you have any
                      questions?
                    </div>
                    <div className="mt-2 text-[#b1aeae] text-[12px]" >2m ago</div>
                  </div>
                </div>
                <div className="mt-2 items-end flex flex-col">
                  <div className="p-3 rounded-2xl bg-[#0449c8] text-white text-[14px]">What payment method available in here?</div>
                  <div className="mt-2 text-[#b1aeae] text-[12px]">Just now</div>

                </div>
              </div>
            </div>
            <div className="mx-auto w-full flex flex-col items-center text-[#000000]">
              <div className="flex w-full justify-center  ">
                Switch to:
              </div>
              <div className="px-7 py-2 rounded-3xl flex items-center gap-x-4 ">
                <div className="cursor-pointer bg-white rounded-2xl p-2 flex justify-center items-center flex-col w-[80px] h-[70px]">
                  <svg className="w-8 h-8">
                    <use href="#whatsAppLogo"></use>
                  </svg>
                  <div className="">Whatsapp</div>
                </div>
                <div className="cursor-pointer bg-white rounded-2xl p-2 flex justify-center items-center flex-col w-[80px] h-[70px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6667 16.0007H10.68M16 16.0007H16.0133M21.3333 16.0007H21.3467M28 16.0007C28 21.8917 22.6274 26.6673 16 26.6673C13.9476 26.6673 12.0156 26.2093 10.3262 25.4021L4 26.6673L5.85999 21.7074C4.68209 20.0571 4 18.0997 4 16.0007C4 10.1096 9.37258 5.33398 16 5.33398C22.6274 5.33398 28 10.1096 28 16.0007Z"
                      stroke="#0449C8"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className=" ">SMS</div>
                </div>
              </div>
              <svg className="hidden">
                <symbol id="whatsAppLogo" viewBox="0 0 360 362">
                  <path
                    fill="#25D366"
                    fillRule="evenodd"
                    d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                    clipRule="evenodd"
                  ></path>
                </symbol>
              </svg>
              <svg className="hidden">
                <symbol id="smsLogo" viewBox="0 0 96.959 96.959">
                  <g
                    style={{
                      fill: "#cfc4f3",
                    }}
                  >
                    <path
                      d="M60 0C26.76 0 0 26.76 0 60v213.6c0 29.386 20.92 53.692 48.736 58.937v57.098c-.004 15.885 18.617 24.47 30.694 14.15l58.037-70.185h168.992c33.24 0 60-26.76 60-60V60c0-33.24-26.76-60-60-60z"
                      style={{
                        color: "#000",
                        fill: "#4ac4f3",
                        fillOpacity: "1",
                        stroke: "none",
                        strokeWidth: "3.77953",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "4",
                        strokeDasharray: "none",
                      }}
                      transform="matrix(.26458 0 0 .23748 0 0)"
                    ></path>
                  </g>
                  <g
                    aria-label="SMS"
                    style={{
                      fill: "#fff;",
                    }}
                  >
                    <path d="M8.104 48.547h4.154v.2q0 2.658 1.894 3.721 1.894 1.03 5.017 1.03 2.725 0 4.553-1.595 1.86-1.595 1.86-4.187 0-2.093-1.594-3.455-1.595-1.33-4.819-2.626l-1.694-.697q-3.39-1.396-5.084-2.758-1.695-1.396-2.526-3.057-.83-1.695-.83-3.755 0-3.655 2.558-6.147 2.592-2.493 8.075-2.493 5.017 0 7.044 1.861 2.06 1.861 2.06 4.353v.2H24.62v-.2q0-.797-.631-1.562-.632-.764-1.894-1.096-1.263-.366-2.758-.366-3.09 0-4.586 1.562-1.462 1.529-1.462 3.49 0 1.328.698 2.491t1.927 1.927q1.23.765 4.154 2.06l1.96.831q4.719 2.06 6.314 4.32 1.561 2.26 1.561 4.851 0 2.426-1.296 4.686-1.262 2.26-3.555 3.422-2.26 1.163-6.048 1.163-3.588 0-6.014-.864-2.393-.83-3.655-2.79-1.23-1.995-1.23-4.32ZM38.055 55.758H34.5V23.692h4.12l9.936 22.895 9.17-22.895h4.055v32.066h-3.689V36.65l.1-5.748h-.1L56 36.65 50.317 50.94H46.13l-6.18-14.354-1.895-5.184h-.1l.1 5.184zM67.057 48.547h4.153v.2q0 2.658 1.894 3.721 1.894 1.03 5.018 1.03 2.725 0 4.552-1.595 1.861-1.595 1.861-4.187 0-2.093-1.595-3.455-1.595-1.33-4.818-2.626l-1.695-.697q-3.39-1.396-5.084-2.758-1.694-1.396-2.525-3.057-.83-1.695-.83-3.755 0-3.655 2.558-6.147 2.592-2.493 8.074-2.493 5.018 0 7.045 1.861 2.06 1.861 2.06 4.353v.2H83.57v-.2q0-.797-.631-1.562-.631-.764-1.894-1.096-1.263-.366-2.758-.366-3.09 0-4.586 1.562-1.462 1.529-1.462 3.49 0 1.328.698 2.491t1.927 1.927q1.23.765 4.154 2.06l1.96.831q4.719 2.06 6.314 4.32 1.562 2.26 1.562 4.851 0 2.426-1.296 4.686-1.263 2.26-3.556 3.422-2.26 1.163-6.047 1.163-3.589 0-6.015-.864-2.392-.83-3.655-2.79-1.23-1.995-1.23-4.32z"></path>
                  </g>
                </symbol>
              </svg>
              <svg className="hidden">
                <symbol id="liveLogo" viewBox="0 0 89.894 92.103">
                  <g transform="translate(0 -4.539)">
                    <g
                      style={{
                        fill: "#b0d3f0;",
                      }}
                    >
                      <path
                        d="M32.956 67.484A14.703 14.703 0 0 0 18.22 82.22v52.459a14.699 14.699 0 0 0 11.97 14.474v14.023c-.001 3.902 4.572 6.01 7.538 3.475l14.253-17.237h41.504a14.703 14.703 0 0 0 14.735-14.735V82.22a14.703 14.703 0 0 0-14.735-14.736z"
                        style={{
                          color: "#000",
                          fill: "#b0d3f0",
                          fillOpacity: "1",
                          stroke: "none",
                          strokeWidth: ".928228",
                          strokeLinejoin: "round",
                          strokeMiterlimit: "4",
                          strokeDasharray: "none",
                        }}
                        transform="matrix(.94444 0 0 .8477 -17.208 -45.565)"
                      ></path>
                    </g>
                    <rect
                      width="53.967"
                      height="21.741"
                      x="35.927"
                      y="4.539"
                      rx=".347"
                      ry=".347"
                      style={{
                        fill: "#e65142;",
                      }}
                    ></rect>
                    <g
                      aria-label="LIVE"
                      style={{
                        fill: "#fff;",
                      }}
                    >
                      <path d="M51.624 22.13H43.12V8.69h1.787v11.85h6.716zM58.15 22.13h-5.308v-1.373h1.76V10.062h-1.76V8.69h5.308v1.372h-1.76v10.695h1.76zM71.806 8.69l-4.892 13.44H64.53L59.639 8.69h1.913l4.215 11.824L69.983 8.69ZM82.7 22.13h-8.854V8.69H82.7v1.588h-7.067v3.683H82.7v1.588h-7.067v4.992H82.7z"></path>
                    </g>
                    <path
                      d="M15.002 15.253c-1.99-.16-6.008.095-8.318 1.76-2.31 1.663-2.91 4.737-2.706 6.74.203 2.004 1.208 2.935 1.641 2.649.433-.287.292-1.793.498-3.112a7.346 7.346 0 0 1 1.457-3.359c.699-.907 1.545-1.587 2.256-1.975.71-.388 1.284-.483 2.284-.537 1-.054 2.411-.067 3.288-.205.878-.137 1.19-.395 1.506-.656.041-.573.083-1.146-1.906-1.305z"
                      style={{
                        fill: "#fff",
                        fillOpacity: ".5",
                        stroke: "none",
                        strokeWidth: ".264583px",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeOpacity: "1",
                      }}
                    ></path>
                    <path
                      d="M69.738 78.173c1.99.16 6.008-.096 8.318-1.76 2.31-1.664 2.91-4.738 2.706-6.741-.203-2.003-1.208-2.935-1.64-2.648-.434.287-.293 1.793-.499 3.112a7.346 7.346 0 0 1-1.456 3.358c-.7.907-1.546 1.588-2.256 1.976-.711.388-1.285.483-2.285.537-1 .054-2.41.067-3.288.204-.878.138-1.19.396-1.506.656-.041.573-.083 1.146 1.906 1.306z"
                      style={{
                        fill: "#286090",
                        fillOpacity: ".5",
                        stroke: "none",
                        strokeWidth: ".264583px",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeOpacity: "1",
                      }}
                    ></path>
                  </g>
                </symbol>
              </svg>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <div className="w-full flex justify-between items-center p-3">
            <input
              // rows="1"
              placeholder="Type your message here..."
              className="bg-[#f6f6f6] rounded-full outline-none border-none w-4/5 py-3 border whitespace-pre-wrap break-words overflow-auto selection:border-blue-800 resize-y max-h-36 min-h-[48px] px-4 text-base"
            ></input>
            <button className="w-10 h-10 border border-black flex items-center justify-center rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0734 3.06373C12.8701 2.65719 12.4546 2.40039 12 2.40039C11.5455 2.40039 11.13 2.65719 10.9267 3.06373L2.52672 19.8637C2.3139 20.2894 2.37271 20.8006 2.67663 21.1668C2.98054 21.5329 3.47213 21.685 3.9297 21.5542L9.92969 19.8399C10.4449 19.6927 10.8 19.2219 10.8 18.6861V13.2004C10.8 12.5376 11.3373 12.0004 12 12.0004C12.6628 12.0004 13.2 12.5376 13.2 13.2004V18.6861C13.2 19.2219 13.5552 19.6927 14.0704 19.8399L20.0704 21.5542C20.5279 21.685 21.0195 21.5329 21.3234 21.1668C21.6274 20.8006 21.6862 20.2894 21.4734 19.8637L13.0734 3.06373Z"
                  fill="#272727"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDialog;