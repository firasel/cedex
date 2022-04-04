import React from "react";
import style from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={style.loadingStyle}>
      <div className="loadingContainer">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Loading;
