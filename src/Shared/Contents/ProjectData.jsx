import imgPath from "../resources/thumbnail.jpg";
import KBNThesis from "../resources/Pictures/KBNThesis.png";

const ProjectData = () => {
  const path = "/project/";
  const MyProject = [
    {
      key: 1,
      Name: "E-Commerse Website",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet interdum urna, sed pharetra diam. Mauris ornare ac dui volutpat vehicula. In commodo placerat neque, eu sagittis quam volutpat ac. Phasellus sed lacus a ex semper mollis. Phasellus consequat hendrerit erat eu maximus. Proin finibus dapibus tempor. Donec enim tellus, auctor in mauris cursus, tempor efficitur lacus. Duis quam nunc, tempor aliquam urna at, tincidunt viverra est. Aliquam condimentum ex eget risus convallis, fringilla euismod ex venenatis. Phasellus non augue ex. Duis efficitur euismod ante interdum efficitur. Nullam imperdiet erat rhoncus mollis laoreet. Aenean varius augue ac nisi tincidunt, et pulvinar elit tempus. Sed venenatis scelerisque fermentum. Duis pretium, dui ut bibendum lacinia, mi augue dictum quam, et iaculis augue tellus non risus. Sed finibus ultrices nunc.",
      imgPath: KBNThesis,
      path: path + "1",
      gitLink: "https://github.com/bryanken00/WebDevelopment",
    },

    {
      key: 2,
      Name: "Inventory System",
      Description:
        "Cras placerat pretium erat eget placerat. Ut non nisi quis turpis tincidunt fermentum. Sed pellentesque odio vitae hendrerit scelerisque. Integer vulputate semper odio rhoncus accumsan. Nunc semper turpis tortor, vel porta ex molestie eu. Fusce vel lorem ut est tempus congue. Suspendisse eget vehicula dolor, cursus viverra risus. Vivamus consequat accumsan faucibus. Suspendisse id nisl sed dolor imperdiet viverra semper eget elit. Vestibulum volutpat eget dui vitae laoreet.",
      imgPath: imgPath,
      path: path + "2",
      gitLink: "https://github.com/bryanken00/KBNThesisDev",
    },

    {
      key: 3,
      Name: "My Project3",
      Description:
        "Vestibulum ut augue sed dolor tristique tincidunt non vel sem. Phasellus et pretium elit. Ut a vestibulum purus. Curabitur a faucibus metus. Nunc sagittis laoreet magna. Nam egestas libero egestas magna rutrum lobortis. Aenean non pretium orci. Donec blandit mauris ac tincidunt aliquet. Nullam eu orci ut felis sagittis finibus. Curabitur ac sagittis justo. Donec ultricies molestie risus a dignissim. Maecenas neque nisi, scelerisque nec diam eget, condimentum mollis nisi. Aenean imperdiet orci nec massa commodo porta. In vestibulum sit amet est eget volutpat. Donec a consectetur est. Curabitur pellentesque euismod iaculis.",
      imgPath: imgPath,
      path: path + "3",
      gitLink: "",
    },

    {
      key: 4,
      Name: "My Project4",
      Description:
        "Cras non facilisis leo. Proin tempus lacus non mattis condimentum. Nulla porttitor libero id sem consequat aliquam. Cras ipsum leo, pellentesque in ex quis, tincidunt facilisis nisl. Integer fermentum odio in ante gravida hendrerit sed in tellus. Nullam tortor tortor, efficitur non turpis non, facilisis tempor risus. Integer fermentum felis in dolor tincidunt elementum. Aliquam mollis quam vel rhoncus dictum. Vestibulum dictum cursus pretium. Etiam at elit nulla. Nam vulputate sagittis ex id ullamcorper.",
      imgPath: imgPath,
      path: path + "4",
      gitLink: "",
    },

    {
      key: 5,
      Name: "My Project5",
      Description:
        "Cras non facilisis leo. Proin tempus lacus non mattis condimentum. Nulla porttitor libero id sem consequat aliquam. Cras ipsum leo, pellentesque in ex quis, tincidunt facilisis nisl. Integer fermentum odio in ante gravida hendrerit sed in tellus. Nullam tortor tortor, efficitur non turpis non, facilisis tempor risus. Integer fermentum felis in dolor tincidunt elementum. Aliquam mollis quam vel rhoncus dictum. Vestibulum dictum cursus pretium. Etiam at elit nulla. Nam vulputate sagittis ex id ullamcorper.",
      imgPath: imgPath,
      path: path + "4",
      gitLink: "",
    },

    {
      key: 6,
      Name: "My Project6",
      Description:
        "Cras non facilisis leo. Proin tempus lacus non mattis condimentum. Nulla porttitor libero id sem consequat aliquam. Cras ipsum leo, pellentesque in ex quis, tincidunt facilisis nisl. Integer fermentum odio in ante gravida hendrerit sed in tellus. Nullam tortor tortor, efficitur non turpis non, facilisis tempor risus. Integer fermentum felis in dolor tincidunt elementum. Aliquam mollis quam vel rhoncus dictum. Vestibulum dictum cursus pretium. Etiam at elit nulla. Nam vulputate sagittis ex id ullamcorper.",
      imgPath: imgPath,
      path: path + "4",
      gitLink: "",
    },
  ];
  return { MyProject };
};

export default ProjectData;
