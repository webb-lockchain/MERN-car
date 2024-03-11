export default function SearchBtn({name}) {
    return (
        <div
            className="w-full lg:mx-2 lg:w-fit cursor-pointer px-6 py-3 bg-[#131313] hover:bg-[#272727] rounded-[100px] justify-center items-center gap-2 inline-flex">
            <div
                className="text-white text-sm font-semibold  uppercase leading-snug tracking-tight">SEARCH</div>
            <div className="w-6 h-6 relative">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                </svg>

            </div>
        </div>
    )
}