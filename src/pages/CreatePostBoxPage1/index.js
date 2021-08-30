import React, { createContext, useState, useMemo } from "react";
import { Link, useHistory } from "react-router-dom";

import * as S from "./styles";
import Navbar from "../../components/Navbar";
import LogoNameCreatePostBox from "../../components/Txt/LogoNameCreatePostBox";
import BackBtn from "../../components/Btn/BackBtn";
import CompleteBtn from "../../components/Btn/CompleteBtn";
import InputName from "../../components/InputName";
import AlertNickname from "../../components/Alert/AlertNickname";

export const CreatepostboxContext = createContext({
  setNickname: () => {},
});

function CreatePostBoxPage1() {
  const history = useHistory();
  const [_alert, setAlert] = useState(null);

  const [nickname, setNickname] = useState("");
  const [navbar, setNavbar] = useState(null);
  const value = useMemo(() => ({ setNickname }), [setNickname]);

  const CreatepostboxRequest2 = () => {
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
      .then(res => res.json())
      .then(res => {
        if (res) {
          console.log(res);
          localStorage.setItem("mailbox_link", res.mailbox_link);
          console.log(res.mailbox_link);
          history.push("/createpostboxsteptwo");
        }
      });
  };

  const access = localStorage.getItem("access");

  const CreatepostboxRequest = () => {
    if (nickname === "") {
      alert("필수 입력 요소가 작성되지 않았습니다 ... 알림창 만드러야댐");
    } else {
      //   alert(nickname);
      setAlert(
        <div>
          <AlertNickname></AlertNickname>
          <div className="create-post-box-btn" onClick={CreatepostboxRequest2}>
            완료
          </div>
        </div>
      );
      //   history.push("/createpostboxsteptwo");
    }
  };

  //   if (loading) return <LoadingScreen />;
  //   if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <CreatepostboxContext.Provider value={value}>
      <S.CreatePostBoxScene>
        <div className="fullbox">
          <BackBtn></BackBtn>

          <Navbar></Navbar>

          <LogoNameCreatePostBox></LogoNameCreatePostBox>

          <InputName></InputName>

          <div className="create-post-box-btn" onClick={CreatepostboxRequest}>
            완료
          </div>

          {_alert}
        </div>
      </S.CreatePostBoxScene>
    </CreatepostboxContext.Provider>
  );
}

export default CreatePostBoxPage1;
