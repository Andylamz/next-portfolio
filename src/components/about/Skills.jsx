import FrontendSlider from "@/components/about/slider/FrontendSlider";
import SkillsDescription from "./SkillsDescription";
import BackendSlider from "./slider/BackendSlider";
import DevopsSlider from "./slider/DevopsSlider";
import OtherSliders from "./slider/OtherSlider";

function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col gap-10 min-h-screen mt-35 items-center"
    >
      <SkillsDescription />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-15 max-lg:gap-5 w-full justify-items-center mt-4">
        <FrontendSlider />
        <BackendSlider />
        <DevopsSlider />
        <OtherSliders />
      </div>
    </section>
  );
}

export default Skills;
