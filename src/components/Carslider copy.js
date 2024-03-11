import { Carousel } from "react-responsive-carousel";
// import rocket from "../assets/images/slider1.png";
import { IconButton } from "@material-tailwind/react";
// import rover from "../assets/images/slider1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
export default function Carslider(data) {
  const [cur, setCur] = useState(1);
  return (
    <div className="w-full relative">
      <IconButton
        variant="text"
        // color="black"
        size="sm"
        onClick={() => {
          if (cur === 1) setCur(data.images.length-1);
          else setCur((cur - 1) % data.images.length);
        }}
        className="!absolute bottom-[7px] z-50 left-0  border border-gray-800 -translate-y-2/4 bg-white hover:bg-gray-300 rounded-full bg-opacity-70 active:bg-gray-900 "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 15.8332L6.66667 9.99984L12.5 4.1665"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconButton>
      <IconButton
        variant="text"
        // color="black"
        size="sm"
        onClick={() => {
          if (cur === data.images.length) setCur(1);
          else setCur((cur + 1) % data.images.length);
        }}
        className="!absolute rotate-180 bottom-[7px] z-50 right-0  border border-gray-800 -translate-y-2/4 bg-white hover:bg-gray-300 rounded-full bg-opacity-70 active:bg-gray-900 "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 15.8332L6.66667 9.99984L12.5 4.1665"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconButton>

      <Carousel
        // autoPlay
        showThumbs={true}
        dynamicHeight={false}
        selectedItem={cur}
        showIndicators={false}
        emulateTouch={true}
        showStatus={false}
        showArrows={false}
        onClickThumb={(i) => setCur(i)}
        renderThumbs={(items) => {
          return data.images.map((item, index) => (
            <div key={index} className="thumbnail-item border-none ">
              <img src={item} alt={`Thumbnail ${index}`} className={`rounded-lg ${cur === index ? "opacity-50" : ""}`}/>
            </div>
          ))
        }}
        renderItem={(Item) => {
          window.t = Item;
          return (
            // <div className="rounded-2xl overflow-hidden object-cover opacity-1/2 ">
            <div className="rounded-2xl overflow-hidden object-cover opacity-1/2">
              {/* {Item} */}
              <img src={data.images[cur]} alt="cirr" className="object-fill w-full h-[480px]"/>
            </div>
          );
        }}
      >
        {
        data.images.map((a)=>(
          <div>
            <img
              src={a}
              alt=""
              className="rounded-lg"
            />
          </div>
        ))
      }
        {/* <div>
          <img
            src="https://m-qa.atcdn.co.uk/a/media/{resize}/ad87652e6c094f80a194d9c8bd5e5134.jpg"
            alt=""
            className="rounded-lg "
          />
        </div> */}
        {/* <div>
          <img
            src="https://m-qa.atcdn.co.uk/a/media/{resize}/bbc5aadb4c014d11b82238b2989163ec.jpg"
            alt=""
            className="rounded-lg"
          />
        </div><div>
          <img
            src="https://m-qa.atcdn.co.uk/a/media/{resize}/bbc5aadb4c014d11b82238b2989163ec.jpg"
            alt=""
            className="rounded-lg"
          />
        </div><div>
          <img
            src="https://m-qa.atcdn.co.uk/a/media/{resize}/bbc5aadb4c014d11b82238b2989163ec.jpg"
            alt=""
            className="rounded-lg"
          />
        </div><div>
          <img
            src="https://m-qa.atcdn.co.uk/a/media/{resize}/bbc5aadb4c014d11b82238b2989163ec.jpg"
            alt=""
            className="rounded-lg"
          />
        </div><div>
          <img
            src="https://m-qa.atcdn.co.uk/a/media/{resize}/bbc5aadb4c014d11b82238b2989163ec.jpg"
            alt=""
            className="rounded-lg"
          />
        </div><div>
          <img
            src="https://m-qa.atcdn.co.uk/a/media/{resize}/bbc5aadb4c014d11b82238b2989163ec.jpg"
            alt=""
            className="rounded-lg"
          />
        </div><div>
          <img
            src="https://m-qa.atcdn.co.uk/a/media/{resize}/bbc5aadb4c014d11b82238b2989163ec.jpg"
            alt=""
            className="rounded-lg"
          />
        </div> */}
      </Carousel>
    </div>
  );
}
