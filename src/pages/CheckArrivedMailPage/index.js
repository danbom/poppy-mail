import { React, useState } from "react";

import * as S from "./styles";
import BackBtn from "../../components/Btn/BackBtnDark";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/thumbs/thumbs.scss";
import "swiper/components/pagination/pagination.scss";
import LogoNameMyCheckArrivedMail from "../../components/Txt/LogoNameCheckArrivedMail";
import CheckArrivedLetterMent from "../../components/Txt/CheckArrivedMailMent";
import PeopleImg from "../../image/people.png";
import letter_deco_1_1 from "../../image/letter_deco_1_1.png";
import letter_deco_1_2 from "../../image/letter_deco_1_2.png";
import letter_deco_2_1 from "../../image/letter_deco_2_1.png";
import letter_deco_2_2 from "../../image/letter_deco_2_2.png";
import letter_deco_3_1 from "../../image/letter_deco_3_1.png";
import letter_deco_3_2 from "../../image/letter_deco_3_2.png";

SwiperCore.use([Thumbs, Pagination]);

function CheckArrivedMail() {
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  fetch(
    "https://poppymail.shop/mailbox/" +
      localStorage.getItem("id") +
      "/letters/",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + access,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      var step;
      for (step = 0; step < 30; step++) {
        // Runs 5 times, with values of step 0 through 4.

        if (res[step]) {
          localStorage.setItem("length", res.length);
          localStorage.setItem("receiver" + step, res[step].receiver);
          localStorage.setItem("content" + step, res[step].content);
          localStorage.setItem("sender" + step, res[step].sender);
          localStorage.setItem("color" + step, res[step].color);
        }
      }

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
    });

  return (
    <>
      <S.CheckArrivedMailScene>
        <div className="fullbox-dark">
          <BackBtn></BackBtn>
          <LogoNameMyCheckArrivedMail></LogoNameMyCheckArrivedMail>
          <div className="check-arrived-letter-ment">
            {localStorage.getItem("length")}개의 편지
          </div>
          <img className="people-img" src={PeopleImg} alt="people"></img>
          <div>
            <Swiper
              className="letter-flow"
              spaceBetween={0}
              slidesPerView={1}
              thumbs
              pagination={{ clickable: true }}
              id="checkarrivedmailswiper"
            >
              {!!localStorage.getItem("sender0") ? (
                <SwiperSlide>
                  <span>
                    <span>{localStorage.getItem("sender0")} </span>
                    <span>{localStorage.getItem("sender1")} </span>
                    <span>{localStorage.getItem("sender2")} </span>
                    <span>{localStorage.getItem("sender3")} </span>
                    <span>{localStorage.getItem("sender4")} </span>
                    <span>{localStorage.getItem("sender5")} </span>
                    <span>{localStorage.getItem("sender6")} </span>
                    <span>{localStorage.getItem("sender7")} </span>
                    <span>{localStorage.getItem("sender8")} </span>
                    <span>{localStorage.getItem("sender9")} </span>
                    <span>{localStorage.getItem("sender10")} </span>
                    <span>{localStorage.getItem("sender11")} </span>
                    <span>{localStorage.getItem("sender12")} </span>
                    <span>{localStorage.getItem("sender13")} </span>
                    <span>{localStorage.getItem("sender14")} </span>
                    <span>{localStorage.getItem("sender15")} </span>
                    <span>{localStorage.getItem("sender16")} </span>
                    <span>{localStorage.getItem("sender17")} </span>
                    <span>{localStorage.getItem("sender18")} </span>
                    <span>{localStorage.getItem("sender19")} </span>
                    <span>{localStorage.getItem("sender20")} </span>
                  </span>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color0"),
                    }}
                  >
                    {localStorage.getItem("color0") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color0") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color0") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver0")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content0")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender0")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender1") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color1"),
                    }}
                  >
                    {localStorage.getItem("color1") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color1") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color1") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver1")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content1")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender1")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender2") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color2"),
                    }}
                  >
                    {localStorage.getItem("color2") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color2") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color2") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver2")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content2")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender2")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender3") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color3"),
                    }}
                  >
                    {localStorage.getItem("color3") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color3") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color3") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver3")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content3")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender3")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender4") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color4"),
                    }}
                  >
                    {localStorage.getItem("color4") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color4") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color4") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver4")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content4")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender4")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender5") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color5"),
                    }}
                  >
                    {localStorage.getItem("color5") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color5") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color5") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver5")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content5")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender5")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender6") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color6"),
                    }}
                  >
                    {localStorage.getItem("color6") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color6") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color6") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver6")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content6")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender6")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender7") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color7"),
                    }}
                  >
                    {localStorage.getItem("color7") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color7") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color7") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver7")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content7")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender7")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender8") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color8"),
                    }}
                  >
                    {localStorage.getItem("color8") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color8") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color8") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver8")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content8")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender8")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender9") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color9"),
                    }}
                  >
                    {localStorage.getItem("color9") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color9") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color9") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver9")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content9")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender9")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender10") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color10"),
                    }}
                  >
                    {localStorage.getItem("color10") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color10") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color10") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver10")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content10")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender10")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender11") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color11"),
                    }}
                  >
                    {localStorage.getItem("color11") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color11") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color11") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver11")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content11")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender11")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender12") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color12"),
                    }}
                  >
                    {localStorage.getItem("color12") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color12") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color12") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver12")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content12")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender12")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender13") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color13"),
                    }}
                  >
                    {localStorage.getItem("color13") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color13") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color13") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver13")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content13")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender13")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender14") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color14"),
                    }}
                  >
                    {localStorage.getItem("color14") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color14") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color14") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver14")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content14")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender14")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender15") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color15"),
                    }}
                  >
                    {localStorage.getItem("color15") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color15") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color15") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver15")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content15")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender15")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender16") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color16"),
                    }}
                  >
                    {localStorage.getItem("color16") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color16") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color16") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver16")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content16")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender16")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender17") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color17"),
                    }}
                  >
                    {localStorage.getItem("color17") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color17") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color17") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver17")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content17")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender17")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender18") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color18"),
                    }}
                  >
                    {localStorage.getItem("color18") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color18") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color18") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver18")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content18")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender18")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender19") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color19"),
                    }}
                  >
                    {localStorage.getItem("color19") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color19") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color19") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver19")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content19")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender19")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender20") ? (
                <SwiperSlide>
                  <div
                    className="check-letter-box"
                    style={{
                      backgroundColor: localStorage.getItem("color20"),
                    }}
                  >
                    {localStorage.getItem("color20") === "#b88dcd" ? (
                      <div className="letter_deco_1">
                        <img
                          className="letter_deco_1_1"
                          src={letter_deco_1_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_1_2"
                          src={letter_deco_1_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color20") === "#db7667" ? (
                      <div className="letter_deco_2">
                        <img
                          className="letter_deco_2_1"
                          src={letter_deco_2_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_2_2"
                          src={letter_deco_2_2}
                          alt="deco"
                        />
                      </div>
                    ) : localStorage.getItem("color20") === "#bdbe82" ? (
                      <div className="letter_deco_3">
                        <img
                          className="letter_deco_3_1"
                          src={letter_deco_3_1}
                          alt="deco"
                        />
                        <img
                          className="letter_deco_3_2"
                          src={letter_deco_3_2}
                          alt="deco"
                        />
                      </div>
                    ) : null}
                    <div className="letter-element" id="to-box">
                      <div className="to-txt">To.</div>
                      <div className="to-underline"></div>
                      <div className="to-contents" id="div">
                        {localStorage.getItem("receiver20")}
                      </div>
                    </div>
                    <div className="letter-element" id="contents-box">
                      <div className="contents-contents">
                        {localStorage.getItem("content20")}
                      </div>
                    </div>
                    <div className="letter-element" id="from-box">
                      <div className="from-txt">To.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender20")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
            </Swiper>
          </div>
        </div>
      </S.CheckArrivedMailScene>
    </>
  );
}

export default CheckArrivedMail;
