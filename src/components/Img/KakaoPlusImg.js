import React from "react";
import KakaoPlusimage from "../../image/kakao_plus.png";
import Arrowimage from "../../image/arrow.png";
// import * as S from './styles';

function KakaoPlusImg() {
  return (
    <>
      <a href="https://pf.kakao.com/_hxaxjUs">
        <div className="kakao-plus-img">
          <img src={KakaoPlusimage}></img>
        </div>
      </a>

      <div className="arrow-img">
        <img src={Arrowimage}></img>
      </div>
    </>
  );
}

export default KakaoPlusImg;
