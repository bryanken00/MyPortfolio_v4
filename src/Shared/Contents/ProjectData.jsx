import imgPath from "../resources/thumbnail.jpg";
import KBNThesis from "../resources/Pictures/KBNThesis.png";
import KNBSystem from "../resources/Pictures/Login.png";
import ChatApp from "../resources/Pictures/ChatApp.png";

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
      imgPath: KNBSystem,
      path: path + "2",
      gitLink: "https://github.com/bryanken00/KBNThesisDev",
    },

    {
      key: 3,
      Name: "Chat App",
      Description:
        "Cras placerat pretium erat eget placerat. Ut non nisi quis turpis tincidunt fermentum. Sed pellentesque odio vitae hendrerit scelerisque. Integer vulputate semper odio rhoncus accumsan. Nunc semper turpis tortor, vel porta ex molestie eu. Fusce vel lorem ut est tempus congue. Suspendisse eget vehicula dolor, cursus viverra risus. Vivamus consequat accumsan faucibus. Suspendisse id nisl sed dolor imperdiet viverra semper eget elit. Vestibulum volutpat eget dui vitae laoreet.",
      imgPath: ChatApp,
      path: path + "3",
      gitLink: "https://github.com/bryanken00/ChatApp",
    },
  ];
  return { MyProject };
};

export default ProjectData;
