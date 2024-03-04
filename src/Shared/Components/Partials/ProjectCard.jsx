import ProjectData from '../../Contents/ProjectData';

const ProjectCardList = () => {
    const { MyProject } = ProjectData();

    const truncateDescription = (description, maxLength) => {
      if (description.length <= maxLength) return description;
      return description.slice(0, maxLength) + '...';
    };

    return (
        MyProject.map((data) => (
            <div key={data.key} className="overflow-hidden bg-white rounded-md shadow-lg">
                <div className="px-5 py-6">
                    <div className="flex items-center">
                        <img className="flex-shrink-0 object-cover w-100 h-100" src="src/Shared/resources/thumbnail.jpg" alt="" />
                    </div>
                    <blockquote className="mt-5">
                        <p className={`text-base text-custom-fontColor`} style={{ maxHeight: '3em', overflow: 'hidden', textAlign: 'justify' }}>
                            {truncateDescription(data.Description, 100)}
                        </p>
                        <br />
                        <a href={data.path} className={`bg-custom-buttonBG hover:bg-custom-buttonHover text-white font-bold py-2 px-4 rounded font-mono`}>View Projects</a>
                        <br />
                    </blockquote>
                </div>
            </div>
        ))
    );
};

export default ProjectCardList;