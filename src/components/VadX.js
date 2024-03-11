export default function VadX(props) {
  const item=props.ele;
  return (
    <div className="w-full rounded-2xl bg-white p-4 flex flex-col">
      <div className="flex flex-wrap gap-4 flex-row justify-between">
        <div className="md:w-20 w-[90px] flex flex-col justify-center">
          <div className="flex mx-auto justify-center w-10 h-10 items-center rounded-md bg-[#f6f6f6]">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_829_6793)">
                <path
                  d="M22.667 5.5H1.66699C1.11471 5.5 0.666992 5.94772 0.666992 6.5V16.5C0.666992 17.0523 1.11471 17.5 1.66699 17.5H22.667C23.2193 17.5 23.667 17.0523 23.667 16.5V6.5C23.667 5.94772 23.2193 5.5 22.667 5.5Z"
                  fill="#272727"
                />
                <path
                  d="M22.667 5H1.66699C1.26917 5 0.887637 5.15804 0.606332 5.43934C0.325027 5.72064 0.166992 6.10218 0.166992 6.5L0.166992 16.5C0.166992 16.8978 0.325027 17.2794 0.606332 17.5607C0.887637 17.842 1.26917 18 1.66699 18H22.667C23.0648 18 23.4463 17.842 23.7277 17.5607C24.009 17.2794 24.167 16.8978 24.167 16.5V6.5C24.167 6.10218 24.009 5.72064 23.7277 5.43934C23.4463 5.15804 23.0648 5 22.667 5ZM23.167 16.5C23.167 16.6326 23.1143 16.7598 23.0205 16.8536C22.9268 16.9473 22.7996 17 22.667 17H1.66699C1.53438 17 1.40721 16.9473 1.31344 16.8536C1.21967 16.7598 1.16699 16.6326 1.16699 16.5V6.5C1.16699 6.36739 1.21967 6.24021 1.31344 6.14645C1.40721 6.05268 1.53438 6 1.66699 6H22.667C22.7996 6 22.9268 6.05268 23.0205 6.14645C23.1143 6.24021 23.167 6.36739 23.167 6.5V16.5Z"
                  fill="#231F20"
                />
                <path
                  d="M5.16699 7.5H4.16699C3.76917 7.5 3.38764 7.65804 3.10633 7.93934C2.82503 8.22064 2.66699 8.60218 2.66699 9V11C2.66699 11.3978 2.82503 11.7794 3.10633 12.0607C3.38764 12.342 3.76917 12.5 4.16699 12.5H5.16699C5.56482 12.5 5.94635 12.342 6.22765 12.0607C6.50896 11.7794 6.66699 11.3978 6.66699 11V9C6.66699 8.60218 6.50896 8.22064 6.22765 7.93934C5.94635 7.65804 5.56482 7.5 5.16699 7.5ZM4.16699 8.5H5.16699L3.66699 10.5V9C3.66699 8.86739 3.71967 8.74021 3.81344 8.64645C3.90721 8.55268 4.03438 8.5 4.16699 8.5ZM5.16699 11.5H4.16699L5.66699 9.5V11C5.66699 11.1326 5.61431 11.2598 5.52055 11.3536C5.42678 11.4473 5.2996 11.5 5.16699 11.5ZM15.167 7.5H14.167C13.7692 7.5 13.3876 7.65804 13.1063 7.93934C12.825 8.22064 12.667 8.60218 12.667 9V11C12.667 11.3978 12.825 11.7794 13.1063 12.0607C13.3876 12.342 13.7692 12.5 14.167 12.5H15.167C15.5648 12.5 15.9463 12.342 16.2277 12.0607C16.509 11.7794 16.667 11.3978 16.667 11V9C16.667 8.60218 16.509 8.22064 16.2277 7.93934C15.9463 7.65804 15.5648 7.5 15.167 7.5ZM14.167 8.5H15.167L13.667 10.5V9C13.667 8.86739 13.7197 8.74021 13.8134 8.64645C13.9072 8.55268 14.0344 8.5 14.167 8.5ZM15.167 11.5H14.167L15.667 9.5V11C15.667 11.1326 15.6143 11.2598 15.5205 11.3536C15.4268 11.4473 15.2996 11.5 15.167 11.5ZM9.16699 10.5H10.667V12C10.667 12.1326 10.7197 12.2598 10.8134 12.3536C10.9072 12.4473 11.0344 12.5 11.167 12.5C11.2996 12.5 11.4268 12.4473 11.5205 12.3536C11.6143 12.2598 11.667 12.1326 11.667 12V8C11.667 7.86739 11.6143 7.74021 11.5205 7.64645C11.4268 7.55268 11.2996 7.5 11.167 7.5C11.0344 7.5 10.9072 7.55268 10.8134 7.64645C10.7197 7.74021 10.667 7.86739 10.667 8V9.5H9.16699C9.03438 9.5 8.90721 9.44732 8.81344 9.35355C8.71967 9.25979 8.66699 9.13261 8.66699 9V8C8.66699 7.86739 8.61431 7.74021 8.52055 7.64645C8.42678 7.55268 8.2996 7.5 8.16699 7.5C8.03438 7.5 7.90721 7.55268 7.81344 7.64645C7.71967 7.74021 7.66699 7.86739 7.66699 8V9C7.66699 9.39782 7.82503 9.77936 8.10633 10.0607C8.38764 10.342 8.76917 10.5 9.16699 10.5ZM21.167 8.5C21.2996 8.5 21.4268 8.44732 21.5205 8.35355C21.6143 8.25979 21.667 8.13261 21.667 8C21.667 7.86739 21.6143 7.74021 21.5205 7.64645C21.4268 7.55268 21.2996 7.5 21.167 7.5H18.667C18.4018 7.5 18.1474 7.60536 17.9599 7.79289C17.7723 7.98043 17.667 8.23478 17.667 8.5V9.5C17.667 9.76522 17.7723 10.0196 17.9599 10.2071C18.1474 10.3946 18.4018 10.5 18.667 10.5H20.667V11.5H18.167C18.0344 11.5 17.9072 11.5527 17.8134 11.6464C17.7197 11.7402 17.667 11.8674 17.667 12C17.667 12.1326 17.7197 12.2598 17.8134 12.3536C17.9072 12.4473 18.0344 12.5 18.167 12.5H20.667C20.9322 12.5 21.1866 12.3946 21.3741 12.2071C21.5616 12.0196 21.667 11.7652 21.667 11.5V10.5C21.667 10.2348 21.5616 9.98043 21.3741 9.79289C21.1866 9.60536 20.9322 9.5 20.667 9.5H18.667V8.5H21.167ZM13.167 14.5H11.167C11.0344 14.5 10.9072 14.5527 10.8134 14.6464C10.7197 14.7402 10.667 14.8674 10.667 15C10.667 15.1326 10.7197 15.2598 10.8134 15.3536C10.9072 15.4473 11.0344 15.5 11.167 15.5H13.167C13.2996 15.5 13.4268 15.4473 13.5205 15.3536C13.6143 15.2598 13.667 15.1326 13.667 15C13.667 14.8674 13.6143 14.7402 13.5205 14.6464C13.4268 14.5527 13.2996 14.5 13.167 14.5ZM8.81199 14.145L8.66699 14.295L8.52199 14.145C8.42784 14.0508 8.30014 13.998 8.16699 13.998C8.03384 13.998 7.90614 14.0508 7.81199 14.145C7.71784 14.2392 7.66495 14.3668 7.66495 14.5C7.66495 14.6332 7.71784 14.7608 7.81199 14.855L7.96199 15L7.81199 15.145C7.71784 15.2392 7.66495 15.3668 7.66495 15.5C7.66495 15.6332 7.71784 15.7608 7.81199 15.855C7.90614 15.9492 8.03384 16.002 8.16699 16.002C8.30014 16.002 8.42784 15.9492 8.52199 15.855L8.66699 15.705L8.81199 15.855C8.90614 15.9492 9.03384 16.002 9.16699 16.002C9.30014 16.002 9.42784 15.9492 9.52199 15.855C9.61614 15.7608 9.66904 15.6332 9.66904 15.5C9.66904 15.3668 9.61614 15.2392 9.52199 15.145L9.37199 15L9.52199 14.855C9.61614 14.7608 9.66904 14.6332 9.66904 14.5C9.66904 14.3668 9.61614 14.2392 9.52199 14.145C9.42784 14.0508 9.30014 13.998 9.16699 13.998C9.03384 13.998 8.90614 14.0508 8.81199 14.145ZM15.812 14.145L15.667 14.295L15.522 14.145C15.4754 14.0984 15.42 14.0614 15.3591 14.0362C15.2982 14.0109 15.2329 13.998 15.167 13.998C15.1011 13.998 15.0358 14.0109 14.9749 14.0362C14.914 14.0614 14.8586 14.0984 14.812 14.145C14.7654 14.1916 14.7284 14.247 14.7032 14.3079C14.6779 14.3688 14.6649 14.4341 14.6649 14.5C14.6649 14.5659 14.6779 14.6312 14.7032 14.6921C14.7284 14.753 14.7654 14.8084 14.812 14.855L14.962 15L14.812 15.145C14.7178 15.2392 14.6649 15.3668 14.6649 15.5C14.6649 15.6332 14.7178 15.7608 14.812 15.855C14.9061 15.9492 15.0338 16.002 15.167 16.002C15.3001 16.002 15.4278 15.9492 15.522 15.855L15.667 15.705L15.812 15.855C15.9061 15.9492 16.0338 16.002 16.167 16.002C16.3001 16.002 16.4278 15.9492 16.522 15.855C16.6161 15.7608 16.669 15.6332 16.669 15.5C16.669 15.3668 16.6161 15.2392 16.522 15.145L16.372 15L16.522 14.855C16.6161 14.7608 16.669 14.6332 16.669 14.5C16.669 14.3668 16.6161 14.2392 16.522 14.145C16.4278 14.0508 16.3001 13.998 16.167 13.998C16.0338 13.998 15.9061 14.0508 15.812 14.145Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_829_6793">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.166992)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="mt-2 text-center text-gray-500 text-[12px]">
            Registration
          </div>
          <div className="text-center uppercase font-bold text-[16px]">{item.vehicle.registration}</div>
        </div>
        <div className="md:w-20 w-[90px] flex flex-col justify-center">
          <div className="flex mx-auto justify-center w-10 h-10 items-center rounded-md bg-[#f6f6f6]">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5804 4.08008H16.8204V5.52008H10.5804V4.08008ZM10.3404 6.00008H17.0604V6.48008H10.3404V6.00008ZM11.2044 6.96008H16.1964L15.7164 7.92008H11.6844L11.2044 6.96008ZM3.38043 17.5201H1.94043V10.8001H3.38043V17.5201ZM3.86043 15.3601V12.9601H5.06043V15.3601H3.86043ZM19.4604 19.9201H8.78043L7.89243 18.5761C7.84443 18.5281 7.77243 18.4801 7.70043 18.4801H5.54043V9.84008H7.70043C7.77243 9.84008 7.84443 9.79208 7.89243 9.74408L8.78043 8.40008H19.4604V19.9201ZM19.9404 19.2001V9.12008H20.6604V19.2001H19.9404ZM23.0604 18.7201C23.0604 19.3921 22.5324 19.9201 21.8604 19.9201H21.1404V8.40008H21.8604C22.5324 8.40008 23.0604 8.92808 23.0604 9.60008V18.7201Z"
                fill="#272727"
              />
              <path
                d="M13.7004 9.35986C11.0604 9.35986 8.90039 11.5199 8.90039 14.1599C8.90039 16.7999 11.0604 18.9599 13.7004 18.9599C16.3404 18.9599 18.5004 16.7999 18.5004 14.1599C18.5004 11.5199 16.3404 9.35986 13.7004 9.35986ZM13.7004 18.4799C11.3244 18.4799 9.38039 16.5359 9.38039 14.1599C9.38039 11.7839 11.3244 9.83986 13.7004 9.83986C16.0764 9.83986 18.0204 11.7839 18.0204 14.1599C18.0204 16.5359 16.0764 18.4799 13.7004 18.4799Z"
                fill="#272727"
              />
              <path
                d="M16.2436 11.6161C15.5956 10.9681 14.6836 10.5601 13.6996 10.5601C12.7156 10.5601 11.8036 10.9681 11.1556 11.6161C10.5076 12.2641 10.0996 13.1761 10.0996 14.1601C10.0996 15.1441 10.5076 16.0561 11.1556 16.7041C11.8036 17.3521 12.7156 17.7601 13.6996 17.7601C14.6836 17.7601 15.5956 17.3521 16.2436 16.7041C16.8916 16.0561 17.2996 15.1441 17.2996 14.1601C17.2996 13.1761 16.8916 12.2641 16.2436 11.6161ZM16.0756 16.1761L14.5156 14.6401C14.5636 14.5681 14.5876 14.4721 14.6116 14.4001H16.7956C16.7476 15.0721 16.4836 15.6961 16.0756 16.1761ZM10.6036 14.4001H12.7876C12.8116 14.4961 12.8356 14.5681 12.8836 14.6401L11.3476 16.1761C10.9156 15.6961 10.6516 15.0721 10.6036 14.4001ZM11.3236 12.1441L12.8596 13.6801C12.8116 13.7521 12.7876 13.8481 12.7636 13.9201H10.5796C10.6516 13.2481 10.9156 12.6241 11.3236 12.1441ZM13.6996 14.6401C13.4356 14.6401 13.2196 14.4241 13.2196 14.1601C13.2196 13.8961 13.4356 13.6801 13.6996 13.6801C13.9636 13.6801 14.1796 13.8961 14.1796 14.1601C14.1796 14.4241 13.9636 14.6401 13.6996 14.6401ZM14.1796 13.3441C14.1076 13.2961 14.0116 13.2721 13.9396 13.2481V11.0641C14.6116 11.1121 15.2356 11.3761 15.7156 11.8081L14.1796 13.3441ZM13.4596 13.2241C13.3636 13.2481 13.2916 13.2721 13.2196 13.3201L11.6836 11.7841C12.1636 11.3761 12.7876 11.0881 13.4596 11.0401V13.2241ZM13.2196 14.9761C13.2916 15.0241 13.3876 15.0481 13.4596 15.0721V17.2561C12.7876 17.2081 12.1636 16.9441 11.6836 16.5121L13.2196 14.9761ZM13.9396 15.0961C14.0356 15.0721 14.1076 15.0481 14.1796 15.0001L15.7156 16.5361C15.2356 16.9441 14.6116 17.2321 13.9396 17.2801V15.0961ZM14.6356 13.9201C14.6116 13.8241 14.5876 13.7521 14.5396 13.6801L16.0756 12.1441C16.4836 12.6241 16.7716 13.2481 16.8196 13.9201H14.6356Z"
                fill="#272727"
              />
            </svg>
          </div>
          <div className="mt-2 text-center text-gray-500 text-[12px]">
          Engine Size
          </div>
          <div className="text-center uppercase font-bold text-[16px]">{parseInt(item.vehicle.engineCapacityCC).toLocaleString()}</div>
        </div>
        <div className="md:w-20 w-[90px] flex flex-col justify-center">
          <div className="flex mx-auto justify-center w-10 h-10 items-center rounded-md bg-[#f6f6f6]">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.77851 3C6.65439 2.99973 6.53145 3.02398 6.41674 3.07135C6.30202 3.11872 6.19779 3.18829 6.11003 3.27605C6.02227 3.36381 5.95271 3.46804 5.90534 3.58275C5.85796 3.69747 5.83372 3.82041 5.83399 3.94452V19.0555C5.83399 19.5279 6.30613 20 6.77851 20H15.2785C15.7507 20 16.2228 19.5279 16.2228 19.0555V14.3333H16.6952C17.1673 14.3333 17.1673 14.8055 17.1673 14.8055V16.6945C17.1673 17.6388 17.6395 18.1112 18.584 18.1112C19.5285 18.1112 20.0007 17.6388 20.0007 16.6945V11.5C20.0007 10.5555 18.1118 9.61119 18.1118 8.66667V5.83334H17.1673L16.2228 4.88882V3.94452C16.2231 3.82043 16.1988 3.69751 16.1515 3.5828C16.1041 3.4681 16.0346 3.36388 15.9468 3.27613C15.8591 3.18837 15.7549 3.1188 15.6402 3.07142C15.5255 3.02403 15.4026 2.99976 15.2785 3H6.77851ZM7.7228 4.88882H14.334V8.66667H7.7228V4.88882ZM16.2228 7.72215H17.1673V9.13881C17.1673 10.0833 19.0561 11.0279 19.0561 11.9721V16.6945C19.0561 17.1667 18.584 17.1667 18.584 17.1667C18.584 17.1667 18.1118 17.1667 18.1118 16.6945V14.3333C18.1118 13.8612 17.6395 13.3888 17.1673 13.3888H16.2228V7.72215Z"
                fill="#272727"
              />
            </svg>
          </div>
          <div className="mt-2 text-center text-gray-500 text-[12px]">
          Fuel Type
          </div>
          <div className="text-center uppercase font-bold text-[16px]">{item.vehicle.fuelType}</div>
        </div>
        <div className="md:w-20 w-[90px] flex flex-col justify-center">
          <div className="flex mx-auto justify-center w-10 h-10 items-center rounded-md bg-[#f6f6f6]">
            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.583 2.5V8C18.583 8.26522 18.4777 8.51957 18.2901 8.70711C18.1026 8.89464 17.8482 9 17.583 9H14.583C14.3178 9 14.0634 9.10536 13.8759 9.29289C13.6884 9.48043 13.583 9.73478 13.583 10V12.5C13.583 12.8978 13.425 13.2794 13.1437 13.5607C12.8624 13.842 12.4808 14 12.083 14C11.6852 14 11.3037 13.842 11.0223 13.5607C10.741 13.2794 10.583 12.8978 10.583 12.5V10C10.583 9.73478 10.4777 9.48043 10.2901 9.29289C10.1026 9.10536 9.84822 9 9.58301 9C9.31779 9 9.06344 9.10536 8.8759 9.29289C8.68836 9.48043 8.58301 9.73478 8.58301 10V12.5C8.58301 12.8978 8.42497 13.2794 8.14367 13.5607C7.86236 13.842 7.48083 14 7.08301 14C6.68518 14 6.30365 13.842 6.02235 13.5607C5.74104 13.2794 5.58301 12.8978 5.58301 12.5V10C5.58301 9.73478 5.47765 9.48043 5.29011 9.29289C5.10258 9.10536 4.84822 9 4.58301 9C4.31779 9 4.06344 9.10536 3.8759 9.29289C3.68836 9.48043 3.58301 9.73478 3.58301 10V12.5C3.58301 12.8978 3.42497 13.2794 3.14367 13.5607C2.86236 13.842 2.48083 14 2.08301 14C1.68518 14 1.30365 13.842 1.02235 13.5607C0.741043 13.2794 0.583008 12.8978 0.583008 12.5V2.5C0.583008 2.10218 0.741043 1.72064 1.02235 1.43934C1.30365 1.15804 1.68518 1 2.08301 1C2.48083 1 2.86236 1.15804 3.14367 1.43934C3.42497 1.72064 3.58301 2.10218 3.58301 2.5V5C3.58301 5.26522 3.68836 5.51957 3.8759 5.70711C4.06344 5.89464 4.31779 6 4.58301 6C4.84822 6 5.10258 5.89464 5.29011 5.70711C5.47765 5.51957 5.58301 5.26522 5.58301 5V2.5C5.58301 2.10218 5.74104 1.72064 6.02235 1.43934C6.30365 1.15804 6.68518 1 7.08301 1C7.48083 1 7.86236 1.15804 8.14367 1.43934C8.42497 1.72064 8.58301 2.10218 8.58301 2.5V5C8.58301 5.26522 8.68836 5.51957 8.8759 5.70711C9.06344 5.89464 9.31779 6 9.58301 6C9.84822 6 10.1026 5.89464 10.2901 5.70711C10.4777 5.51957 10.583 5.26522 10.583 5V2.5C10.583 2.10218 10.741 1.72064 11.0223 1.43934C11.3037 1.15804 11.6852 1 12.083 1C12.4808 1 12.8624 1.15804 13.1437 1.43934C13.425 1.72064 13.583 2.10218 13.583 2.5V6H15.083C15.2156 6 15.3428 5.94732 15.4366 5.85355C15.5303 5.75979 15.583 5.63261 15.583 5.5V2.5C15.583 2.10218 15.741 1.72064 16.0223 1.43934C16.3037 1.15804 16.6852 1 17.083 1C17.4808 1 17.8624 1.15804 18.1437 1.43934C18.425 1.72064 18.583 2.10218 18.583 2.5Z"
                fill="#272727"
              />
              <path
                d="M17.333 10.5H16.083C15.9504 10.5 15.8232 10.5527 15.7295 10.6464C15.6357 10.7402 15.583 10.8674 15.583 11V14C15.583 14.1326 15.6357 14.2598 15.7295 14.3536C15.8232 14.4473 15.9504 14.5 16.083 14.5C16.2156 14.5 16.3428 14.4473 16.4366 14.3536C16.5303 14.2598 16.583 14.1326 16.583 14V13H16.813C17.718 14.355 17.733 14.5 18.083 14.5C18.173 14.4995 18.2613 14.4748 18.3384 14.4283C18.4156 14.3818 18.4787 14.3154 18.5212 14.236C18.5637 14.1567 18.584 14.0673 18.5799 13.9773C18.5758 13.8874 18.5475 13.8002 18.498 13.725L17.918 12.85C18.1622 12.7182 18.3556 12.5089 18.4678 12.2551C18.5799 12.0012 18.6044 11.7173 18.5373 11.448C18.4703 11.1787 18.3156 10.9394 18.0975 10.7678C17.8795 10.5961 17.6105 10.5019 17.333 10.5ZM16.583 11.5C17.338 11.5 17.583 11.445 17.583 11.75C17.583 12.055 17.278 12 16.583 12V11.5Z"
                fill="#231F20"
              />
            </svg>
          </div>
          <div className="mt-2 text-center text-gray-500 text-[12px]">
          Transmission
          </div>
          <div className="text-center uppercase font-bold text-[16px]">{item.vehicle.transmissionType}</div>
        </div>
        <div className="md:w-20 w-[90px] flex flex-col justify-center">
          <div className="flex mx-auto justify-center w-10 h-10 items-center rounded-md bg-[#f6f6f6]">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5407 10.2256H5.36328V15.5298C5.65506 15.4166 5.48522 15.4514 10.2276 15.4514C6.88312 12.1025 6.93102 12.6556 7.5407 10.2256Z"
                fill="#272727"
              />
              <path
                d="M19.2984 5H11.0808C10.6941 4.99932 10.3182 5.12734 10.0122 5.36388C9.70632 5.60042 9.4878 5.93203 9.39113 6.30645L8.11516 11.4756C8.06949 11.6273 8.06604 11.7885 8.10518 11.942C8.14431 12.0955 8.22455 12.2354 8.33726 12.3466L11.4597 15.4516H20.6048C23.0958 12.9606 22.7823 13.4223 22.7823 8.48387C22.7823 7.55989 22.4152 6.67376 21.7619 6.0204C21.1085 5.36705 20.2224 5 19.2984 5ZM20.0953 14.5806H11.9692L9.17774 11.7892L10.5321 6.83339C10.6075 6.55725 10.7715 6.31351 10.9988 6.13963C11.2262 5.96575 11.5044 5.87136 11.7906 5.87097H19.2984C19.9914 5.87097 20.656 6.14626 21.146 6.63627C21.636 7.12629 21.9113 7.79089 21.9113 8.48387C21.9113 13.0782 22.2031 12.4729 20.0953 14.5806ZM2.75 8.48387V18.5C3.21199 18.5 3.65506 18.3165 3.98173 17.9898C4.30841 17.6631 4.49194 17.2201 4.49194 16.7581C4.49194 9.66839 4.66177 9.66839 3.98242 8.98903C3.65475 8.66404 3.2115 8.48235 2.75 8.48387Z"
                fill="#272727"
              />
              <path
                d="M19.2975 6.7422H11.7898C11.6914 6.73883 11.5949 6.76885 11.5158 6.82737C11.4367 6.88588 11.3798 6.96945 11.3543 7.06446L10.1523 11.5325L12.3298 13.7099H19.733C21.3094 12.1335 21.0394 12.7911 21.0394 8.48413C21.0394 8.02214 20.8559 7.57908 20.5292 7.2524C20.2026 6.92572 19.7595 6.7422 19.2975 6.7422Z"
                fill="#272727"
              />
            </svg>
          </div>
          <div className="mt-2 text-center text-gray-500 text-[12px]">
          Body Style
          </div>
          <div className="text-center uppercase font-bold text-[16px]">{item.vehicle.bodyType}</div>
        </div>
        <div className="md:w-20 w-[90px] flex flex-col justify-center">
          <div className="flex mx-auto justify-center w-10 h-10 items-center rounded-md bg-[#f6f6f6]">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16602 23.25C8.8384 23.25 8.51907 23.147 8.25329 22.9554C7.9875 22.7639 7.78873 22.4936 7.68514 22.1827L6.98839 20.0917C6.94044 19.9482 6.916 19.7979 6.91602 19.6466C6.91596 19.4433 6.95999 19.2424 7.04507 19.0577C7.13015 18.873 7.25426 18.7089 7.40885 18.5768C7.56343 18.4448 7.74482 18.3477 7.94052 18.2925C8.13621 18.2373 8.34155 18.2251 8.54239 18.2569L12.916 19.125H15.166V14.25C15.1658 13.2789 15.4965 12.3368 16.1035 11.5789L16.666 10.875V9C16.666 8.60218 16.8241 8.22064 17.1054 7.93934C17.3867 7.65804 17.7682 7.5 18.166 7.5H19.666C20.0638 7.5 20.4454 7.65804 20.7267 7.93934C21.008 8.22064 21.166 8.60218 21.166 9V9.75L20.1846 21.3806C20.1454 21.8892 19.9158 22.3642 19.5415 22.7108C19.1673 23.0573 18.6761 23.2499 18.166 23.25H9.16602Z"
                fill="#272727"
              />
              <path
                d="M20.791 1.875C20.791 1.57663 20.6725 1.29048 20.4615 1.0795C20.2505 0.868526 19.9644 0.75 19.666 0.75H18.166C17.8676 0.75 17.5815 0.868526 17.3705 1.0795C17.1595 1.29048 17.041 1.57663 17.041 1.875V4.875C17.041 5.17337 17.1595 5.45952 17.3705 5.6705C17.5815 5.88147 17.8676 6 18.166 6H19.666C19.9644 6 20.2505 5.88147 20.4615 5.6705C20.6725 5.45952 20.791 5.17337 20.791 4.875V1.875Z"
                fill="#272727"
              />
              <path d="M19.666 6H18.166V7.5H19.666V6Z" fill="#272727" />
              <path
                d="M10.1989 8.58186L5.77414 4.15707C5.56472 3.94764 5.22641 3.94764 5.01699 4.15707C4.80756 4.3665 4.80756 4.7048 5.01699 4.91422L5.91913 5.81637L3.15363 8.58186C2.83681 8.89869 2.83681 9.40883 3.15363 9.72028L6.10708 12.6737C6.2628 12.8295 6.47223 12.91 6.67629 12.91C6.88034 12.91 7.08977 12.8295 7.24549 12.6737L10.1989 9.72028C10.5158 9.40883 10.5158 8.89869 10.1989 8.58186ZM4.10411 9.15107L6.67629 6.57889L9.24847 9.15107H4.10411ZM11.5092 9.95656C11.5092 9.95656 10.4352 11.1218 10.4352 11.836C10.4352 12.4267 10.9185 12.91 11.5092 12.91C12.0999 12.91 12.5832 12.4267 12.5832 11.836C12.5832 11.1218 11.5092 9.95656 11.5092 9.95656Z"
                fill="#272727"
              />
            </svg>
          </div>
          <div className="mt-2 text-center text-gray-500 text-[12px]">
            Exterior Colour
          </div>
          <div className="text-center uppercase font-bold text-[16px]">{item.vehicle.colour}</div>
        </div>
      </div>
    </div>
  );
}
