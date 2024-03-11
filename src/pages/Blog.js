import MainLayout from "../layouts/MainLayout";
// import {Typography} from "@material-tailwind/react";
import { useState } from "react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { MotoringHubCard } from "../components/gallery/MotoringHubCard";
// import {Select, Option} from "@material-tailwind/react";
import HeroSection1 from "../components/gallery/HeroSection1";
import { Link } from "react-router-dom";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const data = [
  {
    label: "All",
    value: "All",
    desc: [
      <MotoringHubCard
        name={"A New TMC Arrival - Audi S3 Quattro Black Edition"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
          "height=295&mode=crop&scale=both"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
          "o.jpg?width=525&height=295&mode=crop&scale=both"
        }
        url={"/motoring-hub/article-detail"}
      />,
    ],
  },
  {
    label: "Ford",
    value: "Ford",
    desc: [
      <MotoringHubCard
        name={"A New TMC Arrival - Audi S3 Quattro Black Edition"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
          "height=295&mode=crop&scale=both"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
          "o.jpg?width=525&height=295&mode=crop&scale=both"
        }
        url={"/motoring-hub/article-detail"}
      />,
    ],
  },
  {
    label: "Mistubishi",
    value: "Mistubishi",
    desc: [
      <MotoringHubCard
        name={"A New TMC Arrival - Audi S3 Quattro Black Edition"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
          "height=295&mode=crop&scale=both"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
          "o.jpg?width=525&height=295&mode=crop&scale=both"
        }
        url={"/motoring-hub/article-detail"}
      />,
    ],
  },
  {
    label: "Honda",
    value: "Honda",
    desc: [
      <MotoringHubCard
        name={"A New TMC Arrival - Audi S3 Quattro Black Edition"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
          "height=295&mode=crop&scale=both"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"A Showroom Transformation is Underfoot"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be8016.jpg?imgeng=/w_640/"
        }
        url={"/motoring-hub/article-detail"}
      />,
      <MotoringHubCard
        name={"TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"}
        desc={
          "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
          "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
          " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
          "ntrasting white."
        }
        type={"View Article"}
        image={
          "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
          "o.jpg?width=525&height=295&mode=crop&scale=both"
        }
        url={"/motoring-hub/article-detail"}
      />,
    ],
  },
];
export default function Blog() {
  const [activeTab, setActiveTab] = useState("All");
  // const [active, setActive] = useState(1);
const active=1;
  // const next = () => {
  //   if (active === 5) return;
  //   setActive(active + 1);
  // };

  // const prev = () => {
  //   if (active === 1) return;
  //   setActive(active - 1);
  // };
  return (
    <MainLayout>
      <HeroSection1 img={null} words={["motoring hub blog"]} mt={"mt-0"} />

      <div className="md:px-11 p-3 w-full  max-w-[1600px] mx-auto">
        <Tabs id="custom-animation" value="All">
          <TabsHeader
            className="w-full lg:w-full mx-auto px-4 lg:px-10 bg-white"
            indicatorProps={{
              className: "bg-gray-200 hidden shadow-none !text-white",
            }}
          >
            <div className="flex md:nb-0 mb-6 lg:flex-row flex-col w-full lg:justify-between justify-center items-center">
              <div className="overflow-x-scroll md:overflow-x-hidden flex flex-row w-full md:w-1/3">
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className="w-full text-left"
                  >
                    <div
                      className={`${
                        activeTab !== value
                          ? " text-black"
                          : "bg-gray-900 text-white "
                      } uppercase border-gray-800 border rounded-full text-center cursor-pointer text-base font-semibold px-3 py-2 no-underline transition-all duration-150 ease-in-out align-middle`}
                    >
                      {label}&nbsp;{label === "All" ? "blog" : ""}
                    </div>
                  </Tab>
                ))}
              </div>
              <div className="flex lg:mt-0 mt-3 lg:w-[200px] w-full items-center justify-center">
                <div className="w-full  float-right border-0">
                  <select className="w-full rounded-full border-2 outline-none border-gray-300 p-2">
                    <option value="option1">Newest</option>
                    <option value="option2">Fantastic</option>
                  </select>
                </div>
              </div>
            </div>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: {
                y: 250,
              },
              mount: {
                y: 0,
              },
              unmount: {
                y: 250,
              },
            }}
          >
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <div className="flex flex-wrap justify-center items-center">
                  {desc.slice(active).map((item, index) => (
                    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 lg:p-5 p-3">
                      {item}
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
      {/* <div className="flex items-center gap-4 justify-center mb-[40px]">
        <div
          className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
          onClick={prev}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
              active === 1 ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => setActive(1)}
          >
            1
          </div>
          <div
            className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
              active === 2 ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => setActive(2)}
          >
            2
          </div>
          <div
            className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
              active === 3 ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => setActive(3)}
          >
            3
          </div>
          <div
            className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
              active === 4 ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => setActive(4)}
          >
            4
          </div>
          <div
            className={`flex justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-900 hover:text-white" ${
              active === 5 ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => setActive(5)}
          >
            5
          </div>
        </div>
        <div
          className="flex  justify-center items-center border-2 border-gray-300 w-10 h-10 rounded-full hover:bg-gray-300"
          onClick={next}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </div>
      </div> */}
      <div className="max-w-[1240px] bg-gray-100 w-full mx-auto mb-[50px] px-8 py-[50px] bg-neutral-100 rounded-3xl flex-col justify-start items-center gap-8 hidden md:flex">
        <div className="self-stretch text-center scale-y-110 text-neutral-800 text-[32px] font-bold font-['Barlow Condensed'] uppercase leading-10">
          HAve something to share?
        </div>
        <div className="md:w-fit md:mx-auto mt-8">
          <div className="md:w-[454px] md:px-0 px-5 justify-start items-center gap-6 flex md:flex-row flex-col">
            <div className="grow shrink w-full basis-0 h-12 px-6 py-3 bg-gray-800 rounded-[100px] shadow border border-gray-900 justify-center items-center gap-1 flex">
              <div className="text-white text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
                <Link to="/contact-us">enquire today</Link>
              </div>
            </div>
            <div className="grow shrink w-full  basis-0 h-12 px-6 py-3 bg-white rounded-[100px] shadow border border-gray-800 justify-center items-center gap-1 flex">
              <div className="text-neutral-800 text-sm font-semibold font-['Barlow'] uppercase leading-snug tracking-tight">
                <Link to="/contact-us">require video</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
