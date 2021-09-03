import React from "react";
import PostboxBeforeImg from "../../image/postboxbefore.png";
import FingerImg from "../../image/finger.png";
// import * as S from './styles';

function PostboxBefore() {
  return (
    <>
      <div className="postboxbefore">
        <img src={PostboxBeforeImg} alt="postbox"></img>
      </div>
      <div className="finger">
        <img src={FingerImg} alt="finger"></img>
      </div>
    </>
  );
}

export default PostboxBefore;
