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
    document.getElementById("color1").classList.add("active");
    document.getElementById("color2").classList.remove("active");
    document.getElementById("color3").classList.remove("active");
    document.getElementById("color4").classList.remove("active");
    document.getElementById("color5").classList.remove("active");
    document.getElementById("color6").classList.remove("active");
  };

  const processColor2 = (e) => {
    // setColor("#4b4362");
    setColor("#85A7CB");
    localStorage.setItem("letter_color", "#85A7CB");
    document.getElementById("color2").classList.add("active");
    document.getElementById("color1").classList.remove("active");
    document.getElementById("color3").classList.remove("active");
    document.getElementById("color4").classList.remove("active");
    document.getElementById("color5").classList.remove("active");
    document.getElementById("color6").classList.remove("active");
  };

  const processColor3 = (e) => {
    // setColor("#87AFBA");
    setColor("#87AFBA");
    localStorage.setItem("letter_color", "#87AFBA");
    document.getElementById("color3").classList.add("active");
    document.getElementById("color1").classList.remove("active");
    document.getElementById("color2").classList.remove("active");
    document.getElementById("color4").classList.remove("active");
    document.getElementById("color5").classList.remove("active");
    document.getElementById("color6").classList.remove("active");
  };

  const processColor4 = (e) => {
    // setColor("#b88dcd");
    setColor("#b88dcd");
    localStorage.setItem("letter_color", "#b88dcd");
    document.getElementById("color4").classList.add("active");
    document.getElementById("color1").classList.remove("active");
    document.getElementById("color2").classList.remove("active");
    document.getElementById("color3").classList.remove("active");
    document.getElementById("color5").classList.remove("active");
    document.getElementById("color6").classList.remove("active");
  };

  const processColor5 = (e) => {
    // setColor("#db7667");
    setColor("#db7667");
    localStorage.setItem("letter_color", "#db7667");
    document.getElementById("color5").classList.add("active");
    document.getElementById("color1").classList.remove("active");
    document.getElementById("color2").classList.remove("active");
    document.getElementById("color3").classList.remove("active");
    document.getElementById("color4").classList.remove("active");
    document.getElementById("color6").classList.remove("active");
  };

  const processColor6 = (e) => {
    // setColor("#bdbe82");
    setColor("#bdbe82");
    localStorage.setItem("letter_color", "#bdbe82");
    document.getElementById("color6").classList.add("active");
    document.getElementById("color1").classList.remove("active");
    document.getElementById("color2").classList.remove("active");
    document.getElementById("color3").classList.remove("active");
    document.getElementById("color4").classList.remove("active");
    document.getElementById("color5").classList.remove("active");
  };

  return (
    <>
      <div className="colorbar-box">
        <div
          className="colorbar-element active"
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
