import HomeBtn from "@/components/HomeBtn";
import ProjectContainer from "@/components/projects/ProjectContainer";
import ProjectHeader from "@/components/projects/ProjectHeader";

function page() {
  return (
    <div className="min-h-screen xl:px-35 md:px-10 px-4">
      <HomeBtn />
      <ProjectHeader />
      <ProjectContainer />
    </div>
  );
}

export default page;
