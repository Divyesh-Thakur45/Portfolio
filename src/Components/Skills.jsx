import React, { useContext } from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import "../Style/Home.css";
import { themeContext } from "./Context/Allcontext";

const Skills = () => {
  const { Theme } = useContext(themeContext);
  return (
    <div className={`Skill-page ${Theme ?  'bg-[#000] text-[#fff]' : 'bg-[#ECF0F3] text-[#000]'}`}>
      <div className="Skill-page-header">
        <h1>My Skills</h1>
        <span className={`line-1 ${Theme ?  'bg-[#000]' : 'bg-[#fff]' }`}></span>
        <span className={`line-2 ${Theme ?  'bg-[#000]' : 'bg-[#fff]' }`}></span>
      </div>

      <div className="skill-main grid grid-cols-3 gap-4 m-auto px-20">
        {/* Html  */}
        <div className="skill-box">
          <span></span>
          <span></span>
          <span></span>
          <div className="sub-skill-box flex flex-col justify-center items-center h-full">
            <FaHtml5 className="text-[55px] mb-2 text-[#E65100]" />
            <h1 className="Icone-text text-center text-antiquewhite text-2xl">
              HTML
            </h1>
          </div>
        </div>

        {/* css  */}
        <div className="skill-box2">
          <span></span>
          <span></span>
          <span></span>
          <div className="sub-skill-box flex flex-col justify-center items-center h-full">
            <IoLogoCss3 className="text-[55px] mb-2 text-[#0277BD]" />
            <h1 className="Icone-text text-center text-antiquewhite text-2xl">
              CSS
            </h1>
          </div>
        </div>

        {/* Javascript  */}
        <div className="skill-box">
          <span></span>
          <span></span>
          <span></span>
          <div className="sub-skill-box flex flex-col justify-center items-center h-full">
            <SiJavascript className="text-[55px] mb-2 text-[#FFD600]" />
            <h1 className="Icone-text text-center text-antiquewhite text-2xl">
              JAVASCRIPT
            </h1>
          </div>
        </div>

        {/* BOOTSTRAP  */}
        <div className="skill-box2">
          <span></span>
          <span></span>
          <span></span>
          <div className="sub-skill-box flex flex-col justify-center items-center h-full">
            <FaBootstrap className="text-[55px] mb-2 text-[#3BB1DC]" />
            <h1 className="Icone-text text-center text-antiquewhite text-2xl">
              BOOTSTRAP
            </h1>
          </div>
        </div>

        {/* REACT  */}
        <div className="skill-box">
          <span></span>
          <span></span>
          <span></span>
          <div className="sub-skill-box flex flex-col justify-center items-center h-full">
            <IoLogoReact className="text-[55px] mb-2 text-[#5DDAF6]" />
            <h1 className="Icone-text text-center text-antiquewhite text-2xl">
              REACT
            </h1>
          </div>
        </div>

        {/* REDUX  */}
        <div className="skill-box2">
          <span></span>
          <span></span>
          <span></span>
          <div className="sub-skill-box flex flex-col justify-center items-center h-full">
            <TbBrandRedux className="text-[55px] mb-2 text-[#7749BD]" />
            <h1 className="Icone-text text-center text-antiquewhite text-2xl">
              REDUX
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
