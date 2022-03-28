import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgSearch } from "react-icons/cg";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={style.blogHero}>
      <Row className="justify-content-center">
        <Col xs={11} sm={9} md={8} lg={6} xl={5}>
          <div className="searchBox">
            <input placeholder="Search articles here" />
            <button>
              <CgSearch />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
