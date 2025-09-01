"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projectDetails";

function ProjectContainer() {
  const [filter, setFilter] = useState("all");

  function handleFilter(category) {
    setFilter(category);
  }

  return (
    <>
      <section
        id="project-page-contents"
        className="border-b border-[#ededed] mt-15 "
      >
        <div className="flex md:justify-start justify-center">
          <div
            className={`px-8 py-2 hover:text-[#ea590b] duration-500 cursor-pointer md:text-base text-sm ${
              filter === "all" ? "text-[#ea590b]" : ""
            }`}
            onClick={() => handleFilter("all")}
          >
            ALL
          </div>
          <div
            className={`px-8 py-2 hover:text-[#ea590b] duration-500 cursor-pointer md:text-base text-sm ${
              filter === "Frontend" ? "text-[#ea590b]" : ""
            }`}
            onClick={() => handleFilter("Frontend")}
          >
            FRONTEND
          </div>
          <div
            className={`px-8 py-2 hover:text-[#ea590b] duration-500 cursor-pointer md:text-base text-sm text-nowrap ${
              filter === "Full Stack" ? "text-[#ea590b]" : ""
            }`}
            onClick={() => handleFilter("Full Stack")}
          >
            FULL-STACK
          </div>
        </div>
      </section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-self-center mt-12 gap-x-10 gap-y-8">
        {filter === "all"
          ? projectsData.map((project, index) => (
              <ProjectCard key={index} projectData={project} />
            ))
          : projectsData
              .filter((project) => project.category === filter)
              .map((project, index) => (
                <ProjectCard key={index} projectData={project} />
              ))}
      </div>
    </>
  );
}

export default ProjectContainer;
