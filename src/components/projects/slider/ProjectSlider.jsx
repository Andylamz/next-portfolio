import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ProjectSlider({ data }) {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        className="h-90 lg:h-[542px]"
        navigation
        loop
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
