"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Scrollbar } from "swiper/modules";
import otherData from "@/data/otherData";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

function OtherSliders() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOnClickOpen() {
    setIsOpen(true);
  }
  function handleOnClickBack() {
    setIsOpen(false);
  }
  return (
    <>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-200 w-full gap-5 h-full md:bg-[#4b4b4b] py-10 px-4 min-w-0 rounded-xl"
        >
          <div className="flex py-5 lg:px-12 px-2 justify-between items-end ">
            <h3 className="text-center text-[white] text-4xl max-md:text-2xl">
              OTHERS
            </h3>
            <p
              className="text-sm hover:text-[#ea590b] cursor-pointer duration-500"
              onClick={handleOnClickOpen}
            >
              View List
            </p>
          </div>
          <div className="w-full h-full flex justify-center items-center gap-5 ">
            <div className="h-8 custom-prev-other text-5xl select-none cursor-pointer md:mx-2">
              {"<"}
            </div>
            <Swiper
              spaceBetween={-40}
              slidesPerView={2}
              effect="coverflow"
              centeredSlides={true}
              loop={true}
              speed={750}
              navigation={{
                prevEl: ".custom-prev-other",
                nextEl: ".custom-next-other",
              }}
              pagination={{ clickable: true }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 60,
                modifier: 13,
                slideShadows: false,
              }}
              className="h-full flex-1 duration-700 "
              modules={[EffectCoverflow, Navigation, Scrollbar]}
            >
              {otherData.map((data, idx) => {
                return (
                  <SwiperSlide
                    className="bg-[transparent]  py-6 group"
                    key={idx}
                  >
                    <div className="flex justify-center w-full ">
                      <Image
                        src={data.path}
                        width={300}
                        height={100}
                        alt={data.title}
                      />
                    </div>
                    <h3
                      className={`text-center text-2xl mt-8 font-semibold text-[#e5d12f] max-lg:text-lg text-nowrap py-2 opacity-0 transition-opacity group-[.swiper-slide-active]:opacity-100 duration-500`}
                    >
                      {data.title}
                    </h3>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className=" h-8 custom-next-other text-5xl select-none cursor-pointer md:mx-2">
              {">"}
            </div>
          </div>
        </motion.div>
      )}
      {isOpen && (
        <div className="flex flex-col max-w-200 w-full gap-5 h-full md:bg-[#4b4b4b] min-h-[400px] py-5 px-4 min-w-0 rounded-xl ">
          <div className="flex justify-between items-end mb-2 w-full px-3 h-9">
            <h3 className="lg:text-3xl text-lg text-white">OTHERS</h3>
            <p onClick={handleOnClickBack} className="cursor-pointer hover:">
              back
            </p>
          </div>
          <div className="flex flex-col items-center h-full justify-center">
            <div className="flex flex-wrap justify-center gap-7 items-center md:max-h-[300px] h-full max-w-[500px] mx-auto overflow-y-scroll scrollbar-hide  ">
              {otherData.map((data, index) => {
                return (
                  <SkillItem key={index} title={data.title} path={data.path} />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OtherSliders;
