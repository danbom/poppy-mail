import { React, useState } from "react";
import MyPostboxImg from "../image/mypostboxitemimg.png";
import OpenPostboxBtn from "./Btn/OpenPostboxBtn";
// import * as S from './styles';

function MyPostboxItem2() {
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  const [item2_link_title, setItemTitle2] = useState(null);
  const [item2_mailbox_link, setItemLink2] = useState(null);
  const [item2_number_letter, setItemLetter2] = useState(null);

  fetch("https://poppymail.shop/mailbox/", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + access,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(res => res.json())
    .then(res => {
      if (res[1]) {
        localStorage.setItem("2nd_link_title", res[1].link_title);
        localStorage.setItem("2nd_mailbox_link", res[1].mailbox_link);
        localStorage.setItem("2nd_number_letter", res[1].number_of_letter);

        setItemTitle2(localStorage.getItem("2nd_link_title"));
        setItemLink2(localStorage.getItem("2nd_mailbox_link"));
        setItemLetter2(localStorage.getItem("2nd_number_letter"));
      }
    });

  return (
    <>
      <div className="copy-my-post-box-link-ment">이 우체통 링크 복사하기</div>

      <img src={MyPostboxImg} className="MyPostboxImg"></img>

      <div className="my-post-box-item-ment1">&lt;{item2_link_title}&gt;</div>
      <div className="my-post-box-item-ment2">
        편지 {item2_number_letter}개 도착
      </div>
      <div className="my-post-box-item-ment3">
        편지 열람이 가능할 때 알림이 가요!
      </div>
      <OpenPostboxBtn></OpenPostboxBtn>
    </>
  );
}

export default MyPostboxItem2;
