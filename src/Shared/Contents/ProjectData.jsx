import imgPath from '../resources/thumbnail.jpg'

const ProjectData = () => {
    const path = '/project/'
    const MyProject =[
        {
            key: 1,
            Name: "My Project",
            Description: "This is my first project",
            imgPath: imgPath,
            path: path + '1',
            gitLink: ''
        },
    
        {
            key: 2,
            Name: "My Project1",
            Description: "This is my first project",
            imgPath: imgPath,
            path: path + '2',
            gitLink: ''
        },
    
        {
            key: 3,
            Name: "My Project2",
            Description: "This is my first project",
            imgPath: imgPath,
            path: path + '3',
            gitLink: ''
        },
    
        {
            key: 4,
            Name: "My Project3",
            Description: "This is my first project",
            imgPath: imgPath,
            path: path + '4',
            gitLink: ''
        },
    ]
  return { MyProject }
}

export default ProjectData