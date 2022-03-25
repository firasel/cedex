import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Ellipse from "../../../assets/images/common/Ellipse1.svg";
import footerData from "../../../data/footerData";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footerStyle}>
      <div className="sectionStyle">
        <Container>
          <motion.div
            initial={{ rotate: 0, scale: 0.5 }}
            animate={{
              rotate: [0, 100, 180, 90, 200, 80, 230, 90, 200, -360],
              scale: 0.5,
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="circle1"
          >
            <Image src={Ellipse} alt="ellipse" />
          </motion.div>
          <Row className="gy-4 gy-md-0 justify-content-between">
            <Col md={4} lg={3} className="newsLetter">
              <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{
                  rotate: [0, 150, 250, 130, 280, 180, 290, 190, 300, -360],
                  scale: 0.8,
                }}
                transition={{ duration: 7, repeat: Infinity }}
                className="circle2"
              >
                <Image src={Ellipse} alt="ellipse" />
              </motion.div>
              <Image src={footerData?.logo} alt="logo" />
              <br />
              <label>{footerData?.formTitle}</label>
              <br />
              <input type="email" placeholder="Input your email here" />
              <button>Subscribe</button>
            </Col>
            <Col md={4} lg={3} className="servicesLink">
              <div>
                <span>{footerData?.serivecs?.title}</span>
                <ul>
                  {footerData?.serivecs?.links?.map((data, index) => (
                    <li key={index}>
                      <a href={data?.link}>{data?.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={4} lg={3} className="information">
              {/* Contact start */}
              {footerData?.contacts?.map((data, index) => (
                <div key={index}>
                  {data?.icon}
                  <p>{data?.message}</p>
                </div>
              ))}
              {/* Contact end */}
              {/* Socila link start */}
              <div className="d-flex gap-2 socialLink">
                {footerData?.socialLinks.map((data, index) => (
                  <div key={index}>
                    <a href={data?.link}>{data?.icon}</a>
                  </div>
                ))}
              </div>
              {/* Socila link end */}
              <motion.div
                initial={{ rotate: 0, scale: 0.5 }}
                animate={{
                  rotate: [0, -100, -180, -90, -200, -80, -230, -90, -200, 360],
                  scale: 0.5,
                }}
                transition={{ duration: 7, repeat: Infinity }}
                className="circle3"
              >
                <Image src={Ellipse} alt="ellipse" />
              </motion.div>
            </Col>
          </Row>
          <p className="mt-3 mb-0">{footerData?.copyRightMsg}</p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
