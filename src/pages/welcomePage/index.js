import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
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
              localStorage.setItem("access", res.access);
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
    });
  //   if (loading) return <LoadingScreen />;
  //   if (error) return <div>에러가 발생했습니다.</div>;
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
