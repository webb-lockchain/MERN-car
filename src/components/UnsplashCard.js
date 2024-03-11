export default function UnsplashCard({ data }) {
    return (
        <div className="py-5 flex flex-row text-white">
            <div className="w-32 h-32  flex justify-center items-start rounded-[4px] mr-8">
                <img src={data.icon} alt="my" />
            </div>
            <div className="flex flex-col max-w-[260px]">
                <div className="text-gray-200 font-barlow text-xs font-normal leading-5  ">
                    {data.title}
                </div>
                <div style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }} className="mt-2  ">
                    {data.description}
                </div>
                <div className="mt-8 flex justify-start items-center font-barlow text-2 hover:cursor-pointer hover:text-gray-200 leading-5 tracking-tighter  ">Review &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   8 mins read</div>
            </div>
        </div>

    )
}