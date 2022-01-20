import { React, useEffect, useState } from "react";
// import { useHistory } from "react-router";

import * as S from "../../styles/globalstyle";
import BackBtn from "../../components/Btn/BackBtnDark";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
// import "swiper/components/thumbs/thumbs.scss";
// import "swiper/components/pagination/pagination.scss";
import LogoNameMyCheckArrivedMail from "../../components/Txt/LogoNameCheckArrivedMail";
import PeopleImg from "../../image/people.png";
import letter_deco_1_1 from "../../image/letter_deco_1_1.png";
import letter_deco_1_2 from "../../image/letter_deco_1_2.png";
import letter_deco_2_1 from "../../image/letter_deco_2_1.png";
import letter_deco_2_2 from "../../image/letter_deco_2_2.png";
import letter_deco_3_1 from "../../image/letter_deco_3_1.png";
import letter_deco_3_2 from "../../image/letter_deco_3_2.png";

import { DropdownButton, Dropdown } from "react-bootstrap";
import { RefreshRequest } from "../../components/RefreshRequest";
import LogoNameReceivedLetter from "../../components/Txt/LogoNameReceivedLetter";

// SwiperCore.use([Pagination]);

function CheckArrivedMail() {
  const access = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");

  const [length, setLength] = useState(null);
  const [letter, setLetter] = useState([{}]);

  // if (
  //   document.getElementsByClassName("swiper-wrapper")[0].style.transform ===
  //   "translate3d(-500rem, 0px, 0px)"
  // ) {
  //   console.log("wef");
  // }

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

  useEffect(() => {
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
      .then((res) => {
        if (!res.ok) {
          if (res.status === 401) throw Error("401");
        }
        return res.json();
      })
      .then((res) => {
        var step;
        var newLetter = [];
        setLetter([{}]);

        for (step = 0; step < res.length; step++) {
          setLength(res.length);
          newLetter = newLetter.concat({
            receiver: res[step].receiver,
            content: res[step].content,
            sender: res[step].sender,
            color: res[step].color,
          });
        }

        setLetter(newLetter);
        console.log(letter);
      })

      .catch((err) => localStorage.clear());
  }, [access]);

  // const IterationDropdown = () => {
  //   const dropdown = letter.map((sender, index) => <li key={index}>{name}</li><Dropdown.Item
  //                 eventKey="item"+index
  //                 id="dropdown-people-item"
  //                 onClick={caroselRequest0}
  //               >
  //                 {letter[0].sender}
  //               </Dropdown.Item>);
  //   return <ul>{nameList}</ul>;
  // };

  return (
    <>
      <S.DarkNoScrollbarScene>
        <BackBtn></BackBtn>
        <LogoNameMyCheckArrivedMail></LogoNameMyCheckArrivedMail>

        {!!length ? (
          <div>
            <div className="check-arrived-letter-ment">{length}개의 편지</div>
            <img className="people-img" src={PeopleImg} alt="people" />
            <DropdownButton id="dropdown-people-button" title="">
              {!!letter[0] ? (
                <Dropdown.Item
                  eventKey="item1"
                  id="dropdown-people-item"
                  onClick={caroselRequest0}
                >
                  {letter[0].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[1] ? (
                <Dropdown.Item eventKey="item2" onClick={caroselRequest1}>
                  {letter[1].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[2] ? (
                <Dropdown.Item eventKey="item3" onClick={caroselRequest2}>
                  {letter[2].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[3] ? (
                <Dropdown.Item eventKey="item4" onClick={caroselRequest3}>
                  {letter[3].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[4] ? (
                <Dropdown.Item eventKey="item5" onClick={caroselRequest4}>
                  {letter[4].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[5] ? (
                <Dropdown.Item eventKey="item6" onClick={caroselRequest5}>
                  {letter[5].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[6] ? (
                <Dropdown.Item eventKey="item7" onClick={caroselRequest6}>
                  {letter[6].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[7] ? (
                <Dropdown.Item eventKey="item8" onClick={caroselRequest7}>
                  {letter[7].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[8] ? (
                <Dropdown.Item eventKey="item9" onClick={caroselRequest8}>
                  {letter[8].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[9] ? (
                <Dropdown.Item eventKey="item10" onClick={caroselRequest9}>
                  {letter[9].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[10] ? (
                <Dropdown.Item eventKey="item11" onClick={caroselRequest10}>
                  {letter[10].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[11] ? (
                <Dropdown.Item eventKey="item12" onClick={caroselRequest11}>
                  {letter[11].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[12] ? (
                <Dropdown.Item eventKey="item13" onClick={caroselRequest12}>
                  {letter[12].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[13] ? (
                <Dropdown.Item eventKey="item14" onClick={caroselRequest13}>
                  {letter[13].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[14] ? (
                <Dropdown.Item eventKey="item15" onClick={caroselRequest14}>
                  {letter[14].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[15] ? (
                <Dropdown.Item eventKey="item16" onClick={caroselRequest15}>
                  {letter[15].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[16] ? (
                <Dropdown.Item eventKey="item17" onClick={caroselRequest16}>
                  {letter[16].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[17] ? (
                <Dropdown.Item eventKey="item18" onClick={caroselRequest17}>
                  {letter[17].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[18] ? (
                <Dropdown.Item eventKey="item19" onClick={caroselRequest18}>
                  {letter[18].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[19] ? (
                <Dropdown.Item eventKey="item20" onClick={caroselRequest19}>
                  {letter[19].sender}
                </Dropdown.Item>
              ) : null}
              {!!letter[20] ? (
                <Dropdown.Item eventKey="item19" onClick={caroselRequest20}>
                  {letter[20].sender}
                </Dropdown.Item>
              ) : null}
            </DropdownButton>
          </div>
        ) : (
          <div className="noPostbox">빈 우체통입니다.</div>
        )}

        <span className="carosel-box">
          {!!letter[0] && (
            <div className="carosel-text0" onClick={caroselRequest0}>
              {letter[0].sender?.substring(0, 3)}
              {letter[0].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[1] && (
            <div className="carosel-text1" onClick={caroselRequest1}>
              {letter[1].sender?.substring(0, 3)}
              {letter[1].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[2] && (
            <div className="carosel-text2" onClick={caroselRequest2}>
              {letter[2].sender?.substring(0, 3)}
              {letter[2].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[3] && (
            <div className="carosel-text3" onClick={caroselRequest3}>
              {letter[3].sender?.substring(0, 3)}
              {letter[3].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[4] && (
            <div className="carosel-text4" onClick={caroselRequest4}>
              {letter[4].sender?.substring(0, 3)}
              {letter[4].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[5] && (
            <div className="carosel-text5" onClick={caroselRequest5}>
              {letter[5].sender?.substring(0, 3)}
              {letter[5].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[6] && (
            <div className="carosel-text6" onClick={caroselRequest6}>
              {letter[6].sender?.substring(0, 3)}
              {letter[6].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[7] && (
            <div className="carosel-text7" onClick={caroselRequest7}>
              {letter[7].sender?.substring(0, 3)}
              {letter[7].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[8] && (
            <div className="carosel-text8" onClick={caroselRequest8}>
              {letter[8].sender?.substring(0, 3)}
              {letter[8].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[9] && (
            <div className="carosel-text9" onClick={caroselRequest9}>
              {letter[9].sender?.substring(0, 3)}
              {letter[9].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[10] && (
            <div className="carosel-text10" onClick={caroselRequest10}>
              {letter[10].sender?.substring(0, 3)}
              {letter[10].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[11] && (
            <div className="carosel-text11" onClick={caroselRequest11}>
              {letter[11].sender?.substring(0, 3)}
              {letter[11].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[12] && (
            <div className="carosel-text12" onClick={caroselRequest12}>
              {letter[12].sender?.substring(0, 3)}
              {letter[12].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[13] && (
            <div className="carosel-text13" onClick={caroselRequest13}>
              {letter[13].sender?.substring(0, 3)}
              {letter[13].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[14] && (
            <div className="carosel-text14" onClick={caroselRequest14}>
              {letter[14].sender?.substring(0, 3)}
              {letter[14].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[15] && (
            <div className="carosel-text15" onClick={caroselRequest15}>
              {letter[15].sender?.substring(0, 3)}
              {letter[15].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[16] && (
            <div className="carosel-text16" onClick={caroselRequest16}>
              {letter[16].sender?.substring(0, 3)}
              {letter[16].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[17] && (
            <div className="carosel-text17" onClick={caroselRequest17}>
              {letter[17].sender?.substring(0, 3)}
              {letter[17].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[18] && (
            <div className="carosel-text18" onClick={caroselRequest18}>
              {letter[18].sender?.substring(0, 3)}
              {letter[18].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[19] && (
            <div className="carosel-text19" onClick={caroselRequest19}>
              {letter[19].sender?.substring(0, 3)}
              {letter[19].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
          {!!letter[20] && (
            <div className="carosel-text20" onClick={caroselRequest20}>
              {letter[20].sender?.substring(0, 3)}
              {letter[20].sender?.length >= 4 ? <span>...</span> : null}
            </div>
          )}
        </span>
        <div>
          <Swiper
            className="letter-flow"
            spaceBetween={0}
            slidesPerView={1}
            // thumbs
            // pagination={{ clickable: true }}
            allowTouchMove={false}
            id="checkarrivedmailswiper"
          >
            {!!letter[0] ? (
              <SwiperSlide id="slide1">
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[0].color,
                  }}
                >
                  {letter[0].color === "#b88dcd" ? (
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
                  ) : letter[0].color === "#db7667" ? (
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
                  ) : letter[0].color === "#bdbe82" ? (
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
                      {letter[0].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">{letter[0].content}</div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[0].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[1] ? (
              <SwiperSlide id="slide2">
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[1].color,
                  }}
                >
                  {letter[1].color === "#b88dcd" ? (
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
                  ) : letter[1].color === "#db7667" ? (
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
                  ) : letter[1].color === "#bdbe82" ? (
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
                      {letter[1].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">{letter[1].content}</div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[1].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[2] ? (
              <SwiperSlide id="slide3">
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[2].color,
                  }}
                >
                  {letter[2].color === "#b88dcd" ? (
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
                  ) : letter[2].color === "#db7667" ? (
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
                  ) : letter[2].color === "#bdbe82" ? (
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
                      {letter[2].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">{letter[2].content}</div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[2].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[3] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[3].color,
                  }}
                >
                  {letter[3].color === "#b88dcd" ? (
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
                  ) : letter[3].color === "#db7667" ? (
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
                  ) : letter[3].color === "#bdbe82" ? (
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
                      {letter[3].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">{letter[3].content}</div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[3].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[4] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[4].color,
                  }}
                >
                  {letter[4].color === "#b88dcd" ? (
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
                  ) : letter[4].color === "#db7667" ? (
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
                  ) : letter[4].color === "#bdbe82" ? (
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
                      {letter[4].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">{letter[4].content}</div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[4].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[5] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[5].color,
                  }}
                >
                  {letter[5].color === "#b88dcd" ? (
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
                  ) : letter[5].color === "#db7667" ? (
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
                  ) : letter[5].color === "#bdbe82" ? (
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
                      {letter[5].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">{letter[5].content}</div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[5].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[6] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[6].color,
                  }}
                >
                  {letter[6].color === "#b88dcd" ? (
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
                  ) : letter[6].color === "#db7667" ? (
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
                  ) : letter[6].color === "#bdbe82" ? (
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
                      {letter[6].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">{letter[6].content}</div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[6].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[7] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[7].color,
                  }}
                >
                  {letter[7].color === "#b88dcd" ? (
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
                  ) : letter[7].color === "#db7667" ? (
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
                  ) : letter[7].color === "#bdbe82" ? (
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
                      {letter[7].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">{letter[7].content}</div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[7].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[8] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[8].color,
                  }}
                >
                  {letter[8].color === "#b88dcd" ? (
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
                  ) : letter[8].color === "#db7667" ? (
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
                  ) : letter[8].color === "#bdbe82" ? (
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
                      {letter[8].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">{letter[8].content}</div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[8].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[9] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[9].color,
                  }}
                >
                  {letter[9].color === "#b88dcd" ? (
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
                  ) : letter[9].color === "#db7667" ? (
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
                  ) : letter[9].color === "#bdbe82" ? (
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
                      {letter[9].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">{letter[9].content}</div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[9].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[10] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[10].color,
                  }}
                >
                  {letter[10].color === "#b88dcd" ? (
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
                  ) : letter[10].color === "#db7667" ? (
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
                  ) : letter[10].color === "#bdbe82" ? (
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
                      {letter[10].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">
                      {letter[10].content}
                    </div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[10].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[11] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[11].color,
                  }}
                >
                  {letter[11].color === "#b88dcd" ? (
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
                  ) : letter[11].color === "#db7667" ? (
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
                  ) : letter[11].color === "#bdbe82" ? (
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
                      {letter[11].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">
                      {letter[11].content}
                    </div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[11].content}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[12] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[12].color,
                  }}
                >
                  {letter[12].color === "#b88dcd" ? (
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
                  ) : letter[12].color === "#db7667" ? (
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
                  ) : letter[12].color === "#bdbe82" ? (
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
                      {letter[12].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">
                      {letter[12].content}
                    </div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[12].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[13] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[13].color,
                  }}
                >
                  {letter[13].color === "#b88dcd" ? (
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
                  ) : letter[13].color === "#db7667" ? (
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
                  ) : letter[13].color === "#bdbe82" ? (
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
                      {letter[13].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">
                      {letter[13].content}
                    </div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[13].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[14] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[14].color,
                  }}
                >
                  {letter[14].color === "#b88dcd" ? (
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
                  ) : letter[14].color === "#db7667" ? (
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
                  ) : letter[14].color === "#bdbe82" ? (
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
                      {letter[14].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">
                      {letter[14].content}
                    </div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[14].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[15] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[15].color,
                  }}
                >
                  {letter[15].color === "#b88dcd" ? (
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
                  ) : letter[15].color === "#db7667" ? (
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
                  ) : letter[15].color === "#bdbe82" ? (
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
                      {letter[15].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">
                      {letter[15].content}
                    </div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[15].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[16] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[16].color,
                  }}
                >
                  {letter[16].color === "#b88dcd" ? (
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
                  ) : letter[16].color === "#db7667" ? (
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
                  ) : letter[16].color === "#bdbe82" ? (
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
                      {letter[16].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">
                      {letter[16].content}
                    </div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[16].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[17] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[17].color,
                  }}
                >
                  {letter[17].color === "#b88dcd" ? (
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
                  ) : letter[17].color === "#db7667" ? (
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
                  ) : letter[17].color === "#bdbe82" ? (
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
                      {letter[17].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">
                      {letter[17].content}
                    </div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[17].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[18] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[18].color,
                  }}
                >
                  {letter[18].color === "#b88dcd" ? (
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
                  ) : letter[18].color === "#db7667" ? (
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
                  ) : letter[18].color === "#bdbe82" ? (
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
                      {letter[18].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">
                      {letter[18].content}
                    </div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[18].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[19] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[19].color,
                  }}
                >
                  {letter[19].color === "#b88dcd" ? (
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
                  ) : letter[19].color === "#db7667" ? (
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
                  ) : letter[19].color === "#bdbe82" ? (
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
                      {letter[19].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">
                      {letter[19].content}
                    </div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[19].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
            {!!letter[20] ? (
              <SwiperSlide>
                <div
                  className="check-letter-box"
                  style={{
                    backgroundColor: letter[20].color,
                  }}
                >
                  {letter[20].color === "#b88dcd" ? (
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
                  ) : letter[20].color === "#db7667" ? (
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
                  ) : letter[20].color === "#bdbe82" ? (
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
                      {letter[20].receiver}
                    </div>
                  </div>
                  <div className="letter-element" id="contents-box">
                    <div className="contents-contents">
                      {letter[20].content}
                    </div>
                  </div>
                  <div className="letter-element" id="from-box">
                    <div className="from-txt">From.</div>
                    <div className="from-underline"></div>
                    <div className="from-contents" id="div">
                      {letter[20].sender}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null}
          </Swiper>
        </div>
      </S.DarkNoScrollbarScene>
    </>
  );
}

export default CheckArrivedMail;
