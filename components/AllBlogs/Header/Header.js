import React from "react";
import NavBar from "../../shared/Navbar/Navbar";
import Hero from "../Hero/Hero";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.backgroundStyle}>
      <NavBar />
      <Hero />
    </div>
  );
};

export default Header;
