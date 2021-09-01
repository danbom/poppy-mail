import React from "react";
import { Link, useHistory } from "react-router-dom";

import * as S from "./styles";
import LetsWriteMailMent from "../../components/Txt/LetsWriteMailMent";
import LetsWriteMailImg from "../../components/Img/LetsWriteMailImg";
import LogoNamePoppyMail from "../../components/Txt/LogoNamePoppyMail";
import PostLinkTitle from "../../components/PostLinkTitle";
import WriteMailBtn from "../../components/Btn/WriteMailBtn";

function LetterPage(props) {
  const mailbox_pk = props.match.params.mailbox_pk;
  const random_strkey = props.match.params.random_strkey;
  const history = useHistory();

  console.log(mailbox_pk);

  // fetch("https://poppymail.shop/letter/1/8y19yk14", {
  fetch("https://poppymail.shop/letter/" + mailbox_pk + "/" + random_strkey, {
    method: "GET",
    headers: {},
  })
    .then(res => res.json())
    .then(res => {
      if (res) {
        console.log(res);
        localStorage.setItem("nickname", res.nickname);
      }
    });

  const GoWriteRequest = () => {
    history.push("/writemail/" + mailbox_pk + "/" + random_strkey);
  };

  return (
    <>
      <S.LetsWriteMailScene>
        <div className="fullbox">
          <LogoNamePoppyMail></LogoNamePoppyMail>

          <PostLinkTitle></PostLinkTitle>

          <LetsWriteMailMent></LetsWriteMailMent>

          <LetsWriteMailImg></LetsWriteMailImg>

          {/* <Link to="/writemail"> */}
          <div className="create-post-box-btn" onClick={GoWriteRequest}>
            편지쓰기
          </div>
          {/* </Link> */}
        </div>
      </S.LetsWriteMailScene>
    </>
  );
}

export default LetterPage;
