import React, { createContext, useState, useMemo } from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";
import BackBtn from "../../components/Btn/BackBtn";
import LogoNamePoppyMail from "../../components/Txt/LogoNamePoppyMail";
import Colorbar from "../../components/Colorbar";
import Letter from "../../components/Letter";
import SmallCompleteBtn from "../../components/Btn/SmallCompleteBtn";

export const ColorContext = createContext({
  setColor: () => {
    "#f2dba1";
  },
});

function WriteMail() {
  const [color, setColor] = useState("#f2dba1");
  const value = useMemo(() => ({ setColor }), [setColor]);

  return (
    <>
      <ColorContext.Provider value={value}>
        <div className="fullbox">
          <BackBtn></BackBtn>
          <Link to="/checkwritemail">
            <SmallCompleteBtn></SmallCompleteBtn>
          </Link>
          <LogoNamePoppyMail></LogoNamePoppyMail>
          <Colorbar></Colorbar>

          <div className="letter-box" style={{ backgroundColor: color }}>
            <Letter></Letter>
          </div>
        </div>
      </ColorContext.Provider>
    </>
  );
}

export default WriteMail;
