export const GrayBtn = ({name, handleClick, upperCase, isFit}) => {
    const className = `${upperCase? "uppercase" : ""} text-zinc-950 text-sm font-semibold text-white`
    return (
        <div onClick={handleClick}
            className={`${isFit?"w-fit":"w-full"} px-4 py-2 bg-[#131313] cursor-pointer hover:bg-[#272727] hover:cursor-pointer flex justify-center border border-black items-center self-center rounded-full`}>
            <div className={className}> 
            <div className="flex flex-row items-center  ">{name} </div>
            </div>
        </div>
    )
}

