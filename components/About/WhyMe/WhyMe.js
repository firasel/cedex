import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsCheckCircle } from "react-icons/bs";
import whyMeData from "../../../data/whyMeData";
import style from "./WhyMe.module.scss";

const WhyMe = () => {
  return (
    <div className={`${style.whyMeStyle} sectionStyle`}>
      <Container>
        {/* Heading start */}
        <Row className="justify-content-center justify-content-lg-between gy-4 gy-md-5 gy-lg-0">
          {/* WhyMe image start */}
          <Col md={10} lg={6} xl={6} className="d-flex align-items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="imageStyle"
            >
              <Image
                layout="responsive"
                src={whyMeData?.image}
                alt="sample image"
              />
            </motion.div>
          </Col>
          {/* WhyMe image end */}
          {/* WhyMe content start */}
          <Col md={10} lg={6} xl={5} className="d-flex align-items-center">
            <div>
              <h2 className="sectionTitle">{whyMeData?.title}</h2>
              <p className="subTitle">{whyMeData?.details}</p>
              {whyMeData?.lists?.map((data, index) => (
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, delay: index * 0.2 },
                  }}
                  viewport={{ once: true }}
                  className="listItem"
                  key={index}
                >
                  <BsCheckCircle fontSize={30} /> {data.message}
                </motion.p>
              ))}
            </div>
          </Col>
          {/* WhyMe content end */}
        </Row>
        {/* Heading end */}
      </Container>
    </div>
  );
};

export default WhyMe;
