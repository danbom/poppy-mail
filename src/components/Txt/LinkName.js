import React from "react";
// import * as S from './styles';

function LinkName() {
  const Link_name = localStorage.getItem("Link_name");

  return (
    <>
      <div className="link-name-small">링크 제목</div>
      <div className="link-name-big">"{Link_name}의 우체통"</div>
    </>
  );
}

export default LinkName;
