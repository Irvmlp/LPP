import React, { useState } from 'react';
import Carousel from '../components/Carasoul'; // Ensure this path is correct
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import QuoteForm from '../components/QuoteForm';
import RightArrow from '../assets/RightArrow.svg';
import LeftArrow from '../assets/LeftArrow.svg';

const Gallery = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTags, setSelectedTags] = useState(['All']);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openQuoteForm = () => {
    setIsQuoteFormOpen(true);
  };

  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
  };

  const handleTagClick = (tag) => {
    if (tag === 'All') {
      setSelectedTags(['All']);
    } else {
      setSelectedTags((prevTags) =>
        prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags.filter((t) => t !== 'All'), tag]
      );
    }
    setCurrentIndex(0);
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects = selectedTags.includes('All')
    ? projects
    : projects.filter((project) =>
        selectedTags.every((tag) => project.tags.includes(tag))
      );

  const displayedProjects = filteredProjects.slice(currentIndex, currentIndex + 4);
  if (displayedProjects.length < 4) {
    displayedProjects.push(...filteredProjects.slice(0, 4 - displayedProjects.length));
  }

  const tags = ['All', 'Commercial','Interior', 'Residential','Exterior', 'Cabinets'];

  return (
    <div className="relative h-screen">
     
      <div className="absolute inset-0 bg-white bg-opacity-90 z-10"></div>
      <div className="absolute font-sans py-16 transform md:-translate-x-1/2 z-20 md:bottom-24 flex flex-col left-1/2 justify-center w-5/6 md:w-4/6 items-center text-center md:top-40 top-24 -translate-x-1/2">
        <div className="flex flex-wrap justify-center mb-4">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`m-2 p-2 font-montserrat rounded ${selectedTags.includes(tag) ? 'bg-orange-400 text-white' : 'border-2 border-gray-200 bg-white text-gray-700'}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center w-full">
          <button onClick={handlePrevious} className="mr-2 rounded-full">
            <img src={LeftArrow} alt="Left" className="w-10 h-10" />
          </button>
          <div className="w-full overflow-x-auto font-montserrat">
            <div className="flex space-x-1 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 w-full">
              {displayedProjects.map((project, index) => (
                <div
                  className="flex-shrink-0 w-full sm:w-auto cursor-pointer"
                  key={project.title + index}
                  onClick={() => handleCardClick(project)}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    imageUrl={project.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="ml-2 rounded-full">
            <img src={RightArrow} alt="Right" className="w-10 h-10" />
          </button>
        </div>
      </div>
      {isPopupOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={closePopup}
        >
          <div
            className="relative bg-white p-4 rounded-lg w-4/5 md:w-1/4 h-4/5 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="max-w-full max-h-full mx-auto"
            />
            
            <div className="mt-2 text-center">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <p className="text-sm text-gray-700">{selectedProject.description}</p>
              <p className="text-sm text-gray-700">{selectedProject.location}</p>
            </div>
            <div className='w-full flex mt-4 justify-center'>
            <button
              className=" bg-black p-2 rounded-md text-white  hover:text-gray-800"
              onClick={closePopup}
            >
              Close
            </button>
              </div>
            
          </div>
        </div>
      )}
      {isQuoteFormOpen && (
        <div className="font-sans fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50 overflow-y-auto">
          <div className="bg-white p-8 rounded-lg relative w-full max-w-md mx-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 bg-opacity-90 hover:text-gray-800"
              onClick={closeQuoteForm}
            >
              &times;
            </button>
            <QuoteForm onClose={closeQuoteForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
