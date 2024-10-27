import React, { useContext } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import screen from "../Images/ss.jpg";
// import KeyBoard from "../Images/Board.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import { Canvas } from "@react-three/fiber";
import MacModel from "../mac.js";
import { OrbitControls } from "@react-three/drei";

import "../Style/Home.css";
import { themeContext } from "./Context/Allcontext.jsx";

const Home = () => {

  const { Theme } = useContext(themeContext);
  console.log(Theme)
  return (
    <div>
      <div className={`container -z-10 h-screen w-full relative overflow-hidden ${Theme ? 'bg-[#000000]' : 'bg-[#ECF0F3]'}`}>
        <div className="bubbles relative flex">
          <span style={{ "--i": 20 }} className="bubble"></span>
          <span style={{ "--i": 11 }} className="bubble"></span>
          <span style={{ "--i": 15 }} className="bubble"></span>
          <span style={{ "--i": 5 }} className="bubble"></span>
          <span style={{ "--i": 25 }} className="bubble"></span>
          <span style={{ "--i": 10 }} className="bubble"></span>
          <span style={{ "--i": 13 }} className="bubble"></span>
          <span style={{ "--i": 18 }} className="bubble"></span>
          <span style={{ "--i": 14 }} className="bubble"></span>
          <span style={{ "--i": 22 }} className="bubble"></span>
          <span style={{ "--i": 28 }} className="bubble"></span>
          <span style={{ "--i": 16 }} className="bubble"></span>
          <span style={{ "--i": 30 }} className="bubble"></span>
          <span style={{ "--i": 15 }} className="bubble"></span>
          <span style={{ "--i": 11 }} className="bubble"></span>
          <span style={{ "--i": 18 }} className="bubble"></span>
          <span style={{ "--i": 8 }} className="bubble"></span>
          <span style={{ "--i": 35 }} className="bubble"></span>
          <span style={{ "--i": 13 }} className="bubble"></span>
          <span style={{ "--i": 17 }} className="bubble"></span>
          <span style={{ "--i": 23 }} className="bubble"></span>
          <span style={{ "--i": 13 }} className="bubble"></span>
          <span style={{ "--i": 20 }} className="bubble"></span>
          <span style={{ "--i": 10 }} className="bubble"></span>
          <span style={{ "--i": 15 }} className="bubble"></span>
          <span style={{ "--i": 32 }} className="bubble"></span>
          <span style={{ "--i": 40 }} className="bubble"></span>
          <span style={{ "--i": 11 }} className="bubble"></span>
        </div>
      </div>
      <div className="main my-detail">
        <div className="">
          <h4 className={`Welcome ${Theme ? 'text-[#fff]' : 'text-[#000000]'}`}>Welcome to my porfolio</h4>
          <h1 className={`font-Montserratt font-semibold title`}>
            {/*  */}
            <span className={`${Theme ? 'text-[#fff]' : 'text-[#000000]'} `}>Hello , I'm{" "}</span>
            <span style={{ color: Theme ? "#00f7f7" : "#FF014F", fontWeight: "bold" }}>
              Divyesh Thakur
            </span>
          </h1>
          <h1 className="title">
            <span className={`${Theme ? 'text-[#fff]' : 'text-[#000000]'} `}>a</span>
            <span style={{ color: Theme ? "#00f7f7" : "#FF014F", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  " Frontend Developer",
                  " Backend Developer",
                  " FullStack Developer",
                ]}
                loop={5}
                cursor
                cursorStyle=".|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
              />
            </span>
          </h1>
          <p class="description">
            {/* #4D5053 */}
            <span className={`${Theme ? 'text-[#fff]' : 'text-[#4D5053]'} `}>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </span>
          </p>

          <div className="flex toolIcone">
            <div className="box-shadow flex items-center justify-center">
              <FaGithub className="text-2xl text-[#0A66C2]" />
            </div>
            <div className="box-shadow flex items-center justify-center">
              <FaLinkedin className="text-2xl text-[#0A66C2]" />
            </div>

            <div className="box-shadow flex items-center justify-center">
              <FaTwitterSquare className="text-2xl text-[#0A66C2]" />
            </div>
          </div>
        </div>
        <div className="Laptop-Model">
          {/* <h1>Laptop</h1> */}
          {/* <canvas ref={LaptopRef} className="MacBook"></canvas> */}
          <div className="intro-mac-container">
            <Canvas style={{ width: "500px", height: "500px" }}>
              <ambientLight />
              <OrbitControls enableZoom={false} />
              <pointLight position={[1, 10, 10]} />
              <MacModel />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
