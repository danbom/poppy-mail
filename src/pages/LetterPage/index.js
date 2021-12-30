import { React, useState } from "react";
import { useHistory } from "react-router-dom";

import * as S from "../../styles/globalstyle";
import LetsWriteMailMent from "../../components/Txt/LetsWriteMailMent";
import LetsWriteMailImg from "../../components/Img/LetsWriteMailImg";
import LogoNamePoppyMail from "../../components/Txt/LogoNamePoppyMail";

import Background from "../../image/background.png";

function LetterPage(props) {
  const mailbox_pk = props.match.params.mailbox_pk;
  const random_strkey = props.match.params.random_strkey;
  const history = useHistory();
  const [linkname, setLinkname] = useState("");

  console.log(mailbox_pk);

  // fetch("https://poppymail.shop/letter/1/8y19yk14", {
  fetch(
    "https://poppymail.shop/letter/" + mailbox_pk + "/" + random_strkey + "/",
    {
      method: "GET",
      headers: {},
    }
  )
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        console.log(res.nickname);
        setLinkname(res.nickname);
        localStorage.setItem("nickname", res.nickname);
      }
    })
    .catch((err) => {
      console.log(err);
      alert("존재하지 않는 우체통입니다.");
      history.push("/");
    });

  const GoWriteRequest = () => {
    history.push("/writemail/" + mailbox_pk + "/" + random_strkey + "/");
  };

  return (
    <>
      <S.PercentHeightScene>
        <LogoNamePoppyMail></LogoNamePoppyMail>

        <div className="post-link-title-box">
          <div className="post-link-title-small">우체통 링크 제목</div>
          <div className="post-link-title-big">{linkname}의 우체통</div>
        </div>

        <LetsWriteMailMent></LetsWriteMailMent>

        <div className="lets-write-mail-ment-big">
          {linkname}님의 우편함이 도착했습니다! <br></br> {linkname}님에게 언제
          도착할 지 모르는 <br></br> 편지를 써주세요.
        </div>

        <LetsWriteMailImg></LetsWriteMailImg>

        {/* <Link to="/writemail"> */}
        <div className="create-post-box-btn" onClick={GoWriteRequest}>
          편지쓰기
        </div>
        {/* </Link> */}
      </S.PercentHeightScene>
    </>
  );
}

export default LetterPage;
