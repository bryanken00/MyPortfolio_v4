import React from 'react';
import ProjectData from '../../Shared/Contents/ProjectData';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';

const Project = () => {

  const { id } = useParams()
  const { MyProject } = ProjectData()
  const project = MyProject.find(project => project.key === parseInt(id))

  if (!project)
    return <NotFound />

  return (
      <div className={`bg-custom-bg min-h-screen px-10 py-20`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" style={{ paddingTop: '2rem' }}>
          <h2 className={`text-2xl font-bold mb-4 text-custom-fontColor`}>{project.Name}</h2>
          <div className="project-description mb-6">
            <p className={`text-base text-white leading-relaxed text-justify text-custom-fontColor`}>
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
              href={project.gitLink}
              className={`text-white text-base font-semibold underline hover:text-blue-600 text-custom-fontColor`}
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