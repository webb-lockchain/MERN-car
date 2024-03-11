export default function ContactInfoCard(props) {
    const {image, name,role,aboutme} = props;
    return (
       <div className='mx-auto text-center'>
        <div className='w-full bg-gray-900 h-[150px]'></div>
        <img src={image} className='mt-[-50px] mx-auto w-40 h-40 rounded-[90px]' alt="asd"/>
        <h4 className='mt-6 font-proxima-nova font-semibold leading-tight text-xl'>{name}</h4>
        <div className='mt-2'>{role}</div>
        <div className='mt-4 w-full h-[2px] border-t-2 border-blue-500'></div>
        <div className='mt-4'>{aboutme}</div>
       </div>
    )
}