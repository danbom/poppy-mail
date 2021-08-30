import { React, useState } from "react";
import MyPostboxImg from "../image/mypostboxitemimg.png";
import OpenPostboxBtn from "./Btn/OpenPostboxBtn";
// import * as S from './styles';

function MyPostboxItem() {
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  fetch("https://poppymail.shop/api/token/refresh/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refresh: refresh,
    }),
  })
    .then(res => res.json())
    .then(res => {
      if (res) {
        console.log(res);
      }
    });

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
      if (res[0]) {
        // localStorage.setItem("1st_link_title", res[0].link_title);
        console.log(res[0].mailbox_link);
      }
      if (res[1]) {
        console.log(res[1].link_title);
        console.log(res[1].mailbox_link);
      }
      if (res[2]) {
        console.log(res[2].link_title);
        console.log(res[2].mailbox_link);
      }
      if (res[3]) {
        console.log(res[3].link_title);
        console.log(res[3].mailbox_link);
      }
      if (res[4]) {
        console.log(res[4].link_title);
        console.log(res[4].mailbox_link);
      }
    });

  return (
    <>
      <div className="copy-my-post-box-link-ment">이 우체통 링크 복사하기</div>

      <img src={MyPostboxImg} className="MyPostboxImg"></img>

      <div className="my-post-box-item-ment1">
        &lt;얘도랑 나 이거 써주면 나도 써줄게&gt;
      </div>
      <div className="my-post-box-item-ment2">편지 13개 도착</div>
      <div className="my-post-box-item-ment3">
        편지 열람이 가능할 때 알림이 가요!
      </div>
      <OpenPostboxBtn></OpenPostboxBtn>
    </>
  );
}

export default MyPostboxItem;
