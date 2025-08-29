import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ProjectCard({ projectData }) {
  const router = useRouter();
  function handleRedirect(url) {
    router.push(url);
  }

  return (
    <div className="rounded-xl overflow-hidden bg-[#4b4b4b] max-w-[500px] hover:scale-105 duration-500 cursor-pointer outline-0">
      <div className=" bg-amber-50 h-[314px]">
        <Image
          onClick={() => handleRedirect("/about")}
          src={projectData.src}
          width={500}
          height={100}
          alt="pic"
          className="h-full"
        />
      </div>
      <div className="pt-4 select-none">
        <div onClick={() => handleRedirect("/about")}>
          <div className="px-8 flex justify-between items-end">
            <h4 className=" text-2xl font-medium text-white ">
              {projectData.title}
            </h4>
            <p className="text-sm text-[#ea590b]">{projectData.category}</p>
          </div>
          <p className="px-8 my-4 text-base text-[#a6a6a6] line-clamp-6 h-[144px] ">
            {projectData.description}
          </p>
        </div>
        <div className="flex justify-between mt-4 px-8 py-3 border-t border-[#1d1d1d]">
          <div className="flex gap-8">
            <Link href={projectData.github} className="group z-100">
              <p className="group-hover:text-[#ea590b] duration-500">Github</p>
            </Link>
            <Link href={projectData.demo} className="group z-100">
              <p className="group-hover:text-[#ea590b] duration-500">Demo</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
