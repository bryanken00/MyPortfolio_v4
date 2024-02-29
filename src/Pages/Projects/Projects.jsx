import React from 'react';
import ProjectData from '../../Shared/Contents/ProjectData';

const ProjectPage = () => {
  const { MyProject } = ProjectData()
  return (
    <div className="bg-cyan-500 min-h-screen px-10 py-20">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-white">My Projects</h1>
        <div className="grid grid-cols-1 gap-6">
          {MyProject.map((data) => (
            <div key={data.key} className="bg-white shadow-md p-4 rounded-lg">
              <img src={data.imgPath} alt="Project Image" className="w-full h-auto mb-4 rounded-lg" />
              <h2 className="text-xl font-bold mb-2">{data.Name}</h2>
              <p className="text-gray-700 mb-4">{data.Description}</p>
              <a href={data.path} className="text-blue-500 hover:text-blue-700 text-xl">See more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;