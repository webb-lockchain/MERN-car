export default function ContactCard(props) {
  const { title, location, number1,number2,number3 } = props;
  return (
    <div className="py-10 px-6 flex flex-col items-left">
      <div className="text-2xl font-bold uppercase   ">{title}</div>
      <div className="w-full flex flex-row mt-6 items-start">
        <svg
          className="  w-10 h-10"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.00008 16.666H15.0001C15.4584 16.666 15.8334 17.041 15.8334 17.4993C15.8334 17.9577 15.4584 18.3327 15.0001 18.3327H5.00008C4.54175 18.3327 4.16675 17.9577 4.16675 17.4993C4.16675 17.041 4.54175 16.666 5.00008 16.666ZM10.0001 5.83268C9.08341 5.83268 8.33341 6.58268 8.33341 7.49935C8.33341 8.41602 9.08341 9.16602 10.0001 9.16602C10.9167 9.16602 11.6667 8.41602 11.6667 7.49935C11.6667 6.58268 10.9167 5.83268 10.0001 5.83268ZM10.0001 1.66602C12.7251 1.66602 15.8334 3.71602 15.8334 7.62435C15.8334 10.1077 14.0584 12.7243 10.5084 15.4493C10.2084 15.6827 9.79175 15.6827 9.49175 15.4493C5.94175 12.716 4.16675 10.1077 4.16675 7.62435C4.16675 3.71602 7.27508 1.66602 10.0001 1.66602Z"
            fill="#272727"
          />
        </svg>

        <div className="text-base font-semibold text-gray-900   ">
          {location}
        </div>
      </div>
      <div className="flex flex-row mt-4 items-start">
        <div className="text-base font-semibold text-gray-900   ">
          {number1}
        </div>
      </div>
      <div className="flex flex-row mt-4 items-start">
        <div className="text-base font-semibold text-gray-900   ">
          {number2}
        </div>
      </div>
      <div className="flex flex-row mt-4 items-start">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.8675 11.7006C13.6546 11.5942 12.6111 11.0813 12.4168 11.0099C12.2225 10.9392 12.0811 10.9042 11.9389 11.117C11.7975 11.3285 11.3911 11.807 11.2675 11.9485C11.1432 12.0906 11.0196 12.1077 10.8075 12.002C10.5953 11.8949 9.91106 11.6713 9.10035 10.9485C8.46964 10.3856 8.04321 9.69061 7.91964 9.47775C7.79607 9.26561 7.90607 9.15061 8.0125 9.04489C8.10821 8.94989 8.22464 8.79704 8.33107 8.67347C8.4375 8.54918 8.4725 8.46061 8.54321 8.31847C8.61464 8.17704 8.57892 8.05347 8.52535 7.94704C8.4725 7.84061 8.04821 6.79561 7.87107 6.37061C7.69893 5.95704 7.52393 6.01347 7.39393 6.00633C7.26964 6.00061 7.12821 5.99918 6.98678 5.99918C6.84536 5.99918 6.61536 6.05204 6.42107 6.2649C6.22607 6.47704 5.67822 6.99061 5.67822 8.03561C5.67822 9.07989 6.43821 10.0892 6.54464 10.2313C6.65107 10.3727 8.04107 12.517 10.1704 13.4363C10.6775 13.6549 11.0725 13.7856 11.3803 13.8827C11.8889 14.0449 12.3518 14.022 12.7175 13.967C13.1246 13.9063 13.9732 13.4535 14.1503 12.9577C14.3268 12.462 14.3268 12.037 14.2739 11.9485C14.2211 11.8599 14.0796 11.807 13.8668 11.7006H13.8675ZM9.99464 16.9885H9.99178C8.72709 16.9887 7.48562 16.6487 6.3975 16.0042L6.14036 15.8513L3.4675 16.5527L4.18107 13.947L4.01322 13.6799C3.30617 12.5544 2.932 11.2519 2.93393 9.92275C2.93536 6.0299 6.1025 2.86276 9.99749 2.86276C11.8832 2.86276 13.6561 3.59847 14.9889 4.93276C15.6463 5.58746 16.1674 6.36602 16.522 7.22339C16.8765 8.08077 17.0576 8.99995 17.0546 9.92775C17.0532 13.8206 13.8861 16.9885 9.99464 16.9885ZM16.0032 3.91919C15.2162 3.12699 14.2798 2.49886 13.2483 2.07119C12.2167 1.64352 11.1106 1.42482 9.99392 1.42776C5.3125 1.42776 1.50108 5.23847 1.49965 9.92204C1.49894 11.4192 1.88965 12.8806 2.63322 14.1685L1.42822 18.5706L5.93107 17.3892C7.17669 18.0678 8.57256 18.4234 9.99106 18.4234H9.99464C14.6761 18.4234 18.4875 14.6127 18.4889 9.92846C18.4924 8.81223 18.2745 7.7064 17.8478 6.67492C17.4211 5.64345 16.7942 4.70681 16.0032 3.91919Z"
            fill="#272727"
          />
        </svg>
        <div className="text-base font-semibold text-gray-900   ">
          {number3}
        </div>
      </div>
    </div>
  );
}