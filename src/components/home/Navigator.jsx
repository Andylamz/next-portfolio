import NavigationCard from "./NavigationCard";

function Navigator() {
  return (
    <div className="flex justify-center lg:gap-15 gap-5 min-w-full md:flex-row flex-col ">
      <NavigationCard title={"About Me"} icon={"address"} link={"/about"} />
      <NavigationCard title={"Projects"} icon={"file"} link={"/projects"} />
      <NavigationCard title={"Contact Me"} icon={"inbox"} link={"/contact"} />
    </div>
  );
}

export default Navigator;
