import { use } from "react";
import "swiper/css";
import "swiper/css/navigation";
import projectsData from "@/data/projectDetails";
import ProjectSlider from "@/components/projects/slider/ProjectSlider";
import ProjectTitle from "@/components/projects/ProjectTitle";
import ProjectContent from "@/components/projects/ProjectContent";
import BackButton from "@/components/BackButton";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const data = projectsData[id];
  return {
    title: `${data.title} | Andy YT Lam`,
  };
}

function page({ params }) {
  const { id } = use(params);
  const data = projectsData[id];
  // Server side
  // console.log(data);
  return (
    <div className="min-h-screen xl:px-35 md:px-10 px-4 ">
      <div className="lg:mt-20 mt-8">
        <BackButton />
      </div>
      <ProjectSlider data={data} />
      <ProjectTitle data={data} />
      <ProjectContent data={data} />
    </div>
  );
}

export default page;
