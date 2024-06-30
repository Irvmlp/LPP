import React from 'react';

const ProjectPics = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Project" className="w-full h-full object-cover" />;
};

export default ProjectPics;
