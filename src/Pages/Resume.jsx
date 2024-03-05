import React from "react";
import MyResume from "../Shared/resources/MyResume.pdf";

const Resume = () => {
  return (
    <div>
      <iframe src={MyResume} width="100%" height="1000px" />
    </div>
  );
};

export default Resume;
