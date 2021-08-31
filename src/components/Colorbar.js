import { useContext, useState, useMemo } from "react";
import React from "react";
import { ColorContext } from "../components/Letter";
// import * as S from './styles';

function Colorbar() {
  const { setColor } = useContext(ColorContext);

  const processColor1 = e => {
    setColor("#f2dba1");
  };

  const processColor2 = e => {
    setColor("#4b4362");
  };

  const processColor3 = e => {
    setColor("#6b8f99");
  };

  const processColor4 = e => {
    setColor("#b88dcd");
  };

  const processColor5 = e => {
    setColor("#db7667");
  };

  const processColor6 = e => {
    setColor("#bdbe82");
  };

  return (
    <>
      <div className="colorbar-box">
        <div
          className="colorbar-element"
          id="color1"
          onClick={processColor1}
        ></div>
        <div
          className="colorbar-element"
          id="color2"
          onClick={processColor2}
        ></div>
        <div
          className="colorbar-element"
          id="color3"
          onClick={processColor3}
        ></div>
        <div
          className="colorbar-element"
          id="color4"
          onClick={processColor4}
        ></div>
        <div
          className="colorbar-element"
          id="color5"
          onClick={processColor5}
        ></div>
        <div
          className="colorbar-element"
          id="color6"
          onClick={processColor6}
        ></div>
      </div>
    </>
  );
}

export default Colorbar;
