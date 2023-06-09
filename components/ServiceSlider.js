import Image from "next/image";

import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import Service1Icon from "../public/img/services/service-icon1.svg";
import Service2Icon from "../public/img/services/service-icon2.svg";
import Service3Icon from "../public/img/services/service-icon3.svg";

const services = [
  {
    image: Service1Icon,
    name: "Pharmacy",
    description:
      "A pharmacy is a vital healthcare establishment that plays a crucial role in providing medication and pharmaceutical services to the community. It serves as a bridge between healthcare professionals and patients, ensuring safe and effective use of medications. Pharmacists, the healthcare professionals working in pharmacies, are highly trained experts who dispense prescription medications, counsel patients on proper medication use, and offer valuable healthcare advice",
    btnText: "Explore",
  },
  {
    image: Service2Icon,
    name: "Breed-specific Haircuts",
    description:
      "Breed-specific haircuts are specialized grooming services tailored to meet the unique needs and appearance of specific dog breeds. Professional groomers who offer breed-specific haircuts are skilled in understanding the distinct characteristics and coat requirements of different breeds",
    btnText: "Explore",
  },
  {
    image: Service3Icon,
    name: "Cloths",
    description:
      "Clothing plays a significant role in our daily lives, serving both functional and aesthetic purposes. It not only protects us from the elements but also allows for self-expression and personal style. The world of fashion and clothing is vast, encompassing a wide range of styles, designs, and trends. ",
    btnText: "Explore",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      className="serviceSlider min-h-[680px]"
    >
      {services.map((service, index) => {
        return (
          <>
            <SwiperSlide
              className="border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8"
              key={index}
            >
              <Image src={service.image} />
              <p className="text-[26px] font-medium mb-4">{service.name}</p>
              <p className="text-[20px] mb-8">{service.description}</p>
              <button className="btn btn-primary">{service.btnText}</button>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
