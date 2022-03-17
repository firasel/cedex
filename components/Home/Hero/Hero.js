import Image from "next/image";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import ProfileImg from "../../../assets/images/profile01.jpg";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={`container overflow-hidden ${style.heroSection}`}>
      <Row className=" heroContainer">
        <Col md={5} className="d-flex align-items-center">
          <div className="heroDetails">
            <h5>Senior UX/UI Designer</h5>
            <h2>
              Hello, I am <br />
              John Doe
            </h2>
            <p>
              I am a freelancer based in the United State and I've been
              constructing noteworthy UX/UI designs and websites for years,
              which comply with the brand new layout trends. I help convert an
              imaginative and prescient idea into significant and beneficial
              merchandise.
            </p>
            <Button>Hire Me</Button>
          </div>
        </Col>
        <Col md={4} className="d-flex align-items-center offset-2">
          <div className="heroImage">
            <Image src={ProfileImg} alt="hero image" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
