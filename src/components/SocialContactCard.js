
export default function SocialContactCard(props) {  
  return (
      <div className="flex flex-col items-left ">
        <div className="lg:mt-[5rem] xl:mt-[5rem] 2xl:mt-[5.5rem] hidden lg:block text-2xl font-bold">Connect with us</div>
        <div className="flex flex-row mt-4 items-start">                             
        <ul className="flex nav--social w-fit">
                <li className="flex items-center ">
                    <a
                        href="https://www.facebook.com/tmcmotorsales"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl px-2">
                        <div className="position-relative h-100 flex-c-col" bis_skin_checked="1">
                            <span className="icon icon-facebook-f fs-4"></span>
                        </div>
                    </a>
                </li>
                <li className="flex items-center">
                    <a
                        href="https://www.instagram.com/tmcmotorsales/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl px-2">
                        <div className="position-relative h-100 flex-c-col" bis_skin_checked="1">
                            <span className="icon icon-instagram fs-4"></span>
                        </div>
                    </a>
                </li>
                <li className="flex items-center">
                    <a
                        href="https://www.youtube.com/channel/UCRKpJyWUA02C2ChaJ7FTg1g"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl px-2">
                        <div className="position-relative h-100 flex-c-col" bis_skin_checked="1">
                            <span className="icon icon-youtube fs-4"></span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
      </div>
  )
}