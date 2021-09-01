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

export const LetterContext = createContext({
  setColor: () => {},
  setContents: () => {},
  setSender: () => {},
});

function WriteMail(props) {
  const mailbox_pk = props.match.params.mailbox_pk;
  const random_strkey = props.match.params.random_strkey;
  const [color, setColor] = useState("#f2dba1");
  const [contents, setContents] = useState("");
  const [sender, setSender] = useState("");
  const value = useMemo(
    () => ({ setColor, setContents, setSender }),
    [setColor, setContents, setSender]
  );

  const SendLetterRequest = () => {
    fetch("https://poppymail.shop/letter/" + mailbox_pk + "/" + random_strkey, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: contents,
        sender: sender,
        color: color,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          console.log("콘솔 " + res);
          console.log("셋  " + contents + sender + color);
          //history.push("/");
        }
      });
  };

  return (
    <>
      <LetterContext.Provider value={value}>
        <div className="fullbox">
          <BackBtn></BackBtn>
          {/* <Link to="/checkwritemail"> */}
          <div className="small-complete-btn" onClick={SendLetterRequest}>
            완료
          </div>
          {/* </Link> */}
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
      </LetterContext.Provider>
    </>
  );
}

export default WriteMail;
