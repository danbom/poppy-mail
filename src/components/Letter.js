import React, { createContext, useState, useMemo } from "react";

// import * as S from './styles';

export const ColorContext = createContext({
  setColor: () => {
    "#f2dba1";
  },
});

function Letter() {
  const [color, setColor] = useState("#f2dba1");
  const value = useMemo(() => ({ setColor }), [setColor]);

  return (
    <>
      <ColorContext.Provider value={value}>
        <div className="letter-box" style={{ backgroundColor: color }}>
          <div className="letter-element" id="to-box">
            <div className="to-txt">To.</div>
            <div className="to-underline"></div>
            <input className="to-contents"></input>
          </div>
          <div className="letter-element" id="contents-box">
            <textarea className="contents-contents"></textarea>
          </div>
          <div className="letter-element" id="from-box">
            <div className="from-txt">From.</div>
            <div className="from-underline"></div>
            <input
              className="from-contents"
              placeholder="*친구가 알아볼 수 있도록 써주세요"
            ></input>
          </div>
        </div>
      </ColorContext.Provider>
    </>
  );
}

export default Letter;
