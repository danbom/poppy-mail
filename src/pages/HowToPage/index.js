import { React } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs, Pagination, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/thumbs/thumbs.scss";
import "swiper/components/pagination/pagination.scss";

import * as S from "./styles";
import Navbar from "../../components/Navbar";
import LogoNameHowto from "../../components/Txt/LogoNameHowto";
import BackBtn from "../../components/Btn/BackBtn";
import Flow1 from "../../components/ServiceFlow/Flow1";
import Flow2 from "../../components/ServiceFlow/Flow2";
import Flow3 from "../../components/ServiceFlow/Flow3";
import Flow4 from "../../components/ServiceFlow/Flow4";
import Flow5 from "../../components/ServiceFlow/Flow5";
import Flow6 from "../../components/ServiceFlow/Flow6";
import CreatePostboxBtn from "../../components/Btn/CreatePostboxBtn";
import Footer from "../../components/Footer";

SwiperCore.use([Thumbs, Pagination, Autoplay]);

function HowToPage() {
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
    });

  return (
    <>
      <S.HowToScene>
        <div className="fullbox">
          <BackBtn></BackBtn>
          <Navbar></Navbar>

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
        </div>
      </S.HowToScene>
    </>
  );
}

export default HowToPage;
