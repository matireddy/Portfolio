import React from "react";

function ThemesItem({ color, img, changeColor }) {
  return (
    <img
      src={img}
      alt=""
      className="theme-img"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
}

export default ThemesItem;
