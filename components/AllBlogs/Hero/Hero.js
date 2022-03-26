import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgSearch } from "react-icons/cg";
import Ellipse from "../../../assets/images/common/Ellipse1.svg";
import Polygon from "../../../assets/images/common/Polygon1.svg";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={`container sectionStyle ${style.heroSection}`}>
      <div className="heroContainer">
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
        {/* Image background style start*/}
        <div>
          <motion.div
            initial={{ x: 30, y: -50, scale: 0.8, rotate: -120 }}
            animate={{
              x: [30, 0, -15, 0, 35, 0, 30],
              y: [-50, 101, -70, 101, -55, 101, -50],
              scale: 0.8,
              rotate: [-120, -180, -180, -130, -150, -100,-120],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 0 }}
            className="circle1"
          >
            <Image src={Ellipse} alt="ellipse" />
          </motion.div>
          <motion.div
            initial={{ x: 0, y: 0, scale: 0.8, rotate: -170 }}
            animate={{
              x: [0, -30, 0, 20, 0, -35, 0],
              y: [101, -50, 101, -70, 101, -55, 101],
              scale: 0.8,
              rotate: [-170, -180, -150, -120, -150, -180, -170],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 0 }}
            className="circle2"
          >
            <Image src={Ellipse} alt="ellipse" />
          </motion.div>
          <motion.div
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: -359, scale: [0, 0.7, 0, 0.7, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 0 }}
            className="polygon"
          >
            <Image src={Polygon} alt="ellipse" />
          </motion.div>
        </div>
        {/* Image background style end*/}
      </div>
    </div>
  );
};

export default Hero;
