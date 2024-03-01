import React from 'react';
import ProjectData from '../../Shared/Contents/ProjectData';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';

const Project = () => {

  const { id } = useParams()
  const { MyProject } = ProjectData()
  const project = MyProject.find(project => project.key === parseInt(id));

  if (!project)
    return <NotFound />

  const fontColor = "#1F1717"
  const buttonBG = "#CE5A67"
  const bg = "#FCF5ED"

  return (
      <div className={`bg-[${bg}] min-h-screen px-10 py-20`}>
        <h2 className={`text-2xl font-bold mb-4 text-[${fontColor}]`}>{project.Name}</h2>
        <div className="project-description mb-6">
          <p className={`text-base text-white leading-relaxed text-justify text-[${fontColor}]`}>
            {project.Description}
          </p>
        </div>
        <div className="project-image">
          <img
            src={project.imgPath}
            alt="Project Thumbnail"
            className="w-full rounded-lg"
          />
        </div>
        <div className="mt-4">
          <a
            href="https://github.com/yourusername/yourproject"
            className={`text-white text-base font-semibold underline hover:text-blue-600 text-[${fontColor}]`}
            target="_blank"
            rel="noopener noreferrer"
            
          >
            View on GitHub
          </a>
        </div>
      </div>
  );
};

export default Project;