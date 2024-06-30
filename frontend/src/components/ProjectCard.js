import React from 'react';

const ProjectCard = ({ title, description, location, imageUrl }) => {
  return (
    <div className="border border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
      <div className="h-60 border-8 border-white">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover" 
          style={{ objectFit: 'cover', maxHeight: '15rem' }} 
        />
      </div>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
