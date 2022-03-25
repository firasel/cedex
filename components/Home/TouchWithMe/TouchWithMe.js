import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Ellipse from "../../../assets/images/common/Ellipse1.svg";
import tochWithMeData from "../../../data/tochWithMeData";
import style from "./TouchWithMe.module.scss";

const TouchWithMe = () => {
  return (
    <div className={style.touchWithMeStyle}>
      <div className="sectionStyle">
        <Container className="position-relative">
          <Row className="align-items-center justify-content-between">
            {/* Content start */}
            <Col className="contentStyle order-1 order-md-0" md={6} lg={6}>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                }}
                viewport={{ once: true }}
                className="sectionTitle"
              >
                {tochWithMeData?.title}
              </motion.h2>
              <motion.h5
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: 0.1 },
                }}
                viewport={{ once: true }}
              >
                {tochWithMeData?.secondTitle}
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: 0.2 },
                }}
                viewport={{ once: true }}
              >
                {tochWithMeData?.details}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: 0.2 },
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileFocus={{
                  y: [0, 4, -4, 4, 0],
                  transition: { duration: 0.4 },
                }}
              >
                Let&apos;s Talk
              </motion.button>
            </Col>
            {/* Content end */}
            {/* Image start */}
            <Col className="imageStyle order-0" md={6} lg={5}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.4 },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={tochWithMeData?.image}
                  layout="responsive"
                  alt="image"
                />
              </motion.div>
              <motion.div
                initial={{ y: 0, rotate: 0, scale: 0.8 }}
                animate={{ y: [0, 30, 0], rotate: [-15, 0, -15], scale: 0.8 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="circle1"
              >
                <Image src={Ellipse} alt="ellipse" />
              </motion.div>
              <motion.div
                initial={{ y: 0, rotate: 0, scale: 0.5 }}
                animate={{ y: [0, 30, 0], rotate: [-15, 0, -15], scale: 0.5 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="circle2"
              >
                <Image src={Ellipse} alt="ellipse" />
              </motion.div>
            </Col>
            {/* Image end */}
          </Row>
          <motion.div
            initial={{ y: 0, rotate: 0, scale: 0.9 }}
            animate={{ y: [0, 30, 0], rotate: [-15, 0, -15], scale: 0.9 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="circle3"
          >
            <Image src={Ellipse} alt="ellipse" />
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default TouchWithMe;
