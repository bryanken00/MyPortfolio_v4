import React from 'react';
import ProjectData from '../../Shared/Contents/ProjectData';
import ColorPalette from '../../Shared/Contents/ColorPalette';

const ProjectPage = () => {

  const { MyProject } = ProjectData()
  const { fontColor, buttonBG, bg, buttonHover} = ColorPalette()

  const truncateDescription = (description, maxLength) => {
      if (description.length <= maxLength) return description
      return description.slice(0, maxLength) + '...'
  }

  return (
    <div>
        <section className={`py-10 bg-[${bg}] sm:py-16 lg:py-24`}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" style={{ paddingTop: '4rem' }}>
                <h1 className={`text-3xl font-bold mb-4 text-${fontColor}`}>My Projects</h1>

                <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {MyProject.map((data) => (
                        <div className="overflow-hidden bg-white rounded-md shadow-lg" key={data.id}>
                            <div className="px-5 py-6">
                                <div className="flex items-center">
                                    <img className="flex-shrink-0 object-cover w-100 h-100" src="src/Shared/resources/thumbnail.jpg" alt="" />
                                </div>
                                <blockquote className="mt-5">
                                    <p className={`text-base text-${fontColor}`} style={{ maxHeight: '3em', overflow: 'hidden', textAlign: 'justify' }}>
                                        {truncateDescription(data.Description, 100)}
                                    </p>
                                    <br />
                                    <a href={data.path} className={`bg-[${buttonBG}] hover:bg-[${buttonHover}] text-white font-bold py-2 px-4 rounded font-mono`}>View Projects</a>
                                    <br />
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
}

export default ProjectPage;
