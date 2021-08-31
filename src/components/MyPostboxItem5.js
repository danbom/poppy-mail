import { React, useState } from "react";
import MyPostboxImg from "../image/mypostboxitemimg.png";
import OpenPostboxBtn from "./Btn/OpenPostboxBtn";
// import * as S from './styles';

function MyPostboxItem5() {
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  const [item5_link_title, setItemTitle5] = useState(null);
  const [item5_mailbox_link, setItemLink5] = useState(null);
  const [item5_number_letter, setItemLetter5] = useState(null);

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
      if (res[4]) {
        localStorage.setItem("5th_link_title", res[4].link_title);
        localStorage.setItem("5th_mailbox_link", res[4].mailbox_link);
        localStorage.setItem("5th_number_letter", res[4].number_of_letter);

        setItemTitle5(localStorage.getItem("5th_link_title"));
        setItemLink5(localStorage.getItem("5th_mailbox_link"));
        setItemLetter5(localStorage.getItem("5th_number_letter"));
      }
    });

  return (
    <>
      <div className="copy-my-post-box-link-ment">이 우체통 링크 복사하기</div>

      <img src={MyPostboxImg} className="MyPostboxImg"></img>

      <div className="my-post-box-item-ment1">&lt;{item5_link_title}&gt;</div>
      <div className="my-post-box-item-ment2">
        편지 {item5_number_letter}개 도착
      </div>
      <div className="my-post-box-item-ment3">
        편지 열람이 가능할 때 알림이 가요!
      </div>
      <OpenPostboxBtn></OpenPostboxBtn>
    </>
  );
}

export default MyPostboxItem5;
