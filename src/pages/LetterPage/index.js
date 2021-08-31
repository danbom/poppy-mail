import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";
import LetsWriteMailMent from "../../components/Txt/LetsWriteMailMent";
import LetsWriteMailImg from "../../components/Img/LetsWriteMailImg";
import LogoNamePoppyMail from "../../components/Txt/LogoNamePoppyMail";
import PostLinkTitle from "../../components/PostLinkTitle";
import WriteMailBtn from "../../components/Btn/WriteMailBtn";

function LetterPage() {
  fetch("https://poppymail.com/letter/33/?key=wG6WmeOz", {
    method: "GET",
    headers: {},
  })
    .then(res => res.json())
    .then(res => {
      if (res) {
        console.log(res);
      }
    });

  return (
    <>
      <S.LetsWriteMailScene>
        <div className="fullbox">
          <LogoNamePoppyMail></LogoNamePoppyMail>

          <PostLinkTitle></PostLinkTitle>

          <LetsWriteMailMent></LetsWriteMailMent>

          <LetsWriteMailImg></LetsWriteMailImg>

          <Link to="/writemail">
            <WriteMailBtn></WriteMailBtn>
          </Link>
        </div>
      </S.LetsWriteMailScene>
    </>
  );
}

export default LetterPage;
