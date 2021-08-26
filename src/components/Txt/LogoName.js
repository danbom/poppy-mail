import React from "react";
import { Link } from "react-router-dom";
// import * as S from './styles';

function LogoName() {
  return (
    <>
      <Link to="/">
        <div className="logo-name">파피메일</div>
      </Link>
    </>
  );
}

export default LogoName;
