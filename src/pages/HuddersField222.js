import MainLayout from "../layouts/MainLayout";
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { RefineSearch } from "../components/gallery/RefineSearch";
import { VehicleCard } from "../components/gallery/VehicleCard";
import { Typography } from "@material-tailwind/react";
import HuddersFieldcom from "../components/HuddersfieldCom";

const data1 = [
  "Forsd",
  "Mitsubishi",
  "Nissan",
  "Volkswagen",
  "Fiat",
  "Isuzu",
  "Toyota",
];

const data = [
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be801" +
      "6.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-0bdcd631c3d8411980c24883cebbeff" +
      "5.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be801" +
      "6.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-f9b6390c0a3c436e8680c7e0d5a32ac" +
      "c.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-ff45d1af42b140a4bc21f28909db8d0" +
      "2.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be801" +
      "6.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-407e40791f3445c790f9e28e8fd3271" +
      "c.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-650ecaea802047b09d6bb077c6a7746" +
      "f.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-f31e53de67fe45ca9fe27f85d144720" +
      "9.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-8fa785b8542d4b9ab3940a3042c653e" +
      "f.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be801" +
      "6.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be801" +
      "6.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be801" +
      "6.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-8fa785b8542d4b9ab3940a3042c653e" +
      "f.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be801" +
      "6.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be801" +
      "6.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-82a04bdadeea431dbe169bda21be801" +
      "6.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
  <VehicleCard
    name={"Audi Q5"}
    price={17500}
    desc={"2.0TDI line Plus Tronic"}
    distance={74072}
    fuel={"Petrol"}
    method={"manual"}
    image={
      "https://bluesky.cdn.imgeng.in/cogstock-images/at-ef48f9fe005943fa893177b0db14094" +
      "1.jpg?imgeng=/w_640/"
    }
    url={
      "https://www.tmcmotors.co.uk/used-car-details/used-audi-q5-20-tdi-s-line-plus-s-t" +
      "ronic-q-suv-blue-automatic-diesel/id-202311063689522/"
    }
    url1={
      "https://www.tmcmotors.co.uk/used-car-details/used-suzuki-jimny-13-vvt-sz4-auto-4" +
      "wd-euro-6-3d-suv-white-automatic-petrol/id-202311063686739/"
    }
  />,
];
const amount = 6;

