import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import * as S from "../../styles/globalstyle";
import BackBtn from "../../components/Btn/BackBtn";
import LogoNamePoppyMail from "../../components/Txt/LogoNamePoppyMail";
import CheckWriteMailMent from "../../components/Txt/CheckWriteMailMent";
import CheckLetter from "../../components/CheckLetter";

import Background from "../../image/background.png";

function CheckWriteMail() {
  //   if (loading) return <LoadingScreen />;
  //   if (error) return <div>에러가 발생했습니다.</div>;
  const history = useHistory();

  const SendLetterRequest = () => {
    const mailbox_pk = localStorage.getItem("mailbox_pk");
    const random_strkey = localStorage.getItem("random_strkey");
    const contents = localStorage.getItem("contents");
    const sender = localStorage.getItem("sender");
    const receiver = localStorage.getItem("receiver");
    const color = localStorage.getItem("theme");
    fetch(
      "https://poppymail.shop/letter/" + mailbox_pk + "/" + random_strkey + "/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          content: contents,
          sender: sender,
          receiver: receiver,
          color: color,
        }),
      }
    )
      // .then((res) => res.json())
      .then((res) => {
        if (res.ok) {
          console.log("콘솔 " + res);
          console.log("셋  " + contents + sender + color);
          history.push("/completewritemail");
        } else {
          alert("해당 우체통이 존재하지 않습니다.");
          history.goBack();
        }
      });
  };
  return (
    <>
      <S.NoScrollbarScene>
        <div className="fullbox">
          <BackBtn></BackBtn>
          <div className="small-complete-btn" onClick={SendLetterRequest}>
            완료
          </div>
          <LogoNamePoppyMail></LogoNamePoppyMail>
          <CheckWriteMailMent></CheckWriteMailMent>

          <CheckLetter></CheckLetter>
          {/* <Link to="completewritemail">
            <div className="give-letter-btn">우편함에 편지 넣기</div>
          </Link> */}
        </div>
      </S.NoScrollbarScene>
    </>
  );
}

export default CheckWriteMail;
