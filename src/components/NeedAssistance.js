export default function NeedAssistance() {
  return (
    <div className="w-full bg-white rounded-lg mt-[50px] p-[24px] flex flex-col justify-center items-center">
      <div className="text-gray-900 text-center font-barlow-condensed text-2xl  font-medium leading-8">
        Need Assistance?
      </div>
      <div className="mt-2 text-black text-center font-barlow text-base font-normal leading-6 lowercase max-w-[377px]">
        We would be happy to answer any questions you may have, to help you make
        the right choice.
      </div>
      <div className="w-full mt-6 flex flex-col md:flex-row justify-between">
        <div className="border-2 bg-black text-white hover:bg-gray-700 flex flex-row justify-center items-center py-[10px] w-full md:mt-0 mt-10 md:w-[45%] rounded-full uppercase">
          <div className="flex flex-row items-center  ">
            contact US
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4"
            >
              <path
                d="M2.34961 2.4001C2.34961 1.95827 2.70778 1.6001 3.14961 1.6001H4.87191C5.26298 1.6001 5.59673 1.88283 5.66102 2.26858L6.25247 5.81728C6.31021 6.1637 6.13525 6.50727 5.82113 6.66434L4.58262 7.28359C5.47566 9.50275 7.24695 11.2741 9.46611 12.1671L10.0854 10.9286C10.2424 10.6145 10.586 10.4395 10.9324 10.4972L14.4811 11.0887C14.8669 11.153 15.1496 11.4867 15.1496 11.8778V13.6001C15.1496 14.0419 14.7914 14.4001 14.3496 14.4001H12.7496C7.00585 14.4001 2.34961 9.74386 2.34961 4.0001V2.4001Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="border-2 bg-black text-white hover:bg-gray-700 flex flex-row justify-center items-center py-[10px] w-full md:mt-0 mt-10 md:w-[45%] rounded-full uppercase">
          <div className="flex flex-row items-center  ">
            Live support
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4"
            >
              <path
                d="M2.34961 3.9999C2.34961 3.11625 3.06595 2.3999 3.94961 2.3999H9.54961C10.4333 2.3999 11.1496 3.11625 11.1496 3.9999V7.1999C11.1496 8.08356 10.4333 8.7999 9.54961 8.7999H7.94961L5.54961 11.1999V8.7999H3.94961C3.06595 8.7999 2.34961 8.08356 2.34961 7.1999V3.9999Z"
                fill="#F6F6F6"
              />
              <path
                d="M12.7496 5.5999V6.3999C12.7496 8.60904 10.9587 10.3999 8.74961 10.3999H8.61235L7.19899 11.8133C7.42284 11.9324 7.67834 11.9999 7.94961 11.9999H9.54961L11.9496 14.3999V11.9999H13.5496C14.4333 11.9999 15.1496 11.2836 15.1496 10.3999V7.1999C15.1496 6.31625 14.4333 5.5999 13.5496 5.5999H12.7496Z"
                fill="#F6F6F6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
