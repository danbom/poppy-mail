import { React, useState } from "react";
import MyPostboxImg from "../image/mypostboxitemimg.png";
import OpenPostboxBtn from "./Btn/OpenPostboxBtn";
// import * as S from './styles';

function MyPostboxItem3() {
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  const [item3_link_title, setItemTitle3] = useState(null);
  const [item3_mailbox_link, setItemLink3] = useState(null);
  const [item3_number_letter, setItemLetter3] = useState(null);

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
      if (res[2]) {
        localStorage.setItem("3rd_link_title", res[2].link_title);
        localStorage.setItem("3rd_mailbox_link", res[2].mailbox_link);
        localStorage.setItem("3rd_number_letter", res[2].number_of_letter);

        setItemTitle3(localStorage.getItem("3rd_link_title"));
        setItemLink3(localStorage.getItem("3rd_mailbox_link"));
        setItemLetter3(localStorage.getItem("3rd_number_letter"));
      }
    });

  return (
    <>
      <div className="copy-my-post-box-link-ment">이 우체통 링크 복사하기</div>

      <img src={MyPostboxImg} className="MyPostboxImg"></img>

      <div className="my-post-box-item-ment1">&lt;{item3_link_title}&gt;</div>
      <div className="my-post-box-item-ment2">
        편지 {item3_number_letter}개 도착
      </div>
      <div className="my-post-box-item-ment3">
        편지 열람이 가능할 때 알림이 가요!
      </div>
      <OpenPostboxBtn></OpenPostboxBtn>
    </>
  );
}

export default MyPostboxItem3;
