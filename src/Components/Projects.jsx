import React from "react";
import "../Style/Project.css";
import lenskart from "../Images/LenskartMokeUp.jpg";

const Projects = () => {
  return (
    <div className="project-page">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      <div className="Box">
        <img src={lenskart} alt="Project 1" className="z-10 relative" />

        <h2 className="text-2xl font-semibold z-10 relative">
          Project Title 1
        </h2>
        <p className="mt-2 text-gray-600 z-10 relative">
          Description of the project 1
        </p>
      </div>
    </div>
  );
};

export default Projects;
