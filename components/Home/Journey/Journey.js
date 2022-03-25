import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import journeyData from "../../../data/journeyData";
import style from "./Journey.module.scss";

const Journey = () => {
  const variants = {
    hover: {
      rotate: [0, 5, 0],
      scale: [1, 1.07, 1],
      transition: {
        duration: 0.8,
      },
    },
    rest: {
      scale: 1,
      rotate: 0,
    },
  };

  return (
    <div className={`${style.journeyStyle} sectionStyle`}>
      <Container>
        {/* Heading start */}
        <Row>
          <Col md={10} lg={6} xl={5}>
            <h2 className="sectionTitle">{journeyData?.section?.title}</h2>
            <p className="subTitle">{journeyData?.section?.details}</p>
          </Col>
        </Row>
        {/* Heading end */}
        {/* Cards start */}
        <Row className="justify-content-md-between">
          {journeyData?.jobs?.map((data, index) => (
            <Col key={index} md={6} lg={5}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, delay: index * 0.2 },
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="journeyCard"
                >
                  <motion.div variants={variants} className="logo">
                    {data?.icon}
                  </motion.div>
                  <div className="content">
                    <h4>{data?.position}</h4>
                    <span>{data?.companyName}</span>
                    <p>{data?.time}</p>
                  </div>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>
        {/* Cards end */}
      </Container>
    </div>
  );
};

export default Journey;
