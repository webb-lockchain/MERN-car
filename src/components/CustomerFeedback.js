import { FeedbackCard } from "./gallery/FeedbackCard";
import { ReviewCarousel } from "./gallery/ReviewCarousel";
import { ReviewCard } from "./gallery/ReviewCard";
import info1 from "./svg/info1.svg";
export default function CustomerFeedback() {
  return (
    <div className="relative xl:mx-[94.5px] mx-4 lg:py-[80px] px-3">
      <div className="mt-[50px] xl:mt-0 text-center  text-[40px] font-bold leading-none  ">
        Customer Feedback
      </div>

      <div className="absolute hidden xl:block  right-80 -top-20 -z-10">
        <img src={info1} alt="cars" className="w-fit h-fit"></img>
      </div>

      <div className="mt-8 flex justify-center w-full">
        <FeedbackCard />
      </div>
      <div className="mt-6 hidden xl:flex max-w-[1040px] justify-center items-center w-full h-fit mx-auto">
        <ReviewCarousel>
          <div className="flex justify-between">
            <ReviewCard rate={3} />
            <ReviewCard rate={2} />
            <ReviewCard rate={1} />
            <ReviewCard rate={5} />
          </div>
          <div className="flex justify-between">
            <ReviewCard rate={3} />
            <ReviewCard rate={3} />
            <ReviewCard rate={1} />
            <ReviewCard rate={1} />
          </div>
          <div className="flex justify-between">
            <ReviewCard rate={3} />
            <ReviewCard rate={2} />
            <ReviewCard rate={4} />
            <ReviewCard rate={5} />
          </div>
        </ReviewCarousel>
      </div>
      <div className="mt-8 block sm:hidden max-w-[1040px] justify-center items-center w-full h-fit mx-auto">
        <ReviewCard rate={3} />
        <ReviewCard rate={2} />
        <ReviewCard rate={1} />
        <ReviewCard rate={5} />
      </div>
    </div>
  );
}
