"use client";

import { use } from "react";
import "swiper/css";
import "swiper/css/navigation";
import projectsData from "@/data/projectDetails";
import ProjectSlider from "@/components/projects/slider/ProjectSlider";

function page({ params }) {
  const { id } = use(params);
  const data = projectsData[id];
  console.log(data);
  return (
    <div className="min-h-screen xl:px-35 md:px-10 px-4 ">
      <ProjectSlider data={data} />
    </div>
  );
}

export default page;
