import React from "react";
// import * as S from './styles';

function CheckLetter() {
  return (
    <>
      <div className="check-letter-box">
        <div className="letter-element" id="to-box">
          <div className="to-txt">To.</div>
          <div className="to-underline"></div>
          <div className="to-contents" id="div">
            {localStorage.getItem("receiver")}
          </div>
        </div>
        <div className="letter-element" id="contents-box">
          <div className="contents-contents">
            {localStorage.getItem("contents")}
          </div>
        </div>
        <div className="letter-element" id="from-box">
          <div className="from-txt">From.</div>
          <div className="from-underline"></div>
          <div id="div" className="from-contents">
            {localStorage.getItem("sender")}
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckLetter;
