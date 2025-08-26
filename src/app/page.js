import Logo from "@/components/home/Logo";
import Navigator from "@/components/home/Navigator";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full xl:px-35 md:px-10 px-4 mb-20">
      <div className="flex flex-col w-full gap-15 md:mt-0 mt-20">
        <Logo />
        <Navigator />
      </div>
    </div>
  );
}
