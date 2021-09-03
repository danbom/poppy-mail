import React from "react";
// import * as S from './styles';
import { useHistory } from "react-router-dom";
import backbtnImg from "../../image/back-btn-white.png";

function BackBtnDark({ History }) {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-btn">
        <img onClick={goBack} src={backbtnImg} alt="goback"></img>
      </div>
    </>
  );
}

export default BackBtnDark;
