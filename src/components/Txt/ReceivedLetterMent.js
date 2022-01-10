import React from "react";
import { RefreshRequest } from "../RefreshRequest";
// import { useHistory } from "react-router";
// import * as S from './styles';

function ReceivedLetterMent() {
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
      RefreshRequest(res, refresh);

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

      if (res.detail === "User not found") {
        alert("다시 로그인해주세요!");
        localStorage.clear();
      }
    });

  return (
    <>
      <div className="received-letter-ment1">
        "걱정마! 도착하지 않은 적은 <br></br> 한번도 없거든. <br></br> 음...
        얼마나 왔는지 볼까?"
      </div>

      <div className="received-letter-ment2">
        편지{" "}
        {/* {parseInt(localStorage.getItem("1st_number_letter")) +
          parseInt(localStorage.getItem("2nd_number_letter")) +
          parseInt(localStorage.getItem("3rd_number_letter")) +
          parseInt(localStorage.getItem("4th_number_letter")) +
          parseInt(localStorage.getItem("5th_number_letter"))} */}
        {!localStorage.getItem("1st_number_letter")
          ? 0
          : !localStorage.getItem("2nd_number_letter")
          ? parseInt(localStorage.getItem("1st_number_letter"))
          : !localStorage.getItem("3rd_number_letter")
          ? parseInt(localStorage.getItem("1st_number_letter")) +
            parseInt(localStorage.getItem("2nd_number_letter"))
          : !localStorage.getItem("4th_number_letter")
          ? parseInt(localStorage.getItem("1st_number_letter")) +
            parseInt(localStorage.getItem("2nd_number_letter")) +
            parseInt(localStorage.getItem("3rd_number_letter"))
          : !localStorage.getItem("5th_number_letter")
          ? parseInt(localStorage.getItem("1st_number_letter")) +
            parseInt(localStorage.getItem("2nd_number_letter")) +
            parseInt(localStorage.getItem("3rd_number_letter")) +
            parseInt(localStorage.getItem("4th_number_letter"))
          : parseInt(localStorage.getItem("1st_number_letter")) +
            parseInt(localStorage.getItem("2nd_number_letter")) +
            parseInt(localStorage.getItem("3rd_number_letter")) +
            parseInt(localStorage.getItem("4th_number_letter")) +
            parseInt(localStorage.getItem("5th_number_letter"))}
        개 오는중
      </div>

      <div className="received-letter-ment3">
        편지가 도착하면, <br></br> 카카오톡 플러스 친구를 통해 알려드려요!
      </div>
    </>
  );
}

export default ReceivedLetterMent;
