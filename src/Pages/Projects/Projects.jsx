import React from "react";
import ProjectCard from "../../Shared/Components/Partials/ProjectCard";

const ProjectPage = () => {
  return (
    <div>
      <section className={`py-10 bg-custom-bg sm:py-16 lg:py-24`}>
        <div
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
          style={{ paddingTop: "4rem" }}
        >
          <h1 className={`text-3xl font-bold mb-4 text-custom-fontColor`}>
            My Projects
          </h1>
          <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <ProjectCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
