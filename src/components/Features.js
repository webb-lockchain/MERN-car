export default function Features(props) {
    const item=props.ele;
  return (
      <div className="p-6 lg:flex justify-center bg-white">
          <div className="w-full columns-2 ">
            {item.features.map((i)=>(
                <div className="min-w-[250px]  overflow-hidden  flex flex-row ">
                    <div className="bg-black mt-3 w-1 h-1 rounded-full "></div>
                    <div className="pl-2">{i.name}</div>
                </div>
            ))}
            
          </div>
      </div>
  )
}