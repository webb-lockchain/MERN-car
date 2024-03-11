export const WhiteBtn = ({name, handleClick, upperCase, isFit}) => {
    const className = `${upperCase? "uppercase" : ""} text-zinc-950 text-sm font-semibold text-black`
    return (
        <div onClick={handleClick}
            className={`${isFit?"w-fit":"w-full"} px-4 text-center py-2 bg-white border border-black cursor-pointer hover:bg-[#d6d4d4] hover:cursor-pointer mx-auto rounded-full`}>
            <div className={className}>
            <div className="text-center  ">{name} </div>
            </div>
        </div>
    )
}
