import React, { useContext } from "react";
import "../Style/Project.css";
import lenskart from "../Images/LenskartMokeUp.jpg";
import Amazone from "../Images/amazonMockUp.jpg";
import { themeContext } from "./Context/Allcontext";

const Projects = () => {
  const { Theme } = useContext(themeContext);
  return (
    <div className={`project-page ${Theme ? `bg-[#000000]` : `bg-[#ECF0F3]`}`}>
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
            <p className="z-10 relative flex justify-evenly mt-5">
              <a
                href="/"
                class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                data-text="Live"
              >
                <span class="align-middle">L</span>
                <span class="align-middle">i</span>
                <span class="align-middle">v</span>
                <span class="align-middle">e</span>
              </a>
              <a
                href="/"
                class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                data-text="Code"
              >
                <span class="align-middle">C</span>
                <span class="align-middle">o</span>
                <span class="align-middle">d</span>
                <span class="align-middle">e</span>
              </a>

            </p>

          </div>
        </div>
        <div className="main-box2">
          <span class="goll2"></span>
          <span class="line2"></span>
          <div className="Box">
            <img src={Amazone} alt="Project 1" className="z-10 relative" />

            <h2 className="text-2xl font-semibold z-10 relative">
              Amazone Clone
            </h2>
            <p className="z-10 relative flex justify-evenly mt-5">
              <a
                href="/"
                class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                data-text="Live"
              >
                <span class="align-middle">L</span>
                <span class="align-middle">i</span>
                <span class="align-middle">v</span>
                <span class="align-middle">e</span>
              </a>
              <a
                href="/"
                class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                data-text="Code"
              >
                <span class="align-middle">C</span>
                <span class="align-middle">o</span>
                <span class="align-middle">d</span>
                <span class="align-middle">e</span>
              </a>

            </p>
          </div>
        </div>
        <div className="main-box">
          <span class="goll1"></span>
          <span class="line1"></span>
          <div className="Box">
            <img src={lenskart} alt="Project 1" className="z-10 relative" />

            <h2 className="text-2xl font-semibold z-10 relative">
              BrookStone Clone
            </h2>
            <p className="z-10 relative flex justify-evenly mt-5">
              <a
                href="/"
                class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                data-text="Live"
              >
                <span class="align-middle">L</span>
                <span class="align-middle">i</span>
                <span class="align-middle">v</span>
                <span class="align-middle">e</span>
              </a>
              <a
                href="/"
                class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                data-text="Code"
              >
                <span class="align-middle">C</span>
                <span class="align-middle">o</span>
                <span class="align-middle">d</span>
                <span class="align-middle">e</span>
              </a>

            </p>
          </div>
        </div>
        <div className="main-box2">
          <span class="goll2"></span>
          <span class="line2"></span>
          <div className="Box">
            <img src={lenskart} alt="Project 1" className="z-10 relative" />

            <h2 className="text-2xl font-semibold z-10 relative">
              Calculator
            </h2>
            <p className="z-10 relative flex justify-evenly mt-5">
              <a
                href="/"
                class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                data-text="Live"
              >
                <span class="align-middle">L</span>
                <span class="align-middle">i</span>
                <span class="align-middle">v</span>
                <span class="align-middle">e</span>
              </a>
              <a
                href="/"
                class="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden"
                data-text="Code"
              >
                <span class="align-middle">C</span>
                <span class="align-middle">o</span>
                <span class="align-middle">d</span>
                <span class="align-middle">e</span>
              </a>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
