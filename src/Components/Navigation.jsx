import React, { useContext, useState } from "react";
import "../Style/Navigation.css";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { themeContext } from "./Context/Allcontext";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

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
  const [Mode, setMode] = useState(false);
  const { ModeChange, Theme } = useContext(themeContext);
  return (
    <div>
      <nav className="navbar fixed w-full">
        <div className={`logo ${open ? "block" : "hidden"} md:block`}>
          <h1>DT</h1>
        </div>
        <div className={`nav-links ${open ? "block" : "hidden"} md:block`} style={{display:"none"}}>
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

        <div className="hamburger" onClick={() => setopen(!open)}>
          {open ? <IoClose className="navIcon" /> : <AiOutlineMenu className="navIcon" />}
        </div>
        <div className="Changer">
          <div className="">
            <button className="modeIcone" onClick={ModeChange}>{Theme ? <MdDarkMode className="" /> : <IoMdSunny className="" />}</button>

          </div>
          <div className="">
            <IoSettingsSharp className="animate-spin-slow  colorIcone" />
            <div>
              <div className="w-52 grid grid-cols-3 hidden">
                {colors.map((color) => {
                  return (
                    <span
                      className="h-10 w-10 m-auto mb-4 rounded-full flex items-center justify-center "
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
