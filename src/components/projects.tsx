"use client";
import React from "react";
import { projectsData } from "../lib/data";
import SectionHeading from "./Section-heading";
import Project from "./project";

import { useSectionInView } from "../lib/hooks";

function Projects() {
  const { ref, inView } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div ref={ref}>
        {projectsData.map((project) => {
          return (
            <React.Fragment key={project.title}>
              <Project {...project} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
