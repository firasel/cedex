import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Ellipse from "../../../assets/images/common/Ellipse1.svg";
import Polygon from "../../../assets/images/Hero/Polygon1.svg";
import Rectangle from "../../../assets/images/Hero/Rectangle.svg";
import heroData from "../../../data/heroData";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={`container sectionStyle ${style.heroSection}`}>
      <Row className="heroContainer m-0 p-0">
        <Col md={6} lg={5} className="d-flex align-items-center">
          {/* Hero details start */}
          <div className="heroDetails">
            <h5>{heroData?.shortTitle}</h5>
            <h2>
              {heroData?.title1}
              <br />
              {heroData?.title2}
            </h2>
            <p>{heroData?.details}</p>
            <Button>Hire Me</Button>
          </div>
          {/* Hero details end */}
        </Col>
        <Col md={6} lg={4} className="d-flex align-items-center offset-lg-2">
          <div className="heroImage">
            {/* Hero profile image */}
            <Image layout="responsive" src={heroData?.image} alt="hero image" />
            {/* Image background style start*/}
            <div>
              <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{ rotate: 359, scale: 0.8 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="circle1"
              >
                <Image src={Ellipse} alt="ellipse" />
              </motion.div>
              <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{ rotate: -359, scale: 0.8 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="circle2"
              >
                <Image src={Ellipse} alt="ellipse" />
              </motion.div>
              <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{ rotate: 359, scale: 0.8 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="rectangle"
              >
                <Image src={Rectangle} alt="ellipse" />
              </motion.div>
              <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{ rotate: -359, scale: 0.8 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="polygon"
              >
                <Image src={Polygon} alt="ellipse" />
              </motion.div>
            </div>
            {/* Image background style end*/}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
