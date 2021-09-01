import React, { useContext, useState, useMemo } from "react";
import { LetterContext } from "../pages/WriteMailPage";

// import * as S from './styles';

function Letter() {
  // const [contents, setContents] = useState("");
  // const [sender, setSender] = useState("");

  const { setContents, setSender } = useContext(LetterContext);

  const processContents = e => {
    setContents(e.target.value);
  };

  const processSender = e => {
    setSender(e.target.value);
  };

  return (
    <>
      <div className="letter-element" id="to-box">
        <div className="to-txt">To.</div>
        <div className="to-underline"></div>
        <input className="to-contents"></input>
      </div>
      <div className="letter-element" id="contents-box">
        <textarea
          className="contents-contents"
          onChange={processContents}
        ></textarea>
      </div>
      <div className="letter-element" id="from-box">
        <div className="from-txt">From.</div>
        <div className="from-underline"></div>
        <input
          className="from-contents"
          placeholder="*친구가 알아볼 수 있도록 써주세요"
          onChange={processSender}
        ></input>
      </div>
    </>
  );
}

export default Letter;
