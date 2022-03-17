import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Hero from "../Hero/Hero";
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.headerStyle}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
