import React from "react";
// import * as S from './styles';

function PostLinkTitle() {
  return (
    <>
      <div className="post-link-title-box">
        <div className="post-link-title-small">우체통 링크 제목</div>
        <div className="post-link-title-big">
          {localStorage.getItem("nickname")}의 우체통
        </div>
      </div>
    </>
  );
}

export default PostLinkTitle;
