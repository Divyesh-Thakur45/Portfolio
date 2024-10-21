import React from "react";
import "../Style/Project.css";
import lenskart from "../Images/LenskartMokeUp.jpg";

const Projects = () => {
  return (
    <div className="project-page">
       <div className="Skill-page-header">
        <h1>Projects</h1>
        <span className="line-1"></span>
        <span className="line-2"></span>
      </div>

      <div className="timeLine">
        <div className="main-box">
          <span class="goll1"></span>
          <span class="line1"></span>
          <div className="Box">
            <img src={lenskart} alt="Project 1" className="z-10 relative" />

            <h2 className="text-2xl font-semibold z-10 relative">
            Lenskart Clone
            </h2>
            <p className="mt-2 text-gray-600 z-10 relative">
              Description of the project 1
            </p>
          </div>
        </div>
        <div className="main-box2">
          <span class="goll2"></span>
          <span class="line2"></span>
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
      </div>
    </div>
  );
};

export default Projects;
