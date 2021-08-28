import React from "react";
import * as BsIcons from "react-icons/bs";
import MyPageImg from "./Img/MyPageImg";
import AboutImg from "./Img/AboutImg";
import FaqImg from "./Img/FaqImg";
import LogoutImg from "./Img/LogoutImg";
import KakaoplusiconImg from "./Img/KakaoplusiconImg";

export const SidebarData = [
  {
    title: "마이 페이지",
    icon: <MyPageImg />,
    cName: "nav-text1",
  },
  {
    title: "탈퇴하기",
    path: "/",
    cName: "nav-text-small1",
  },
  {
    title: "받은 편지 보기",
    path: "/receivedletter",
    cName: "nav-text-small",
  },
  {
    title: "나의 우체통 링크",
    path: "/mypostbox",
    cName: "nav-text-small3",
  },
  {
    title: "About 파피메일",
    path: "https://www.notion.so/about-rough-03f3264b6260471d97df2da4fcfa347b",
    icon: <AboutImg />,
    cName: "nav-text",
  },
  {
    title: "자주 묻는 질문",
    path: "https://www.notion.so/FAQ-c5c39e0bcf93420289a6f7b7913035d8",
    icon: <FaqImg />,
    cName: "nav-text",
  },
  {
    title: "로그아웃",
    path: "/logout",
    icon: <LogoutImg />,
    cName: "nav-text",
  },
  {
    title: "카카오친구 추가하기",
    path: "/kakaoplus",
    icon: <KakaoplusiconImg />,
    cName: "nav-text",
  },
];
