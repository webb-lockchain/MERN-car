import { Carousel, IconButton } from "@material-tailwind/react";

export function CustomCarousel({ children }) {
  return (
    <Carousel
      className="rounded-xl "
      navigation={({setActiveIndex, activeIndex, length}) => (
        <div className="absolute bottom-8  left-[94px] z-10 flex  gap-2">
            {new Array(length)
                .fill("")
                .map((_, i) => (<span
                    key={i}
                    className={`block h-3 cursor-pointer translate-y-1/2 transition-all content-[''] ${activeIndex === i
                    ? "w-8 bg-black"
                    : "w-4 bg-white"}`}
                    onClick={() => setActiveIndex(i)}/>))}
                    </div>)}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="gray"
          size="sm"
          onClick={handlePrev}
          className="!absolute bottom-0 left-[24px] -translate-y-2/4 bg-white hover:bg-gray-300 rounded-full bg-opacity-70 active:bg-gray-900 "
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15.8332L6.66667 9.99984L12.5 4.1665" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          size="sm"
          onClick={handleNext}
          className="!absolute bottom-0 left-[210px] -translate-y-2/4 bg-white hover:bg-gray-300 rounded-full bg-opacity-70 active:bg-gray-900"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 4.16683L13.3333 10.0002L7.5 15.8335" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </IconButton>
      )}
    >
      {children}
    </Carousel>
  );
}