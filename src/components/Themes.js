import React, { useEffect, useState } from "react";
import { themes } from "../Data";
import ThemeItem from "../components/ThemesItem";
import { FaCog } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import "./Themes.css";

const getStorageColor = () => {
  let color = "hsl(252,35%,51%)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }
  return color;
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  return (
    <div className={`${showSwitcher ? "show-switcher" : ""} style-switcher`}>
      <div
        className="style-switcher-toggler"
        onClick={() => setShowSwitcher(!showSwitcher)}
      >
        <FaCog />
      </div>
      <div className="theme-toggler">
        <BsMoon />
      </div>
      <h3 className="style-switcher-title">style switcher</h3>
      <div className="style-switcher-item">
        {themes.map((theme, index) => {
          return <ThemeItem key={index} {...theme} changeColor={changeColor} />;
        })}
      </div>
      <div
        className="style-switcher-close"
        onClick={() => setShowSwitcher(!showSwitcher)}
      >
        &#215;
      </div>
    </div>
  );
};

export default Themes;
