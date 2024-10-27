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
          <h1>DT</h1>
        </div>
        <div className="nav-links font-Montserratt">
          <div className="sub-nav-links">

            <span>Home <div className="Line"></div></span>
          </div>
          <div className="sub-nav-links">

            <span>About  <div className="Line"></div></span>
          </div>
          <div className="sub-nav-links">

            <span>Skills <div className="Line"></div></span>
          </div>
          <div className="sub-nav-links">

            <span>Projects <div className="Line"></div></span>
          </div>
          <div className="sub-nav-links">

            <span>Contact <div className="Line"></div></span>
          </div>
        </div>
        <div className="Changer">
          <div className="modeIcone">
            <button onClick={ModeChange}>{Theme ? <MdDarkMode className="" /> : <IoMdSunny className="" />}</button>

          </div>
          <div className="colorIcone">
            <IoSettingsSharp className="animate-spin-slow" />
            {/* <div>
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
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
