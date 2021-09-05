import { React, useState } from "react";
import { useHistory } from "react-router";
import MyPostboxImg from "../image/mypostboxitemimg.png";
import OpenPostboxBtn from "./Btn/OpenPostboxBtn";
// import * as S from './styles';

function MyPostboxItem3() {
  const access = localStorage.getItem("access");

  const [item3_link_title, setItemTitle3] = useState(null);
  const [item3_mailbox_link, setItemLink3] = useState(null);
  const [item3_number_letter, setItemLetter3] = useState(null);

  const Copy = () => {
    copyToClipboard(item3_mailbox_link);

    alert("복사되었습니다!");
  };

  const copyToClipboard = (val) => {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  };

  const history = useHistory();

  const openSpecificPostboxRequest = () => {
    history.push(
      "/checkarrivedmail/" + localStorage.getItem("3rd_id") + "/letters/"
    );
    localStorage.setItem("id", localStorage.getItem("3rd_id"));
    var step;
    for (step = 0; step < 30; step++) {
      localStorage.removeItem("sender" + step);
      localStorage.removeItem("length");
    }
  };

  fetch("https://poppymail.shop/mailbox/", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + access,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res[2]) {
        localStorage.setItem("3rd_link_title", res[2].link_title);
        localStorage.setItem("3rd_mailbox_link", res[2].mailbox_link);
        localStorage.setItem("3rd_number_letter", res[2].number_of_letter);
        localStorage.setItem("3rd_id", res[2].id);

        setItemTitle3(localStorage.getItem("3rd_link_title"));
        setItemLink3(localStorage.getItem("3rd_mailbox_link"));
        setItemLetter3(localStorage.getItem("3rd_number_letter"));
      }
    });

  return (
    <>
      <div className="copy-my-post-box-link-ment" onClick={Copy}>
        이 우체통 링크 복사하기
      </div>

      <img src={MyPostboxImg} className="MyPostboxImg" alt="postbox"></img>

      <div className="my-post-box-item-ment1">&lt;{item3_link_title}&gt;</div>
      <div className="my-post-box-item-ment2">
        편지 {item3_number_letter}개 도착
      </div>
      <div className="my-post-box-item-ment3">
        편지 열람이 가능할 때 알림이 가요!
      </div>
      <div className="open-post-box-btn" onClick={openSpecificPostboxRequest}>
        우체통 열기
      </div>
    </>
  );
}

export default MyPostboxItem3;
