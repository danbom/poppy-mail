import React from "react";
import LogoutIcon from "../../image/logout.png";
// import * as S from './styles';

function LogoutImg() {
  return (
    <>
      <div className="Nav-icon">
        <img src={LogoutIcon} alt="logout"></img>
      </div>
    </>
  );
}

export default LogoutImg;
