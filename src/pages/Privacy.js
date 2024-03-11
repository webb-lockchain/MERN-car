import MainLayout from "../layouts/MainLayout";
import hampshire from "../assets/images/hampshire.png";
import { ReactComponent as CheckSVG } from "../components/svg/check3.svg";
export default function Privacy() {
  return (
    <MainLayout>
      <div className="font-barlow  mt-6 md:mt-6 max-w-[1440px] px-[20px] xl:px-[100px] md:px-[50px] w-full mx-auto bg-white pt-5 flex flex-col">
        <div className="uppercase text-left   text-black font-barlow md:text-[48px] text-[32px] font-bold">
          privacy policy
        </div>
        <div className="mt-4 md:mt-6    text-[18px] md:text-[20px] font-barlow">
          Thatchers Motor Company Limited ("TMC Motors”) is committed to
          ensuring that when we collect and use information about people who
          visit our website or contact us in other ways (as described below), we
          do so in accordance with applicable data privacy laws. This Privacy
          Policy explains how we may use information that we obtain about you
          and how you can exercise your rights with respect to your personal
          information. Changes to the content or services found on our website
          may be changed without notice, and consequently our Privacy Policy may
          change at any time in the future. You should visit this page regularly
          to check for changes.
        </div>
      </div>
      <div className="max-w-[1440px] px-[20px] xl:px-[100px] md:px-[50px] w-full mx-auto  py-4 md:py-[30px] bg-white mb-6 md:mb-12">
        <div className="w-full">
          <div className="md:mt-8  flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-[45%]">
              <div className="text-gray-800 pb-6  text-[18px] md:text-[20px]  ">
                Under EU data protection laws, personal information may only be
                used where one of the following applies:
              </div>
              <div className="pb-6 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                    <div className="w-4 h-4 relative">
                      <CheckSVG />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                    You have consented to the use
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                    <div className="w-4 h-4 relative">
                      <CheckSVG />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                    We use it to achieve a legitimate interest, and our reasons
                    for using it outweigh any prejudice to your data protection
                    rights
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                    <div className="w-4 h-4 relative">
                      <CheckSVG />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                    It is necessary to enter into or perform a contract with you
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                    <div className="w-4 h-4 relative">
                      <CheckSVG />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                    We need to use it to comply with our legal obligations
                  </div>
                </div>

                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                    <div className="w-4 h-4 relative">
                      <CheckSVG />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                    The use is necessary for us to protect your vital interests
                    (or another person’s)
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="p-1 rounded-[100px] border border-red-600 justify-center items-center gap-2 flex">
                    <div className="w-4 h-4 relative">
                      <CheckSVG />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-semibold font-['Barlow'] leading-normal">
                    We need to use it to perform a task in the public interest
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[40%]">
              <div className=" flex-col justify-start items-center gap-8 inline-flex">
                <div className="w-fit  relative bg-gray-100 rounded-2xl">
                  <div className="w-fit">
                    <img
                      className="rounded-3xl w-fit"
                      src={hampshire}
                      alt="'adsf"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-8  text-[18px] md:text-[20px]  ">
            Generally, we will process data on one of the first two grounds
            listed above. If we are processing on the basis of consent, you will
            be presented with an opportunity to consent at the point where we
            collect your data. You may withdraw your consent at any time through
            the data preference centre (see further details below). If we are
            processing on the basis of our need to achieve a legitimate
            interest, the nature of that interest is set out below.
          </div>
          <div className="mt-8">
            <div className="text-gray-800 text-[24px] md:text-[30px] font-bold   font-barlow uppercase">
              WHAT INFORMATION DO WE COLLECT?
            </div>
            <div className="mt-4 md:mt-6 text-gray-800 text-xl text-[18px] md:text-[20px]   font-barlow">
              It’s If you visit our website When someone visits
              www.tmcmotors.co.uk we use a third party service, Google
              Analytics, to collect standard internet log information (your IP
              address, browser, and type of device) and details of visitor
              behaviour patterns (where you joined our site from, the path you
              take through our site and where you leave). We do this for the
              legitimate business purpose of monitoring the number of visitors
              to the various parts of the site and engagement levels, which in
              turn enables us to make improvements. This information is only
              processed in a way which does not identify anyone. We do not make,
              and do not allow Google to make, any attempt to find out the
              identities of those visiting our website. Thatchers Motor Company
              Limited also uses cookies on its website. You can read more about
              how we use cookies in our Cookie Policy. This Privacy Policy does
              not cover the links within this site linking to other websites. We
              encourage you to read the privacy statements on the other websites
              you visit. If you contact us via social media We use a third party
              provider, Hootsuite, to manage our social media interactions. If
              you send us a private or direct message via social media, this
              will be received by Hootsuite. Your social media user name and
              message (including any personal information you choose to include
              in it) and will be stored by Hootsuite for three months, and used
              by Thatchers Motor Company Limited for the legitimate business
              purposes of monitoring our reputation levels and social media
              engagement (and taking steps to improve this) and responding to
              any queries raised in the message. It will not be shared with any
              other organisations. If you call our contact numbers
            </div>
          </div>
        </div>
       
      </div>

    </MainLayout>
  );
}
