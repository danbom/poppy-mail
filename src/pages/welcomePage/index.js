import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as S from "./styles";
import LoginBtn from "../../components/Btn/LoginBtn";
import JoinBtn from "../../components/Btn/JoinBtn";
import LogoName from "../../components/Txt/LogoName";
import Poppy from "../../components/Img/Poppy";
import WelcomeMent from "../../components/Txt/WelcomeMent";

function WelcomePage() {
  const is_new = !!localStorage.getItem("is_new");

  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");
  const history = useHistory();

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
            console.log(res);
            if (res.detail === "Token is invalid or expired") {
              localStorage.clear();
            }
          });
      }

      // if (res.detail === "User not found") {
      //   alert("다시 로그인해주세요!");
      //   history.push("/");
      // }
    });

  return (
    <>
      <S.WelcomeScene>
        <div className="fullbox">
          <LogoName></LogoName>
          <Poppy></Poppy>
          <WelcomeMent></WelcomeMent>

          <Link to="/howtounlog">
            <LoginBtn></LoginBtn>
          </Link>

          {/* {is_new ? (
            <Link to="/joininfo">
              <JoinBtn></JoinBtn>
            </Link>
          ) : (
            <Link to="/howto">
              <JoinBtn></JoinBtn>
            </Link>
          )} */}
          {!access ? (
            <Link to="/join">
              <JoinBtn></JoinBtn>
            </Link>
          ) : !is_new ? (
            <Link to="/joininfo">
              <JoinBtn></JoinBtn>
            </Link>
          ) : (
            <Link to="/howto">
              <JoinBtn></JoinBtn>
            </Link>
          )}
        </div>
      </S.WelcomeScene>
    </>
  );
}

export default WelcomePage;
