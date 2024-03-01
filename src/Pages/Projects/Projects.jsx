import React from 'react';
import ProjectData from '../../Shared/Contents/ProjectData';

const ProjectPage = () => {

  const fontColor = "#1F1717"
  const buttonBG = "#CE5A67"
  const bg = "#FCF5ED"

  const { MyProject } = ProjectData()
  return (
    <div className={`bg-[${bg}] min-h-screen px-10 py-20`}>
      <div className="container mx-auto py-8">
        <h1 className={`text-3xl font-bold mb-4 text-[${fontColor}]`}>My Projects</h1>
        <div className="grid grid-cols-1 gap-6">
          {MyProject.map((data) => (
            <div key={data.key} className={`bg-white shadow-md p-4 rounded-lg`}>
              <img src={data.imgPath} alt="Project Image" className="w-full h-auto mb-4 rounded-lg" />
              <h2 className={`text-[${fontColor}] text-xl font-bold mb-2`}>{data.Name}</h2>
              <p className={`text-[${fontColor}] mb-4`}>{data.Description}</p>
              <a href={data.path} className={`bg-[${buttonBG}] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded font-mono`}>View Projects</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;