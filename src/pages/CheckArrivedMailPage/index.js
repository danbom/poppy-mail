import { React } from "react";

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

SwiperCore.use([Thumbs, Pagination]);

function CheckArrivedMail() {
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  fetch("https://poppymail.shop/mailbox/4/letters/", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + access,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log();
      var step;
      for (step = 0; step < 30; step++) {
        // Runs 5 times, with values of step 0 through 4.
        if (res[step]) {
          localStorage.setItem("length", res.length);
          localStorage.setItem("receiver" + step, res[step].receiver);
          localStorage.setItem("content" + step, res[step].content);
          localStorage.setItem("sender" + step, res[step].sender);
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
                  <div className="check-letter-box">
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
