import { Carousel } from "react-responsive-carousel";
import rocket from "../assets/images/slider1.png";
import { IconButton } from "@material-tailwind/react";
// import rover from "../assets/images/slider1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
export default function Carsliderchat() {
  const [cur, setCur] = useState(1);
  return (
    <div className="w-full relative">
      <IconButton
        variant="text"
        // color="black"
        size="sm"
        onClick={() => {
          if (cur === 1) setCur(7);
          else setCur((cur - 1) % 8);
        }}
        className="!absolute top-1/3 z-50 left-0  border border-gray-800 -translate-y-2/4 bg-white hover:bg-gray-300 rounded-full bg-opacity-70 active:bg-gray-900 "
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
          if (cur === 8) setCur(1);
          else setCur((cur + 1) % 8);
        }}
        className="!absolute rotate-180 top-1/3 z-50 right-0  border border-gray-800 -translate-y-2/4 bg-white hover:bg-gray-300 rounded-full bg-opacity-70 active:bg-gray-900 "
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
      <div className="bot">
        <Carousel
          // autoPlay
          showThumbs={true}
          dynamicHeight={false}
          selectedItem={cur}
          showIndicators={false}
          emulateTouch={true}
          showStatus={false}
          showArrows={false}
          renderThumbs={(items) => {
            return items.map((item, index) => (
              <div key={index} className="thumbnail-item border-none ">
                <img src={rocket} alt={`Thumbnail ${index}`} className={`rounded-lg ${cur === index ? "opacity-50" : ""}`} />
              </div>
            ));
          }}
          renderItem={(Item) => {
            window.t = Item;
            return (
              <div className="rounded-2xl overflow-hidden object-cover opacity-1/2">
                {Item}
              </div>
            );
          }}
        >
          <div>
            <img
              src={rocket}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div>
            <img
              src={rocket}
              alt=""
              className="rounded-lg"
            />
          </div><div>
            <img
              src={rocket}
              alt=""
              className="rounded-lg"
            />
          </div><div>
            <img
              src={rocket}
              alt=""
              className="rounded-lg"
            />
          </div><div>
            <img
              src={rocket}
              alt=""
              className="rounded-lg"
            />
          </div><div>
            <img
              src={rocket}
              alt=""
              className="rounded-lg"
            />
          </div><div>
            <img
              src={rocket}
              alt=""
              className="rounded-lg"
            />
          </div><div>
            <img
              src={rocket}
              alt=""
              className="rounded-lg"
            />
          </div>
        </Carousel>
      </div>

    </div>
  );
}
