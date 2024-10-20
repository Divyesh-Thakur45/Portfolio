import React from "react";
import "../Style/Home.css";
import lenskart from "../Images/LenskartMokeUp.jpg";

const Projects = () => {
  return (
    <div className="project-page">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="timeline">
        <div className="checkpoint ">
          <div className="sub-checkpoint">
            <img
                src={lenskart}
              alt="Project 1"
              className=""
            />

            <h2 className="text-2xl font-semibold">Project Title 1</h2>
            <p className="mt-2 text-gray-600">Description of the project 1</p>
          </div>
        </div>

        <div className="checkpoint ">
          <div className="sub-checkpoint">
            <img
              src={lenskart}
              alt="Project 2"
              className="lenskartMockUp"
            />

            <h2 className="text-2xl font-semibold">Project Title 2</h2>
            <p className="mt-2 text-gray-600">Description of the project 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;