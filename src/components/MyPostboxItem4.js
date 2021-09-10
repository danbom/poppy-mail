import { React, useState } from "react";
import { useHistory } from "react-router";
import MyPostboxImg from "../image/mypostboxitemimg.png";
// import OpenPostboxBtn from "./Btn/OpenPostboxBtn";
// import * as S from './styles';

function MyPostboxItem4() {
  const access = localStorage.getItem("access");

  const [item4_link_title, setItemTitle4] = useState(null);
  const [item4_mailbox_link, setItemLink4] = useState(null);
  const [item4_number_letter, setItemLetter4] = useState(null);

  const fourth_open_date = new Date(
    localStorage.getItem("4th_open_date") + " " + "00:00:00"
  );
  const now = new Date();

  const Copy = () => {
    copyToClipboard(item4_mailbox_link);

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

  const deleteRequest = () => {
    fetch(
      "https://poppymail.shop/mailbox/" + localStorage.getItem("4th_id") + "/",
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + access,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          localStorage.removeItem("4th_link_title");
          localStorage.removeItem("4th_open_date");
          alert("삭제 완료!");
          window.location.reload();
        } else {
          alert("다시 시도해주세요");
        }
      });
  };

  const history = useHistory();

  const openSpecificPostboxRequest = () => {
    history.push(
      "/checkarrivedmail/" + localStorage.getItem("4th_id") + "/letters/"
    );
    localStorage.setItem("id", localStorage.getItem("4th_id"));
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
      if (res[3]) {
        localStorage.setItem("4th_link_title", res[3].link_title);
        localStorage.setItem("4th_mailbox_link", res[3].mailbox_link);
        localStorage.setItem("4th_number_letter", res[3].number_of_letter);
        localStorage.setItem("4th_id", res[3].id);

        setItemTitle4(localStorage.getItem("4th_link_title"));
        setItemLink4(localStorage.getItem("4th_mailbox_link"));
        setItemLetter4(localStorage.getItem("4th_number_letter"));
      }
    });

  return (
    <>
      <div className="copy-my-post-box-link-ment" onClick={Copy}>
        이 우체통 링크 복사하기
      </div>

      <div className="delete-my-post-box" onClick={deleteRequest}>
        삭제
      </div>

      <img src={MyPostboxImg} alt="postbox" className="MyPostboxImg"></img>

      <div className="my-post-box-item-ment1">&lt;{item4_link_title}&gt;</div>
      <div className="my-post-box-item-ment2">
        편지 {item4_number_letter}개 도착
      </div>
      <div className="my-post-box-item-ment3">
        편지 열람이 가능할 때 알림이 가요!
      </div>
      {fourth_open_date <= now ? (
        <div className="open-post-box-btn" onClick={openSpecificPostboxRequest}>
          우체통 열기
        </div>
      ) : (
        <div className="open-post-box-btn-disable">우체통 열기</div>
      )}
    </>
  );
}

export default MyPostboxItem4;
