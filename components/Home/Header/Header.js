import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Hero from "../Hero/Hero";
import style from "./Header.module.scss";

const Header = ({ heroData }) => {
  return (
    <div className={style.headerStyle}>
      <Navbar />
      <Hero heroData={heroData} />
    </div>
  );
};

export default Header;
