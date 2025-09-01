import {
  faAngleRight,
  faBookOpen,
  faGear,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ProjectContent({ data }) {
  return (
    <div className="flex lg:flex-row flex-col text-lg mt-15">
      <div className="flex-2">
        {/* Description */}
        <div>
          <div className="flex items-center gap-4">
            <div className="max-w-6">
              <FontAwesomeIcon icon={faBookOpen} className="w-full" />
            </div>
            <h4 className="text-xl text-[#9a9bbf]">PROJECT OVERVIEW</h4>
          </div>
          <div className="px-8 text-[white] text-base mt-4 tracking-wide">
            {data.description}
          </div>
        </div>
        {/* Tech Stack */}
        <div className="mt-10">
          <div>
            <div className="flex items-center gap-4">
              <div className="max-w-6">
                <FontAwesomeIcon icon={faGear} className="w-full" />
              </div>
              {/* ! */}

              <h4 className="text-xl text-[#9a9bbf]">TECH STACK</h4>
            </div>
            <div className="px-8 text-[white] text-base mt-4 tracking-wide">
              {data.tags.map((tag, index) => {
                return (
                  <div
                    className="flex items-center gap-4 py-1.5 text-base"
                    key={index}
                  >
                    <div className="max-w-2">
                      <FontAwesomeIcon icon={faAngleRight} className="w-full" />
                    </div>
                    <p>{tag}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex-1 bg-[#4b4b4b] text-white rounded-xl py-5 max-lg:mt-8 max-h-[160px]">
        <div className="flex px-6 gap-4 text-[#9a9bbf]">
          <div className="max-w-6">
            <FontAwesomeIcon icon={faLink} className="w-full" />
          </div>
          <h4>Links</h4>
        </div>
        <div className="px-12 mt-4">
          {/* 1 */}
          <div className="flex items-center gap-4 py-1.5 text-base duration group hover:translate-x-3 duration-800 text-[white] hover:text-[#ea590b] max-w-22  ">
            <div className="max-w-2">
              <FontAwesomeIcon icon={faAngleRight} className="w-full" />
            </div>
            <Link href={data.github} target="_blank">
              Github
            </Link>
          </div>
          {/* 2 */}
          <div className="flex items-center gap-4 py-1.5 text-base duration group hover:translate-x-3 duration-800 text-[white] hover:text-[#ea590b] max-w-22 ">
            <div className="max-w-2">
              <FontAwesomeIcon icon={faAngleRight} className="w-full" />
            </div>
            <Link href={data.demo} target="_blank">
              Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
