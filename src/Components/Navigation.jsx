import React, { useContext, useState } from "react";
import logoName from "./Logo/LOGO_DT_2.png";
import "../Style/Navigation.css";
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { SiSkillshare } from "react-icons/si";
import { IoBag } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { themeContext } from "./Context/Allcontext";

const Navigation = () => {

  const [open, setopen] = useState(false);
  const colors = [
    "#1F2937",
    "#B0B0B0",
    "#FFD700",
    "#6699CC",
    "#008080",
    "#7FFF00",
  ];
  // const [Mode, setMode] = useState(false);
  const { ModeChange, Theme } = useContext(themeContext);
  return (
    <div>
      <nav className="navbar fixed w-full">
        <div className="logo">
          <img src={logoName} className="h-12" alt="" />
        </div>
        <div className="nav-links font-Montserratt">
          <div className="sub-nav-links">
            <span className="small-dots-one"></span>
            <span className="small-dots-two"></span>
            <FaHome className="nav-icone" />
            <span>Home <div className="Line"></div></span>
          </div>
          <div className="sub-nav-links">
            <span className="small-dots-one"></span>
            <span className="small-dots-two"></span>
            <IoMdPerson className="nav-icone" />
            <span>About  <div className="Line"></div></span>
          </div>
          <div className="sub-nav-links">
            <span className="small-dots-one"></span>
            <span className="small-dots-two"></span>
            <SiSkillshare className="nav-icone" />
            <span>Skills <div className="Line"></div></span>
          </div>
          <div className="sub-nav-links">
            <span className="small-dots-one"></span>
            <span className="small-dots-two"></span>
            <IoBag className="nav-icone" />
            <span>Projects <div className="Line"></div></span>
          </div>
          <div className="sub-nav-links">
            <span className="small-dots-one"></span>
            <span className="small-dots-two"></span>
            <IoIosContact className="nav-icone" />
            <span>Contact <div className="Line"></div></span>
          </div>
        </div>
        <div className="Changer">
          <div className="modeIcone">
            <button onClick={ModeChange}>{Theme ? "Dark" : "White"}</button>
            {/* <button onClick={() => ModeChange}>
              {Theme ? (
                <IoMdSunny className="" />
              ) : (
                <MdDarkMode className="" />
              )}
            </button> */}
          </div>
          <div className="colorIcone">
            <IoSettingsSharp className="animate-spin-slow" />
            <div>
              <div className=" w-52 grid grid-cols-3">
                {colors.map((color) => {
                  return (
                    <span
                      className="h-10 w-10 m-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ display: "none" }}
                      key={color}
                    ></span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
