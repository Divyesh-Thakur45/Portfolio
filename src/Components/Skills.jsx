import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import "../Style/Home.css";

const Skills = () => {
  return (
    <div className="Skill-page bg-black text-white">
      <div className="Skill-page-header">
        <h1>My Skills</h1>
        <span className="line-1"></span>
        <span className="line-2"></span>
      </div>

      <div className="skill-main grid grid-cols-3 gap-4 m-auto px-20">
        {/* Html  */}
        <div className="skill-box w-9/12 rounded-xl m-auto h-[20vh] border border-white transition duration-500 hover:bg-black hover:shadow-lg hover:shadow-white/80">
          <div className="sub-skill-box flex flex-col justify-center items-center h-full">
            <FaHtml5 className="text-[55px] mb-2 text-[#E65100]" />
            <h1 className="Icone-text text-center text-antiquewhite text-2xl">
              HTML
            </h1>
          </div>
        </div>

        {/* css  */}
        <div className="skill-box w-9/12 rounded-xl m-auto h-[20vh] border border-white transition duration-500 hover:bg-black hover:shadow-lg hover:shadow-white/80">
          <div className="sub-skill-box flex flex-col justify-center items-center h-full">
            <IoLogoCss3 className="text-[55px] mb-2 text-[#0277BD]" />
            <h1 className="Icone-text text-center text-antiquewhite text-2xl">
              CSS
            </h1>
          </div>
        </div>

        {/* Javascript  */}
        <div className="skill-box w-9/12 rounded-xl m-auto h-[20vh] border border-white transition duration-500 hover:bg-black hover:shadow-lg hover:shadow-white/80">
          <div className="sub-skill-box flex flex-col justify-center items-center h-full">
            <SiJavascript className="text-[55px] mb-2 text-[#FFD600]" />
            <h1 className="Icone-text text-center text-antiquewhite text-2xl">
              JAVASCRIPT
            </h1>
          </div>
        </div>

        {/* BOOTSTRAP  */}
        <div className="skill-box w-9/12 rounded-xl m-auto h-[20vh] border border-white transition duration-500 hover:bg-black hover:shadow-lg hover:shadow-white/80">
          <div className="sub-skill-box flex flex-col justify-center items-center h-full">
            <FaBootstrap className="text-[55px] mb-2 text-[#3BB1DC]" />
            <h1 className="Icone-text text-center text-antiquewhite text-2xl">
              BOOTSTRAP
            </h1>
          </div>
        </div>

        {/* REACT  */}
        <div className="skill-box w-9/12 rounded-xl m-auto h-[20vh] border border-white transition duration-500 hover:bg-black hover:shadow-lg hover:shadow-white/80">
          <div className="sub-skill-box flex flex-col justify-center items-center h-full">
            <IoLogoReact className="text-[55px] mb-2 text-[#5DDAF6]" />
            <h1 className="Icone-text text-center text-antiquewhite text-2xl">
              REACT
            </h1>
          </div>
        </div>

        {/* REDUX  */}
        <div className="skill-box w-9/12 rounded-xl m-auto h-[20vh] border border-white transition duration-500 hover:bg-black hover:shadow-lg hover:shadow-white/80">
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
