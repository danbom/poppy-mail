import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";
import BackBtn from "../../components/Btn/BackBtn";
import WithdrawalMent from "../../components/Txt/WithdrawalMent";
import withdrawalimg from "../../image/withdrawal.png";
import WithdrawalBtn from "../../components/Btn/WithdrawalBtn";

function Withdrawal() {
  //   if (loading) return <LoadingScreen />;
  //   if (error) return <div>에러가 발생했습니다.</div>;
  return (
    <>
      <S.WithdrawalScene>
        <div className="fullbox">
          <BackBtn></BackBtn>

          <img src={withdrawalimg} className="withdrawal-img"></img>

          <WithdrawalMent></WithdrawalMent>

          <WithdrawalBtn></WithdrawalBtn>
        </div>
      </S.WithdrawalScene>
    </>
  );
}

export default Withdrawal;
