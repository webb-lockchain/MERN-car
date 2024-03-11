import MainLayout from "../layouts/MainLayout";
import {Typography} from "@material-tailwind/react";
import {useState} from "react";

import {Tabs, TabsHeader, TabsBody, Tab, TabPanel} from "@material-tailwind/react";
import {MotoringHubCard} from "../components/gallery/MotoringHubCard";
import {Select, Option} from "@material-tailwind/react";

const data = [
    {
        label: "All Reviews",
        value: "All Reviews",
        desc: [ < MotoringHubCard name = {
                "A New TMC Arrival - Audi S3 Quattro Black Edition"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
                        "height=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
                        "o.jpg?width=525&height=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />
        ]
    }, {
        label: "Ford Reviews",
        value: "Ford Reviews",
        desc: [ < MotoringHubCard name = {
                "A New TMC Arrival - Audi S3 Quattro Black Edition"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
                        "height=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
                        "o.jpg?width=525&height=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />
        ]
    }, {
        label: "Mistubishi Reviews",
        value: "Mistubishi Reviews",
        desc: [ < MotoringHubCard name = {
                "A New TMC Arrival - Audi S3 Quattro Black Edition"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
                        "height=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
                        "o.jpg?width=525&height=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />
        ]
    }, {
        label: "Honda Reviews",
        value: "Honda Reviews",
        desc: [ < MotoringHubCard name = {
                "A New TMC Arrival - Audi S3 Quattro Black Edition"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/x5bbyyjc/audi-s3-video.jpg?width=525&" +
                        "height=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "A Showroom Transformation is Underfoot"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/jlwhwfel/sunset-video.jpg?width=525&h" +
                        "eight=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />, < MotoringHubCard name = {
                "TMC sponsors Huddersfield Town ‘Miles for Marcus’ charity walk"
            }
            desc = {
                "Here's a stunning new arrival to our Oakhanger showroom here at The Motor Compan" +
                        "y. With 296bhp, only 1 owner, 23,577 miles and a Full Audi Service History, this" +
                        " 2019 Black Edition S3 truly is an outstanding example and looks fantastic in co" +
                        "ntrasting white."
            }
            type = {
                "View Video"
            }
            image = {
                "https://bluesky-cogcms.cdn.imgeng.in/media/futhw1jo/showroom-transformation-vide" +
                        "o.jpg?width=525&height=295&mode=crop&scale=both"
            }
            url = {
                "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
                        "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
            } />
        ]
    }
];
export default function LatestNews() {
    const [activeTab,
        setActiveTab] = useState("Used Cars")

    return (
        <MainLayout>
            <figure className="relative max-h-full w-full mb-[40px] ">
                <div className="bg-black ">
                    <img
                        className="h-[400px] md:h-full w-full rounded-xl object-cover object-center opacity-50"
                        src="https://cogcms.co.uk/media/i5xeirxz/dscf1355web.jpg"
                        alt="nature"/></div>
                <figcaption
                    className="absolute bottom-1/2 left-2/4 flex w-fit bg-none text-center translate-y-1/2 -translate-x-2/4 text-lg text-white justify-between rounded-xl py-2 px-6">
                    <div>
                        <Typography variant="h1" color="white">
                            Motoring Hub Videos
                        </Typography>
                        <div className="flex flex-col  md:flex-row md:gap-6 justify-center items-center mt-5">
                            <div
                                className="w-fit bg-red-500 border-[4px] border-red-500 text-white p-2 text-lg font-bold mb-[20px] rounded-lg">
                                Enquire Today</div>
                            <div
                                className="w-fit border-[4px] border-white text-white p-2 text-lg font-bold  rounded-lg mb-[20px]">
                                Request A Video</div>
                        </div>
                    </div>
                </figcaption>
            </figure>
            <div className="p-11 w-full  max-w-[1600px] mx-auto">
                <Tabs id="custom-animation" value="All Reviews">
                    <TabsHeader
                        className="w-full lg:w-fit mx-auto bg-white"
                        indicatorprops={{
                        className: "bg-gray-200 shadow-none !text-white"
                    }}>
                        <div className="hidden lg:flex">
                            {data.map(({label, value}) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    className="w-full text-left">
                                    <div
                                        className={`${activeTab !== value
                                        ? " text-black"
                                        : "bg-blue-500 text-white "} border-gray-500 w-[200px] rounded-md cursor-pointer text-base font-semibold leading-6 px-3 py-2 text-center no-underline transition-all duration-150 ease-in-out select-none align-middle hover:text-white`}>
                                        {label}
                                    </div>
                                </Tab>
                            ))}
                        </div>
                        <div className="flex lg:hidden w-4/5 md:w-1/2 mx-auto ">
                            <Select label="Browse By Category">
                                {data.map(({label, value}) => (
                                  <Option>
                                    <Tab
                                        key={value}
                                        value={value}
                                        onClick={() => setActiveTab(value)}
                                        className="w-full">
                                        {label}
                                    </Tab>
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </TabsHeader>
                    <TabsBody
                        animate={{
                        initial: {
                            y: 250
                        },
                        mount: {
                            y: 0
                        },
                        unmount: {
                            y: 250
                        }
                    }}>
                        {data.map(({value, desc}) => (
                            <TabPanel key={value} value={value}>
                                <div className="flex flex-wrap justify-center items-center">
                                {desc.map((item, index) => (
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-5">
                                  {item}
                                </div>))}
                              </div>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </MainLayout>
    )
}