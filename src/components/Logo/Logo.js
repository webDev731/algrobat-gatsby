import React from "react";
import { Link } from "gatsby";
import { Title } from "../Core";
import imgL from "../../assets/image/logo.png";

const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      <Title color={color} variant="cardLg" className="mb-0">
        <img className="brandLogo" src={imgL} alt=""></img>
      </Title>
    </Link>
  );
};

export default Logo;
