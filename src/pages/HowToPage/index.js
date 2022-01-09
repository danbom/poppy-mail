import { React } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/thumbs/thumbs.scss";
import "swiper/components/pagination/pagination.scss";

import * as S from "../../styles/globalstyle";
import Navbar from "../../components/Navbar";
import LogoNameHowto from "../../components/Txt/LogoNameHowto";
import Flow1 from "../../components/ServiceFlow/Flow1";
import Flow2 from "../../components/ServiceFlow/Flow2";
import Flow3 from "../../components/ServiceFlow/Flow3";
import Flow4 from "../../components/ServiceFlow/Flow4";
import Flow5 from "../../components/ServiceFlow/Flow5";
import Flow6 from "../../components/ServiceFlow/Flow6";
import CreatePostboxBtn from "../../components/Btn/CreatePostboxBtn";
import Footer from "../../components/Footer";
import union from "../../image/Union.png";

SwiperCore.use([Thumbs, Pagination, Autoplay]);

function HowToPage() {
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");
  // const history = useHistory();

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
        localStorage.setItem("check_mailbox_today", res.check_mailbox_today);
      }

      if (res[0]) {
        localStorage.setItem("1st_link_title", res[0].link_title);
        localStorage.setItem("1st_mailbox_link", res[0].mailbox_link);
        localStorage.setItem("1st_number_letter", res[0].number_of_letter);
        localStorage.setItem("1st_open_date", res[0].open_date);
      }

      if (res[1]) {
        localStorage.setItem("2nd_link_title", res[1].link_title);
        localStorage.setItem("2nd_mailbox_link", res[1].mailbox_link);
        localStorage.setItem("2nd_number_letter", res[1].number_of_letter);
        localStorage.setItem("2nd_open_date", res[1].open_date);
      }

      if (res[2]) {
        localStorage.setItem("3rd_link_title", res[2].link_title);
        localStorage.setItem("3rd_mailbox_link", res[2].mailbox_link);
        localStorage.setItem("3rd_number_letter", res[2].number_of_letter);
        localStorage.setItem("3rd_open_date", res[2].open_date);
      }

      if (res[3]) {
        localStorage.setItem("4th_link_title", res[3].link_title);
        localStorage.setItem("4th_mailbox_link", res[3].mailbox_link);
        localStorage.setItem("4th_number_letter", res[3].number_of_letter);
        localStorage.setItem("4th_open_date", res[3].open_date);
      }

      if (res[4]) {
        localStorage.setItem("5th_link_title", res[4].link_title);
        localStorage.setItem("5th_mailbox_link", res[4].mailbox_link);
        localStorage.setItem("5th_number_letter", res[4].number_of_letter);
        localStorage.setItem("5th_open_date", res[4].open_date);
      }

      if (res.detail === "User not found") {
        alert("다시 로그인해주세요!");
        localStorage.clear();
      }
    });

  const first_open_date = new Date(
    localStorage.getItem("1st_open_date") + " " + "00:00:00" // eslint-disable-line
  );
  const second_open_date = new Date(
    localStorage.getItem("2nd_open_date") + " " + "00:00:00" // eslint-disable-line
  );
  const third_open_date = new Date(
    localStorage.getItem("3rd_open_date") + " " + "00:00:00" // eslint-disable-line
  );
  const fourth_open_date = new Date(
    localStorage.getItem("4th_open_date") + " " + "00:00:00" // eslint-disable-line
  );
  const fifth_open_date = new Date(
    localStorage.getItem("5th_open_date") + " " + "00:00:00" // eslint-disable-line
  );
  const now = new Date();

  return (
    <>
      <S.NoScrollbarScene>
        {/* <BackBtn></BackBtn> */}
        <Navbar></Navbar>
        {localStorage.getItem("check_mailbox_today") === "true" &&
        (first_open_date <= now ||
          second_open_date <= now ||
          third_open_date <= now ||
          fourth_open_date <= now ||
          fifth_open_date <= now) ? (
          <div>
            <img src={union} className="union" alt="말풍선"></img>
            <div className="union-text">
              우편함이 열렸습니다.<br></br>편지를 확인해주세요!
            </div>
          </div>
        ) : null}
        {/* <div>
            <img src={union} className="union" alt="말풍선"></img>
            <div className="union-text">
              우편함이 열렸습니다.<br></br>편지를 확인해주세요!
            </div>
          </div> */}

        <LogoNameHowto></LogoNameHowto>

        <div>
          <Swiper
            className="service-flow"
            spaceBetween={0}
            slidesPerView={1}
            thumbs
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide>
              <Flow1></Flow1>
            </SwiperSlide>
            <SwiperSlide>
              <Flow2></Flow2>
            </SwiperSlide>
            <SwiperSlide>
              <Flow3></Flow3>
            </SwiperSlide>
            <SwiperSlide>
              <Flow4></Flow4>
            </SwiperSlide>
            <SwiperSlide>
              <Flow5></Flow5>
            </SwiperSlide>
            <SwiperSlide>
              <Flow6></Flow6>
            </SwiperSlide>
          </Swiper>
        </div>

        <Link to="/createpostboxstepone">
          <CreatePostboxBtn></CreatePostboxBtn>
        </Link>

        <Footer></Footer>
      </S.NoScrollbarScene>
    </>
  );
}

export default HowToPage;