export default function HuddersField() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };
  return (
    <MainLayout>
      <div className="flex py-10 px-5 flex-col md:flex-row justify-center w-full bg-[#f6f6f6]">
        <div className="flex flex-col md:flex-row md:justify-between max-w-[1440px] ">
          <div className="w-4/5 mx-auto min-w-[380px] px-[10px] lg:w-1/4">
            <RefineSearch />
          </div>

          <div className="w-full lg:w-[70%] px-[10px] flex-col rounded-2xl bg-white">
            <HuddersFieldcom/>
            <div className="w-full px-11">
              <div className="flex flex-wrap items-center w-full justify-evenly">
                {data.map((item, index) => {
                  if (
                    index < amount * active &&
                    index >= amount * active - amount
                  ) {
                    return (
                      <div className="w-full lg:w-1/2 2xl:w-1/3">{item}</div>
                    );
                  }
                  return null;
                })}
              </div>
              <div className="flex items-center gap-4 justify-center mt-[40px]">
                <Button
                  variant="text"
                  className="flex items-center gap-2"
                  onClick={prev}
                  disabled={active === 1}
                >
                  <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                  Previous
                </Button>
                <div className="flex items-center gap-2">
                  <IconButton {...getItemProps(1)}>1</IconButton>
                  <IconButton {...getItemProps(2)}>2</IconButton>
                  <IconButton {...getItemProps(3)}>3</IconButton>
                  <IconButton {...getItemProps(4)}>4</IconButton>
                  <IconButton {...getItemProps(5)}>5</IconButton>
                </div>
                <Button
                  variant="text"
                  className="flex items-center gap-2"
                  onClick={next}
                  disabled={active === 5}
                >
                  Next
                  <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div
              className=" px-11 mt-[50px] pt-[80px] my-5 bg-white"
              bis_skin_checked="1"
            >
              <Typography variant="h3" className="pb-[20px]">
                Representative Example
              </Typography>
              <table className="table w-full">
                <tbody className="w-full">
                  <tr>
                    <td>Product</td>
                    <td>APR</td>
                    <td>Total Amount Payable</td>
                    <td>Agreement Term</td>
                    <td>Monthly Payments</td>
                    <td>Fixed Interest Rate</td>
                  </tr>
                  <tr className="border-white">
                    <td>Hire Purchase</td>
                    <td>10.90%</td>
                    <td>£17,126.72</td>
                    <td>46</td>
                    <td>£296.39</td>
                    <td>10.90%</td>
                  </tr>
                </tbody>
              </table>
              <p className="pt-[30px] pb-[80px]">
                <strong>Disclosure</strong>
                We work with a number of carefully selected credit providers who
                may be able to offer you finance for your purchase. We are only
                able to offer finance products from these providers.
              </p>
            </div>
            <div
              className=" px-11 mt-[50px] pt-[80px] my-5 bg-white"
              bis_skin_checked="1"
            >
              <Typography variant="h3" className="pb-[10px]">
                More Trucks
              </Typography>
              <div className="flex flex-wrap justify-start w-full items-center py-8 pb-[60px]">
                {data1.map((item, index) => (
                  <div className="w-full lg:w-1/2">
                    <Typography variant="h4" className="py-2 ">
                      {item}
                    </Typography>
                    <Typography variant="leading" className="py-1">
                      <div
                        id="COGDynamicRepeater_V1_Ford_RepeaterUpdatePanel"
                        bis_skin_checked="1"
                      >
                        <p className="mb-1 text-xs">
                          <a href="/used-truck-details/used-ford-ranger-22-tdci-limited-1-4wd-euro-6-pickup-sea-manual-diesel/id-202310273389391/">
                            Ranger 2.2 TDCi Limited 1 4WD Euro 6 (s/s) 4dr (Eco
                            Axle)
                          </a>
                        </p>

                        <p className="mb-1 text-xs">
                          <a href="/used-truck-details/used-ford-ranger-32-tdci-wildtrak-4wd-euro-5-pickup-grey-manual-diesel/id-202311023570019/">
                            Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr
                          </a>
                        </p>

                        <p className="mb-1 text-xs">
                          <a href="/used-truck-details/used-ford-ranger-22-tdci-limited-super-cab-pic-pickup-silver-manual-diesel/id-202311033613697/">
                            Ranger 2.2 TDCi Limited Super Cab Pickup 4WD Euro 5
                            4dr
                          </a>
                        </p>

                        <p className="mb-1 text-xs">
                          <a href="/used-truck-details/used-ford-ranger-32-tdci-wildtrak-4wd-euro-5-pickup-white-manual-diesel/id-202310203185875/">
                            Ranger 3.2 TDCi Wildtrak 4WD Euro 5 (s/s) 4dr
                          </a>
                        </p>

                        <p className="mb-1 text-xs">
                          <a href="/used-truck-details/used-ford-ranger-32-tdci-wildtrak-auto-4wd-eur-pickup-panther-automatic-diesel/id-202311033612313/">
                            Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr
                          </a>
                        </p>

                        <p className="mb-1 text-xs">
                          <a href="/used-truck-details/used-ford-ranger-22-tdci-limited-1-4wd-euro-5-pickup-white-manual-diesel/id-202311093787573/">
                            Ranger 2.2 TDCi Limited 1 4WD Euro 5 (s/s) 4dr (Eco
                            Axle)
                          </a>
                        </p>

                        <p className="mb-1 text-xs">
                          <a href="/used-truck-details/used-ford-ranger-32-tdci-wildtrak-auto-4wd-eur-pickup-panther-automatic-diesel/id-202311033612051/">
                            Ranger 3.2 TDCi Wildtrak Auto 4WD Euro 5 4dr
                          </a>
                        </p>

                        <p className="mb-1 text-xs">
                          <a href="/used-truck-details/used-ford-ranger-22-tdci-limited-durashift-4wd-pickup-grey-automatic-diesel/id-202308231120092/">
                            Ranger 2.2 TDCi Limited Durashift 4WD Euro 5 4dr
                          </a>
                        </p>
                      </div>
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
