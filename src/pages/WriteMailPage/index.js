import React, { createContext, useState, useMemo } from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";
import BackBtn from "../../components/Btn/BackBtn";
import LogoNamePoppyMail from "../../components/Txt/LogoNamePoppyMail";
import Colorbar from "../../components/Colorbar";
import Letter from "../../components/Letter";
import SmallCompleteBtn from "../../components/Btn/SmallCompleteBtn";
import letter_deco_1_1 from "../../image/letter_deco_1_1.png";
import letter_deco_1_2 from "../../image/letter_deco_1_2.png";
import letter_deco_2_1 from "../../image/letter_deco_2_1.png";
import letter_deco_2_2 from "../../image/letter_deco_2_2.png";
import letter_deco_3_1 from "../../image/letter_deco_3_1.png";
import letter_deco_3_2 from "../../image/letter_deco_3_2.png";

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
            {color === "#b88dcd" ? (
              <div className="letter_deco_1">
                <img className="letter_deco_1_1" src={letter_deco_1_1} />
                <img className="letter_deco_1_2" src={letter_deco_1_2} />
              </div>
            ) : color === "#db7667" ? (
              <div className="letter_deco_2">
                <img className="letter_deco_2_1" src={letter_deco_2_1} />
                <img className="letter_deco_2_2" src={letter_deco_2_2} />
              </div>
            ) : color === "#bdbe82" ? (
              <div className="letter_deco_3">
                <img className="letter_deco_3_1" src={letter_deco_3_1} />
                <img className="letter_deco_3_2" src={letter_deco_3_2} />
              </div>
            ) : null}
            <Letter></Letter>
          </div>
        </div>
      </ColorContext.Provider>
    </>
  );
}

export default WriteMail;
