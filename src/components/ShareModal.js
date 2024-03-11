import Modal from 'react-modal'
// import {useState} from 'react';
import {ReactComponent as FacebookSVG} from './svg/facebook.svg'
import {ReactComponent as WhatsAppSVG} from './svg/whatsapp.svg'
import {ReactComponent as EmailSVG} from './svg/email.svg'
import {ReactComponent as CloseSVG} from './svg/close.svg'
import {ReactComponent as CopySVG} from './svg/copy.svg'
import {Typography} from '@material-tailwind/react'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        borderRadius: '20px',
        transform: 'translate(-50%, -50%)'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000
    }
};

export const ShareModal = ({open, setOpen}) => {
    return (
        <Modal
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            style={customStyles}
            contentLabel="all reviews">
            <div className='w-[400px] p-5'>
                <div className="flex justify-between w-full">
                    <div
                        className=" "
                        itemScope=""
                        itemType="https://schema.org/AutomotiveBusiness"
                        bis_skin_checked="1">
                        <Typography variant="h4" color="blue-gray" className="">
                            Share To
                        </Typography>
                    </div>
                    <div className="relative">
                        <div
                            onClick={() => setOpen(false)}
                            className="w-8 h-8 p-2 rounded-full border border-black justify-center items-center gap-2 inline-flex  absolute top-0 right-0">
                            <div className="w-4 h-4"><CloseSVG/></div>
                        </div>
                    </div>
                </div>

                <div className='flex w-full gap-2 pt-5'>
                    <a href="/#" className='w-1/3 p-2 cursor-pointer gap-1 bg-gray-100 rounded-xl flex flex-col justify-center items-center'>
                        <FacebookSVG/>
                        <Typography variant='lead'>Facebook</Typography>
                    </a>
                    <a href="/#" className='w-1/3 p-2 cursor-pointer gap-1 bg-gray-100 rounded-xl flex flex-col justify-center items-center'>
                        <WhatsAppSVG/>
                        <Typography variant='lead'>WhatsApp</Typography>
                    </a>
                    <a href="/#" className='w-1/3 p-2 cursor-pointer gap-1 bg-gray-100 rounded-xl flex flex-col justify-center items-center'>
                        <EmailSVG/>
                        <Typography variant='lead'>Email</Typography>
                    </a>
                </div>

                <div className='bg-gray-100 p-3 rounded-full relative mt-2'>
                    <input type="text" placeholder='TMCMOTORS.CO.UK/USED-CAR-DETAIL/USED-SKODA-OCATVIA-2.209TASBX9' className=' w-11/12 text-gray-700 font-normal mx-2 lowercase  rounded-full bg-gray-100 truncate pr-2'/>
                    <div className='  absolute right-2 top-1/2 -translate-y-1/2'>
                        <CopySVG/>
                    </div>
                </div>
            </div>
        </Modal>
    )
}