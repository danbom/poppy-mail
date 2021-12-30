import React, { createContext, useState, useMemo } from "react";
import { useHistory } from "react-router-dom";

import * as S from "../../styles/globalstyle";
import LogoNameCreatePostBox from "../../components/Txt/LogoNameCreatePostBox";
import BackBtn from "../../components/Btn/BackBtn";
import InputName from "../../components/InputName";
import AlertNickname from "../../components/Alert/AlertNickname";

import Background from "../../image/background.png";

export const CreatepostboxContext = createContext({
  setNickname: () => {},
});

function CreatePostBoxPage1() {
  const history = useHistory();
  const [_alert, setAlert] = useState(null);

  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  const [nickname, setNickname] = useState("");
  const value = useMemo(() => ({ setNickname }), [setNickname]);
  const nickReg = /^.{1,10}$/;

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
      console.log(res);
      if (res.detail === "Given token not valid for any token type") {
        fetch("https://poppymail.shop/api/token/refresh/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh: refresh,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res) {
              console.log(res);
              if (res.detail === "Token is invalid or expired") {
                localStorage.clear();
              } else {
                localStorage.setItem("access", res.access);
              }
            }
          });
      }

      if (res[0]) {
        localStorage.setItem("1st_link_title", res[0].link_title);
        localStorage.setItem("1st_mailbox_link", res[0].mailbox_link);
        localStorage.setItem("1st_number_letter", res[0].number_of_letter);
      }

      if (res[1]) {
        localStorage.setItem("2nd_link_title", res[1].link_title);
        localStorage.setItem("2nd_mailbox_link", res[1].mailbox_link);
        localStorage.setItem("2nd_number_letter", res[1].number_of_letter);
      }

      if (res[2]) {
        localStorage.setItem("3rd_link_title", res[2].link_title);
        localStorage.setItem("3rd_mailbox_link", res[2].mailbox_link);
        localStorage.setItem("3rd_number_letter", res[2].number_of_letter);
      }

      if (res[3]) {
        localStorage.setItem("4th_link_title", res[3].link_title);
        localStorage.setItem("4th_mailbox_link", res[3].mailbox_link);
        localStorage.setItem("4th_number_letter", res[3].number_of_letter);
      }

      if (res[4]) {
        localStorage.setItem("5th_link_title", res[4].link_title);
        localStorage.setItem("5th_mailbox_link", res[4].mailbox_link);
        localStorage.setItem("5th_number_letter", res[4].number_of_letter);
      }

      if (res.detail === "User not found") {
        alert("다시 로그인해주세요!");
        localStorage.clear();
      }
    });

  const CreatepostboxRequest = () => {
    if (nickname === "") {
      alert("필수 입력 요소가 작성되지 않았습니다.");
    } else if (!nickReg.test(nickname)) {
      alert("이름 혹은 닉네임은 10글자까지 가능합니다.");
    } else {
      //   alert(nickname);
      fetch("https://poppymail.shop/mailbox/", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + access,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname: nickname,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            console.log(res);
            if (res[0] === "우체통 개수 초과하여 생성 불가") {
              alert(
                "현재 파피메일에서는 5개의 우체통만 만들 수 있어요. 😭 다음 업데이트 때 더 준비해볼게요! 이전 우체통을 삭제하면 새로운 우체통을 생성할 수 있어요! (삭제한 우체통의 편지는 복구가 불가능해요)"
              );
            } else {
              localStorage.setItem("mailbox_link", res.mailbox_link);
              console.log(res.mailbox_link);
              history.push("/createpostboxsteptwo");
            }
          }
        });
      //   history.push("/createpostboxsteptwo");
    }
  };

  //   if (loading) return <LoadingScreen />;
  //   if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <CreatepostboxContext.Provider value={value}>
      <S.LongScene>
        <BackBtn></BackBtn>

        {/* <Navbar></Navbar> */}

        <LogoNameCreatePostBox></LogoNameCreatePostBox>

        <InputName></InputName>

        <div className="create-post-box-btn" onClick={CreatepostboxRequest}>
          완료
        </div>

        <div className="noeditnick">*닉네임은 생성 후 수정이 불가합니다.</div>

        {/* {_alert} */}
      </S.LongScene>
    </CreatepostboxContext.Provider>
  );
}

export default CreatePostBoxPage1;
