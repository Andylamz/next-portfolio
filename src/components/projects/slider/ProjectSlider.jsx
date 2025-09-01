"use client";

import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
function ProjectSlider({ data }) {
  return (
    <div className="lg:mt-6">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        className="h-90 lg:h-[542px]"
        navigation
        loop
        autoplay
      >
        {data.images.map((image, index) => (
          <SwiperSlide key={index} className="">
            <Image
              src={image}
              width={1200}
              height={1000}
              alt="image"
              className="object-contain lg:object-cover mx-auto h-full rounded-xl select-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
