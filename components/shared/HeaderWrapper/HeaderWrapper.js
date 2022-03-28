import React from "react";
import style from "./HeaderWrapper.module.scss";

const HeaderWrapper = ({ children }) => {
  return <div className={style.backgroundStyle}>{children}</div>;
};

export default HeaderWrapper;
