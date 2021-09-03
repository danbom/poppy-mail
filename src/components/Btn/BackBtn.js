import React from "react";
// import * as S from './styles';
import { useHistory } from "react-router-dom";
import backbtnImg from "../../image/back-btn.png";

function BackBtn({ History }) {
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

export default BackBtn;
