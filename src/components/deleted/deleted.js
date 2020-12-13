import React from "react";
import { P1 } from "../../styles/typeStyles";
import { Link } from "react-router-dom";
import logo from "../../assets/SVG/logo.svg";
import { Logo, LogoContainer } from "../../styles/globalElements";

const Deleted = () => {
  return (
    <div className="container">
      <LogoContainer className="col-12 my-4">
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoContainer>
      <div>
        <P1>Deleted.</P1>
      </div>
    </div>
  );
};

export default Deleted;
