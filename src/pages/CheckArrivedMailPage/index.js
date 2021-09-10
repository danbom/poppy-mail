import { React } from "react";
// import { useHistory } from "react-router";

import * as S from "./styles";
import BackBtn from "../../components/Btn/BackBtnDark";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/thumbs/thumbs.scss";
import "swiper/components/pagination/pagination.scss";
import LogoNameMyCheckArrivedMail from "../../components/Txt/LogoNameCheckArrivedMail";
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
  // const history = useHistory();

  const caroselRequest0 = (e) => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(0rem, 0px, 0px); transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text0  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest1 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-25rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text1  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest2 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-50rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text2  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest3 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-75rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text3  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest4 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-100rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text4  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest5 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-125rem, 0px, 0px);  transition: 0.1s all ease";
    document.getElementsByClassName("carosel-text5  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest6 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-150rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text6  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest7 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-175rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text7  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest8 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-200rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text8  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest9 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-225rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text9  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest10 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-250rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text10  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest11 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-275rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text11 ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest12 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-300rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text12  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest13 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-325rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text13  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest14 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-350rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text14 ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest15 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-375rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text15  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest16 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-400rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text16  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest17 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-425rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text17  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest18 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-450rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text18  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest19 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-475rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text19  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text20  ")[0]) {
      document.getElementsByClassName("carosel-text20  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

  const caroselRequest20 = () => {
    document.getElementsByClassName("swiper-wrapper")[0].style =
      "transform: translate3d(-500rem, 0px, 0px);  transition: 0.1s all ease;";
    document.getElementsByClassName("carosel-text20  ")[0].style =
      "background-color: #fff !important";
    if (document.getElementsByClassName("carosel-text0  ")[0]) {
      document.getElementsByClassName("carosel-text0  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text1  ")[0]) {
      document.getElementsByClassName("carosel-text1  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text2  ")[0]) {
      document.getElementsByClassName("carosel-text2  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text3  ")[0]) {
      document.getElementsByClassName("carosel-text3  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text4  ")[0]) {
      document.getElementsByClassName("carosel-text4  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text5  ")[0]) {
      document.getElementsByClassName("carosel-text5  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text6  ")[0]) {
      document.getElementsByClassName("carosel-text6  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text7  ")[0]) {
      document.getElementsByClassName("carosel-text7  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text8  ")[0]) {
      document.getElementsByClassName("carosel-text8  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text9  ")[0]) {
      document.getElementsByClassName("carosel-text9  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text10  ")[0]) {
      document.getElementsByClassName("carosel-text10  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text11  ")[0]) {
      document.getElementsByClassName("carosel-text11  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text12  ")[0]) {
      document.getElementsByClassName("carosel-text12  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text13  ")[0]) {
      document.getElementsByClassName("carosel-text13  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text14  ")[0]) {
      document.getElementsByClassName("carosel-text14  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text15  ")[0]) {
      document.getElementsByClassName("carosel-text15  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text16  ")[0]) {
      document.getElementsByClassName("carosel-text16  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text17  ")[0]) {
      document.getElementsByClassName("carosel-text17  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text18  ")[0]) {
      document.getElementsByClassName("carosel-text18  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
    if (document.getElementsByClassName("carosel-text19  ")[0]) {
      document.getElementsByClassName("carosel-text19  ")[0].style =
        "background-color: #c4c4c4 !important";
    }
  };

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

      if (res.detail === "User not found") {
        alert("다시 로그인해주세요!");
        localStorage.clear();
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
          <span className="carosel-box">
            {!!localStorage.getItem("sender0") && (
              <div className="carosel-text0" onClick={caroselRequest0}>
                {localStorage.getItem("sender0").substring(0, 3)}
                {localStorage.getItem("sender0").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender1") && (
              <div className="carosel-text1" onClick={caroselRequest1}>
                {localStorage.getItem("sender1").substring(0, 3)}
                {localStorage.getItem("sender1").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender2") && (
              <div className="carosel-text2" onClick={caroselRequest2}>
                {localStorage.getItem("sender2").substring(0, 3)}
                {localStorage.getItem("sender2").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender3") && (
              <div className="carosel-text3" onClick={caroselRequest3}>
                {localStorage.getItem("sender3").substring(0, 3)}
                {localStorage.getItem("sender3").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender4") && (
              <div className="carosel-text4" onClick={caroselRequest4}>
                {localStorage.getItem("sender4").substring(0, 3)}
                {localStorage.getItem("sender4").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender5") && (
              <div className="carosel-text5" onClick={caroselRequest5}>
                {localStorage.getItem("sender5").substring(0, 3)}
                {localStorage.getItem("sender5").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender6") && (
              <div className="carosel-text6" onClick={caroselRequest6}>
                {localStorage.getItem("sender6").substring(0, 3)}
                {localStorage.getItem("sender6").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender7") && (
              <div className="carosel-text7" onClick={caroselRequest7}>
                {localStorage.getItem("sender7").substring(0, 3)}
                {localStorage.getItem("sender7").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender8") && (
              <div className="carosel-text8" onClick={caroselRequest8}>
                {localStorage.getItem("sender8").substring(0, 3)}
                {localStorage.getItem("sender8").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender9") && (
              <div className="carosel-text9" onClick={caroselRequest9}>
                {localStorage.getItem("sender9").substring(0, 3)}
                {localStorage.getItem("sender9").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender10") && (
              <div className="carosel-text10" onClick={caroselRequest10}>
                {localStorage.getItem("sender10").substring(0, 3)}
                {localStorage.getItem("sender10").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender11") && (
              <div className="carosel-text11" onClick={caroselRequest11}>
                {localStorage.getItem("sender11").substring(0, 3)}
                {localStorage.getItem("sender11").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender12") && (
              <div className="carosel-text12" onClick={caroselRequest12}>
                {localStorage.getItem("sender12").substring(0, 3)}
                {localStorage.getItem("sender12").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender13") && (
              <div className="carosel-text13" onClick={caroselRequest13}>
                {localStorage.getItem("sender13").substring(0, 3)}
                {localStorage.getItem("sender13").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender14") && (
              <div className="carosel-text14" onClick={caroselRequest14}>
                {localStorage.getItem("sender14").substring(0, 3)}
                {localStorage.getItem("sender14").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender15") && (
              <div className="carosel-text15" onClick={caroselRequest15}>
                {localStorage.getItem("sender15").substring(0, 3)}
                {localStorage.getItem("sender15").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender16") && (
              <div className="carosel-text16" onClick={caroselRequest16}>
                {localStorage.getItem("sender16").substring(0, 3)}
                {localStorage.getItem("sender16").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender17") && (
              <div className="carosel-text17" onClick={caroselRequest17}>
                {localStorage.getItem("sender17").substring(0, 3)}
                {localStorage.getItem("sender17").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender18") && (
              <div className="carosel-text18" onClick={caroselRequest18}>
                {localStorage.getItem("sender18").substring(0, 3)}
                {localStorage.getItem("sender18").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender19") && (
              <div className="carosel-text19" onClick={caroselRequest19}>
                {localStorage.getItem("sender19").substring(0, 3)}
                {localStorage.getItem("sender19").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
            {!!localStorage.getItem("sender20") && (
              <div className="carosel-text20" onClick={caroselRequest20}>
                {localStorage.getItem("sender20").substring(0, 3)}
                {localStorage.getItem("sender20").length >= 4 ? (
                  <span>...</span>
                ) : null}
              </div>
            )}
          </span>
          <div>
            <Swiper
              className="letter-flow"
              spaceBetween={0}
              slidesPerView={1}
              thumbs
              pagination={{ clickable: true }}
              id="checkarrivedmailswiper"
            >
              {/* <span className="carosel-box">
                <span className="carosel-text" onClick={caroselRequest0}>
                  {localStorage.getItem("sender0")}
                </span>
                <span className="carosel-text" onClick={caroselRequest1}>
                  {localStorage.getItem("sender1")}
                </span>
                <span className="carosel-text" onClick={caroselRequest2}>
                  {localStorage.getItem("sender2")}
                </span>
                <span className="carosel-text" onClick={caroselRequest3}>
                  {localStorage.getItem("sender3")}
                </span>
                <span className="carosel-text" onClick={caroselRequest4}>
                  {localStorage.getItem("sender4")}
                </span>
                <span className="carosel-text" onClick={caroselRequest5}>
                  {localStorage.getItem("sender5")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender6")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender7")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender8")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender9")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender10")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender11")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender12")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender13")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender14")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender15")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender16")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender17")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender18")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender19")}
                </span>
                <span className="carosel-text">
                  {localStorage.getItem("sender20")}
                </span>
              </span> */}
              {!!localStorage.getItem("sender0") ? (
                <SwiperSlide id="slide1">
                  {/* <span className="carosel-box">
                    <span className="carosel-text" onClick={caroselRequest0}>
                      {localStorage.getItem("sender0")}
                    </span>
                    <span className="carosel-text" onClick={caroselRequest1}>
                      {localStorage.getItem("sender1")}
                    </span>
                    <span className="carosel-text" onClick={caroselRequest2}>
                      {localStorage.getItem("sender2")}
                    </span>
                    <span className="carosel-text" onClick={caroselRequest3}>
                      {localStorage.getItem("sender3")}
                    </span>
                    <span className="carosel-text" onClick={caroselRequest4}>
                      {localStorage.getItem("sender4")}
                    </span>
                    <span className="carosel-text" onClick={caroselRequest5}>
                      {localStorage.getItem("sender5")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender6")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender7")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender8")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender9")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender10")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender11")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender12")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender13")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender14")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender15")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender16")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender17")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender18")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender19")}
                    </span>
                    <span className="carosel-text">
                      {localStorage.getItem("sender20")}
                    </span>
                  </span> */}
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
                      <div className="from-txt">From.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender0")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender1") ? (
                <SwiperSlide id="slide2">
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
                      <div className="from-txt">From.</div>
                      <div className="from-underline"></div>
                      <div className="from-contents" id="div">
                        {localStorage.getItem("sender1")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null}
              {!!localStorage.getItem("sender2") ? (
                <SwiperSlide id="slide3">
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
                      <div className="from-txt">From.</div>
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
