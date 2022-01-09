import React from "react";
// import { useHistory } from "react-router";

import * as S from "../../styles/globalstyle";
import BackBtn from "../../components/Btn/BackBtn";
import WithdrawalMent from "../../components/Txt/WithdrawalMent";
import withdrawalimg from "../../image/withdrawal.png";
import WithdrawalBtn from "../../components/Btn/WithdrawalBtn";

function Withdrawal() {
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
      <S.NoScrollbarScene>
        <BackBtn></BackBtn>

        <img src={withdrawalimg} alt="탈퇴" className="withdrawal-img"></img>

        <WithdrawalMent></WithdrawalMent>

        <WithdrawalBtn></WithdrawalBtn>
      </S.NoScrollbarScene>
    </>
  );
}

export default Withdrawal;
