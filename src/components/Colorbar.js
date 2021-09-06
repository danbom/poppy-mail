import { useContext } from "react";
import React from "react";
// import { ColorContext } from "../pages/WriteMailPage";
import { LetterContext } from "../pages/WriteMailPage";

import Thumbnail1Img from "../image/thumbnail1.png";
import Thumbnail2Img from "../image/thumbnail2.png";
import Thumbnail3Img from "../image/thumbnail3.png";
// import * as S from './styles';

function Colorbar() {
  const { setColor } = useContext(LetterContext);

  const processColor1 = (e) => {
    // setColor("#DAAE40");
    setColor("#DAAE40");
    localStorage.setItem("letter_color", "#DAAE40");
  };

  const processColor2 = (e) => {
    // setColor("#4b4362");
    setColor("#4b4362");
    localStorage.setItem("letter_color", "#4b4362");
  };

  const processColor3 = (e) => {
    // setColor("#87AFBA");
    setColor("#87AFBA");
    localStorage.setItem("letter_color", "#87AFBA");
  };

  const processColor4 = (e) => {
    // setColor("#b88dcd");
    setColor("#b88dcd");
    localStorage.setItem("letter_color", "#b88dcd");
  };

  const processColor5 = (e) => {
    // setColor("#db7667");
    setColor("#db7667");
    localStorage.setItem("letter_color", "#db7667");
  };

  const processColor6 = (e) => {
    // setColor("#bdbe82");
    setColor("#bdbe82");
    localStorage.setItem("letter_color", "#bdbe82");
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
        <div className="colorbar-element" id="color4" onClick={processColor4}>
          <img
            className="thumbnail1"
            src={Thumbnail1Img}
            alt="thumbnail1"
          ></img>
        </div>
        <div className="colorbar-element" id="color5" onClick={processColor5}>
          <img
            className="thumbnail2"
            src={Thumbnail2Img}
            alt="thumbnail2"
          ></img>
        </div>
        <div className="colorbar-element" id="color6" onClick={processColor6}>
          <img
            className="thumbnail3"
            src={Thumbnail3Img}
            alt="thumbnail3"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Colorbar;
