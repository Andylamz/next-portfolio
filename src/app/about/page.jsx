import Introduction from "@/components/about/Introduction";
import Skills from "@/components/about/Skills";
import HomeBtn from "@/components/HomeBtn";

function page() {
  return (
    <div className="xl:px-35 md:px-10 px-4 mb-20 min-h-[120vh] w-full">
      <HomeBtn />
      <Introduction />
      <Skills />
    </div>
  );
}

export default page;
