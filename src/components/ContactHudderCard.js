export default function ContactCard(props) {
  const { title,  number } = props;
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
          {/* {location} */}
          The Goodwood Building. THe Yard, Oakhanger. Bordon, GU5 9JU
        </div>
      </div>
      <div className="flex flex-row mt-4 items-start">
        <div className="text-base font-semibold text-gray-900   ">
          {number}
        </div>
      </div>
    </div>
  );
}
