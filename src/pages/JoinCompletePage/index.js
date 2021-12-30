import React from "react";
import { Link } from "react-router-dom";

import * as S from "../../styles/globalstyle";
import LogoNameJoinComplete from "../../components/Txt/LogoNameJoinComplete";
import JoinCompleteMent from "../../components/Txt/JoinCompleteMent";
import JoinCompleteImg from "../../image/join-complete.png";
import StartBtn from "../../components/Btn/StartBtn";

import Background from "../../image/background.png";

function JoinCompletePage() {
  return (
    <>
      <S.LongScene>
        <LogoNameJoinComplete></LogoNameJoinComplete>

        <img
          src={JoinCompleteImg}
          className="join-complete-img"
          alt="join complete"
        />

        <JoinCompleteMent></JoinCompleteMent>

        <Link to="/howto">
          <StartBtn></StartBtn>
        </Link>
      </S.LongScene>
    </>
  );
}

export default JoinCompletePage;
