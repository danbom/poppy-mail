import React from "react";
import { Link, useHistory } from "react-router-dom";

import * as S from "./styles";
import LogoNameJoin from "../../components/Txt/LogoNameJoin";
import BackBtn from "../../components/Btn/BackBtn";
import JoinMent from "../../components/Txt/JoinMent";
import KakaobtnImg from "../../image/kakao_login.png";
import JoinWithKakao from "../../components/Txt/JoinWithKakao";

const { Kakao } = window;

function JoinPage() {
  const history = useHistory();
  const KakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        // fetch(`${'http://158.247.195.25/account/login/kakao/'}`, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         access_token: authObj.access_token,
        //     }),
        // })
        console.log(authObj);
        // console.log(authObj.access_token);
        // fetch("http://158.247.195.25/account/login/kakao/", {
        fetch("https://poppymail.shop/account/login", {
          method: "POST",
          headers: {
            // 'Authorization' : '7dTk9-OoODnnr5g71IBC0NLqJTlQYkiNlgTupgo9dVwAAAF7jFnnrg',
            Authorization: authObj.access_token,
          },
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem("Kakao_token", res.access);
            localStorage.setItem("User_id", res.user_id);
            const kakao_token = localStorage.getItem("Kakao_token");
            if (res.access) {
              console.log(res);
              alert(res.user_name + "님, poppy mail에 오신 것을 환영합니다!");
              history.push("/joininfo");
            }
          });
      },
      fail: function (error) {
        alert(JSON.stringify(error));
      },
    });
  };

  return (
    <>
      <S.JoinScene>
        <BackBtn></BackBtn>
        <LogoNameJoin></LogoNameJoin>

        <JoinMent></JoinMent>
      </S.JoinScene>

      <JoinWithKakao></JoinWithKakao>

      <S.KakaoBtn onClick={KakaoLoginClickHandler}>
        <img src={KakaobtnImg} className="KakaobtnImg" />
      </S.KakaoBtn>
    </>
  );
}

export default JoinPage;
