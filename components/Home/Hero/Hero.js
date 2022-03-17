import Image from "next/image";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Ellipse from "../../../assets/images/Hero/Ellipse1.svg";
import Polygon from "../../../assets/images/Hero/Polygon1.svg";
import ProfileImg from "../../../assets/images/Hero/profile01.jpg";
import Rectangle from "../../../assets/images/Hero/Rectangle.svg";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={`container sectionStyle ${style.heroSection}`}>
      <Row className="heroContainer m-0 p-0">
        <Col md={6} lg={5} className="d-flex align-items-center">
          {/* Hero details start */}
          <div className="heroDetails">
            <h5>Senior UX/UI Designer</h5>
            <h2>
              Hello, I am <br />
              John Doe
            </h2>
            <p>
              I am a freelancer based in the United State and I&apos;ve been
              constructing noteworthy UX/UI designs and websites for years,
              which comply with the brand new layout trends. I help convert an
              imaginative and prescient idea into significant and beneficial
              merchandise.
            </p>
            <Button>Hire Me</Button>
          </div>
          {/* Hero details end */}
        </Col>
        <Col md={6} lg={4} className="d-flex align-items-center offset-lg-2">
          <div className="heroImage">
            {/* Hero profile image */}
            <Image layout="responsive" src={ProfileImg} alt="hero image" />
            {/*  */}
            {/* Image background style start*/}
            <div>
              <div className="circle1">
                <Image src={Ellipse} alt="ellipse" />
              </div>
              <div className="circle2">
                <Image src={Ellipse} alt="ellipse" />
              </div>
              <div className="rectangle">
                <Image src={Rectangle} alt="ellipse" />
              </div>
              <div className="polygon">
                <Image src={Polygon} alt="ellipse" />
              </div>
            </div>
            {/* Image background style end*/}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
