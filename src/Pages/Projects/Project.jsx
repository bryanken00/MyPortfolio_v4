import React from "react";
import ProjectData from "../../Shared/Contents/ProjectData";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";

const Project = () => {
  const { id } = useParams();
  const { MyProject } = ProjectData();
  const project = MyProject.find((project) => project.key === parseInt(id));

  if (!project) return <NotFound />;

  return (
    <div className="bg-custom-bg min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-custom-fontColor">
          {project.Name}
        </h2>
        <div className="mb-6">
          <p className="text-base text-justify text-custom-fontColor">
            {project.Description}
          </p>
        </div>
        <div className="mb-6">
          <img
            src={project.imgPath}
            alt="Project Thumbnail"
            className="w-full rounded-lg"
          />
        </div>
        <div className="mt-4">
          <a
            href={project.gitLink}
            className="text-base font-semibold text-custom-fontColor hover:text-custom-buttonHover"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
